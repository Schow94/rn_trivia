import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const Choices = ({
  choices,
  validateAnswer,
  incrementCount,
  shuffleChoices,
  question,
  setCorrect,
  correct,
  count,
  questions,
  navigation,
  right,
  wrong,
  clicked,
  setClicked,
  clickedVal,
  setClickedVal,
  nextQuestion,
}) => {
  // Have to call shuffleChoices fxn each time Choices component is re-rendered to make sure data
  // is up to date
  useEffect(() => shuffleChoices(), [question]);

  // setCorrect(questions[count]['correct_answer']);
  useEffect(() => setCorrect(question['correct_answer']), [question]);

  const handleClick = (val) => {
    // Keep track if user selected a choice
    setClicked(true);
    setClickedVal(val);

    if (count === questions.length - 1) {
      navigation.navigate('GameOver', { right: right, wrong: wrong });
    } else {
      // There will be a "Next Question" btn to increment and load the next question
      // incrementCount();

      validateAnswer(val);
    }
  };

  // console.log('QUESTION: ', question['correct_answer']);
  console.log('CORRECT: ', correct);
  // console.log('count: ', count, 'questions.length: ', questions.length);

  return (
    <View style={styles.bottom}>
      <View style={styles.choicesContainer}>
        {choices.map((val) => {
          return (
            <TouchableOpacity
              style={
                // clicked
                //   ? val === correct
                //     ? styles.correct
                //       ? clickedVal === val
                //       : styles.wrong
                //     : styles.choice
                //   : styles.choice

                clicked
                  ? clickedVal === val && val !== correct
                    ? styles.wrong
                    : val === correct
                    ? styles.correct
                    : styles.choice
                  : styles.choice
              }
              key={val}
              onPress={() => handleClick(val)}
            >
              <Text style={styles.choiceText}>{val}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {clicked ? (
        <View style={styles.judgeContainer}>
          {clicked ? (
            clickedVal === correct ? (
              <Text style={styles.correctText}>CORRECT</Text>
            ) : (
              <Text style={styles.wrongText}>WRONG</Text>
            )
          ) : null}
          {clicked ? (
            <TouchableOpacity
              style={
                clickedVal === correct ? styles.correctBtn : styles.wrongBtn
              }
              onPress={() => nextQuestion()}
            >
              <Text style={styles.nextBtnText}>Next Question</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    width: '100%',
    height: '60%',
    backgroundColor: '#d9d9d9',
    // borderColor: 'green',
    // borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  choicesContainer: {
    width: '100%',
    height: '80%',
    // borderColor: 'blue',
    // borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 20,
  },

  choice: {
    width: '80%',
    height: '15%',
    backgroundColor: '#57beff',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: '1.5%',
    marginBottom: '1.5%',
    borderRadius: 5,
  },
  correct: {
    width: '80%',
    height: '20%',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: '1.5%',
    marginBottom: '1.5%',
    borderRadius: 5,
  },
  wrong: {
    width: '80%',
    height: '20%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: '1.5%',
    marginBottom: '1.5%',
    borderRadius: 5,
  },

  choiceText: {
    color: 'white',
    paddingLeft: 20,
    fontSize: 18,
  },
  // nextBtn: {
  //   backgroundColor: '#26b5fc',
  //   width: 120,
  //   height: 50,
  //   borderRadius: 5,
  //   marginTop: 10,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  nextBtnText: {
    fontSize: 16,
    color: 'white',
  },
  judgeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // borderWidth: 2,
    // borderColor: 'red',
    width: '100%',
    height: '20%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  correctText: {
    fontSize: 30,
    color: 'green',
  },
  wrongText: {
    fontSize: 30,
    color: 'red',
  },
  correctBtn: {
    backgroundColor: 'green',
    width: 120,
    height: 50,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  wrongBtn: {
    backgroundColor: 'red',
    width: 120,
    height: 50,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
});

export default Choices;
