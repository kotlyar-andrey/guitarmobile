import {makeAutoObservable, runInAction} from 'mobx';
import {E_LoadingState} from '../content/enums';
import {I_Lesson} from '../content/interfaces';
import {getLesson} from '../content/storage';

class LessonView {
  lesson: I_Lesson | null = null;
  status: E_LoadingState = E_LoadingState.NONE;

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Получение списка уроков из локального хранилища
   */
  async getLesson(lessonPk: number): Promise<void> {
    runInAction(() => {
      this.status = E_LoadingState.LOADING;
    });
    try {
      const lesson: I_Lesson = await getLesson(lessonPk);
      runInAction(() => {
        this.lesson = lesson;
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
const lessonView = new LessonView();

export default lessonView;
