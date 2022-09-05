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
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
  Route.post('insert', 'ConsController.insert')
  Route.delete('delete', 'ConsController.delete')
  Route.post('update', 'ConsController.update')
  Route.get('read', 'ConsController.read')
  Route.get('search', 'ConsController.search')
  Route.post('join', 'ConsController.join')
}).middleware('Mid')
Route.group(() => {
  Route.post('teaminsert', 'TeamsController.insert')
  Route.get('teamread', 'TeamsController.read')
  Route.post('teamupdate', 'TeamsController.update')
  Route.delete('teamdelete', 'TeamsController.delete')
  Route.get('teamsearch', 'TeamsController.search')
  Route.post('teamjoin', 'TeamsController.join')
}).middleware('Mid')
