import React, {ChangeEvent} from 'react'
import s from './MyPosts.module.css'
import {Edit3} from 'react-feather'
import {Post} from './Post/Post'
import {PostType} from '../../../redux/state'

type MyPostsType = {
  newPostText: string
  postsData: Array<PostType>
  createPost: () => void
  changePostText: (newPostMessage: string) => void
}

export const MyPosts: React.FC<MyPostsType> = ({newPostText, postsData, createPost, changePostText}) => {

  const createPostHandler = () => createPost()

  const changePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    changePostText(e.currentTarget.value)
  }

  const mappedPosts = postsData.map((el: PostType) => {
    return (
      <Post key={el.id} message={el.message} likesCount={el.likesCount}/>
    )
  })

  return (
    <div className={s.postsBlock}>
      <div className={s.createPost}>
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
            value={newPostText}
            onChange={changePostTextHandler}
            placeholder={'What\'s on your mind?'}/>
        </div>
      </div>
      <div className={s.posts}>
        {mappedPosts}
      </div>
    </div>
  )
}


