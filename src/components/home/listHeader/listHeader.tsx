import {StyleSheet, View} from 'react-native';
import React from 'react';
import Title from './homeTitle';
import SeeMore from './seeMore';
import SearchInput, {InputProps} from '../../common/searchInput';
import StatusOptions from '../statusOptions';
import {StatusEnum} from '../../../types/status.type';

type Props = {
  inputProps: InputProps;
  statusProps: {
    selectedStatus: keyof typeof StatusEnum | null;
    setSelectedStatus: React.Dispatch<
      React.SetStateAction<keyof typeof StatusEnum | null>
    >;
  };
};

const ListHeader = (props: Props) => {
  const {inputProps, statusProps} = props;
  return (
    <>
      <View style={styles.listHeaderFilters}>
        <SearchInput {...inputProps} />
        <StatusOptions {...statusProps} />
      </View>
      <View style={styles.container}>
        <Title />
        <SeeMore />
      </View>
    </>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  listHeaderFilters: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});
