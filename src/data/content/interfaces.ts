interface I_Fret {
  pk: number;
  string: number;
  lad: number;
  number: number;
}

export interface I_Chord {
  pk: number;
  title: string;
  muz_title: string;
  note: string;
  order: number;
  start_lad: number;
  bare: boolean;
  lads: I_Fret[];
}

export interface I_Beat {
  pk: number;
  inscription: string;
  duration: number;
  strikes: string[];
}

export interface I_Addition {
  pk: number;
  title: string;
  video: string;
  intro: number;
}

export interface I_Scheme {
  pk: number;
  title: string;
  name: string;
  inscription: string;
  image: string;
}

export interface I_Song {
  pk: number;
  title: string;
  chords: I_Chord[];
  schemes: I_Scheme[];
  text: string;
  metronome: number;
}

export interface I_Lesson {
  pk: number;
  lesson_type: 0 | 1;
  number: number;
  title: string;
  video: string;
  intro: number;
  songs: I_Song[];
  additions: I_Addition[];
}

export enum E_ContentType {
  LESSON = 'lessons',
  HOWTOPLAY = 'tracks', //TODO - change to howtoplays
  ACCORD = 'accords',
}
