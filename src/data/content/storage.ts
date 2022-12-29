import {I_Beat, I_Chord, I_Lesson, I_UpdatedData} from './interfaces';
import {E_ContentType} from './enums';
import localStorage from '~/config/localStorage';

/**
 * Вспомогательная функция, возвращает номер версии данніх
 * @returns номер версии данных в локальном хранилище
 */
export async function getDataVersion(): Promise<number | null> {
  try {
    const version = await localStorage.load({
      key: E_ContentType.DATA_VERSION,
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

/**
 * Сохраняет обновленные данные на устройсве пользователя
 * @param data Объект со всеми данными, которые нужно обновить в хранилище устройства.
 */
export async function saveLoadedOrUpdatedData(
  data: I_UpdatedData,
): Promise<void> {
  await _saveListOf(E_ContentType.LESSON, data.lessons);
  await _saveListOf(E_ContentType.HOWTOPLAY, data.howtoplays);
  await _saveListOf(E_ContentType.CHORD, data.chords);
  await _saveListOf(E_ContentType.BEAT, data.beats);
  await _saveVersion(data.lastVersion);
}

export async function removeAllData() {
  localStorage.remove({
    key: 'dataVersion',
  });
}

/**
 * Сохраняет список уроков, разборов или аккордов на устройстве пользователя.
 * @param subject lesson, howtoplay or accord
 * @param data list of lessons, howtoplays or accords
 */
async function _saveListOf(
  subject: E_ContentType,
  data: I_Lesson[] | I_Chord[] | I_Beat[],
) {
  data.forEach(item => {
    localStorage.save({
      key: subject,
      id: item.pk.toString(),
      data: item,
    });
  });
}

async function _saveVersion(newVersion: number): Promise<void> {
  localStorage.save({
    key: E_ContentType.DATA_VERSION,
    data: newVersion,
  });
}
