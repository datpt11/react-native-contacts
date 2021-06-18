import React from 'react';
import {Platform, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Container from '../../components/Container/Container';
import TextInput from '../../components/TextInput/TextInput';

const Login = () => {
  return (
    <Container>
      <Text>Hello from Login</Text>
      <TextInput
        prefix={
          <Icon
            name={
              Platform.OS === 'ios' ? 'ios-add-circle-sharp' : 'md-add-circle'
            }
          />
        }
        suffix={
          <Icon
            name={
              Platform.OS === 'ios'
                ? 'ios-bookmarks-sharp'
                : 'md-bookmark-sharp'
            }
          />
        }
      />
    </Container>
  );
};

export default Login;
