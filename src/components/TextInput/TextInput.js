import React, {useCallback} from 'react';
import {View, TextInput as RnTextInput} from 'react-native';
import styles from './styles';

function TextInput({
  value,
  prefix,
  suffix,
  style,
  placeholder,
  innerRef,
  onChangeText,
  ...rest
}) {
  const handleChangeText = useCallback(text => {
    onChangeText?.(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      {!!prefix && prefix}
      <RnTextInput
        {...rest}
        style={[styles.textInput, style]}
        placeholder={placeholder}
        ref={innerRef}
        value={value}
        onChangeText={handleChangeText}
      />
      {!!suffix && suffix}
    </View>
  );
}

export default TextInput;
