import express from 'express';
import { PageHome } from '../pages/public/Home.js';
import { PageMovies } from '../pages/public/Movies.js';
import { PageCategories } from '../pages/public/Categories.js';
import { PageLogin } from '../pages/public/Login.js';
import { PageRegister } from '../pages/public/Register.js';

export const publicRouter = express.Router();

publicRouter.get('/', (req, res) => res.send(new PageHome().render()));

publicRouter.get('/movies', (req, res) => res.send(new PageMovies().render()));

publicRouter.get('/categories', (req, res) => res.send(new PageCategories().render()));

publicRouter.get('/login', (req, res) => res.send(new PageLogin().render()));
publicRouter.get('/register', (req, res) => res.send(new PageRegister().render()));