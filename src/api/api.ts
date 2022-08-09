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
  },
  follow: (userId: number) => {
    return instance
      .post(`follow/${userId}`)
      .then(response => response.data)
  },
  unfollow: (userId: number) => {
    return instance
      .delete(`follow/${userId}`)
      .then(response => response.data)
  },
  getProfile: (userId: string) => {
    console.warn('use profileAPI methode')
    return profileAPI.getProfile(userId)
  }
}

export const profileAPI = {
  getProfile: (userId: string) => {
    return instance
      .get(`profile/` + userId)
      .then(response => response.data)
  },
  getStatus: (userId: string) => {
    return instance
      .get(`profile/status/` + userId)
      .then(response => response.data)
  },
  updateStatus: (status: string) => {
    return instance
      .put(`profile/status/`, {status})
      .then(response => response.data)
  },
  savePhoto: (photoFile: File) => {
    const formData = new FormData()
    formData.append('image', photoFile)
    return instance
      .put(`profile/photo/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => response.data)
  }
}

export const authAPI = {
  me: () => {
    return instance
      .get(`auth/me`)
      .then(response => response.data)
  },
  login: (email: string, password: string, rememberMe: boolean = false) => {
    return instance
      .post(`auth/login`, {email, password, rememberMe})
      .then(response => response.data)
  },
  logout: () => {
    return instance
      .delete(`auth/login`)
      .then(response => response.data)
  }
}

export const securityAPI = {
  getCaptchaUrl: () => {
    return instance
      .get(`security/get-captcha-url`)
      .then(response => response.data)
  }
}