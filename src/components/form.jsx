import React, { Component } from 'react'
import { Modal, ModalBody, ModalFooter } from 'reactstrap';

import List from './list'
import If   from './if'

const messages = [ 
    '1st test message', 
    '2nd test message' 
]

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            value: '', 
            delete: false,
            info: '',
            messages, 
            index: null,
            modal: false
        }
    
        this.toggle         = this.toggle.bind(this);
        this.handleChange   = this.handleChange.bind(this)
        this.handleSubmit   = this.handleSubmit.bind(this)
        this.addMessage     = this.addMessage.bind(this)
        this.editMessage    = this.editMessage.bind(this)
        this.askDelete      = this.askDelete.bind(this)
        this.deleteMessage  = this.deleteMessage.bind(this)
    }

    // Change modal state - Open / Close
    toggle() {
        this.setState({ 
            modal: !this.state.modal,
            index: null
        });
    }

    // Save input value in state
    handleChange(event) {
        this.setState({value: event.target.value})
    }

    // Add value in message array if value is not empty
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
            this.setState({
                modal: true,
                info: 'Please insert your message!'
            })
        }
    }

    // Fill input value to edit message
    editMessage(index, message){
        this.setState({index, value: message})
    }

    // Ask if user realy want delete selected message
    askDelete(index){
        const message = this.state.messages[index]

        this.setState({
            modal: true,
            delete: true,
            info: `Do you realy want delete "${message}" ?`
        })
    }

    // Delete selected message
    deleteMessage(index){
        const { messages } = this.state
        messages.splice(index, 1)
        this.toggle()
        this.setState({
            messages, 
            value: '',
            delete: false
        })
    }

    handleSubmit(event) {
        event.preventDefault()
    }
    
    render(){
        const { messages, info, modal } = this.state
        
        return(
            <div>
                <List messages={messages} editMessage={this.editMessage} askDelete={this.askDelete}/>
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
                <Modal isOpen={modal}>
                    <ModalBody>
                        <div className="row">
                            <div className="col-sm-12">
                                <label>{info}</label>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <If test={this.state.delete}>
                            <button type="button" className="btn btn-danger" onClick={() => this.deleteMessage()}>Delete</button>
                        </If>
                        <button type="button" className="btn btn-info" onClick={() => this.toggle()}>Cancel</button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default Form 