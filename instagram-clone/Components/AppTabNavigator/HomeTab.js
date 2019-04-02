import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Icon, Container, Content, Thumbnail, Header, Left, Right, Body } from 'native-base';
import CardComponent from '../CardComponent';
 
export default class HomeTab extends Component {

    fetchFeeds () {
        const data = {
            id : 1,
            jsonrpc : "2.0",
            method : "call",
            params : [
                "database_api",
                "get_discussions_by_created",
                [{ tag : "kr", limit : 20 }]
            ]
        };
        return fetch('https://api.steemit.com', {
            method : 'POST',
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => res.result)
    }

    state = {
        feeds : []
    }

    componentWillMount() {
        this.fetchFeeds().then(feeds => {
            this.setState({
                feeds
            });
        });
    }

    static navigationOptions = {
        tabBarIcon : ({ tintColor }) => (
            <Icon name='ios-home' style={{ color : tintColor }} />
        )
    }

    render() {
        return (
            <Container style={ style.container }>
                <Header style={{ width: '100%' }}>
                    <Left><Icon name='ios-camera' style={{ paddingLeft: 10 }} /></Left>
                    <Body><Text>Instagram</Text></Body>
                    <Right><Icon name='ios-send' style={{ paddingRight: 10 }} /></Right>
                </Header>
                <Content>
                    <View style={{ height: 100 }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7 }}>
                            <Text style={{ fontWeight: 'bold' }}>Stories</Text>

                            <View style={{flexDirection:'row','alignItems':'center'}}>
                                <Icon name="md-play" style={{fontSize:14}}></Icon>
                                <Text style={{fontWeight:'bold'}}> Watch All</Text>
                            </View>
                        </View>

                        <View style={{ flex : 2, marginBottom: 10 }}>
                            <ScrollView 
                                horizontal={true} 
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems: 'center',
                                    paddingStart: 5,
                                    paddingEnd: 5
                                }}>
                                <Thumbnail source={{ uri : "https://steemitimages.com/u/newbijohn/avatar" }} style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} />
                                <Thumbnail source={{ uri : "https://steemitimages.com/u/jacobyu/avatar" }} style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} />
                                <Thumbnail source={{ uri : "https://steemitimages.com/u/blockchainstudio/avatar" }} style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} />
                                <Thumbnail source={{ uri : "https://steemitimages.com/u/gomdory/avatar" }} style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} />
                                <Thumbnail source={{ uri : "https://steemitimages.com/u/bbooaae/avatar" }} style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} />
                                <Thumbnail source={{ uri : "https://steemitimages.com/u/codingman/avatar" }} style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} />
                                <Thumbnail source={{ uri : "https://steemitimages.com/u/bukio/avatar" }} style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} />
                            </ScrollView>
                        </View>
                    </View>                    

                    {
                        this.state.feeds.map(feed => <CardComponent data={ feed } key={ feed.post_id } />)
                    }
                </Content>
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