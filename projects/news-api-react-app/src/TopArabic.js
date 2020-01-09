import React from "react"

export default function TopArabic(props) {
    // const [arabicArticles, setArabicArticles] = useState([])

    // useEffect(() => getArabicNews(), [arabicArticles])

    // function getArabicNews() {
    //     axios.get('https://newsapi.org/v2/top-headlines?language=ar&apiKey=6ea74b184e1d46f1b33560fb48edd364')
    //         .then(response => {
    //             const articles = response.data.articles
    //             setArabicArticles([...articles])
    //         })
    //         .catch(err => console.log(err))
    // }

    const arabicResults = props.articles.map((article, i) => {
        return (
            <div key={article.title + i.toString()}>
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