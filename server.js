const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/api/health", (req, res) => {
    res.json({ status: "ok" })
});

app.get("/api/randomNum", (req, res) => {
    const number = Math.floor(Math.random() * 100)
    res.json({number})
})

app.get('/public', (req, res) => {
    res.sendFile(path.join("public/", 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server kör på http://localhost:${PORT}`)
})