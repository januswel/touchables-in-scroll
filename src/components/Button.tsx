import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 8,
  },
})

interface Props {
  label: string
}

export default function Button(props: Props) {
  const onPress = React.useCallback(() => {
    alert(props.label)
  }, [props])

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{props.label}</Text>
    </TouchableOpacity>
  )
}
