import { Text, View } from 'react-native'

import FreeShippingSvg from './svgs/free-shipping.svg'

export default function FreeShipping() {
  return (
    <View className="py-5 bg-gray-100 px-4">
      <View className="flex flex-row justify-between bg-white border border-gray-300 rounded-lg">
        <View className="p-3">
          <Text>Free Shipping</Text>
          <Text className="mt-2 text-xs text-gray-500 lg:text-sm">Order quantity exceeds 50,000</Text>
        </View>
        <FreeShippingSvg className="w-32 h-20 px-4" />
      </View>
    </View>
  )
}

