import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';

export type ChordSize = 1 | 2 | 3 | 4 | 5;
export type BeatSize = 1 | 2 | 3 | 4 | 5;

interface SongSetting {
  chordOrientation: 'horizontal' | 'vertical';
  chordSize: ChordSize;
  beatSize: BeatSize;
  textSize: number;
  panelPinned: boolean;
  setChordSize: (newChordSize: ChordSize) => void;
  setBeatSize: (newBeatSize: BeatSize) => void;
  setTextSize: (newTextSize: number) => void;
  togglePanelPinned: () => void;
  toggleOrientation: () => void;
}

export const useSongSettings = create<SongSetting>()(
  immer(
    persist(
      (set, get) => ({
        chordOrientation: 'horizontal',
        chordSize: 3,
        beatSize: 3,
        textSize: 10,
        panelPinned: true,

        setChordSize: (newChordSize: ChordSize) => {
          set({chordSize: newChordSize});
        },
        setBeatSize: (newBeatSize: BeatSize) => {
          set({beatSize: newBeatSize});
        },
        setTextSize: (newTextSize: number) => {
          set({textSize: newTextSize});
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
