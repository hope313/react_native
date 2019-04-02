import React from 'react';
import { Container, Header, Content, Footer, Left, Body, Right, Button, Text, FooterTab, Icon, Title, Subtitle, Badge } from 'native-base';

export default class ButtonExample extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Title</Title>
            <Subtitle>SubTitle</Subtitle>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
          <Button style={{marginTop: 12}}>
            <Text>default Button</Text>
          </Button>
          <Button transparent info style={{marginTop: 12}}>
            <Text>Transparent info</Text>
          </Button>
          <Button bordered warning style={{marginTop: 12}}>
            <Text>Outline(bordered) Warning</Text>
          </Button>
          <Button rounded dark style={{marginTop: 12}}>
            <Text>Rounded Dark</Text>
          </Button>
          <Button block style={{marginTop: 12}}>
            <Text>block Primary</Text>
          </Button>
          <Button full success style={{marginTop: 12}}>
            <Text>full Success</Text>
          </Button>
          <Button iconLeft light style={{marginTop: 12}}>
            <Icon name='arrow-back' />
            <Text>iconLeft Text</Text>
          </Button>
          <Button iconRight light small style={{marginTop: 12}}>
            <Text>iconRight Small Text</Text>
            <Icon name='arrow-forward' />
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name='apps' />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name='camera' />
              <Text>Camera</Text>
            </Button>
            <Button badge vertical active>
              <Badge><Text>31</Text></Badge>
              <Icon name='navigate' />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name='person' />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}