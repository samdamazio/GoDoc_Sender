const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/split", (req, res) => {
  const { sentence } = req.body;
  if (typeof sentence !== "string") {
    return res
      .status(400)
      .json({ error: "Invalid input, please provide a string." });
  }
  // Usando uma expressão regular com lookahead positivo para manter '?' ao dividir
  const splitSentence = sentence.split(/(?<=\?)|(?=\. )/).filter(Boolean);
  res.json({ splitSentence });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
