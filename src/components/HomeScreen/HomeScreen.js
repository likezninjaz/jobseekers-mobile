import React from "react";
import {path, token} from "../../config/Config";

import styles from './styles';

import { 
  StatusBar,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image
} from "react-native";
import {
  Button,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
} from "native-base";

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount(){
    return fetch(`${path}/profile/list?${token}`)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={styles.body}>
          <ActivityIndicator
            style={styles.preloader}
            size="large"
            color="#4871ff" />
        </View>
      )
    }
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Соискатели</Title>
          </Body>
          <Right />
        </Header>
        <FlatList
          data={this.state.dataSource}
          keyExtractor={(item, index) => index}
          renderItem={({item, separators}) => (
            <View style={styles.tableItem}>
              <Image
                style={styles.tableItemImage}
                source={{uri: item.image}} />
              <View style={styles.tableItemInfo}>
                <Text style={styles.tableItemName}>
                  {item.name} {item.surname}
                </Text>
                <Text style={styles.tableItemSpecialization}>
                  {item.specialization.length ? item.specialization[0].position : 'Специализация не выбрана'}
                </Text>
              </View>
            </View>
          )}
        />
      </Container>
    );
  }
}
