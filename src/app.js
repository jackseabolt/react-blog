import React from 'react';
import BlogForm from './blogform.js';
import BlogList from './bloglist.js';

export default class App extends React.Component {
    constructor(props){
        super(props); 
    }

    render(){
        return (
            <div>
                <BlogForm />
                <BlogList />
            </div>
        )
    }
}