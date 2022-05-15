import React from 'react'
import {v1} from 'uuid'
import {UsersPropsType} from './UsersContainer'

export const Users: React.FC<UsersPropsType> = ({usersPage, follow, unfollow, setUsers}) => {

  if (usersPage.users.length === 0) {
    setUsers([
      {
        id: v1(),
        photoUrl: 'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg',
        followed: true,
        fullName: 'Anton',
        status: 'Just learning',
        location: {city: 'Minsk', country: 'Belarus'}
      },
      {
        id: v1(),
        photoUrl: '',
        followed: true,
        fullName: 'Dasha',
        status: 'Ya micro ecolog',
        location: {city: 'Moscow', country: 'Russia'}
      },
      {
        id: v1(),
        photoUrl: '',
        followed: false,
        fullName: 'Dima',
        status: 'Istinnyi zadrot v tanki',
        location: {city: 'Kiev', country: 'Ukraine'}
      }
    ])
  }

  return (
    <div>
      {
        usersPage.users.map(u => {
          return (
            <div key={u.id}>
              <span>
                <div>
                  <img style={{width: '40px'}} src={u.photoUrl} alt="avatar"/>
                </div>
                <div>
                  {
                    u.followed
                      ? <button onClick={() => unfollow(u.id)}>Unfollow</button>
                      : <button onClick={() => follow(u.id)}>Follow</button>
                  }
                </div>
              </span>
              <span>
                <span>
                  <div>{u.fullName}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>{u.location.country}</div>
                  <div>{u.location.city}</div>
                </span>
              </span>
            </div>
          )
        })
      }
    </div>
  )
}

