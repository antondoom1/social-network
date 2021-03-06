import {createPostAC, InitialStateType} from '../../../redux/profile-reducer'
import {MyPosts} from './MyPosts'
import {connect} from 'react-redux'
import {AppStateType} from '../../../redux/redux-store'
import {Dispatch} from 'redux'

type mapStateToPropsType = {
  profilePage: InitialStateType
}

type mapDispatchToPropsType = {
  createPost: (newPostText: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    createPost: (newPostText: string) => dispatch(createPostAC(newPostText))
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)