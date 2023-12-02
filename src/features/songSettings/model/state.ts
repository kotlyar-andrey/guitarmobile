import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';

// Размер в процентах: от 40 до 200 с шагом SIZE_STEP
const MIN_SIZE = 40;
const MAX_SIZE = 200;
const SIZE_STEP = 20;

interface SongSetting {
  chordOrientation: 'horizontal' | 'vertical';

  chordSize: number;
  beatSize: number;
  schemeSize: number;
  textSize: number;
  panelPinned: boolean;
  setChordSize: (newChordSize: number) => void;
  increaseChordSize: () => void;
  decreaseChordSize: () => void;

  setSchemeSize: (newSchemeSize: number) => void;
  increaseSchemeSize: () => void;
  decreaseSchemeSize: () => void;

  setTextSize: (newTextSize: number) => void;
  increaseTextSize: () => void;
  decreaseTextSize: () => void;

  togglePanelPinned: () => void;
  toggleOrientation: () => void;
}

export const useSongSettings = create<SongSetting>()(
  immer(
    persist(
      (set, get) => ({
        chordOrientation: 'horizontal',
        chordSize: 100,
        beatSize: 100,
        schemeSize: 100,
        textSize: 100,
        panelPinned: true,

        setChordSize: (newChordSize: number) => {
          if (newChordSize >= MIN_SIZE && newChordSize <= MAX_SIZE) {
            set({chordSize: newChordSize});
          }
        },
        increaseChordSize: () => {
          get().setChordSize(get().chordSize + SIZE_STEP);
        },
        decreaseChordSize: () => {
          get().setChordSize(get().chordSize - SIZE_STEP);
        },

        setSchemeSize: (newSchemeSize: number) => {
          if (newSchemeSize >= MIN_SIZE && newSchemeSize <= MAX_SIZE) {
            set({schemeSize: newSchemeSize});
          }
        },
        increaseSchemeSize: () => {
          get().setSchemeSize(get().schemeSize + SIZE_STEP);
        },
        decreaseSchemeSize: () => {
          get().setSchemeSize(get().schemeSize - SIZE_STEP);
        },

        setTextSize: (newTextSize: number) => {
          if (newTextSize >= MIN_SIZE && newTextSize <= MAX_SIZE) {
            set({textSize: newTextSize});
          }
        },
        increaseTextSize: () => {
          get().setTextSize(get().textSize + SIZE_STEP);
        },
        decreaseTextSize: () => {
          get().setTextSize(get().textSize - SIZE_STEP);
        },

        togglePanelPinned: () => {
          const currentPinned = get().panelPinned;
          const newPinned = !currentPinned;
          set({panelPinned: newPinned});
        },
        toggleOrientation: () => {
          const currentOrientation = get().chordOrientation;
          const newOrientation =
            currentOrientation === 'horizontal' ? 'vertical' : 'horizontal';
          set({chordOrientation: newOrientation});
        },
      }),
      {
        name: 'songsettings',
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);
