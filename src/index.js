/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */


import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, Text, } from 'react-native';

import Routes from './routes';

const App = () => {
  return (
    <>
         <Text>Teste1</Text>
         <StatusBar barStyle="dark-content" backgroundColor="#ff2e38" />
         <Routes />
         <Text>Teste2</Text>
    </>
  );
};

export default App;
