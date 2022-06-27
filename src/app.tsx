import React, { useReducer, useMemo, useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import { SnackbarProvider, PLACEMENT } from 'baseui/snackbar';

import AppContext from 'src/share/context';
import appReducer, { initialState, init } from 'src/share/reducer';
import { setLolVersion, updateItemMap } from 'src/share/actions';
import { getItemList, getLolVer } from 'src/service/data-source/lol-qq';

import Footer from 'src/components/footer';
import Toolbar from 'src/components/toolbar';
import Home from 'src/modules/home';
import Import from 'src/modules/import';
import Settings from 'src/modules/settings';
import { darkTheme } from 'src/modules/theme/DarkTheme'; 

const engine = new Styletron();

const App = () => {
  const [store, dispatch] = useReducer(appReducer, initialState, init);
  const contextValue = useMemo(() => ({ store, dispatch }), [store, dispatch]);

  useEffect(() => {
    const getVerAndItems = async () => {
      const v = await getLolVer();
      dispatch(setLolVersion(v));
      window.bridge.appConfig.set(`lolVer`, v);

      const data = await getItemList();

      dispatch(
        updateItemMap({
          ...data,
        }),
      );
    };

    getVerAndItems();

    window.bridge.on(`update-available`, (version: string) => {
      //const notify = new Notification(`New version available: ${version}`);
      const notify = new Notification('champ-r', {
        body: `New version available: ${version}`,
      });

      notify.onclick = () => {
        window.shell.openExternal(`https://github.com/GeorgeV220/champ-r/releases`);
      };
    });
  }, []);

  useEffect(() => {
    window.bridge.sendMessage(`request-for-auth-config`);
    window.bridge.on(`got-auth`, (data: any) => {
      console.log(`got auth`, data);
    });
  }, []);

  return (
    <AppContext.Provider value={contextValue}>
      <StyletronProvider value={engine}>
        <BaseProvider
          theme={window.bridge.appConfig.get('darkTheme', true) ? darkTheme : LightTheme}>
          <SnackbarProvider
            placement={PLACEMENT.bottom}
            overrides={{
              Root: {
                style: () => ({
                  marginBottom: `2em`,
                }),
              },
            }}>
            <Router>
              <Toolbar />
              <Switch>
                <Route exact path={'/'}>
                  <Home />
                </Route>
                <Route path={`/import`}>
                  <Import />
                </Route>
                <Route path={`/settings`}>
                  <Settings />
                </Route>
              </Switch>
            </Router>
            <Footer />
          </SnackbarProvider>
        </BaseProvider>
      </StyletronProvider>
    </AppContext.Provider>
  );
};

export default App;
