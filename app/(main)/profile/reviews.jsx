import { FlashList } from '@shopify/flash-list'
import { Stack } from 'expo-router'
import { useState } from 'react'
import { View } from 'react-native'

import { EmptyReviewsList, ReviewCard, ReviewSkeleton, ShowWrapper } from '@/components'
import { useGetReviewsQuery } from '@/services'

const ReviewsScreen = () => {
  //? Assets
  const [page, setPage] = useState(1)

  //*   Get Reviews
  const { data, hasNextPage, isSuccess, isFetching, error, isError, refetch, originalArgs } =
    useGetReviewsQuery(
      {
        pageSize: 5,
        page,
      },
      {
        selectFromResult: ({ data, ...args }) => {
          return {
            hasNextPage: data?.data?.pagination?.hasNextPage ?? false,
            data,
            ...args,
          }
        },
      }
    )

  //? Handlers
  const onEndReachedThreshold = () => {
    if (!hasNextPage) return
    setPage(Number(page) + 1)
  }

  //? Render(s)
  return (
    <>
      <Stack.Screen
        options={{
          title: 'My Reviews',
          headerBackTitleVisible: false,
        }}
      />
      <View className="bg-white">
        <ShowWrapper
          error={error}
          isError={isError}
          refetch={refetch}
          isFetching={isFetching}
          isSuccess={isSuccess}
          dataLength={data ? data?.data?.reviewsLength : 0}
          emptyComponent={<EmptyReviewsList />}
          loadingComponent={<ReviewSkeleton />}
          originalArgs={originalArgs}
        >
          <View className="px-4 py-3 space-y-3 h-full">
            <FlashList
              data={data?.data?.reviews}
              renderItem={({ item, index }) => <ReviewCard key={item._id} item={item} />}
              onEndReached={onEndReachedThreshold}
              onEndReachedThreshold={0}
              estimatedItemSize={200}
            />
          </View>
        </ShowWrapper>
      </View>
    </>
  )
}

export default ReviewsScreen

