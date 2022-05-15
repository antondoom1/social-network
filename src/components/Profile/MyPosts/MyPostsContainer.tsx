import {changePostTextAC, createPostAC, InitialStateType} from '../../../redux/profile-reducer'
import {MyPosts} from './MyPosts'
import {connect} from 'react-redux'
import {AppStateType} from '../../../redux/redux-store'
import {Dispatch} from 'redux'

type mapStateToPropsType = {
  profilePage: InitialStateType
}

type mapDispatchToPropsType = {
  changePostText: (text: string) => void
  createPost: () => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    changePostText: (text: string) => dispatch(changePostTextAC(text)),
    createPost: () => dispatch(createPostAC())
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)