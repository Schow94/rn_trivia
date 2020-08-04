import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import QuestionScreen from './src/screens/QuestionScreen';
import GameOverScreen from './src/screens/GameOverScreen';
import ModeScreen from './src/screens/GetStartedScreen';
import ChooseQuestionScreen from './src/screens/ChooseQuestionScreen';
import GetStartedScreen from './src/screens/GetStartedScreen';
import ChooseCatScreen from './src/screens/ChooseCatScreen';
import ChooseDifficultyScreen from './src/screens/ChooseDifficultyScreen';

const navigator = createStackNavigator(
  {
    Question: QuestionScreen,
    GameOver: GameOverScreen,
    Mode: ModeScreen,
    GetStarted: GetStartedScreen,
    ChooseQuestion: ChooseQuestionScreen,
    ChooseCat: ChooseCatScreen,
    ChooseDifficulty: ChooseDifficultyScreen,
  },
  {
    initialRouteName: 'GetStarted',
    defaultNavigationOptions: {
      title: 'Trivia',
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return <App />;
};
