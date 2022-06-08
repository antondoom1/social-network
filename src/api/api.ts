import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'fb079428-865b-4dce-9f17-92639917cedb'
  }
})

export const usersAPI = {
  getUsers: (currentPage: number = 1, pageSize: number = 7) => {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  }
}

export const followUnfollowAPI = {
  follow: (userId: number) => {
    return instance
      .post(`follow/${userId}`)
      .then(response => response.data)
  },
  unfollow: (userId: number) => {
    return instance
      .delete(`follow/${userId}`)
      .then(response => response.data)
  }
}

export const authAPI = {
  auth: () => {
    return instance
      .get(`auth/me`)
      .then(response => response.data)
  }
}

export const setUserAPI = {
  setUser: (userId: string) => {
    return instance
      .get(`profile/` + userId)
      .then(response => response.data)
  }
}