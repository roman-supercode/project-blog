import { useState } from "react";

export default function Admin({ setPosts }) {
    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [img, setImg] = useState(null);

    const sendData = () => {
        // wir bauen uns ein formular in javascript 
        const form = new FormData();
        form.append('title', title);
        form.append('article', article);
        form.append('image', img);
        // console.log(form);
        // console.log(img);
        // Diese Funktion wird verwendet, um Daten an den Server zu senden.
        // Sie erstellt ein neues FormData-Objekt, fügt die Werte von "title", "article" und "img" hinzu
        // und sendet das FormData-Objekt an den Server mithilfe einer HTTP-POST-Anfrage.
        // Die Antwort wird in JSON umgewandelt und an "setPosts" übergeben, um den Zustand der Komponente zu aktualisieren.
        fetch('http://localhost:9898/', {
            method: 'POST',
            body: form
        })
            .then(response => response.json())
            .then(data => { setPosts(data); });
    };

    // Die Komponente gibt ein JSX-Element zurück, das eine Sektion mit dem Klassennamen "admin" enthält.
    // Innerhalb dieser Sektion gibt es einen Überschriften-Tag, mehrere Formular-Inputs und einen Button.
    // Die Inputs und der Button haben Event-Listener, die entsprechende Zustandsvariablen aktualisieren oder die "sendData"-Funktion aufrufen.
    return (
        <section className="admin">
            <h2>New Post</h2>
            <input type="text" name="title" placeholder="Titel eingeben" onChange={e => setTitle(e.target.value)} />
            <textarea name="article" cols="30" rows="10" onChange={e => setArticle(e.target.value)} placeholder="dein Beitrag"></textarea>
            {/* <input type="textarea" name="post" placeholder="dein Beitrag" onChange={e => setArticle(e.target.value)} /> */}
            <div>
                <input type="file" name="img" onChange={e => setImg(e.target.files[0])} />
            </div>
            <button onClick={sendData}>Publish</button>
        </section>
    );
}