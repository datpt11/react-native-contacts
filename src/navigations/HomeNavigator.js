import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ContactDetail from '../screens/ContactDetail.js/ContactDetail.js';
import Contacts from '../screens/Contacts/Contacts';
import CreateContact from '../screens/CreateContact/CreateContact.js';
import Settings from '../screens/Settings/Settings.js';

function HomeNavigator() {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName="Contacts">
      <HomeStack.Screen name="Contacts" component={Contacts} />
      <HomeStack.Screen name="Contact Detail" component={ContactDetail} />
      <HomeStack.Screen name="Create Contact" component={CreateContact} />
      <HomeStack.Screen name="Settings" component={Settings} />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
