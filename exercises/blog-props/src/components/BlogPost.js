import React from "react"

function BlogPost(props) {
    return(
        <div className="blog-post">
            <h2>{props.post.title}</h2>
            <h3>{props.post.subTitle}</h3>
            <p>Posted by <span>{props.post.author}</span> on {props.post.date}</p>
            <hr />
        </div>
    )
}

export default BlogPost