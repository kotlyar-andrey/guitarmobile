import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '~/features/themeSwitcher';
import createStyles from './AccordionContainer.styles';

type Props = {
  title: string;
  visible: boolean;
  toggleVisible: () => void;
  children: React.ReactNode;
};
export const AccordionContainer: React.FC<Props> = ({
  title,
  visible,
  toggleVisible,
  children,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text />
        {visible && <Text style={styles.title}>{title}</Text>}
        <View style={styles.toolbarContainer}>
          <TouchableOpacity style={styles.toolbarItem} onPress={toggleVisible}>
            {visible ? (
              <MaterialCommunityIcons
                name="eye-off-outline"
                color={theme.colors.secondary}
                size={moderateScale(14)}
              />
            ) : (
              <>
                <Text style={styles.toolbarText}>
                  Показать {title.toLowerCase()}
                </Text>
                <MaterialCommunityIcons
                  name="eye-outline"
                  color={theme.colors.secondary}
                  size={moderateScale(14)}
                />
              </>
            )}
          </TouchableOpacity>
        </View>
      </View>
      {visible && <View>{children}</View>}
    </View>
  );
};
