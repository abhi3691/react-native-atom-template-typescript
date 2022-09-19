import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ScreenRatio from './src/global_functions/screen_ratio/ScreenRatio';
import FontRatio from './src/global_functions/font_ratio/FontRatio';
import customColor from './src/theme/Color';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>WELCOME TO REACT NATIVE ATOM </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height,
    width: ScreenRatio.width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: FontRatio(20),
    color: customColor.black,
  },
});

export default App;
