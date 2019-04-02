import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Icon } from 'native-base';

import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

//import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
/*
const AppTabNavigator = createBottomTabNavigator({
    HomeTab : { screen : HomeTab },
    SearchTab : { screen : SearchTab },
    AddMediaTab : { screen : AddMediaTab },
    LikesTab : { screen : LikesTab },
    ProfileTab : { screen : ProfileTab }
});
*/

// creataBottomTabNavigator 를 createMaterialTopNavigator 로 수정
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

const AppTabNavigator = createMaterialTopTabNavigator({
    HomeTab : { screen : HomeTab },
    SearchTab : { screen : SearchTab },
    AddMediaTab : { screen : AddMediaTab },
    LikesTab : { screen : LikesTab },
    ProfileTab : { screen : ProfileTab }
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        style: {
            ...Platform.select({
                ios: {
                    backgroundColor: 'white'
                }
            })
        },
        iconStyle: { height: 100 },
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        upperCaseLabel: false,
        showLabel: false,
        showIcon: true
    }
});

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends React.Component {

    // navigationOptions 코드 추가
    /*
    static navigationOptions = {
        headerLeft : <Icon name='ios-camera' style={{ paddingLeft: 10 }} />,
        title : 'Instagram',
        headerRight : <Icon name='ios-send' style={{ paddingRight: 10 }} />
    }
    */
    static navigationOptions = {
        header : null
    }
    /*
    render() {
        return (
            <View style={styles.container}>
            <Text>MainScreen</Text>
        </View>
        );
    }
    */
    render() {
        return <AppTabContainet />;
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});