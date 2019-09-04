import React, { Component } from 'react'

class Like extends Component {
    constructor(props) {
        super(props)

        this.state      = { likes: 0 }
        this.addLike    = this.addLike.bind(this);
    }

    addLike(){
        let {likes} = this.state
        this.setState({likes: likes + 1})
    }

    render(){
        let {likes} = this.state

        return(
            <div className="row">
                <div className="col-sm-12">
                    <button className="btn btn-info" onClick={this.addLike}>Like</button>
                    <span className="likes">{likes}</span>
                </div>
            </div>
        )
    }
}
export default Like 