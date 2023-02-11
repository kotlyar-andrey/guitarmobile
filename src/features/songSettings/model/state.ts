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
}

export const useSongSettings = create<SongSetting>()(
  immer(
    persist(
      (set, get) => ({
        chordOrientation: 'horizontal',
        chordSize: 3,
        beatSize: 3,
        textSize: 10,
        toggleOrientation: () => {
          const currentOrientation = get().chordOrientation;
          const newOrientation =
            currentOrientation === 'horizontal' ? 'vertical' : 'horizontal';
          set({chordOrientation: newOrientation});
        },
        setChordSize: (newChordSize: ChordSize) => {
          set({chordSize: newChordSize});
        },
        setBeatSize: (newBeatSize: BeatSize) => {
          set({beatSize: newBeatSize});
        },
        setTextSize: (newTextSize: number) => {
          set({textSize: newTextSize});
        },
      }),
      {
        name: 'songsettings',
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);
