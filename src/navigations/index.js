import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

function AppNavContainer() {
  let isLogin = true;
  return (
    <NavigationContainer>
      {isLogin === true ? <AuthNavigator /> : <DrawerNavigator />}
    </NavigationContainer>
  );
}

export default AppNavContainer;
