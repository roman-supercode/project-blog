// Import von Paketen
import express, { json } from 'express';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';

// "PORT" wird auf 9898 gesetzt, "upload" wird auf eine Instanz von "multer" mit einem Ziel von "./public" gesetzt,
// und "app" wird auf eine Instanz von "express" gesetzt.
const PORT = 9898;
const upload = multer({ dest: './public' });
const app = express();

// Der "app"-Instanz werden Middlewares mithilfe der "use"-Methode hinzugefügt.
// Das erste Middleware ist "cors", das Cross-Origin Resource Sharing (CORS) für den Server aktiviert.
// Das zweite Middleware ist "express.static", das die Dateien im Verzeichnis "./public" als statische Assets darstellt.
app.use(cors());
app.use('/public', express.static('./public'));

// Ein "posts"-Array, um die Blog-Posts zu speichern.
let posts = [];

// Die App hat zwei Endpoints definiert: einen POST-Endpunkt bei "/" und einen GET-Endpunkt bei "/".
// Das "upload.single('image')"-Middleware wird verwendet, um den Dateiupload zu verarbeiten.
// Je nach Contenttype übernimmt eine andere Middleware die arbeit. Bei CT: multipart/formdata übernimmt multer die Verarbeitung
app.post('/', upload.single('image'), (req, res) => {
    console.log('Der Body:', req.file);
    const post = {
        title: req.body.title,
        img: req.file.path,
        article: req.body.article
    };
    // ------------- DATA
    fs.readFile('./public/data.json', (err, data) => {
        if (err) console.log(err);

        posts = JSON.parse(data);
        posts.push(post);

        fs.writeFile('./public/data.json', JSON.stringify(posts), (err) => {
            if (err) console.log(err);
            res.render('blog', { postings: posts });
        });

    });

    // Dann wird ein neues Objekt erstellt, das einen Blog-Post repräsentiert mit dem Pfad der hochgeladenen Date
    // const post = {
    //     title: req.body.title,
    //     img: req.file.path,
    //     article: req.body.article
    // };
    // Der Blog-Post wird dem "posts"-Array hinzugefügt.
    // posts.push(post);
    // Die Antwort enthält das aktualisierte "posts"-Array.
    // res.json(posts);
});

// Dieser Endpunkt gibt einfach das "posts"-Array zurück.
app.get('/api/posts', (_, res) => {
    // Das Array wird in die JSON Syntax konventiert und als String verschickt!
    res.json(data.json);

});

// Die App hört auf Anfragen an dem spezifizierten "PORT" mithilfe der "listen"-Methode.
app.listen(PORT, () => console.log('Dieser Server läuft auf Port:', PORT));