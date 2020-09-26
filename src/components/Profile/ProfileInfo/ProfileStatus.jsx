import React from "react";

export default class ProfileStatus extends React.Component{
    state = {
        editMode: true,
        status: 'Hello'
    }

    toggleMode = () => {
        this.setState({editMode: !this.state.editMode})
    }

    render() {
        return (
           <div>
               {this.state.editMode ? <q onDoubleClick={this.toggleMode}>{this.state.status}</q>:
                   <input onBlur={this.toggleMode} autoFocus={true} value={this.state.status} type="text"/>}
           </div>
        );
    }
}