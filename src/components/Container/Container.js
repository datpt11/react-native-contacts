import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';

function Container({children}) {
  return (
    <ScrollView>
      <View style={styles.container}>{children}</View>
    </ScrollView>
  );
}

export default Container;
