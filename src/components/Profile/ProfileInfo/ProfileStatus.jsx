import React from "react";

export default class ProfileStatus extends React.Component{
    state = {
        editMode: false,
        status: this.props.status
    }

    toggleMode = () => {
        this.setState({editMode: !this.state.editMode});
        if(!this.state.editMode)
            this.props.updateStatus(this.state.status)
    }

    onInputChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status)
            this.setState({
                status: this.props.status
            })
    }

    render() {
        return (
           <div>
               {!this.state.editMode ? <q onDoubleClick={this.toggleMode}>{this.props.status || 'no status'}</q>:
                   <input onChange={this.onInputChange} onBlur={this.toggleMode} autoFocus={true} value={this.state.status} type="text"/>}
           </div>
        );
    }
}