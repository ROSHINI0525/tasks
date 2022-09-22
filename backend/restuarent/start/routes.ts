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

Route.post('insert','CustomersController.insert')
Route.delete('delete/:id','CustomersController.delete')
Route.put('update','CustomersController.update')
Route.get('read','CustomersController.read')
Route.post('search','CustomersController.search')
Route.get('count','CustomersController.hotelowned')



Route.post('hotelinsert','HotelsController.insert')
Route.delete('hoteldelete/:id','HotelsController.delete')
Route.put('hotelupdate','HotelsController.update')
Route.get('hotelread','HotelsController.read')
Route.post('hotelsearch','HotelsController.search')
Route.get('ownerName','HotelsController.ownerName')
Route.get('jointable','HotelsController.joinTable')
