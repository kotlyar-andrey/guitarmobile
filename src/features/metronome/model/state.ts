import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
import {cancelNotification, showNotification} from '../services/notificator';

interface MetronomeState {
  isPlaying: boolean;
  bpm: number;
  isFirstVisit: boolean;
  setIsPlaying: (newValue: boolean) => void;
  setBpm: (newBpm: number) => void;
  changeBpm: (changeBy: number) => void;
}

const MIN_BPM = 10;
const MAX_BPM = 600;

export const useMetronomeState = create<MetronomeState>()(
  immer((set, get) => ({
    isPlaying: false,
    bpm: 80,
    isFirstVisit: false,
    setIsPlaying: (newValue: boolean) => {
      if (newValue) {
        showNotification(get().bpm);
      } else {
        cancelNotification();
      }
      set({isPlaying: newValue});
    },
    setBpm: (newBpm: number) => {
      if (newBpm >= MIN_BPM && newBpm <= MAX_BPM) {
        set({bpm: newBpm});
      }
    },
    changeBpm: (changeBy: number) => {
      set(state => {
        if (
          state.bpm + changeBy >= MIN_BPM &&
          state.bpm + changeBy <= MAX_BPM
        ) {
          state.bpm += changeBy;
        }
      });
    },
  })),
);
