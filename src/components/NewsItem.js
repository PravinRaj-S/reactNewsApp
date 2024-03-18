import React from 'react'
import image from '../assets/news.jpeg'


const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="col mb-3">
      <div className="card bg-dark text-light" style={{ height: "25rem" }}>
        <img src={src ? src : image} className="card-img-top" alt="..." style={{ height: "200px", width: "100%", objectFit: "cover" }}/>
        <div className="card-body">
            <h5 className="card-title">{title.slice(0, 30) + '...'}</h5>
            <p className="card-text">{description ? description.slice(0, 50) + '...' : "no data"}</p>
        </div>
        <div className="p-2">
            <a href={url} className="btn btn-primary" style={{border: "transparent"}}>Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem