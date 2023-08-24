import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ModuleScreen from './screens/ModuleScreen';
import PackageScreen from './screens/PackageScreen';

function App() {
  return (
    <View style={styles.container}>
      <PackageScreen />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})