import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



const NewsView = (props)=> {

   
     const capitalizeFirstLetter = (string)=> {
                    return string.charAt(0).toUpperCase() + string.slice(1);
        }

        const [articles, setArticles] = useState([]);
        const [loading, setLoading] = useState(true);
        const [page, setPage] = useState(1);
        const [totalResults, setTotalResults] = useState(0);

        
        let mode = props.mode

    

        const updateNews = async ()=> {
        props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`
        setLoading(true)
        props.setProgress(30);
        let data = await fetch(url);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);

    }

    useEffect(() => {
        updateNews()
        //eslint-disable-next-line
    }, []);
    


       const fetchMoreData = async ()=> {
            setPage(page + 1)

            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
            let data = await fetch(url);
            let parsedData = await data.json();
                setArticles(articles.concat(parsedData.articles))
                setTotalResults(parsedData.totalResults)
        }
    

    return ( 
        <div>
        {loading && <Spinner/>}
        <h2 className={`text-center text-${props.mode==='light'?'dark':'light'}`} style={{marginTop:'70px'}}>NewsMe - Top {capitalizeFirstLetter(props.category)} Headlines Today</h2>
        <hr/>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
            >
                <div className='container my-3'>
             <div className='row'>
            {articles.map((element)=>{
                return <div className='col-md-4 mb-1 my-1 d-flex justify-content-evenly' key={element.url}>
                <NewsItem mode={mode} newsTitle={element.title} newsDesc={element.description} imageUrl={element.urlToImage} newsUrl={element.url} newsAuthor={element.author} newsDate= {element.publishedAt} source= {element.source.name}/>
                    </div> })}
        </div>
        </div>
        </InfiniteScroll>
        <hr/>
    </div>
    )
 }

NewsView.defaultProps = {
    country: "in",
    pageSize: 6
}
NewsView.propTypes = {
    country: PropTypes.string,
    page: PropTypes.number   }


export default NewsView
