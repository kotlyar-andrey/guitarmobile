import {I_Beat, I_Chord, I_Lesson, I_Song, I_Song_Ids} from './interfaces';
import {E_ContentType} from './enums';
import localStorage from '~/config/localStorage';
import {DATA_VERSION} from './consts';

/**
 * Вспомогательная функция, возвращает номер версии данніх
 * @returns номер версии данных в локальном хранилище
 */
export async function getDataVersion(): Promise<number | null> {
  try {
    const version = await localStorage.load({
      key: DATA_VERSION,
    });
    return version;
  } catch (error: any) {
    return null;
  }
}

export async function getLessons(): Promise<I_Lesson[]> {
  const lessons: I_Lesson[] = await localStorage.getAllDataForKey(
    E_ContentType.LESSON,
  );
  return lessons;
}

export async function getLesson(lessonPk: number): Promise<I_Lesson> {
  console.log('STORAGE GET LESSON', lessonPk);
  const lessonData = await localStorage.load({
    key: E_ContentType.LESSON,
    id: lessonPk.toString(),
  });
  console.log('STORAGE GET SONGS');
  const songs: I_Song[] = await Promise.all(
    lessonData.songs.map(async song => await _getSongData(song)),
  );
  return {...lessonData, songs};
}

export async function removeAllData(): Promise<void> {
  localStorage.remove({
    key: DATA_VERSION,
  });
}

async function _getSongData(songWithIds: I_Song_Ids): Promise<I_Song> {
  const chords: I_Chord[] = await _getListOfData(
    E_ContentType.CHORD,
    songWithIds.chords,
  );
  const beats: I_Beat[] = await _getListOfData(
    E_ContentType.BEAT,
    songWithIds.beats,
  );
  return {...songWithIds, chords, beats};
}

async function _getListOfData<T>(
  contentType: E_ContentType,
  ids: number[],
): Promise<Array<T>> {
  const data: Array<T> = await Promise.all(
    ids.map(
      async id =>
        await localStorage.load({
          key: contentType,
          id: id.toString(),
        }),
    ),
  );

  return data;
}
