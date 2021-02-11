import React from 'react';
import '../../style/App.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    onEditMode() {
        // console.log(this.state.editMode); // false
        this.setState({
            editMode: true
        })
        // console.log(this.state.editMode); // false, setState is async
    }

    onCloseEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode && 
                    <div>
                        <span className = "cursor_pointer" onClick ={ this.onEditMode.bind(this) }> 
                            {this.props.status} 
                        </span>
                    </div>
                }
                {this.state.editMode && 
                    <div>
                        <input onMouseLeave ={ this.onCloseEditMode.bind(this) } 
                        value = {this.props.status} 
                        type="text" 
                        autoFocus = "true" />
                    </div>
                }
            </>
        )
    }
  }

const ProfileStatusHook = (props) => {

let status = 'ongoing';

let [editMode, onEditMode] = React.useState(false);
let [statusLocalState, onEditStatus] = React.useState(props.status || status);

React.useEffect(() => {
    // editMode === false ? editMode = true : editMode = false;
}, [editMode, statusLocalState, props.status])

let  activateMode = () => {
    onEditMode(true);
}

let  deActivateMode = () => {
    onEditMode(false);
    props.upDateStatus(statusLocalState);
}

let onStatusChange = (e) => {
    onEditStatus(e.currentTarget.value);
}

return (
    <>
            <div>
                <span className = "cursor_pointer" onClick ={ activateMode }>
                     { props.status || status } 
                </span>
            </div>
        {editMode && 
            <div>
                <input 
                onChange = { onStatusChange }
                onBlur ={ deActivateMode } 
                value = { statusLocalState } 
                type="text" 
                autoFocus = {true} />
            </div>
        }
    </>
)
}

export default ProfileStatus;

export {ProfileStatusHook};



