import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';

export type ChordSize = 1 | 2 | 3 | 4 | 5;
export type BeatSize = 1 | 2 | 3 | 4 | 5;

interface OneLessonSettings {
  chordsVisible: boolean;
  beatsVisible: boolean;
  schemesVisible: boolean;
  isLessonComplite: boolean;
  isLessonFavorite: boolean;
  downloadedVideoPath: string | null;
}

interface LessonsSettings {
  settings: {[lessonPk: number]: OneLessonSettings};
  createDefaultSettings: (numbers: number[]) => void;
  toggleSettingsField: (lessonPk: number, fieldName: string) => void;
  toggleChordsVisible: (lessonPk: number) => void;
  toggleBeatsVisible: (lessonPk: number) => void;
  toggleSchemesVisible: (lessonPk: number) => void;
  toggleIsLessonComplite: (lessonPk: number) => void;
  toggleIsLessonFavorite: (lessonPk: number) => void;
  getSettingsByPk: (lessonPk: number) => OneLessonSettings;
  getFavoritePks: () => number[];
  saveVideoPath: (lessonPk: number, path: string) => void;
  removeVideoPath: (lessonPk: number) => void;
}

const defaultLessonSettings: OneLessonSettings = {
  chordsVisible: true,
  beatsVisible: false,
  schemesVisible: true,
  isLessonComplite: false,
  isLessonFavorite: false,
  downloadedVideoPath: null,
};

export const useLessonSettings = create<LessonsSettings>()(
  immer(
    persist(
      (set, get) => ({
        settings: {},
        createDefaultSettings: (numbers: number[]) => {
          numbers.map(number => {
            set(state => {
              state.settings[number] = {...defaultLessonSettings};
            });
          });
        },
        toggleSettingsField: (lessonPk: number, fieldName: string) => {
          try {
            set(state => {
              state.settings[lessonPk][fieldName] =
                !state.settings[lessonPk][fieldName];
            });
          } catch (e: unknown) {
            const newSettings: OneLessonSettings = {
              ...defaultLessonSettings,
              [fieldName]: !defaultLessonSettings[fieldName],
            };
            set(state => {
              state.settings[lessonPk] = newSettings;
            });
          }
        },
        toggleChordsVisible: (lessonPk: number) => {
          get().toggleSettingsField(lessonPk, 'chordsVisible');
        },
        toggleBeatsVisible: (lessonPk: number) => {
          get().toggleSettingsField(lessonPk, 'beatsVisible');
        },
        toggleSchemesVisible: (lessonPk: number) => {
          get().toggleSettingsField(lessonPk, 'schemesVisible');
        },
        toggleIsLessonComplite: (lessonPk: number) => {
          get().toggleSettingsField(lessonPk, 'isLessonComplite');
        },
        toggleIsLessonFavorite: (lessonPk: number) => {
          get().toggleSettingsField(lessonPk, 'isLessonFavorite');
        },
        getSettingsByPk: (lessonPk: number): OneLessonSettings => {
          const lessonSettings = get().settings[lessonPk];
          if (!lessonSettings) {
            set(state => {
              state.settings[lessonPk] = defaultLessonSettings;
            });
            return defaultLessonSettings;
          }
          return lessonSettings;
        },
        getFavoritePks: () => {
          return Object.entries(get().settings)
            .filter(item => item[1].isLessonFavorite)
            .map(item => parseInt(item[0], 10));
        },
        saveVideoPath: (lessonPk: number, path: string) => {
          set(state => {
            state.settings[lessonPk].downloadedVideoPath = path;
          });
        },
        removeVideoPath: (lessonPk: number) => {
          set(state => {
            state.settings[lessonPk].downloadedVideoPath = null;
          });
        },
      }),
      {
        name: 'lessonssettings',
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);
