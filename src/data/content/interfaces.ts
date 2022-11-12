export interface Accord {
  pk: number;
  title: string;
  muz_title: string;
  note: string;
  order: number;
  start_lad: number;
  bare: boolean;
}

export interface Beat {
  code: string;
  inscription: string;
  image: string;
}

export interface Addition {
  title: string;
  video: string;
  intro: number;
}

export interface Song {
  title: string;
  accords: Accord[];
  schemes: Beat[];
  text: string;
  metronome: number;
}

export interface LessonData {
  pk: number;
  number: number;
  title: string;
  video: string;
  intro: number;
  sounds: Song[];
  additions: Addition[];
}

export enum E_ContentType {
  LESSON = 'lessons',
  HOWTOPLAY = 'tracks', //TODO - change to howtoplays
  ACCORD = 'accords',
}
