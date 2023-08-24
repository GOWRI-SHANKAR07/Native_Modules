import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  NativeModules,
  Button,
  StyleSheet,
} from 'react-native';

const App = () => {
  // our custom method
  const {ReactOneCustomMethod} = NativeModules;
  
  const [id, setId] = useState('Press the button to get The ID');

  const getId = () => {
    ReactOneCustomMethod.getPhoneID()
      .then((res) => {
        setId('ID: ' + res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  console.log(id);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.id}>{id}</Text>
      <Button title="Get Id" onPress={getId} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  id: {
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;