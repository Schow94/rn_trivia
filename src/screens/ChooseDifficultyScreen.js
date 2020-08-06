import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

// If any difficulty, then don't pass in a param
const diffArr = [
  { diff: 'Any Difficulty', code: '' },
  { diff: 'Easy', code: 'easy' },
  { diff: 'Medium', code: 'medium' },
  { diff: 'Hard', code: 'hard' },
];

const ChooseDifficultyScreen = ({ navigation }) => {
  const numQuestions = navigation.getParam('numQuestions');
  const category = navigation.getParam('category');

  const [difficulty, setDifficulty] = useState('');

  const chooseDiff = (val) => {
    setDifficulty(val);
    navigation.navigate('Question', {
      numQuestions: numQuestions,
      category: category,
      difficulty: val,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Choose a category</Text>

      <FlatList
        scrollEnabled={false}
        style={styles.list}
        data={diffArr}
        keyExtractor={(val) => val.diff}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => chooseDiff(item.code)}
              style={styles.btn}
            >
              <Text style={styles.btnText}>{item.diff}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0ae2ff',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },

  titleText: {
    fontSize: 30,
    margin: 10,
  },

  btn: {
    width: 250,
    height: 50,
    backgroundColor: '#d4d4d4',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderColor: '#b5b5b5',
    borderWidth: 1,
  },
  btnText: {
    fontSize: 18,
  },
});

export default ChooseDifficultyScreen;
