import React from 'react';

export default class BlogForm extends React.Component{
    constructor(props){
        super(props); 
    }

    render(){    
        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault(); 
                    this.props.onAdd(this.inputText.value)
                    }}>
                    <input ref={input => this.inputText = input} />
                </form>
            </div>
        )
    }
} 