import { useState } from "react";
import Blog from "./Blog.jsx";
import Post from "./Post.jsx";
import './App.css'

function App() {
    
    constructor(props) {
        super(props);
        this.readMore = this.readMore.bind(this)
    }
    
    
    function readMore() {

    const [state, setState] = useState('blog');
        
        if (state === 'blog') {
            setState('post')
        }
    }


        if(state === 'blog')
        {
            return (
                <>
                    <Blog fonction={this.readMore}/>
                </>
            )
        }
        else
        {
            return (
                <>
                    <a href="index.html" className="back-link">← Retour à l'accueil</a>
                    <Post />
                </>
            )
        }

}

export default App

