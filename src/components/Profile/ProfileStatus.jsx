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
                        <span className = "cursor_pointer" onClick ={ this.onEditMode.bind(this) }> {this.props.status} </span>
                    </div>
                }
                {this.state.editMode && 
                    <div>
                        <input onMouseLeave ={ this.onCloseEditMode.bind(this) } value = {this.props.status} type="text" autoFocus = "true" />
                    </div>
                }
            </>
        )
    }
  }

export default ProfileStatus;

// const ProfileStatus = (props) => {
//     return (
//         <>
//             <div>
//                 <span> {props.status} </span>
//             </div>
//             <div>
//                 <input value = {props.status} type="text"/>
//             </div>
//         </>
//     )
//   }

// export default ProfileStatus;
