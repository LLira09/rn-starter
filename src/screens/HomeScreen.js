import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello There!</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title='Go to Components Demo'
      />
      <Button
        title='Go to List Demo'
        onPress={() => navigation.navigate('List')}
      ></Button>
      <Button
        title='Go to Image Screen'
        onPress={() => navigation.navigate('Image')}
      ></Button>
      <Button
        title='Go to Counter Demo'
        onPress={() => navigation.navigate('Counter')}
      ></Button>
      <Button
        title='Go to Color Demo'
        onPress={() => navigation.navigate('Color')}
      ></Button>
      <Button
        title='Go to Square Demo'
        onPress={() => navigation.navigate('Square')}
      ></Button>
      <Button
        title='Go to Text Demo'
        onPress={() => navigation.navigate('Text')}
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

export default HomeScreen
