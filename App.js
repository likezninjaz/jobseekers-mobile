import React from 'react';
import { FlatList, Image, StyleSheet, TouchableHighlight, ActivityIndicator, Text, View  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
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
          <ActivityIndicator style={styles.preloader} size="large" color="#4871ff"/>
        </View>
      )
    }

    return(
      <View style={styles.body}>
        <FlatList
          data={this.state.dataSource}
          keyExtractor={(item, index) => index}
          renderItem={({item, separators}) => (
            <View style={styles.tableItem}>
              <Image
                style={styles.tableItemImage}
                source={{uri: item.image}}
              />
              <View style={styles.tableItemInfo}>
                <Text style={styles.tableItemName}>
                  {item.name} {item.surname}
                </Text>
                <Text style={styles.tableItemSpecialization}>
                  {item.specialization.length ? item.specialization : 'Специализация не выбрана'}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center'
  },
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
