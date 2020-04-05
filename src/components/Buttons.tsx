import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import Button from './Button'

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
  },
  separator: {
    height: 8,
  },
})

interface Props {
  data: Array<string>
}

function Separator() {
  return <View style={styles.separator} />
}

export default function Buttons(props: Props) {
  const getOffset = React.useCallback(() => window.scrollY, [])

  return (
    <FlatList
      data={props.data}
      renderItem={({ item }) => <Button label={item} getOffset={getOffset} />}
      keyExtractor={item => item}
      contentContainerStyle={styles.container}
      ItemSeparatorComponent={Separator}
    />
  )
}
