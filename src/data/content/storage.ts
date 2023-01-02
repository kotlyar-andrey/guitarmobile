import {I_Lesson} from './interfaces';
import {E_ContentType} from './enums';
import localStorage from '~/config/localStorage';
import {DATA_VERSION} from './consts';

/**
 * Вспомогательная функция, возвращает номер версии данніх
 * @returns номер версии данных в локальном хранилище
 */
export async function getDataVersion(): Promise<number | null> {
  try {
    const version = await localStorage.load({
      key: DATA_VERSION,
    });
    return version;
  } catch (error: any) {
    return null;
  }
}

export async function getLessons(): Promise<I_Lesson[]> {
  const lessons: I_Lesson[] = await localStorage.getAllDataForKey(
    E_ContentType.LESSON,
  );
  return lessons;
}

export async function getLesson(lessonPk: number): Promise<I_Lesson> {
  const lesson = await localStorage.load({
    key: E_ContentType.LESSON,
    id: lessonPk.toString(),
  });
  return lesson;
}

export async function removeAllData() {
  localStorage.remove({
    key: DATA_VERSION,
  });
}

// /**
//  * Сохраняет список уроков, разборов или аккордов на устройстве пользователя.
//  * @param subject lesson, howtoplay or accord
//  * @param data list of lessons, howtoplays or accords
//  */
// async function _saveListOf(
//   subject: E_ContentType,
//   data: I_Lesson[] | I_Chord[] | I_Beat[],
// ) {
//   data.forEach(item => {
//     localStorage.save({
//       key: subject,
//       id: item.pk.toString(),
//       data: item,
//     });
//   });
// }

// async function _saveVersion(newVersion: number): Promise<void> {
//   localStorage.save({
//     key: DATA_VERSION,
//     data: newVersion,
//   });
// }
