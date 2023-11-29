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
  inscription: string;
  image: string;
  width: number;
  height: number;
}

/**
 * Содержит только идентификаторы аккордов и боев, которые используются в уроке
 */
export interface SimpleSong {
  pk: number;
  title: string;
  chords: number[];
  schemes: Scheme[];
  beats: number[];
  text: string;
  metronome: number;
}

/**
 * Песня с полученными аккордами и боями. Используется на экране самого урока
 */
export interface FullSong {
  pk: number;
  title: string;
  chords: Chord[];
  schemes: Scheme[];
  beats: Beat[];
  text: string;
  metronome: number;
}

/**
 * Урок или разбор, скачанный с сервера. Песня содрежит только идентификаторы аккордов и боев
 */
export interface Lesson {
  pk: number;
  lesson_type: 0 | 1;
  number: number;
  title: string;
  video: string;
  intro: number;
  songs: SimpleSong[];
  additions: Addition[];
  start_lesson?: number;
}
