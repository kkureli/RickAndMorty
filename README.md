# Rick And Mortyh Characters List App

### Project info

The Rick and Morty Character Explorer is a React Native application developed to list and display details of characters from the popular TV show "Rick and Morty." Users can explore various characters, view their details, and favorite them.

#### ScreenShots - Native App

<img src="https://github.com/kkureli/RickAndMorty/assets/33238066/b1b89f93-a259-48fc-80c2-a15c67969232"  width="300" height="450" />

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
  - `data`: Folder to store any kind of constant.
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



