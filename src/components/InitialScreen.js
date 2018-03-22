import React from 'react'
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native'

import colors from '../lib/colors'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.nerd,
    flex: 1,
    justifyContent: 'center'
  }
})

const InitialScreen = () => (
  <View style={styles.container}>
    <ActivityIndicator color='white' />
    <Text>
      tuguldur
    </Text>
  </View>
)

export default InitialScreen
