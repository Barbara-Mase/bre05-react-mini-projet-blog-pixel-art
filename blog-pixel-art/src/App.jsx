import { useState } from "react";
import Blog from "./Blog.jsx";
import Post from "./Post.jsx";
import './App.css'

function App() {
    //Déclare un state que l'on va pouvoir changer en fonction de ce que l'on veut montrer
    const [state, setState] = useState({ page: "blog", post:null });
    
    //fonction qui permet d'afficher l'article après avoir cliqué sur "lire la suite"
    function showPost(post)
    {
        //Déclaration d'un nouvel état
        let newState = { page: "post", post:post };
        //modification d'un nouvel état
        setState(newState);
    }
    
    //Fonction qui permet de revenir en arrière
    function backToBlog(event)
    {
        event.preventDefault();
        //Déclaration du nouvel état
        let newState = { page: "blog", post:null };
        //changement de l'état
        setState(newState);
    }

    //Si la page est celle de la page regroupant les articles (si l'état est 'blog')
    if(state.page === "blog")
    {
        //alors on charge le fichier Blog.jsx
        return (
            <>
            //On passe en props la fonction "Showpost" 
                <Blog showPost={showPost}/>
            </>
        )
    }
    else
    {
        //Sinon on charge le fichier Post.jsx
        return (
            <>
                //Le lien qui permet de revenir en arrière
                <a href="index.html" className="back-link" onClick={backToBlog}>← Retour à l'accueil</a>
                <Post post={state.post}/>
            </>
        )
    }

}

export default App

