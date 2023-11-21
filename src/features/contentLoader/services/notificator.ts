import notifee from '@notifee/react-native';

const CHANNEL_ID: string = 'coontentLoaderChannel';
const NOTIFICATION_ID: string = 'contentLoaderNotification';

export const showNotification = async (
  text: string,
  currentProgress: number = 0,
) => {
  const channelId = await notifee.createChannel({
    id: CHANNEL_ID,
    name: 'Content Loader Channel',
  });
  await notifee.displayNotification({
    id: NOTIFICATION_ID,
    title: 'Загрузка данных',
    body: text,
    android: {
      channelId,
      pressAction: {
        id: CHANNEL_ID,
      },
      progress: {
        max: 3,
        current: currentProgress,
      },
    },
  });
};

export const cancelNotification = async () => {
  await notifee.cancelNotification(NOTIFICATION_ID);
};
