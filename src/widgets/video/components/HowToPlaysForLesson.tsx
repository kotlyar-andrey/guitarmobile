import React from 'react';
import {useContentState} from '~/features/contentLoader';
import {FillButton} from '~/shared/components/Buttons';
import {TitleContainer} from '~/shared/components/TitleContainer';

interface Props {
  lessonNumber: number;
  navigation: any;
}

export const HowToPlaysForLesson: React.FC<Props> = ({
  lessonNumber,
  navigation,
}) => {
  const getHowToPlays = useContentState(state => state.getHowtoplaysForLesson);
  const howToPlays = getHowToPlays(lessonNumber);

  return (
    <>
      {howToPlays.length > 0 && (
        <TitleContainer title="Разборы к уроку:">
          {howToPlays.map(howtoplay => (
            <FillButton
              key={howtoplay.pk}
              a11yHint={`Нажмите, чтобы перейти к разбору ${howtoplay.title}`}
              a11yLabel="Разборы к уроку"
              text={howtoplay.title}
              onPressHandler={() => {
                navigation.push('HowToPlay', {lessonPk: howtoplay.pk});
              }}
            />
          ))}
        </TitleContainer>
      )}
    </>
  );
};
