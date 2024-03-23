# Rick And Morty Characters List App

### Case
https://docs.google.com/document/d/1bRZKUez5dWXD8UsKyON6IeAPNYxk4Ej64wExLUWQUdc/edit

### Project info

The Rick and Morty Character Explorer is a React Native application developed to list and display details of characters from the popular TV show "Rick and Morty." Users can explore various characters, view their details, and favorite them.

### Screenshots

<img src="https://github.com/kkureli/RickAndMorty/assets/33238066/6aafcedd-bb8b-41bd-a356-a3d407b72800"  width="300" height="550" />
<img src="https://github.com/kkureli/RickAndMorty/assets/33238066/3f10bea0-85ec-4e46-b063-2b7cb425083e"  width="300" height="550" />
<img src="https://github.com/kkureli/RickAndMorty/assets/33238066/18faece7-07fb-460d-8202-1c661c260af0"  width="300" height="550" />
<img src="https://github.com/kkureli/RickAndMorty/assets/33238066/d44ae532-b725-44a4-8775-42361766a26b"  width="300" height="550" />


### Installation

In project directory:

1. run `npm install` or `yarn install`
2. `cd ios` && `pod install`
3. `cd ..`
4. `npx react-native run-ios` or `npx react-native run-android`

### Run on Device

- run `yarn android` or `yarn ios` to run on device or emulator

#### Project Structure

- ## `src`: This folder is the main container of all the code.
  - `api`: This folder contains base request function.
  - `context`: This folder contains favorites provider.
  - `assets`: Asset folder to store all images and icons.
  - `components`: Folder to store any common component that use through app
  - `navigation`: Folder to store the navigators.
  - `screens`: Folder that contains all application screens.
  - `views`: Folder that contains all application views.
- ## `__test__`: Folder to store all tests

### App Features

Character List:

- Displays characters with details including image, name, status, species, and favorite status.
- Supports both list and grid view modes for flexible exploration.
- Pagination enables smooth browsing through character entries.
- Provides filter options for searching characters by name or status.
- Allows navigation to the detail page upon tapping a character.

Detail Page:
- Shows detailed information about a character, including name, status, image, species, number of episodes, gender, origin location, last known location, and last seen episode.
- Offers the option to favorite characters for quick access.

### Testing

To run the tests, execute `yarn test` in a terminal opened in the project folder.



