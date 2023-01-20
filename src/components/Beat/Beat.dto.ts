import {Beat} from 'rn-chords-player';
import {I_Beat} from '~/data/content/interfaces';

export function makeBeat(beat: I_Beat): Beat {
  // без этого мапа список ударов не воспринимается мостом и выдает ошибку
  // react mative Error: Exception in HostFunction: Malformed calls from JS: field sizes are different.
  return {strikes: beat.strikes.map(strike => strike), duration: beat.duration};
}
