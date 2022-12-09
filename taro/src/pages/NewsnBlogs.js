import React from "react";

export default function NewsnBlogs() {
    return (
        <div className="newsnblogs">
      <div className="head-container">
        <span id="news_blog"><h2>News &amp; Blog</h2></span>
        <span id="news_link">
          Find more current news and interesting events on the News and events
          page
        </span><br/>
        <span><iframe id="news-1" src="https://www.youtube.com/embed/pNsBOnwwbt4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></span>
        <span><iframe id="news-2" src="https://www.youtube.com/embed/ZqeTPPD9GQw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></span>
        <div className="flex-container-1">
        </div>
      </div>
    </div>
  );
}