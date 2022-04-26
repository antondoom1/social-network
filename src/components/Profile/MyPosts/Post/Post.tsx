import React from 'react'
import s from './Post.module.css'
import {MoreHorizontal, ThumbsUp, MessageSquare,Share2} from 'react-feather'

type PostType = {
  message: string
  likesCount: number
}

export const Post = (props: PostType) => {
  return (
    <div className={s.postContainer}>
      <div className={s.postHeader}>
        <figure>
          <img src="https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg" alt="avatar"/>
        </figure>
        <h4>
          Anton Yakavenka
          <span>22 min ago</span>
        </h4>
        <div>
          <i><MoreHorizontal className={s.MoreHorizontal}/></i>
        </div>
      </div>
      <div className={s.postBody}>
        <p>{props.message}</p>
      </div>
      <div className={s.postFooter}>
        <div className={s.postFooterLikes}>
          <i><ThumbsUp size={16} className={s.thumbsUp}/></i>
          {props.likesCount} Like
        </div>
        <div className={s.postFooterComments}>
          <i><MessageSquare size={17} className={s.messageSquare}/></i>
          <span>22 Comment</span>
        </div>
        <div className={s.postFooterShareButton}>
          <i><Share2 className={s.share2}/></i>
          <span>Share</span>
        </div>
      </div>
    </div>
  )
}

