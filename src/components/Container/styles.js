import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 34 : 0,
  },
});
