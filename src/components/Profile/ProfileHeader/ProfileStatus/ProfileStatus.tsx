import React from 'react'

class ProfileStatus extends React.Component<any, any> {
  state = {
    editMode: false
  }

  activateEditMode() {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode() {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <div>
        {
          !this.state.editMode
            ? <span onDoubleClick={this.activateEditMode.bind(this)}>hello</span>
            : <input autoFocus onBlur={this.deactivateEditMode.bind(this)} />
        }
      </div>
    )
  }
}

export default ProfileStatus