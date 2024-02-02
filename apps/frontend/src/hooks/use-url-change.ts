import { useEffect } from 'react'
import { useNavigation } from '@spikey/frontend/hooks/use-navigation'

export const useUrlChange = (onNavigationChange?: () => void) => {
  const { pathname } = useNavigation()
  useEffect(() => {
    onNavigationChange?.()
  }, [onNavigationChange, pathname])
}
