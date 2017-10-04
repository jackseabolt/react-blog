import React from 'react';

export default class BlogForm extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            editing: false  
        }
        this.toggleEditing = this.toggleEditing.bind(this)
    }
    toggleEditing(){
        this.setState({
            editing: !this.state.editing
        })
    }
    render(){ 
        if(this.state.editing){
            return (
                <div>
                    <form onSubmit={e => {
                        e.preventDefault(); 
                        this.props.onAdd(this.inputText.value); 
                        this.inputText.value = ''; 
                        }}>
                        <input className="input" 
                        ref={input => this.inputText = input} 
                        placeholder="Add a post"
                        />
                    </form>
                </div>
            )
        } 
        return (
            <div className="blogform">
                <button className="button" onClick={ this.toggleEditing }>New Post</button>
            </div>
        )
    }
} 