import React from 'react'; 

export default function BlogList(props){
    
    const blogposts = props.posts.map((post, idx) => (
        <div key={idx}>
            <p>{post.title}</p>
        </div>
    ));
    
    return (
        <div>
            {blogposts}
        </div>
    )
}