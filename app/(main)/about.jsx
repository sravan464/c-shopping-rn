import { useLocalSearchParams, useRouter } from 'expo-router'
import { Text, View } from 'react-native'

export default function AboutScreen() {
  const router = useRouter()
  const params = useLocalSearchParams()

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text
        onPress={() => {
          router.setParams({ name: 'Updated' })
        }}
      >
        Update the title
      </Text>
    </View>
  )
}

