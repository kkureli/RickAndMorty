import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import {DisplayModeEnum} from '../../types/displayMode.enums';
import ListIcon from '../../assets/svg/ListIcon';
import GridIcon from '../../assets/svg/GridIcon';

type Props = {
  displayMode: DisplayModeEnum;
  setSelectedDisplayMode: Dispatch<SetStateAction<DisplayModeEnum>>;
};

const Header = (props: Props) => {
  const changeDisplayMode = () => {
    if (displayMode === DisplayModeEnum.GRID) {
      setSelectedDisplayMode(DisplayModeEnum.LIST);
    } else {
      setSelectedDisplayMode(DisplayModeEnum.GRID);
    }
  };

  const {displayMode, setSelectedDisplayMode} = props;
  return (
    <View style={styles.header}>
      <TouchableOpacity
        testID={
          displayMode === DisplayModeEnum.GRID
            ? 'gridModeButton'
            : 'listModeButton'
        }
        onPress={changeDisplayMode}>
        {displayMode === DisplayModeEnum.GRID ? <GridIcon /> : <ListIcon />}
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
  },
});
