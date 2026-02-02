import datas from './data.jsx'

const Post = ({ data }) => {
  return (
    <article className="article-detail">
      <span className="category">{datas.category}</span>
      <h2>{datas.title}</h2>
      <p className="date">Publié le {datas.date}</p>
      <hr/>
      <p>{datas.excerpt}</p>
      <p>{datas.content}</p>
    </article>
  );
};

export default Post