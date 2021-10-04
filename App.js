import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  FlatList,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
//component
import Card from './component/card';

export default function App() {
  const [balance, setBalance] = useState(0);
  const [overBalance, useOverBalance] = useState(0);
  const [card, setCard] = useState([]);

  const newList = card.map((value) => {
    return value.count;
  });
  const newListt = newList.reduce((a, b) => a + b, 0);
  console.log(newListt);
  // useOverBalance(() => overBalance + newListt);
  // useEffect(() => {}, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (value) => {
    console.log(value);
    const newCard = [
      { count: parseInt(value.count), name: value.name },
      ...card,
    ];
    setBalance(balance + parseInt(value.balance));
    setCard(newCard);
  };
  // console.log(card);

  return (
    <View>
      <Text style={styles.title}>Balance App</Text>
      <Text style={styles.label}>balance:</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='(if no just dont type)'
          />
        )}
        name='balance'
        defaultValue=''
      />
      {errors.firstName && <Text>This is required.</Text>}
      <Text style={styles.label}>count:</Text>

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='(if no just dont type)'
          />
        )}
        name='count'
        defaultValue=''
      />
      <Text style={styles.label}>thing:</Text>

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='(if no just dont tpye)'
          />
        )}
        name='name'
        defaultValue=''
      />

      <Button
        title='Submit'
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      />
      <Text style={newListt > balance ? styles.red : styles.green}>
        {balance}
      </Text>
      <Card card={card} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 70,
  },
  label: {
    // textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '10px',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  balance: {
    textAlign: 'center',
    fontSize: 60,
  },
  red: {
    color: 'red',
    textAlign: 'center',
    fontSize: 60,
  },
  green: {
    color: 'green',
    textAlign: 'center',
    fontSize: 60,
  },
});
