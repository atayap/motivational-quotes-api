const quotes = require('../quotes.json');

module.exports = (req, res) => {
  const { query } = req;
  if (query.random === 'true') {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return res.status(200).json(quotes[randomIndex]);
  }
  res.status(200).json(quotes);
};