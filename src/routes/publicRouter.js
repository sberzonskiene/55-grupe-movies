import express from 'express';
import { PageHome } from './pages/Home.js';
import { PageMovies } from './pages/Movies.js';
import { PageCategories } from './pages/Categories.js';
import { PageLogin } from './pages/Login.js';
import { PageRegister } from './pages/Register.js';



export const publicRouter = express.Router();

app.get('/', (req, res) => {
    return res.send(new PageHome().render());
});

app.get('/movies', (req, res) => {
    return res.send(new PageMovies().render());
});

app.get('/categories', (req, res) => {
    return res.send(new PageCategories().render());
});

app.get('/login', (req, res) => {
    return res.send(new PageLogin().render());
});

app.get('/register', (req, res) => {
    return res.send(new PageRegister().render());
});