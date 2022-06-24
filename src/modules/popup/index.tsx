import React, { useEffect } from 'react';

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { DarkTheme, LightTheme, BaseProvider } from 'baseui';
import initI18n from 'src/modules/i18n';
import { Content } from './content';

initI18n();
const engine = new Styletron();

export default function Popup() {
  useEffect(() => {
    initI18n();
  }, []);

  return (
    <StyletronProvider value={engine}>
      <BaseProvider
        theme={window.bridge.appConfig.get('darkTheme', false) ? DarkTheme : LightTheme}>
        <Content />
      </BaseProvider>
    </StyletronProvider>
  );
}
