import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './Components/MainScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen    // MainScreen 컴포넌트를 네비게이터에 등록
  }
});

export default createAppContainer(AppStackNavigator);

/*
export default class App extends React.Component {
  render() {
    return (
      <MainScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/