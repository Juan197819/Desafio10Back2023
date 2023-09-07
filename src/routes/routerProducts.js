import {Router} from 'express'
import {controllerProducts} from '../controllers/controllerProducts.js'
import { isAdmin } from '../middleware/isAdmin.js'
import { authPassport } from '../middleware/authPasport.js'

export const routerProducts = Router()

routerProducts.use( authPassport, isAdmin)
routerProducts.post('/', controllerProducts.controllerAddProduct)
routerProducts.get('/', controllerProducts.controllerGetProducts) 
routerProducts.get('/:pid',controllerProducts.controllerGetProductById)
routerProducts.put('/:pid', controllerProducts.controllerUpdateProduct)
routerProducts.delete('/:pid', controllerProducts.controllerDeleteProduct)