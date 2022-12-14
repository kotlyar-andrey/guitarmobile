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
  beats: I_Beat[];
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

export interface I_InfoForUpdate {
  lessons: number[];
  howtoplays: number[];
  chords: number[];
  beats: number[];
  last_version: number;
}

export interface I_UpdatedData {
  lessons: I_Lesson[];
  howtoplays: I_Lesson[];
  chords: I_Chord[];
  beats: I_Beat[];
  lastVersion: number;
}

/**
 * Интерфейсы для списка уроков, где представлены только названия уроков и список играемых песен
 */

interface I_ShortSong {
  pk: number;
  title: string;
}

export interface I_ShortLesson {
  pk: number;
  title: string;
  songs: I_ShortSong[];
}

export interface I_Song_Ids {
  pk: number;
  title: string;
  chords: number[];
  schemes: I_Scheme[];
  beats: number[];
  text: string;
  metronome: number;
}
