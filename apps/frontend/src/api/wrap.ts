import { UserType } from '@spikey/frontend/types/models'

export const wrap = () => ({
  createUser: (): UserType => ({}) as UserType,
  updateUser: (): UserType => ({}) as UserType,
  getUsers: (): UserType[] => [] as UserType[],
})
