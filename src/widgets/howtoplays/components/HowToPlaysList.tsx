import React from 'react';
import {FlatList} from 'react-native';
import {useContentState} from '~/features/contentLoader';
import {ErrorMessage} from '~/shared/components/ErrorMessage';
import {Loading} from '~/shared/components/Loading';
import {useLessonSettings} from '~/features/lessonsSettings';
import {HowToPlayRow} from '~/entities/howtoplay';

interface Props {
  navigation: any;
}

export const HowToPlaysList = ({navigation}: Props) => {
  const contentState = useContentState(state => ({
    howtoplays: state.howtoplays,
    loading: state.loading,
    error: state.error,
    loadAllContent: state.loadAllContent,
  }));
  const {howtoplays, loading, loadAllContent} = contentState;

  useLessonSettings(state => state.settings);

  const navigationToHowToPlay = (lessonPk: number) => () => {
    navigation.push('HowToPlay', {lessonPk});
  };

  return (
    <>
      {howtoplays.length === 0 && loading && <Loading />}
      {howtoplays.length === 0 && !loading && (
        <ErrorMessage
          text="Разборы не загружены. Убедитесь в наличии стабильного Интернет-соединения и нажмите на кнопку ниже"
          handler={loadAllContent}
        />
      )}
      {howtoplays.length > 0 && (
        <FlatList
          data={howtoplays}
          renderItem={({item}) => (
            <HowToPlayRow
              howtoplay={item}
              navigationToHowToPlay={navigationToHowToPlay(item.pk)}
            />
          )}
          keyExtractor={howtoplay => `howToPlayID${howtoplay.pk}`}
        />
      )}
    </>
  );
};
