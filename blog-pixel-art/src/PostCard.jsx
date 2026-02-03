const PostCard = (props) => {

    //Déclaration de la fonction handleclick
    function handleClick(event)
    {
        event.preventDefault();
        //On lui dit que le props sera showpost
        props.showPost(props.post);
    }

    return (
        <article className="card">
            <span className="category">{ props.post.category }</span>
            <h3>{ props.post.title }</h3>
            <p className="date">{ props.post.date }</p>
            <p>{ props.post.excerpt }</p>
            <a href="article.html" className="btn" onClick={handleClick}>Lire la suite →</a>
        </article>
    );
}

export default PostCard;