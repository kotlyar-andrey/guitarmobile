import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import stateContent from '~/data/content/state';

/**
 * Глобальный компонент, который отвечает за начальную инициализацию приложения. Выполняет:
 * - проверку обновлений и загрузку данных в случае их отсутсвия;
 * - загрузку сохраненных настроек приложения и их применение;
 */
const AppInitializer = observer(() => {
  useEffect(() => {
    stateContent.update();
  }, []);

  return <></>;
});

export default AppInitializer;
