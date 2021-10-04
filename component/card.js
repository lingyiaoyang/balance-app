import React from 'react';
import { Card } from 'react-native-shadow-cards';

import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  FlatList,
} from 'react-native';

const card = ({ card }) => {
  return (
    <>
      <View>
        <FlatList
          data={card}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item.count}</Text>
                <Text>{item.name}</Text>
              </View>
            );
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'red',
  },
});

export default card;
