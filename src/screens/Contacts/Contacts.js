import React from 'react';
import {Button, Text} from 'react-native';
import Container from '../../components/Container/Container';

const Contacts = ({navigation}) => {
  console.log('====================================');
  console.log(navigation);
  console.log('====================================');
  const handleClick = () => {
    navigation.navigate('Contact Detail', {
      id: 43,
    });
  };

  return (
    <Container>
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({title: 'Updated!'})}
      />
      <Text>Hello from Contacts</Text>
      <Button title="Go to Detail" onPress={handleClick} />
    </Container>
  );
};

export default Contacts;
