import PostCard from "./PostCard.jsx";
import data from "./data.jsx";

const Blog = (props) => {
    return (
        //On boucle pour afficher tous les objets issus de data.jsx
        <div className="blog-grid">
            {
                data.map((post, index) =>
                //La boucle va afficher un post de PostCard à chaque tour. On appelle la fonction showpost
                    <PostCard key={index} post={post} showPost={props.showPost}/>
                )
            }
        </div>
    );
}

export default Blog;