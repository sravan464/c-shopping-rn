import { router } from 'expo-router'

import BigLoading from '../loading/BigLoading'

import { useUserInfo } from '@/hooks'

export default function AuthMustWrapper({ children }) {
  const { userInfo, isVerified, isLoading } = useUserInfo()

  //? Render(s)
  if (isLoading) return <BigLoading />
  if (!isVerified || !userInfo) {
    router.replace('/login')
    return null
  }
  if (isVerified && userInfo) return <>{children}</>
}

