import express from 'express';
import { PageDashboard } from '../pages/admin/Dashboard.js';
import { PageAdminCategories } from '../pages/admin/categories/Categories.js';
import { PageAdminCategoriesPublished } from '../pages/admin/categories/CategoriesPublished.js';
import { PageAdminCategoriesDraft } from '../pages/admin/categories/CategoriesDraft.js';
import { PageAdminCategoriesNew } from '../pages/admin/categories/CategoriesNew.js';
import { PageAdminMovies } from '../pages/admin/movies/Movies.js';
import { PageAdminMoviesDraft } from '../pages/admin/movies/MoviesDraft.js';
import { PageAdminMoviesNew } from '../pages/admin/movies/MoviesNew.js';
import { PageAdminMoviesPublished } from '../pages/admin/movies/MoviesPublished.js';
import { PageAdminCategoriesEdit } from '../pages/admin/categories/CategoriesEdit.js';
import { PageAdminCategoriesView } from '../pages/admin/categories/CategoriesView.js';
import { PageAdminMoviesView } from '../pages/admin/movies/MoviesView.js';

export const adminPageRouter = express.Router();

adminPageRouter.get('/', async (req, res) => res.send(await new PageDashboard(req).render()));

adminPageRouter.get('/categories', async (req, res) => res.send(await new PageAdminCategories(req).render()));
adminPageRouter.get('/categories/published', async (req, res) => res.send(await new PageAdminCategoriesPublished(req).render()));
adminPageRouter.get('/categories/draft', async (req, res) => res.send(await new PageAdminCategoriesDraft(req).render()));
adminPageRouter.get('/categories/new', async (req, res) => res.send(await new PageAdminCategoriesNew(req).render()));
adminPageRouter.get('/categories/:urlSlug', async (req, res) => res.send(await new PageAdminCategoriesView(req).render()));
adminPageRouter.get('/categories/:urlSlug/edit', async (req, res) => res.send(await new PageAdminCategoriesEdit(req).render()));

adminPageRouter.get('/movies', async (req, res) => res.send(await new PageAdminMovies(req).render()));
adminPageRouter.get('/movies/published', async (req, res) => res.send(await new PageAdminMoviesPublished(req).render()));
adminPageRouter.get('/movies/draft', async (req, res) => res.send(await new PageAdminMoviesDraft(req).render()));
adminPageRouter.get('/movies/new', async (req, res) => res.send(await new PageAdminMoviesNew(req).render()));
adminPageRouter.get('/movies/:urlSlug', async (req, res) => res.send(await new PageAdminMoviesView(req).render()));
// adminPageRouter.get('/movies/:urlSlug/edit', async (req, res) => res.send(await new PageAdminMoviesView(req).render()));