import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '~/theming';
import {HideIcon} from '../Icons/HideIcon';
import {SettingsOutlineIcon} from '../Icons/SettingsOutlineIcon';
import {ShowIcon} from '../Icons/ShowIcon';
import createStyles from './AccordionContainer.styles';

const AccordionContainer = ({title, children}) => {
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
                <Text>Показать ритмические рисунки</Text>
                <ShowIcon />
              </>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolbarItem}>
            <SettingsOutlineIcon />
          </TouchableOpacity>
        </View>
      </View>
      {visible && <View>{children}</View>}
    </View>
  );
};

export default AccordionContainer;
