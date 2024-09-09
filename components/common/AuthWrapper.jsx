import SigninPromoRenderer from '../renderer/SigninPromoRenderer'

import { useUserInfo } from '@/hooks'

export default function AuthWrapper({ children }) {
  const { userInfo, isVerified, isLoading } = useUserInfo()

  return (
    <>{isLoading ? null : !isVerified || !userInfo ? <SigninPromoRenderer /> : <>{children}</>}</>
  )
}

