import React from 'react';
import { AppRegistry, StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from "./Weather";

export default class App extends React.Component {
  state = {
    isLoaded : false,     // 날씨 정보가 로드되었는지 여부
  };

  componentDidMount () {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
  }

  render () {
    const { isLoaded } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' />
      {
        isLoaded ? <Weather /> : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the weather infomation</Text>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100
  }
});

AppRegistry.registerComponent('App', () => App);