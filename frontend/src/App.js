import React from 'react';
import { Admin, Resource } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from '@semapps/archipelago-layout';
import { createBrowserHistory as createHistory } from 'history';

import i18nProvider from './config/i18nProvider';
import dataProvider from './config/dataProvider';
import * as resources from './resources';
import  HomePage from './pages/HomePage'

const history = createHistory();

const mainStyle = makeStyles(theme => ({
    content :{
      [theme.breakpoints.up('md')]: {
        paddingRight : '10%',
      },
    }
  }));


const App = () => {
  const style = mainStyle();

  return (
    <Admin
      dataProvider={dataProvider}
      history={history}
      i18nProvider={i18nProvider}
      theme={theme}
      dashboard={HomePage}
    >
      {Object.entries(resources).map(([key, resource]) => (
        <Resource key={key} name={key} {...resource.config} />
      ))}
    </Admin>
  )
};

export default App;
