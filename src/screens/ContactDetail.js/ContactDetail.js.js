import React from 'react';
import {Text, View, Button} from 'react-native';

const ContactDetail = ({route, navigation}) => {
  const { id } = route.params;
  
  return (
    <View>
      <Text onPress={() => navigation.setParams({
        id: id + 1
      })}>Hello from ContactDetail {id && id}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Contact Detail')}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.popToTop()}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ContactDetail;
