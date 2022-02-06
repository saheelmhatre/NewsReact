import React from 'react';
const NewsItem = (props)=> {
      let {newsTitle, newsDesc, imageUrl, newsUrl, newsAuthor, newsDate, source} = props;
       return ( <div>
        <div className={`card mb-2 my-2 bg-${props.mode==='light'?'light':'dark'} text-${props.mode==='light'?'dark':'light'}`}>
        <img src={!imageUrl?"https://www.bollyinside.com/wp-content/uploads/2021/12/Elon-Musk-rejects-mounting-criticism-that-his-satellites-are-obstructing.png": imageUrl} className="card-img-top" alt=""/>
        <div className="card-body">
            <span className="position-absolute top-0 translate-middle badge   rounded-pill bg-danger" style={{left: '80%', zIndex: '1'}}>
               {source}</span>
            <h5 className="card-title">{newsTitle}</h5>
            <p className="card-text">{!newsDesc?"...":newsDesc} ...</p>
            <p className="card-text"><small className="text-muted">By <strong>{!newsAuthor?"Unknown":newsAuthor}</strong> on {new Date(newsDate).toGMTString()}</small></p>
            <a href={newsUrl} target= "_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
        </div>
    </div>
    </div>
  )
}

export default NewsItem;
