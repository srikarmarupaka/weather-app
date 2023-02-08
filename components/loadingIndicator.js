import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native'
import React from 'react'

const LoadingIndicator = () => {
  return (
    <SafeAreaView style={styles.loading}>
      <ActivityIndicator size='large'>
        <Text>
            Loading...
        </Text>
    </ActivityIndicator>
    </SafeAreaView>
  )
}

export default LoadingIndicator

const styles = StyleSheet.create({
    loading : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: '100%',
        width: '100%',
        position: 'absolute'
    }
})