import {
  I_Chord,
  E_ContentType,
  I_Lesson,
  I_Beat,
  I_InfoForUpdate,
  I_UpdatedData,
} from './interfaces';
import requestExecutor from '~/config/requstExecutor';

/**
 * Загрузка уроков, аккордов и боев, которые были изменены.
 * @param localVersion Версия данных на устройстве пользователя
 * @returns уроки, аккорды и бои, которые были изменены
 */
export async function loadUpdatedData(
  localVersion: number,
): Promise<I_UpdatedData> {
  const updateInfo: I_InfoForUpdate = await _loadInfoForUpdate(localVersion);
  const lessons: I_Lesson[] = await _reloadObjectsOf<I_Lesson>(
    E_ContentType.LESSON,
    updateInfo.lessons,
  );
  const howtoplays: I_Lesson[] = await _reloadObjectsOf<I_Lesson>(
    E_ContentType.HOWTOPLAY,
    updateInfo.howtoplays,
  );
  const chords: I_Chord[] = await _reloadObjectsOf<I_Chord>(
    E_ContentType.CHORD,
    updateInfo.chords,
  );
  const beats: I_Beat[] = await _reloadObjectsOf<I_Beat>(
    E_ContentType.BEAT,
    updateInfo.beats,
  );

  return {
    lessons,
    howtoplays,
    chords,
    beats,
    lastVersion: updateInfo.last_version,
  };
}

/**
 * Загружает с сервера весь контент, а так же версию данных
 * @returns Весь контект с уроками, разборами и т.п
 */
export async function loadAllData(): Promise<I_UpdatedData> {
  const lessons: I_Lesson[] = await _loadListOf<I_Lesson>(E_ContentType.LESSON);
  const howtoplays: I_Lesson[] = await _loadListOf<I_Lesson>(
    E_ContentType.HOWTOPLAY,
  );
  const chords: I_Chord[] = await _loadListOf<I_Chord>(E_ContentType.CHORD);
  const beats: I_Beat[] = await _loadListOf<I_Beat>(E_ContentType.BEAT);
  const lastVersion = await _loadVersion();
  return {lessons, howtoplays, chords, beats, lastVersion};
}

/**
 * Загружает список идентификаторов измененных уроков, разборов и аккордов.
 */
async function _loadInfoForUpdate(
  localVersion: number,
): Promise<I_InfoForUpdate> {
  const response = await requestExecutor.get(`/data/update/${localVersion}`);
  return response.data;
}

/**
 * Загружает весь список уроков, разборов, аккордов или боев.
 * @param subject lesson, howtoplay, accord or beat
 * @returns Список соответствующих данных
 */
async function _loadListOf<T>(subject: E_ContentType): Promise<Array<T>> {
  console.log('start _loadListOf: ', subject);
  const response = await requestExecutor.get(`/data/${subject}/?format=json`);
  return response.data;
}

/**
 * Загружает один урок, разбор или аккорд по идентификатору
 * @param subject lesson, howtoplay or accord
 * @param id Идентификатор нужного аккорда, разбора или аккорда
 * @returns Конкретный урок, разбор или аккорд
 */
async function _loadObjectOf<T>(
  subject: E_ContentType,
  id: number,
): Promise<T> {
  const response = await requestExecutor.get(`/data/${subject}/${id}/`);
  return response.data;
}

/**
 * Загружает список определенного вида контента для дальнейшего сохранения при обновлении данных
 * @param subject Вид контента - урок, разбор...
 * @param ids Список идентификаторов объектов, которые нужно обновить
 * @returns Полученный с сервера список объектов.
 */
async function _reloadObjectsOf<T>(
  subject: E_ContentType,
  ids: number[],
): Promise<Array<T>> {
  const reloadedData: Array<T> = await Promise.all(
    ids.map(
      async (subjectId: number): Promise<T> =>
        await _loadObjectOf<T>(subject, subjectId),
    ),
  );
  return reloadedData;
}

async function _loadVersion(): Promise<number> {
  const response = await requestExecutor.get('/data/update/');
  const data = response.data;
  console.log('data: ', data, data.last_version);
  return data.last_version;
}
