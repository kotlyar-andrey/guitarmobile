import React from 'react';
import Toast, {
  ErrorToast,
  SuccessToast,
  InfoToast,
} from 'react-native-toast-message';
import {useTheme} from '~/theming';
import createStyles from './Toaster.styles';

/**
 * Показывает всплывающие уведомления
 * Уведомления бывают трех типов: информация, ошибка, успех.
 */
const Toaster: React.FC = () => {
  const theme = useTheme();

  const toastProperties = createStyles(theme);

  const config = {
    success: props => <SuccessToast {...props} {...toastProperties} />,
    error: props => <ErrorToast {...props} {...toastProperties} />,
    info: props => <InfoToast {...props} {...toastProperties} />,
  };

  return <Toast config={config} />;
};

export default Toaster;
