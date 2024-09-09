import { Image, StyleSheet, View } from 'react-native'
import Swiper from 'react-native-swiper'

export default function Slider(props) {
  //? Props
  const { data } = props

  //? Render(s)
  if (data?.length === 0) return null

  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} showsPagination activeDotColor="#1D4ED8" dotColor="#E5E7EB">
        {data
          .filter(item => item.isPublic)
          .map((item, index) => (
            <Image
              key={index}
              source={{
                uri: item.image.url,
              }}
              style={styles.image}
            />
          ))}
      </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    borderRadius: 8,
    overflow: 'hidden',
  },
  wrapper: {
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

