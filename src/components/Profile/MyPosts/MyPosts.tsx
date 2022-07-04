import React from 'react'
import s from './MyPosts.module.css'
import {Edit3} from 'react-feather'
import {Post} from './Post/Post'
import {PostType} from '../../../types/entities'
import {InitialStateType} from '../../../redux/profile-reducer'
import {Paper} from '@material-ui/core'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {maxLengthCreator, required} from '../../../utils/validators/validators'

type MyPostsType = {
  createPost: (newPostText: string) => void
  profilePage: InitialStateType
}

export const MyPosts: React.FC<MyPostsType> = ({createPost, profilePage}) => {

  const onAddPost = (values: FormDataType) => createPost(values.newPostText)

  const mappedPosts = profilePage.posts.map((el: PostType) => {
    return (
      <Post key={el.id} message={el.message} likesCount={el.likesCount}/>
    )
  })

  return (
    <div className={s.postsBlock}>
      <Paper elevation={2} className={s.createPost}>
        <AddNewPostForm onSubmit={onAddPost}/>
      </Paper>
      <div className={s.posts}>
        {mappedPosts}
      </div>
    </div>
  )
}

type FormDataType = {
  newPostText: string
}

const maxLength10 = maxLengthCreator(10)

const AddNewPost: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form className={s.createPostForm} onSubmit={props.handleSubmit}>
      <div className={s.createPostAddButton}>
        <button>
          <i><Edit3 className={s.editIco} size={18}/></i>
          Create post
        </button>
      </div>
      <figure className={s.avatarInput}>
        <img src="https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg" alt="avatar"/>
      </figure>
      <Field
        name={'newPostText'}
        placeholder={'What\'s on your mind?'}
        component={'textarea'}
        validate={[required, maxLength10]}/>
    </form>
  )
}

const AddNewPostForm = reduxForm<FormDataType>({form: 'ProfileAddNewPostForm'})(AddNewPost)