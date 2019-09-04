import React, { Component } from 'react'

class List extends Component {
    renderRows(messages){
        return messages.map((message, index) => (
            <div className="row" key={index}>
                <div className="col-sm-6 col-md-8">
                    {message}
                </div>
                <div className="col-sm-3 col-md-2">
                    <button type="button" className="btn btn-warning form-control" onClick={() => {this.props.editMessage(index, message) }}>Edit</button>
                </div>
                <div className="col-sm-3 col-md-2">
                    <button type="button" className="btn btn-danger form-control" onClick={() => {this.props.deleteMessage(index) }}>Delete</button>
                </div>
            </div>
        ))
    }

    render(){
        const messages = this.props.messages

        return(
            <div className="messages">
                { this.renderRows(messages) }
            </div>
        )
    }
}

export default List