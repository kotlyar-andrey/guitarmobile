import React from 'react';
import {useSongSettings} from '~/features/songSettings';

import {TextMarkdown} from '~/shared/components/TextMarkdown';

interface Props {
  text: string;
}
export const MarkdownContainer: React.FC<Props> = ({text}) => {
  const size = useSongSettings(state => state.textSize);

  return <TextMarkdown size={size}>{text}</TextMarkdown>;
};
