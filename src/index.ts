import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Denis y Ros Server');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
