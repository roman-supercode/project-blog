import { useParams } from "react-router-dom";

export default function Blogdetails({ posts }) {
    const params = useParams();

    return (
        <section>
            <article>
                <img src={`http://localhost:9898/${posts[params.id].img}`} alt={posts[params.id].title}></img>
                <h2>{posts[params.id].title}</h2>
                <p>{posts[params.id].article}</p>
            </article>
        </section >
    );
}