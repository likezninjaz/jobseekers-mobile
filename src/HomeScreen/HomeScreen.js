import React from "react";
import { 
  StatusBar,
  StyleSheet,
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
    return fetch('http://jobseekers.picom.su/profile/list?access-token=.P31mFqltVsAUAJY8Fs_BsxpELEYSOyGa0xKOJUsjm0ISzLLOlNliDab2FJ-0noHn&page=1')
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

const styles = StyleSheet.create({
  preloader: {
    alignSelf: 'center'
  },
  tableItem: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: '#e9ecf3',
    borderBottomWidth: 1
  },
  tableItemImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  tableItemInfo: {
    marginLeft: 10
  },
  tableItemName: {
    fontSize: 20
  },
  tableItemSpecialization: {
    fontSize: 15
  }
});
