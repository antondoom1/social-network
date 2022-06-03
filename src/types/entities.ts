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

// type LocationType = {
//   city: string
//   country: string
// }

// export type UserType = {
//   id: string
//   photoUrl: string
//   followed: boolean
//   fullName: string
//   status: string
//   location: LocationType
// }

type PhotosType = {
  small: string | null
  large: string | null
}

export type UserType = {
  name: string | null
  id: number
  uniqueUrlName: string | null
  photos: PhotosType,
  status: string | null,
  followed: boolean
}

type ProfileContactsType = {
  'facebook': string | null
  'website': string | null
  'vk': string | null
  'twitter': string | null
  'instagram': string | null
  'youtube': string | null
  'github': string | null
  'mainLink': string | null
}

export type ProfileType = {
  aboutMe: string | null
  contacts: ProfileContactsType
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  fullName: string | null
  userId: number
  photos: PhotosType
}