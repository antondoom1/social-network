import React, {ChangeEvent, useEffect, useState} from 'react'

type ProfileStatusPropsType = {
  status: string | null
  updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusPropsType> = (props) => {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status as string)
  }
  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>

      {
        !editMode &&
        <span onDoubleClick={activateEditMode}>
                {props.status || <span>Change status...</span>}
        </span>
      }

      {
        editMode &&
        <input autoFocus
               onChange={onStatusChange}
               value={status as string}
               onBlur={deactivateEditMode}/>
      }

    </div>
  )
}