import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import triviaDB from '../api/triviaDB';
import Card from '../components/Card';
import Choices from '../components/Choices';
import axios from 'axios';

// Durstenfield Shuffle - shuffles array randomly for us
const shuffleArr = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
};

// Questions Screen
const QuestionScreen = ({ navigation }) => {
  const numQuestions = navigation.getParam('numQuestions');
  const category = navigation.getParam('category');
  const difficulty = navigation.getParam('difficulty');

  // HOOKS

  // Sets questions array (currently 10 questions at a time)
  const [questions, setQuestions] = useState([]);

  const [errMsg, setErrMsg] = useState('');

  const [choices, setChoices] = useState([]);

  // Keeps track of the correct answer
  const [correct, setCorrect] = useState('');

  // Keep track of right & wrong questions
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);

  const addRight = () => {
    setRight(right + 1);
  };

  const addWrong = () => {
    setWrong(wrong + 1);
  };

  // Keep track of what question we're currently on
  // For 10 questions 0 <= count <= 9
  const [count, setCount] = useState(0);

  // Increment question & set the correct answer for that question
  const incrementCount = () => {
    setCount(count + 1);
  };

  // API Call to get 10 questions & set questions in state
  const getQuestions = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: `https://opentdb.com/api.php?amount=${numQuestions}&category=${9}&difficulty=${difficulty}`,
      });
      console.log(res.data);
      setQuestions(res.data.results);

      setCorrect(questions[count]['correct_answer']);
      setErrMsg('');
    } catch (e) {
      setErrMsg(e);
    }
  };

  // Create arr of right & wrong answers & shuffle
  // Doesn't work for 1st question
  const shuffleChoices = () => {
    if (questions.length > 0) {
      //Create arr of possible answers - random order

      const choiceArr = [
        questions[count].correct_answer,
        ...questions[count].incorrect_answers,
      ];
      //   console.log('CHOICE ARR: ', choiceArr);

      shuffleArr(choiceArr);

      setChoices(choiceArr);
    }
  };

  // Evaluate if user's answer choice is correct or wrong
  const validateAnswer = (clicked) => {
    console.log('CORRECT: ', correct);
    console.log('CLICKED: ', clicked);

    if (clicked === correct) {
      alert('You are CORRECT');
      addRight();
    } else {
      alert('You are WRONG');
      addWrong();
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  useEffect(() => {
    navigation.setParams({ right: right, wrong: wrong });
  }, [count]);

  console.log(
    `https://opentdb.com/api.php?amount=${numQuestions}&category=${category}&difficulty=${difficulty}`
  );

  return (
    <View style={styles.container}>
      <Card question={questions.length > 0 ? questions[count] : 'Loading'} />

      <Choices
        incrementCount={incrementCount}
        validateAnswer={validateAnswer}
        question={questions.length > 0 ? questions[count] : 'Loading'}
        choices={choices}
        shuffleChoices={shuffleChoices}
        count={count}
        setCorrect={setCorrect}
        correct={correct}
        questions={questions}
        navigation={navigation}
        right={right}
        wrong={wrong}
      />
    </View>
  );
};

QuestionScreen.navigationOptions = ({ navigation }) => {
  const params = navigation.state.params || { right: 0, wrong: 0 };
  const { right, wrong } = params;

  console.log('right: ', right, 'wrong: ', wrong);
  return {
    headerStyle: {
      height: 100,
      // backgroundColor: '#fcfcfc',
      borderBottomWidth: 0,
      shadowOpacity: 0,
      elevation: 0,
    },
    headerLeft: () => (
      <View style={styles.header}>
        <Text>
          {right} / {right + wrong}
        </Text>
      </View>
    ),

    headerRight: () => (
      <TouchableOpacity style={styles.nextBtn}>
        <Text style={styles.nextBtnText}>Next Question</Text>
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    margin: 10,
  },
  nextBtn: {
    backgroundColor: '#26b5fc',
    width: 120,
    height: 50,
    borderRadius: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextBtnText: {
    fontSize: 16,
    color: 'white',
  },
});

export default QuestionScreen;
