import React from 'react';
// import notifee, {EventType} from '@notifee/react-native';
import {useContentState} from '~/features/contentLoader';

/**
 * Компонент без графического интерфейса, который инитиализирует действия,
 * которые выполняются в момент запуска приложения.
 * К ним относятся:
 * - contentUpdater - проверка наличия отбновлений контента и его загрузка.
 *
 * @returns React.FC
 */
export const AppInit: React.FC = () => {
  // notifee.onBackgroundEvent(async ({type, detail}) => {
  //   const {notification, pressAction} = detail;
  //   console.log(`Notification type: ${type}\nNotification detail: ${detail}`);
  //   console.log(`Detail: ${notification}, ${pressAction}`);
  // });

  const contentUpdater = useContentState(state => state.checkUpdate);

  React.useEffect(() => {
    contentUpdater();
  });

  return null;
};
