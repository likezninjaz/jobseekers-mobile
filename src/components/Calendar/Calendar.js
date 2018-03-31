import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import { NavigationActions } from "react-navigation";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Input,
  InputGroup,
  Item,
  Tab,
  Tabs,
  Footer,
  FooterTab,
  Label
} from "native-base";
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import HomeScreen from "../HomeScreen";

LocaleConfig.locales['ru'] = {
  monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
  monthNamesShort: ['Янв.','Фев.','Март','Апр.','Май','Июнь','Июль','Авг.','Сент.','Окт.','Нояб.','Декаб.'],
  dayNames: ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
  dayNamesShort: ['Пн.','Вт.','Ср.','Чт.','Пт.','Сб.','Вс.']
};
 
LocaleConfig.defaultLocale = 'ru';

export default class CalendarScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
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
            <Title>Календарь</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
        <Calendar
          onDayPress={(day) => {console.log('selected day', day)}}
          monthFormat={'MMMM yyyy'}
          onMonthChange={(month) => {console.log('month changed', month)}}
          firstDay={0}
          onPressArrowLeft={substractMonth => substractMonth()}
          onPressArrowRight={addMonth => addMonth()}
          theme={{
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            monthTextColor: 'blue'
          }}
        />
        </Content>
      </Container>
    );
  }
}
