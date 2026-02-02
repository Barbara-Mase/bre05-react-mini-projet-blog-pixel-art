import datas from './data.jsx';
import Post from './Post.jsx'
import { useState } from 'react';

const Blog = (props) => {


    return (
        <main class="container">
            <div class="blog-grid">
                {datas.map((data, i) =>
                <article class="card" key={i}>
                <span class="category">{data.category}</span>
                <h3>{data.title}</h3>
                <p class="date">{data.date}</p>
                <p>{data.excerpt}</p>
                <a href="article.html" class='btn' onClick={props.fonction}>"Lire la suite ->"</a>
                </article>
                )}
            </div>
        </main>
    )
}

export default Blog;