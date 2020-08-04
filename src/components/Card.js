import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Card = ({ question, errMsg }) => {
  return (
    <View style={styles.questionContainer}>
      <View style={styles.cardContainer}>
        <Text style={styles.questionText}>
          {errMsg ? errMsg : question.question}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  questionContainer: {
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  questionText: {
    fontSize: 25,
    color: '#616161',
    margin: 20,
  },

  cardContainer: {
    width: '90%',
    height: '90%',
    backgroundColor: '#ffcf57',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Card;
