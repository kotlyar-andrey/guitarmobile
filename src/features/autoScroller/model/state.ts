import {create} from 'zustand';
import {ScrollSpeed} from './interfaces';

interface AutoScrolling {
  speed: ScrollSpeed;
  topScrolling: boolean;
  setSpeed: (newSpeed: ScrollSpeed) => void;
  scrollToTop: () => void;
  disableTopScrolling: () => void;
}

export const useAutoScroll = create<AutoScrolling>()(set => ({
  speed: 0,
  topScrolling: false,
  setSpeed: (newSpeed: ScrollSpeed) => set({speed: newSpeed}),
  scrollToTop: () => set({topScrolling: true}),
  disableTopScrolling: () => set({topScrolling: false}),
}));
