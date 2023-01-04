import BlogPost from "../components/BlogPost";
import { useEffect } from "react";

export default function Ladingpage({ posts, setPosts }) {


    // Der "useEffect" Hook wird verwendet, um eine HTTP-Anfrage an "http://localhost:9898/" auszuführen,
    // wenn die Komponente zum ersten Mal gerendert wird. Die Antwort wird dann in JSON umgewandelt
    // und an "setPosts" übergeben, um den Zustand der Komponente zu aktualisieren.
    useEffect(() => {
        fetch('http://localhost:9898/')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    // Die Komponente gibt ein JSX-Element zurück, das aus einem Header- und einem main-Element besteht.
    // Innerhalb des main-Elements wird über das "posts"-Array iteriert und für jedes Element eine "BlogPost"-Komponente zurückgegeben.
    // Die "BlogPost"-Komponente wird mit verschiedenen Props wie "img", "title", "article" und "key" versehen.
    return (
        <>
            <header className="header">
                <h1>👾 Blog</h1>
            </header>
            <main className="articleGrid">
                {posts.map((post, key) => {
                    return <BlogPost
                        key={key}
                        img={post.img}
                        title={post.title}
                        article={post.article}
                        id={key}
                    />;
                }
                )}
            </main>
        </>
    );
}