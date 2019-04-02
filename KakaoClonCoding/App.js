import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class NavBar extends React.Component {
  render () {
    return (
      <View style={{height:140, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF'}}>
        <View style={{flex:1, flexDirection: 'row', width: '100%', marginTop: 40, justifyContent: 'left', alignItems: 'left', borderWidth: 0}}>
          <Text style={{flex:1.5, marginLeft: 8, fontSize: 26, fontWeight: 'bold', borderWidth: 0, borderColor: '#000000'}}>친구</Text>
          <View style={{flex:1, flexDirection: 'row', borderWidth: 0, borderColor: '#000000'}}>
            <View style={{flex:1, width:30, height:30, marginTop: 2, marginLeft: 2, backgroundColor:'gray'}}></View>
            <View style={{flex:1, width:30, height:30, marginTop: 2, marginLeft: 2, backgroundColor:'green'}}></View>
          </View>
        </View>
        <View style={{flex:2, flexDirection: 'row', width:'100%', borderWidth: 0}}>
          <View style={{flex:1, flexDirection: 'row', borderColor: 'blue'}}>
            <View style={{flex:1, width:50, height:50, marginTop: 2, marginLeft: 2, backgroundColor:'gray'}}></View>
            <View style={{flex:1, width:50, height:50, marginTop: 2, marginLeft: 2, backgroundColor:'green'}}></View>
            <View style={{flex:1, width:50, height:50, marginTop: 2, marginLeft: 2, backgroundColor:'red'}}></View>
          </View>
          <View style={{flex:0.5, flexDirection: 'row', borderColor: 'green'}}></View>
          <View style={{flex:1, flexDirection: 'row', borderColor: 'red'}}>
            <View style={{flex:1, width:50, height:50, marginTop: 2, marginLeft: 2, backgroundColor:'white'}}></View>
            <View style={{flex:1, width:50, height:50, marginTop: 2, marginLeft: 2, backgroundColor:'blue'}}></View>
            <View style={{flex:1, width:50, height:50, marginTop: 2, marginLeft: 2, backgroundColor:'#CEA'}}></View>
          </View>
        </View>
      </View>
    )
  }
}

class SearchBar extends React.Component {
  render () {
    return (
      <View style={{height:40, justifyContent: 'center', alignItems: 'center'}}>        
        <TextInput style={{flex:1, width:'100%', borderWidth:0, marginLeft: 6, borderBottomWidth: 1, borderBottomColor: '#CACACA'}} placeholder={`이름검색`}></TextInput>
      </View>
    )
  }
}

class MyProfileBar extends React.Component {
  render () {
    return (
      <View style={{height:80, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2E1FF'}}>
        <View style={{height:70, flexDirection: 'row', height:60, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{flex:1, width:50, height:50, marginTop: 2, marginLeft: 2, backgroundColor:'gray'}}></View>
          <Text style={{flex:6, marginLeft: 5}}>내 프로필</Text>
        </View>
      </View>
    )
  }
}

class PlusFirendBar extends React.Component {
  render () {
    return (
      <View style={{height:70, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EECA12'}}>      
        <View style={{height:70, flexDirection: 'row', height:60, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{flex:1, width:50, height:50, marginTop: 2, marginLeft: 2, backgroundColor:'gray'}}></View>
          <Text style={{flex:6, marginLeft: 5}}>추천 친구</Text>
        </View>
      </View>
    )
  }
}

class FirendListBar extends React.Component {
  render () {
    return (
      <View style={{flex:1, flexDirection: 'column', alignItems: 'left', backgroundColor: '#FFFFFF'}}>
        <View style={{height:70, flexDirection: 'row', height:60, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{flex:1, width:50, height:50, marginTop: 2, marginLeft: 2, backgroundColor:'gray'}}></View>
          <Text style={{flex:6, marginLeft: 5}}>친구1</Text>
        </View>
        <View style={{height:70, flexDirection: 'row', height:60, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{flex:1, width:50, height:50, marginTop: 2, marginLeft: 2, backgroundColor:'gray'}}></View>
          <Text style={{flex:6, marginLeft: 5}}>친구2</Text>
        </View>
        <View style={{height:70, flexDirection: 'row', height:60, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{flex:1, width:50, height:50, marginTop: 2, marginLeft: 2, backgroundColor:'gray'}}></View>
          <Text style={{flex:6, marginLeft: 5}}>친구3</Text>
        </View>
        <View style={{height:70, flexDirection: 'row', height:60, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{flex:1, width:50, height:50, marginTop: 2, marginLeft: 2, backgroundColor:'gray'}}></View>
          <Text style={{flex:6, marginLeft: 5}}>친구4</Text>
        </View>
        <View style={{height:70, flexDirection: 'row', height:60, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{flex:1, width:50, height:50, marginTop: 2, marginLeft: 2, backgroundColor:'gray'}}></View>
          <Text style={{flex:6, marginLeft: 5}}>친구5</Text>
        </View>
        <View style={{height:70, flexDirection: 'row', height:60, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{flex:1, width:50, height:50, marginTop: 2, marginLeft: 2, backgroundColor:'gray'}}></View>
          <Text style={{flex:6, marginLeft: 5}}>친구6</Text>
        </View>
        <View style={{height:70, flexDirection: 'row', height:60, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{flex:1, width:50, height:50, marginTop: 2, marginLeft: 2, backgroundColor:'gray'}}></View>
          <Text style={{flex:6, marginLeft: 5}}>친구7</Text>
        </View>
      </View>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>        
        <NavBar />
        <SearchBar />
        <MyProfileBar />
        <PlusFirendBar />
        <FirendListBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
});