import React from 'react';
import BlogForm from './blogform.js';
import BlogList from './bloglist.js';

export default class App extends React.Component {
    constructor(props){
        super(props); 
        this.state={
            posts: []
        }
    }
    handleAddPost(value){
        console.log(value)
        this.setState({
            posts: [...this.state.posts, { title: value }]
        })
    }
    render(){
        return (
            <div>
                <BlogForm onAdd={value =>  this.handleAddPost(value) } />
                <BlogList posts={this.state.posts}/>
            </div>
        )
    }
}