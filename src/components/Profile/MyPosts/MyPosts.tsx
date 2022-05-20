import React, {ChangeEvent} from 'react'
import s from './MyPosts.module.css'
import {Edit3} from 'react-feather'
import {Post} from './Post/Post'
import {PostType} from '../../../types/entities'
import {InitialStateType} from '../../../redux/profile-reducer'
import {Paper} from '@material-ui/core'

type MyPostsType = {
  changePostText: (text: string) => void
  createPost: () => void
  profilePage: InitialStateType
}

export const MyPosts: React.FC<MyPostsType> = ({changePostText, createPost, profilePage}) => {

  const createPostHandler = () => createPost()

  const changePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    changePostText(e.currentTarget.value)
  }

  const mappedPosts = profilePage.posts.map((el: PostType) => {
    return (
      <Post key={el.id} message={el.message} likesCount={el.likesCount}/>
    )
  })

  return (
    <div className={s.postsBlock}>
      <Paper elevation={2} className={s.createPost}>
        <div className={s.createPostInput}>
          <div className={s.createPostAddButton}>
            <button onClick={createPostHandler}>
              <i><Edit3 className={s.editIco} size={18}/></i>
              Create post
            </button>
          </div>
          <figure className={s.avatarInput}>
            <img src="https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg" alt="avatar"/>
          </figure>
          <textarea
            value={profilePage.newPostText}
            onChange={changePostTextHandler}
            placeholder={'What\'s on your mind?'}/>
        </div>
      </Paper>
      <div className={s.posts}>
        {mappedPosts}
      </div>
    </div>
  )
}


