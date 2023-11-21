import notifee from '@notifee/react-native';

const CHANNEL_ID: string = 'metronomeChannel';
const NOTIFICATION_ID: string = 'metronomeNotification';

export const showNotification = async (bpm: number) => {
  const channelId = await notifee.createChannel({
    id: CHANNEL_ID,
    name: 'Metronome Channel',
  });

  await notifee.displayNotification({
    id: NOTIFICATION_ID,
    title: 'Метроном',
    body: `${bpm} ударов в минуту`,
    android: {
      channelId,
      pressAction: {
        id: 'default',
      },
    },
  });
};

export const cancelNotification = async () => {
  await notifee.cancelNotification(NOTIFICATION_ID);
};
