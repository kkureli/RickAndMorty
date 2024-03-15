import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {StatusArray, StatusEnum} from '../../types/status.type';

type Props = {
  selectedStatus: keyof typeof StatusEnum | null;
  setSelectedStatus: (value: keyof typeof StatusEnum | null) => void;
};

const StatusOptions = (props: Props) => {
  const {selectedStatus, setSelectedStatus} = props;
  const statusArray: StatusArray = ['ALIVE', 'DEAD', 'UNKNOWN'];

  return (
    <View style={styles.container}>
      {statusArray.map(status => {
        const isSelected = selectedStatus === status;
        return (
          <TouchableOpacity
            key={status}
            onPress={() => setSelectedStatus(isSelected ? null : status)}
            style={[styles.statusOption, isSelected && styles.selectedOption]}>
            <Text style={[styles.text, isSelected && styles.selectedText]}>
              {status}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default StatusOptions;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'Mulish',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 15,
    letterSpacing: 0.02,
    textAlign: 'left',
    color: '#110E47',
  },
  selectedText: {
    fontWeight: 'bold',
  },
  statusOption: {
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 8,
    paddingHorizontal: 4,
    marginHorizontal: 3,
    paddingVertical: 2,
  },
  selectedOption: {
    backgroundColor: '#9FF64C',
  },
});
