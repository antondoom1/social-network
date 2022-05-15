export type MessageType = {
  id: string
  message: string
}
export type DialogType = {
  id: string
  name: string
}
export type PostType = {
  id: string
  message: string
  likesCount: number
}

type LocationType = {
  city: string
  country: string
}

export type UserType = {
  id: string
  photoUrl: string
  followed: boolean
  fullName: string
  status: string
  location: LocationType
}

