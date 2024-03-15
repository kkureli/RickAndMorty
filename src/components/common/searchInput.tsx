import {StyleSheet, TextInput} from 'react-native';
import React, {useCallback} from 'react';
import _ from 'lodash';

export type InputProps = {
  debounceMiliSeconds?: number;
  value: string;
  onChangeText: (value: any, event?: any) => void;
  handleChangeDebounce: (value: any, event?: any) => void;
};

const SearchInput = (props: InputProps) => {
  const {
    debounceMiliSeconds = 600,
    onChangeText,
    handleChangeDebounce,
    value,
  } = props;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandler = useCallback(
    _.debounce(handleChangeDebounce, debounceMiliSeconds),
    [handleChangeDebounce],
  );
  return (
    <TextInput
      testID="search-input"
      style={styles.textInput}
      value={value}
      placeholder="Search by name..."
      onChangeText={text => {
        onChangeText(text);
        debouncedHandler(text);
      }}
    />
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    marginRight: 8,
    padding: 4,
    borderRadius: 8,
    borderColor: 'silver',
    borderWidth: 1,
    alignSelf: 'center',
  },
});
