import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import HomeNavigator from './HomeNavigator';

function DrawerNavigator() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
