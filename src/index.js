import express from 'express';
import { PORT } from './env.js';

import { PageError404 } from './pages/Error404.js';

const app = express();

app.use(express.static('public'));

app.get('*error', (req, res) => {
    return res.send(new PageError404().render());
});

app.listen(PORT, () => {
    console.log(`WEB URL: http://localhost:${PORT}`);
});
    