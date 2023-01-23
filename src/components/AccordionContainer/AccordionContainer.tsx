import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '~/theming';
import {HideIcon} from '../Icons/HideIcon';
import {ShowIcon} from '../Icons/ShowIcon';
import createStyles from './AccordionContainer.styles';

type Props = {
  title: string;
  children: React.ReactNode;
};

const AccordionContainer: React.FC<Props> = ({title, children}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    setVisible(prevVisible => !prevVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text />
        {visible && <Text style={styles.title}>{title}</Text>}
        <View style={styles.toolbarContainer}>
          <TouchableOpacity style={styles.toolbarItem} onPress={toggleVisible}>
            {visible ? (
              <HideIcon />
            ) : (
              <>
                <Text>Показать {title.toLowerCase()}</Text>
                <ShowIcon />
              </>
            )}
          </TouchableOpacity>
        </View>
      </View>
      {visible && <View>{children}</View>}
    </View>
  );
};

export default AccordionContainer;
