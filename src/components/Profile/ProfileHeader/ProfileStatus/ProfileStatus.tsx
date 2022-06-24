import React, {ChangeEvent} from 'react'

type ProfileStatusPropsType = {
  status: string | null
  updateStatus: (status: string) => void
}

type ProfileStatusStateType = {
  editMode: boolean
  status: string | null
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status as string)
  }

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<ProfileStatusStateType>) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div>
        {
          !this.state.editMode
            ? <span onDoubleClick={this.activateEditMode}>
                {this.props.status || <span>Change status...</span>}
              </span>
            : <input autoFocus
                     onChange={this.onStatusChange}
                     value={this.state.status as string}
                     onBlur={this.deactivateEditMode}/>
        }
      </div>
    )
  }
}

export default ProfileStatus