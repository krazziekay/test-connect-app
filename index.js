import express from "express";
import { AppRouter } from './routes/index.js';
import { connectAppDescriptor } from './connect-app-descriptor.js';
import { WebhookRouter } from './routes/webhooks.js';

const app = express();
const port = 3000;

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.send('Welcome to the test Connect app!');
});

app.get('/config', (req, res) => {
    res.json(connectAppDescriptor);
});

app.use('/v1', AppRouter);

app.use('/webhooks', WebhookRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});