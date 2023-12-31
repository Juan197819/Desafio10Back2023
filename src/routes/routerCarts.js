import { Router } from 'express'
import { controllerCarts } from '../controllers/controllerCarts.js'
import { isUser } from '../middleware/isUser.js'
import { authPassport } from '../middleware/authPasport.js'

export const routerCarts = Router()
routerCarts.use(authPassport, isUser)

routerCarts.post('/', controllerCarts.controllerAddCart)
routerCarts.get('/:cid', controllerCarts.controllerGetProdToCart)
routerCarts.post('/:cid/product/:pid', controllerCarts.controllerAddProductToCart)
routerCarts.delete('/:cid/products/:pid', controllerCarts.controllerDeleteProductToCart)
routerCarts.put('/:cid', controllerCarts.controllerUpdateAllProductsToCart)
routerCarts.put('/:cid/products/:pid', controllerCarts.controllerUpdateQuantityProdToCart)
routerCarts.delete('/:cid/', controllerCarts.controllerDeleteAllProductsToCart)

routerCarts.post('/:cid/purchase', controllerCarts.controllerBuyCart)
