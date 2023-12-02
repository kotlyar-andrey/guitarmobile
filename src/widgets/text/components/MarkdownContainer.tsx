import React from 'react';
import {useSongSettings} from '~/features/songSettings';

import {TextMarkdown} from '~/shared/components/TextMarkdown';
import {TEXT_BASE_SIZE} from '~/shared/config/consts';

interface Props {
  text: string;
}
export const MarkdownContainer: React.FC<Props> = ({text}) => {
  const textSize = useSongSettings(state => state.textSize);

  const size = Math.round((TEXT_BASE_SIZE * textSize) / 100);

  return <TextMarkdown size={size}>{text}</TextMarkdown>;
};
