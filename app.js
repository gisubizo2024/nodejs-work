const express = require('express');
const mysql = require('mysql2');
const port = 5000;

const app = express();

app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Blog'
});

connection.connect((error) => {
    if (error) throw error;
    console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
    res.send('Hello 🖐, welcome to my Node!');
});

app.post('/users', (req, res) => {
    const query = "INSERT INTO blog_post (id, title, content, author) VALUES (?, ?, ?, ?)";
    connection.query(query, [title, content, author], (error, result) => {
        if(error) return res.status(500).send(error);
        if(res.status(201).send([title, content, author]));
    });
});

app.get('/users/:id', (req, res) => {
    const query = "SELECT * FROM blog_post";
    connection.query(query, (error, result) => {
        if(error) return res.status(500).send(error);
        if(res.status(200).send(result));
    });
});

app.put('/users/:id', (req, res) => {
    const query = "UPDATE blog_post SET title=?, content=?, author=? WHERE id=?";
    connection.query(query, [title, content, author], (error, result) => {
        if(error) return res.status(500).send(error);
        if(res.status(201).send([title, content, author]));
    })
});



app.listen(5000, () => {
    console.log(`Server is runnning on port http://localhost:${port}`);
});
