import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import dataArray from '../assets/newsContent'


const Newsboard = ({category}) => {

    const [articles, setArticles] = useState([])

    // useEffect(() =>{
    //     const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=14b4c7b6a08a4f87909f2fd02fbb48f2`
    //     fetch(url).then(response => response.json()).then(data => setArticles(data.articles))
    // }, [category])

    useEffect(() =>{
        setArticles(dataArray[category])
    }, [category])

  return (
    <div>
        <h2 className='text-center my-2'>Latest News</h2>
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 ">
            {
                articles.map((news, index) => {
                    return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
                })
            }
            </div>
        </div>
        
    </div>
  )
}

export default Newsboard