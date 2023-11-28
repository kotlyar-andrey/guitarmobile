import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
// @ts-ignore
import {Metronome} from 'react-native-guitar';
import {cancelNotification, showNotification} from '../services/notificator';

interface MetronomeState {
  bpm: number;
  isPlaying: boolean;
  start: () => void;
  stop: () => void;
  setBpm: (newBpm: number) => void;
  changeBpm: (changeBy: number) => void;
}

const MIN_BPM = 10;
const MAX_BPM = 600;

export const useMetronomeState = create<MetronomeState>()(
  immer((set, get) => ({
    bpm: 80,
    isPlaying: false,
    start: () => {
      Metronome.play(get().bpm);
      if (!get().isPlaying) {
        set({isPlaying: true});
      }
      showNotification(get().bpm);
    },
    stop: () => {
      Metronome.stop();
      set({isPlaying: false});
      cancelNotification();
    },
    setBpm: (newBpm: number) => {
      if (newBpm >= MIN_BPM && newBpm <= MAX_BPM) {
        set({bpm: newBpm});
        if (get().isPlaying) {
          get().start();
        }
      }
    },
    changeBpm: (changeBy: number) => {
      const newValue = get().bpm + changeBy;
      if (newValue >= MIN_BPM && newValue <= MAX_BPM) {
        set({bpm: newValue});
      }
      if (get().isPlaying) {
        get().start();
      }
    },
  })),
);
