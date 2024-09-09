import { Text, View } from 'react-native'

import OrderEmpty from '../svgs/order-empty'

export default function EmptyCommentsList() {
  return (
    <View className="py-20">
      <OrderEmpty className="mx-auto h-52 w-52" />

      <Text className="text-center">No comments yet</Text>
    </View>
  )
}

