import {requests} from '~/shared/config/requests';
import {ContentTypes} from '~/shared/enums';
import {InfoForUpdate} from './interfaces';

/**
 * Загружает с сервера все доступные для скачивания данные уроков, разборов, аккордов и боев.
 * @param contentType Урок, разбор, аккорд или бой
 * @returns Список всех объектов данного класса
 */
export async function loadListOfContent<T>(
  contentType: ContentTypes,
): Promise<T[]> {
  const response = await requests.get(`/data/${contentType}/`);
  return response.data;
}

/**
 * Загружает единственного представителя данного типа по идентификатору
 * @param contentType Тип данных
 * @param pk Идентификатор
 * @returns Объект данного типа с указанным идентификатором
 */
export async function loadObjectOfContent<T>(
  contentType: ContentTypes,
  pk: number,
): Promise<T> {
  const response = await requests.get(`/data/${contentType}/${pk}/`);
  return response.data;
}

/**
 * Загружает список объектов указанного типа и возвращает обновленный список данных
 * @param contentType Тип данных
 * @param pks Список идентификаторов, которые нужно загрузить
 * @param oldData Список данных, некоторые элементы которого нужно изменить
 * @returns Список объектов данного типа
 */
export async function reloadListOfContent<T extends {pk: number}>(
  contentType: ContentTypes,
  pks: number[],
  oldData: T[],
): Promise<T[]> {
  // Обновленные или новые данные, скачанные с сервера
  const dataForUpdate: T[] = await Promise.all(
    pks.map(async pk => {
      return await loadObjectOfContent<T>(contentType, pk);
    }),
  );
  // Заменяем в списке oldData данные на новые, обновленные
  const resultData = oldData.map(
    oldObject =>
      dataForUpdate.find(newObject => newObject.pk === oldObject.pk) ||
      oldObject,
  );
  // Новые данные (не изменненные старые записи, а именно новые, которые нужно просто добавить)
  const oldDataPks = oldData.map(obj => obj.pk);
  const newData = dataForUpdate.filter(
    object => !oldDataPks.includes(object.pk),
  );
  return resultData.concat(newData);
}

/**
 * Загружает и возвращает номер версии данных с сервера
 * @returns Номер версии данных
 */
export async function loadDataVersion(): Promise<number> {
  const response = await requests.get('/data/update/');
  const data = response.data;
  return data.last_version;
}

export async function loadDataForUpdate(
  localVersion: number,
): Promise<InfoForUpdate> {
  const response = await requests.get(`/data/update/${localVersion}/`);
  return response.data;
}
