import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/upload'

import SessionController from './controllers/SessionController'
import BikeController from './controllers/BikeController'
import DashboardController from './controllers/DashboardController'
import ReserveController from './controllers/ReserveController'

const routes = new Router()
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store)

routes.post('/bikes', upload.single('thumbnail'), BikeController.store)
routes.get('/bikes', BikeController.index)
routes.put(
  '/bikes/:bike_id',
  upload.single('thumbnail'),
  BikeController.update
)
routes.delete('/bikes/', BikeController.destroy)

routes.get('/dashboard', DashboardController.show)

routes.post('/bikes/:bike_id/reserve', ReserveController.store)
routes.get('/reserves', ReserveController.index)
routes.delete('/reserves/cancel', ReserveController.destroy)
export default routes
