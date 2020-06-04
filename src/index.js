import 'react-native-gesture-handler';
import React from 'react';
// import { View } from 'react-native';
import Slide1 from '../src/components/Slide1';
import Routes from '../src/routes';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Routes style={{ flex: 1 }}>
      <Slide1 />
    </Routes>
  );
};

export default App;
