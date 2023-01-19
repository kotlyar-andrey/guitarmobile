import {makeAutoObservable, runInAction} from 'mobx';
import {shortLessonDto} from '../content/dto';
import {E_LoadingState} from '../content/enums';
import {I_Lesson, I_ShortLesson} from '../content/interfaces';
import {getLessons} from '../content/storage';

class LessonsList {
  lessons: I_ShortLesson[] = []; // Список всех уроков в кратком виде
  status: E_LoadingState = E_LoadingState.NONE;

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Получение списка уроков из локального хранилища
   */
  async getLessons(): Promise<void> {
    runInAction(() => {
      this.status = E_LoadingState.LOADING;
    });
    try {
      const fullLessons: I_Lesson[] = await getLessons();
      const shortLessons: I_ShortLesson[] = fullLessons.map(lesson =>
        shortLessonDto(lesson),
      );
      runInAction(() => {
        this.lessons = shortLessons;
        this.status = E_LoadingState.SUCCESS;
      });
    } catch (error: unknown) {
      console.log('ERROR in getLessons: ', error);
      runInAction(() => {
        this.status = E_LoadingState.ERROR;
      });
    }
  }
}
const lessonsListGetter = new LessonsList();

export default lessonsListGetter;
