import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import SearchInput from '../src/components/common/searchInput';

describe('SearchInput Component', () => {
  it('should call handleChangeDebounce when text is changed', async () => {
    const handleChangeDebounce = jest.fn();
    const {getByPlaceholderText} = render(
      <SearchInput
        value=""
        onChangeText={() => {}}
        handleChangeDebounce={handleChangeDebounce}
      />,
    );

    const searchInput = getByPlaceholderText('Search by name...');
    fireEvent.changeText(searchInput, 'Rick');

    // wait for debounceMiliSeconds
    await new Promise(resolve => setTimeout(resolve, 600));

    // check if handleChangeDebounce function is called
    expect(handleChangeDebounce).toHaveBeenCalledTimes(1);
    expect(handleChangeDebounce).toHaveBeenCalledWith('Rick');
  });
});
