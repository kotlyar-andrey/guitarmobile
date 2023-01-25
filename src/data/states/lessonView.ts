import {makeAutoObservable, runInAction} from 'mobx';
import {E_LoadingState} from '../content/enums';
import {I_Lesson} from '../content/interfaces';
import {getLesson} from '../content/storage';

export enum E_ScrollSpeed {
  NONE = 0,
  LOW = 80,
  MEDIUM = 50,
  HIGH = 10,
}

class LessonView {
  lesson: I_Lesson | null = null;
  status: E_LoadingState = E_LoadingState.NONE;

  scrollSpeed: E_ScrollSpeed = E_ScrollSpeed.NONE;

  isMetronomePlay: boolean = false;
  metronomeBpm: number = 0;

  pinned: boolean = true;
  bottomPanelVisible: boolean = true;
  hidePanelTimerId: any = 0;

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
        this.scrollSpeed = E_ScrollSpeed.NONE;
      });
    } catch (error: unknown) {
      console.log('ERROR in getLessons: ', error);
      runInAction(() => {
        this.status = E_LoadingState.ERROR;
      });
    }
  }

  /**
   * Устанока скорости автопрокрутки урока
   */
  setScrollSpeed(newSpeed: E_ScrollSpeed) {
    this.scrollSpeed = newSpeed;
    this.hideBottomPanel();
  }

  togglePinned() {
    this.pinned = !this.pinned;
    this.hideBottomPanel();
  }

  showBottomPanel() {
    this.bottomPanelVisible = true;
    clearTimeout(this.hidePanelTimerId);
  }

  hideBottomPanel() {
    if (!this.pinned) {
      clearTimeout(this.hidePanelTimerId);
      this.hidePanelTimerId = setTimeout(() => {
        runInAction(() => (this.bottomPanelVisible = false));
      }, 2000);
    }
  }
}
const lessonView = new LessonView();

export default lessonView;
