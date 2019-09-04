import React, { Component } from 'react'

import List from './list'

const messages = [ 
    '1st test message', 
    '2nd test message' 
]

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            value: '', 
            messages, 
            index: null
        }
    
        this.handleChange   = this.handleChange.bind(this)
        this.handleSubmit   = this.handleSubmit.bind(this)
        this.addMessage     = this.addMessage.bind(this)
        this.editMessage    = this.editMessage.bind(this)
        this.deleteMessage  = this.deleteMessage.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    addMessage(){
        const newMessage = this.state.value
        
        if(newMessage.length > 0){
            let { messages, index } = this.state
            
            if(index !== null){
                messages[this.state.index] = newMessage;
            }else{
                messages = this.state.messages.concat(newMessage);
            }

            this.setState(state => {
                return {
                    messages,
                    value: '',
                    index: null
                }
            })
        }else{
            alert('Please insert your message!')
        }
    }

    editMessage(index, message){
        this.setState({index, value: message})
    }

    deleteMessage(index){
        const { messages } = this.state
        messages.splice(index, 1)
        
        this.setState({
            messages, 
            value: ''
        })
    }

    handleSubmit(event) {
        event.preventDefault()
    }
    
    render(){
        const { messages } = this.state
       
        return(
            <div>
                <List messages={messages} editMessage={this.editMessage} deleteMessage={this.deleteMessage}/>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-sm-9 col-md-10">
                            <input type="text" className="form-control" onChange={this.handleChange} value={this.state.value} />
                        </div>
                        <div className="col-sm-3 col-md-2">
                            <button type="button" className="btn btn-primary form-control" onClick={ () => this.addMessage() }>Send</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form 