const quotes = require('../quotes.json');

module.exports = (req, res) => {
  // Tambahkan header CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', '*');

  // Tangani preflight request (OPTIONS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Logic utama
  const { query } = req;
  if (query.random === 'true') {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return res.status(200).json(quotes[randomIndex]);
  }

  res.status(200).json(quotes);
};