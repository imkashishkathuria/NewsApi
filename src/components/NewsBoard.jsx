import { useEffect } from "react";
import { useState } from "react"
import NewsItem from "./NewsItem";


const NewsBoard = ({category}) => {

  const [articles, setArticles] = useState([]);
  useEffect(()=>{
    let url =`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
  },[category]);
  return (
    <div>
        <h2 className="text-center">
            Latest <span className="text-center badge bg-danger">News</span>
        </h2>
         
        {
          articles !== undefined? articles.map((news,index)=>(
            news.urlToImage && news.title? (
            
            <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            ):null
          ))
          :null
        }

    </div>
  )
}

export default NewsBoard