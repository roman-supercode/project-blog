import "./BlogPost.css";
import { Link } from "react-router-dom";

export default function BlogPost({ img, title, id }) {
    return (
        <Link to={`/details/${id}`} className="card">
            <article>
                <img src={`http://localhost:9898/${img}`} alt={title}></img>
                <h2>{title}</h2>
            </article>
        </Link>
    );
}