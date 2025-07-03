import express from 'express';
import { PageHome } from '../pages/Home.js';
import { PageMovies } from '../pages/Movies.js';
import { PageCategories } from '../pages/Categories.js';
import { PageLogin } from '../pages/Login.js';
import { PageRegister } from '../pages/Register.js';

export const publicRouter = express.Router();

publicRouter.get('/', (req, res) => res.send(new PageHome().render()));

publicRouter.get('/movies', (req, res) => res.send(new PageMovies().render()));

publicRouter.get('/categories', (req, res) => res.send(new PageCategories().render()));

publicRouter.get('/login', (req, res) => res.send(new PageLogin().render()));
publicRouter.get('/register', (req, res) => res.send(new PageRegister().render()));