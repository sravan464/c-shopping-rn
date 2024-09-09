import { Text, View } from 'react-native'

export default function DisplayError(props) {
  //? Props
  const { errors } = props

  //? Render(s)
  return (
    <View style={{ minHeight: 29 }}>
      {!!errors && (
        <View>
          <View style={{ marginTop: 1.5, flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Text style={{ color: '#ff5252' }}>{errors?.message}</Text>
          </View>
        </View>
      )}
    </View>
  )
}

