const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('DevOps Pipeline Working');
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});


app.listen(3000, () => {
  console.log('App running on port 3000');
});
