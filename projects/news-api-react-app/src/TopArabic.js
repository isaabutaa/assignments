import React from "react"

export default function TopArabic(props) {

    const arabicResults = props.articles.map((article, i) => {
        return (
            <div className="article" key={article.title + i.toString()}>
                <img style={{width: "300px", height: "auto"}} src={article.urlToImage} alt=""/>
                <h2> <a href={article.url}>{article.title}</a> </h2>
                <p>{article.description}</p>
                <p>Source: {article.source.name}</p>
            </div>
        )
    })

    return (
        <div>
            {arabicResults}
        </div>
    )
}