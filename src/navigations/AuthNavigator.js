import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';

function AuthNavigator() {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;
