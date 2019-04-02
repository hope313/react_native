import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon, Container, Content, Header, Left, Body, Right, Button } from 'native-base';
 
export default class ProfilesTab extends Component {

    static navigationOptions = {
        tabBarIcon : ({ tintColor }) => (
            <Icon name='person' style={{ color : tintColor }} />
        )
    }

    render() {
        return (
            <Container style={ style.container }>
                <Header style={{ width: '100%' }}>
                    <Left><Icon name='md-person-add' style={{ paddingLeft: 10 }} /></Left>
                    <Body><Text>Hope313</Text></Body>
                    <Right><Icon name='baseball' style={{ paddingRight: 10 }} /></Right>
                </Header>
                <Content style={{ width: '100%' }}>
                    <View style={{flexDirection:'row', paddingTop:10}}>
                        <View style={{flex:1, alignItems:'center'}}>
                        <Image source={{ url: 'https://steemitimages.com/u/anpigon/avatar' }}
                                style={{width:75, height:75, borderRadius:37.5}}/>
                        </View>
                        <View style={{flex:3}}>
                        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                            <View style={{alignItems:'center'}}>
                            <Text>167</Text>
                            <Text style={{fontSize:10, color:'gray'}}>posts</Text>
                            </View>
                            <View style={{alignItems:'center'}}>
                            <Text>346</Text>
                            <Text style={{fontSize:10, color:'gray'}}>follower</Text>
                            </View>
                            <View style={{alignItems:'center'}}>
                            <Text>192</Text>
                            <Text style={{fontSize:10, color:'gray'}}>following</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Button bordered dark
                                    style={{flex:4, marginLeft:10, justifyContent:'center', height:30, marginTop:10}}>
                            <Text>Edit Profile</Text>
                            </Button>
                            <Button bordered dark small icon
                                    style={{flex:1, marginRight:10, marginLeft:5, justifyContent:'center', height:30, marginTop:10}}>
                            <Icon name="settings" />
                            </Button>
                        </View>
                        </View>
                    </View>
                    <View style={{paddingHorizontal:10, paddingVertical:10}}>
                        <Text style={{fontWeight:'bold'}}>안피곤</Text>
                        <Text>Lark | Computer Jock | Commercial Pilot</Text>
                        <Text>www.steemit.com/@anpigon</Text>
                    </View>
                </Content>
                <View style={{ flexDirection: 'row', justifyContent:'space-around', borderTopWidth:1,borderTopColor:'#eae5e5', width : '100%' }}>
                    <Button transparent>
                        <Icon name='ios-apps' />
                    </Button>
                    <Button transparent>
                        <Icon name='ios-list' />
                    </Button>
                    <Button transparent>
                        <Icon name='ios-people' />
                    </Button>
                    <Button transparent>
                        <Icon name='ios-bookmark' />
                    </Button>
                </View>
            </Container>
        );
    }
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});