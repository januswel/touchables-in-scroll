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
  getOffset: () => number
  threshold: number
}

export default function Button(props: Props) {
  const n = React.useRef(0)
  const onPressIn = React.useCallback(() => {
    n.current = props.getOffset()
  }, [props])
  const onPressOut = React.useCallback(() => {
    const delta = Math.abs(props.getOffset() - n.current)
    if (props.threshold < delta) {
      return
    }
    alert(props.label)
  }, [props])

  return (
    <TouchableOpacity onPressIn={onPressIn} onPressOut={onPressOut} delayPressOut={100} style={styles.container}>
      <Text>{props.label}</Text>
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  threshold: 16,
}
