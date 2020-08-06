import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import * as SplashScreen from 'expo-splash-screen';

import SplashScreen from './src/screens/SplashScreen';
import QuestionScreen from './src/screens/QuestionScreen';
import GameOverScreen from './src/screens/GameOverScreen';
import ModeScreen from './src/screens/GetStartedScreen';
import ChooseQuestionScreen from './src/screens/ChooseQuestionScreen';
import GetStartedScreen from './src/screens/GetStartedScreen';
import ChooseCatScreen from './src/screens/ChooseCatScreen';
import ChooseDifficultyScreen from './src/screens/ChooseDifficultyScreen';
// import ReviewQuestionsScreen from './src/screens/ReviewQuestionsScreen';

const navigator = createStackNavigator(
  {
    Question: QuestionScreen,
    GameOver: GameOverScreen,
    Mode: ModeScreen,
    GetStarted: GetStartedScreen,
    ChooseQuestion: ChooseQuestionScreen,
    ChooseCat: ChooseCatScreen,
    ChooseDifficulty: ChooseDifficultyScreen,
    // ReviewQuestions: ReviewQuestionsScreen,
    // Splash: SplashScreen,
  },
  {
    initialRouteName: 'GetStarted',
    defaultNavigationOptions: {
      title: 'Trivia',
    },
  }
);

// const App = () => {
//   return (
//     <View>
//       <Text>SplashScreen</Text>
//     </View>
//   );
// };

// const RootNavigator = createSwitchNavigator(
//   {
//     App: App,
//   },
//   { initialRouteName: 'Splash' }
// );

const styles = StyleSheet.create({});

export default createAppContainer(navigator);
