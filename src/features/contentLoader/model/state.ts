import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';
import {Beat} from '~/entities/beat';
import {Chord} from '~/entities/chord';
import {FullSong, Lesson, SimpleSong} from '~/entities/lesson';
import {contentApi} from '~/shared/api/content';
import {ContentTypes} from '~/shared/enums';

export type HowToPlaysSortType = 'normal' | 'abc' | 'difficult';

interface LoaderState {
  loading: boolean;
  error: boolean;
  message: string;
  lessons: Lesson[];
  howtoplaysSortType: HowToPlaysSortType;
  howtoplays: Lesson[];
  chords: Chord[];
  beats: Beat[];
  dataVersion: number;
  checkUpdate: () => void;
  loadAllContent: () => void;
  getFullSong: (song: SimpleSong) => FullSong;
  sortHowToPlays: (sortType: HowToPlaysSortType) => void;
  clearData: () => void;
}

/**
 * Состояние для загрузки контента с сервера и дальнейшего с ним взаимодействия.
 */
export const useContentState = create<LoaderState>()(
  immer(
    persist(
      (set, get) => ({
        loading: false,
        error: false,
        message: '',
        lessons: [],
        howtoplaysSortType: 'normal',
        howtoplays: [],
        chords: [],
        beats: [],
        dataVersion: 1,
        checkUpdate: async () => {
          const localDataVersion = get().dataVersion;
          if (localDataVersion === 0) {
            get().loadAllContent();
          } else {
            set({loading: true, error: false, message: 'Проверка обновлений'});
            try {
              const dataForUpdate = await contentApi.loadDataForUpdate(
                localDataVersion,
              );
              if (dataForUpdate.lessons.length > 0) {
                const updatedLessons =
                  await contentApi.reloadListOfContent<Lesson>(
                    ContentTypes.LESSON,
                    dataForUpdate.lessons,
                    get().lessons,
                  );
                set({lessons: updatedLessons});
              }
              if (dataForUpdate.howtoplays.length > 0) {
                const updatedHowtoplays =
                  await contentApi.reloadListOfContent<Lesson>(
                    ContentTypes.HOWTOPLAY,
                    dataForUpdate.howtoplays,
                    get().howtoplays,
                  );
                set({howtoplays: updatedHowtoplays});
              }
              if (dataForUpdate.chords.length > 0) {
                const updatedChords =
                  await contentApi.reloadListOfContent<Chord>(
                    ContentTypes.CHORD,
                    dataForUpdate.chords,
                    get().chords,
                  );
                set({chords: updatedChords});
              }
              if (dataForUpdate.beats.length > 0) {
                const updatedBeats = await contentApi.reloadListOfContent<Beat>(
                  ContentTypes.BEAT,
                  dataForUpdate.beats,
                  get().beats,
                );
                set({beats: updatedBeats});
              }
              set({
                loading: false,
                message: 'Данные обновлены',
                dataVersion: dataForUpdate.last_version,
              });
              setTimeout(() => {
                set({message: ''});
              }, 1500);
            } catch (err: unknown) {
              set({
                loading: false,
                error: true,
                message: `Ошибка при обновлении: ${err}`,
              });
            }
          }
        },
        loadAllContent: async () => {
          set({
            loading: true,
            error: false,
            message: 'Скачиваем уроки, нужно подождать',
          });
          try {
            const downloadedLessons =
              await contentApi.loadListOfContent<Lesson>(ContentTypes.LESSON);
            set({
              message: 'Скачиваем разборы, нужно подождать',
              lessons: downloadedLessons,
            });
            const loadedHowtoplayes =
              await contentApi.loadListOfContent<Lesson>(
                ContentTypes.HOWTOPLAY,
              );
            set({
              message: 'Скачиваем аккорды и бои',
              howtoplays: loadedHowtoplayes,
            });
            const loadedChords = await contentApi.loadListOfContent<Chord>(
              ContentTypes.CHORD,
            );
            const loadedBeats = await contentApi.loadListOfContent<Beat>(
              ContentTypes.BEAT,
            );
            set({
              message: 'Последние приготовления',
              chords: loadedChords,
              beats: loadedBeats,
            });
            const loadedDataVersion = await contentApi.loadDataVersion();
            set({
              loading: false,
              dataVersion: loadedDataVersion,
              message: 'Готово, приятного пользования',
            });
            setTimeout(() => {
              set({message: ''});
            }, 1500);
          } catch (err: unknown) {
            set({
              loading: false,
              error: true,
              message: `Ошибка при загрузке: ${err}`,
            });
          }
        },
        getFullSong: (song: SimpleSong) => {
          const chords = song.chords
            .map((chordPk: number) =>
              get().chords.find((chordItem: Chord) => chordItem.pk === chordPk),
            )
            .filter((item): item is Chord => !!item);
          const beats = song.beats
            .map((beatPk: number) =>
              get().beats.find((beatItem: Beat) => beatItem.pk === beatPk),
            )
            .filter((item): item is Beat => !!item);
          return {...song, chords: chords, beats, schemes: []};
        },
        sortHowToPlays: (sortType: HowToPlaysSortType) => {
          const data = get().howtoplays;
          switch (sortType) {
            case 'normal':
              data.sort((a, b) => a.number - b.number);
              break;
            case 'abc':
              data.sort((a, b) => (a.title > b.title ? 1 : -1));
              break;
            case 'difficult':
              data.sort((a, b) =>
                a.start_lesson && b.start_lesson
                  ? a.start_lesson - b.start_lesson
                  : 0,
              );
              break;
            default:
              break;
          }
          set({howtoplaysSortType: sortType});
        },
        clearData: () => {
          set({dataVersion: 0, lessons: [], howtoplays: []});
        },
      }),
      {
        name: 'content',
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);
