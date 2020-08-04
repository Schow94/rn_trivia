import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const nums = ['5', '10', '15', '20', '30', '50'];

const ChooseQuestionScreen = ({ navigation }) => {
  const [numQuestions, setNumQuestions] = useState();

  const chooseNum = (val) => {
    setNumQuestions(val);
    navigation.navigate('ChooseCat', { numQuestions: val });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>How many questions?</Text>

      <FlatList
        scrollEnabled={false}
        style={styles.list}
        data={nums}
        keyExtractor={(num) => num}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => chooseNum(item)}
              style={styles.btn}
            >
              <Text style={styles.btnText}>{item}</Text>
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
  list: {
    // justifyContent: 'center',
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
    fontSize: 20,
  },
});

export default ChooseQuestionScreen;
