import {Beat} from '~/entities/beat';
import {Chord} from '~/entities/chord';

export interface Addition {
  pk: number;
  title: string;
  video: string;
  intro: number;
}

export interface Scheme {
  pk: number;
  title: string;
  name: string;
  inscription: string;
  image: string;
}

export interface SimpleSong {
  pk: number;
  title: string;
  chords: number[];
  schemes: string[];
  beats: number[];
  text: string;
  metronome: number;
}

export interface Song {
  pk: number;
  title: string;
  chords: Chord[];
  schemes: Scheme[];
  beats: Beat[];
  text: string;
  metronome: number;
}

export interface Lesson {
  pk: number;
  lesson_type: 0 | 1;
  number: number;
  title: string;
  video: string;
  intro: number;
  songs: Song[] | SimpleSong[];
  additions: Addition[];
}
