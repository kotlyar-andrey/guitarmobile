import {I_Lesson, I_ShortLesson} from './interfaces';

export function shortLessonDto(lesson: I_Lesson): I_ShortLesson {
  return {
    pk: lesson.pk,
    title: lesson.title,
    songs: lesson.songs.map(song => ({pk: song.pk, title: song.title})),
  };
}
