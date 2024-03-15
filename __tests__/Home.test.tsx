import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';

import {NavigationContainer} from '@react-navigation/native';
import HomeView from '../src/view/homeView';

// Mock HttpClient
jest.mock('../src/api/httpclient', () => ({
  Get: jest.fn(() =>
    Promise.resolve({
      results: [{id: 1, name: 'Character 1'}],
      info: {next: null},
    }),
  ),
}));

describe('<HomeView />', () => {
  test('renders loading spinner when loading', async () => {
    const {getByTestId, queryByTestId} = render(
      <NavigationContainer>
        <HomeView />
      </NavigationContainer>,
    );
    const loadingSpinner = getByTestId('loading-spinner');
    expect(loadingSpinner).toBeTruthy();
    // Since HttpClient.Get is mocked, the loading spinner will be removed when loading is false.
    await waitFor(() => expect(queryByTestId('loading-spinner')).toBeNull());
  });

  test('renders character list', async () => {
    const {getByText} = render(
      <NavigationContainer>
        <HomeView />
      </NavigationContainer>,
    );
    // With the HttpClient.Get mock, we check whether a given character is added to the list.
    await waitFor(() => expect(getByText('Character 1')).toBeTruthy());
  });

  test('renders list mode on initial app load', async () => {
    const {queryByTestId} = render(
      <NavigationContainer>
        <HomeView />
      </NavigationContainer>,
    );

    await waitFor(() => {
      expect(queryByTestId('loading-spinner')).toBeNull();
    });

    const listModeButton = queryByTestId('listModeButton');
    expect(listModeButton).toBeTruthy();
  });

  test('renders grid mode view after view mode changed', async () => {
    const {queryByTestId} = render(
      <NavigationContainer>
        <HomeView />
      </NavigationContainer>,
    );

    await waitFor(() => {
      expect(queryByTestId('loading-spinner')).toBeNull();
    });

    const listModeButton = queryByTestId('listModeButton');
    expect(listModeButton).toBeTruthy();

    if (listModeButton) {
      fireEvent.press(listModeButton);

      const gridModeButton = queryByTestId('gridModeButton');
      expect(gridModeButton).toBeTruthy();
    } else {
      throw new Error('listModeButton not found');
    }
  });
});
