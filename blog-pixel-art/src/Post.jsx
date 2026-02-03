const Post = (props) => {
    return (
      
          // Html classique. On construit l'article en lui indiquant les props à récupérer 
            <article className="article-detail">
                <span className="category">{ props.post.category }</span>
                <h2>{ props.post.title }</h2>
                <p className="date">Publié le {props.post.date}</p>
                <hr/>
                <p>
                    { props.post.content }
                </p>
            </article>
    );
}

export default Post;