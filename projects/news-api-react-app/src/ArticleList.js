import React from "react"

export default function ArticleList({article}) {
    return (
        <div>
            <img style={{width: "300px", height: "auto"}} src={article.urlToImage} alt=""/>
            <h2><a href={article.url}>{article.title}</a></h2>
            <p> {article.description} </p>
            <p>Source: {article.source.name}</p>
        </div>
    )
}