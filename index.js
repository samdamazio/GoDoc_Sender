const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/split', (req, res) => {
    const { sentence } = req.body;
    if (typeof sentence !== 'string') {
        return res.status(400).json({ error: 'Input invalido, voce deve enviar uma string.' });
    }
    // Usando uma expressão regular para splitar por "." ou " e "
    const splitSentence = sentence.split(/\.|\s+e\s+/);
    res.json({ splitSentence });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
