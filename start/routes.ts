/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'


Route.get('/', 'MainsController.index').as("accueil")
Route.get('/home', 'MainsController.index').as("home")
Route.get('/article', 'MainsController.article').as("article.add")
Route.get("/article/:id", 'MainsController.show').as("article.show").where('id', /^[0-9]+$/)
Route.get("/:id", 'MainsController.edit').as("article.edit").where('id', /^[0-9]+$/)
Route.post("/update-article/:id", 'MainsController.update').as("article.update").where('id', /^[0-9]+$/)
Route.post("/article/store", 'MainsController.store').as('article.store')
Route.delete('/article/:id/delete', 'MainsController.destroy').as("article.delete")
