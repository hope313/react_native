import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <View style={{flex:1,marginTop:20, justifyContent: 'center', alignItems: 'center', borderColor: '#FF0000', borderWidth: 1}}>
          <Text>12345</Text>
        </View>
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', borderColor: '#00FF00', borderWidth: 1}}>
          <Text>67890</Text>
        </View>
      </View>
    )
  }
}

/*
class NavBar extends React.Component {
  render () {
    return (
      <View style={styles.NavBar}>
        <Text style={styles.NavBarText}>React Native App</Text>
      </View>
    )
  }
}

class User extends React.Component {
  render () {
    return (
      <View style={styles.User}>
        <View style={{height: 150, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: 100, marginLeft: 10}}>
          <Image source={require('./img/avatar.png')} style={styles.UserAvatarThumb}></Image>
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={{fontSize: 30}}>닉네임</Text>
            <Text style={{color: 'gray', fontSize: 15}}>이름 / ID</Text>
            <Text style={{color: 'gray', fontSize: 15}}>학교이름</Text>
          </View>
        </View>
        <View style={{height: 50, flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.UserMenuItem}>
            <Image source={require('./img/list.png')} style={styles.UserMenuItemThumb}></Image>
            <Text style={{marginLeft: 5}}>마이 페이지</Text>
          </View>
          <View style={styles.UserMenuItem}>
          <Image source={require('./img/chat.png')} style={styles.UserMenuItemThumb}></Image>
            <Text style={{marginLeft: 5}}>댓글 리스트</Text>
          </View>
          <View style={styles.UserMenuItem}>
          <Image source={require('./img/star.png')} style={styles.UserMenuItemThumb}></Image>
            <Text style={{marginLeft: 5}}>스크랩</Text>
          </View>
        </View>
      </View>
    )
  }
}

class Button extends React.Component {
  render () {
    return (
      <View style={styles.ButtonItem}>
        <View style={styles.ButtonItemThumb}></View>
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}

class ButtonGroup extends React.Component {
  render () {
    return (
      <View style={styles.ButtonGroup}>
        <View style={{flex:1, flexDirection: 'row'}}>
          <Button name="내 계정" />
          <Button name="친구" />
          <Button name="강의평가" />
          <Button name="학점계산기" />
        </View>
        <View style={{flex:1, flexDirection: 'row'}}>
          <Button name="쪽지함" />
          <Button name="공지사항" />
          <Button name="도움말" />
          <Button name="설정" />
        </View>
      </View>
    )
  }
}

class TabButton extends React.Component {
  render () {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={{uri: this.props.icon}} style={{width:30, height:30, backgroundColor:'white'}}></Image>
          <Text style={{marginTop: 5, color: '#A0A0A0'}}>{this.props.name}</Text>
        </View>
    )
  }
}

class Tabs extends React.Component {
  render () {
    return (
      <View style={styles.Tabs}>
        <TabButton name="홈" icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9rGOsHnXVNwztCvK8dudhdvCzZ70t-IfXR9JELREp7VAmSEil" />
        <TabButton name="시간표" icon="https://icon-icons.com/icons2/620/PNG/64/calendar-with-a-clock-time-tools_icon-icons.com_56831.png" />
        <TabButton name="커뮤니티" icon="https://icon-icons.com/icons2/1293/PNG/64/2363345-art-artist-community-deviantart-social-social-community_85492.png" />
        <TabButton name="모임" icon="https://icon-icons.com/icons2/38/PNG/64/instagram_social_4560.png" />
        <TabButton name="더보기" icon="https://icon-icons.com/icons2/953/PNG/64/more-button-of-three-dots_icon-icons.com_74259.png" />
      </View>
    )
  }
}


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <User />
        <View style={{height:40}}></View>
        <ButtonGroup />
        <View style={{flex:1}}></View>
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  NavBar: {
    height: 60,
    backgroundColor: '#FF6E40',
    justifyContent: 'center',
    alignItems: 'center'
  },
  NavBarText: {
    fontSize: 20,
    color: 'white'
  },
  User: {
    height: 200,
    backgroundColor: 'white'
  },
  UserAvatarThumb: {
    width: 100, 
    height: 100
  },
  UserMenuItem: {
    flex: 1, 
    height: 50, 
    flexDirection: 'row', 
    borderWidth: 0.5, 
    borderLeftWidth: 0, 
    borderRightWidth: 0, 
    borderColor: 'gray', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  UserMenuItemThumb: {
    width: 30, 
    height: 25
  },
  ButtonItem: {
    flex:1, 
    height: 100, 
    borderWidth: 0.5, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  ButtonItemThumb: {
    width: 50, 
    height: 50, 
    backgroundColor: 'gray'
  },
  ButtonGroup: {
    height: 200,
    backgroundColor: '#C5E1A5'
  },
  Tabs: {
    height: 60,
    backgroundColor: '#white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    borderTopWidth: 0.5,
    borderColor: '#A0A0A0'
  }
});
---------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------------------
// Todo List
import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  componentWillMount() {
    this.setState({
      inputText: '',
      todos: [],
    })
  }

  addTodo() {
    let todoItem = this.state.inputText
    let todos = this.state.todos
    todos.push(todoItem)
    this.setState({
      inputText: '',
      todos: todos,
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={{width:240, height: 40,borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => {
            this.setState({inputText: text})
          }}
          value={this.state.inputText}
          />
        <TouchableOpacity onPress={this.addTodo.bind(this)}>
          <Text>
            add Todo
          </Text>
        </TouchableOpacity>
        {
          this.state.todos.map((todoItem, index)=> {
            return (
              <Text key={index}>
                {todoItem}
              </Text>
            )
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
*/

AppRegistry.registerComponent('App', () => App);