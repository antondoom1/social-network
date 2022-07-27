import {createPostAC, deletePost, InitialStateType, profileReducer} from './profile-reducer'

let initialState: InitialStateType

beforeEach(() => {
  initialState = {
    posts: [
      {id: '1', message: 'Nu privet', likesCount: 15},
      {id: '2', message: 'Kak dela s Reactom?', likesCount: 20},
      {id: '3', message: 'Message from the past', likesCount: 255}
    ],
    profile: {
      aboutMe: null,
      contacts: {
        facebook: null,
        website: null,
        vk: null,
        twitter: null,
        instagram: null,
        youtube: null,
        github: null,
        mainLink: null
      },
      lookingForAJob: true,
      lookingForAJobDescription: null,
      fullName: '',
      userId: 2,
      photos: {
        small: null,
        large: null
      }
    },
    status: null
  }
})

test('length of posts should be incremented', () => {
  let newState = profileReducer(initialState, createPostAC('test text'))

  expect(newState.posts.length).toBe(4)
})

test('message of new post should be correct', () => {
  let newState = profileReducer(initialState, createPostAC('test text'))

  expect(newState.posts[0].message).toBe('test text')
})

test('after deleting length of messages should be decrement', () => {
  let newState = profileReducer(initialState, deletePost('1'))

  expect(newState.posts.length).toBe(2)
})

test('after deleting length shouldn\'t be decrement if id is incorrect', () => {
  let newState = profileReducer(initialState, deletePost('100'))

  expect(newState.posts.length).toBe(3)
})