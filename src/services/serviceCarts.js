import config from '../config/configEnv.js';
import {dtoTicket} from '../dtos/dtoTicket.js'
const {default: daoCart} = await import(`../daos/${config.PERSISTENCIA}/daoCarts.js`)
const {  daoTickets } = await import(`../daos/MongoDB/daoTickets.js`)
class ServiceCarts {
    async serviceAddCart (){
        try {
            const newCart = await daoCart.addCart()
            return newCart
        } catch (error) {
            throw error
        }
    }
    async serviceGetProdToCart (cid){
        try {
            const cart = await daoCart.getProdToCart(cid)//C/ FileSystem devuelve cart existente con o sin productos o salta el error en DAO
            return cart.products
        } catch (error) {
            throw error
        }
    }
    async serviceAddProductToCart (cid, pid){
        try {
            const cartUpdated = await daoCart.addProductToCart(cid,pid)
            return cartUpdated
        } catch (error) {
            throw error
        }
    }
    async serviceDeleteProductToCart (cid, pid){
        try {
            const cartUpdated = await daoCart.deleteProductToCart(cid,pid)
            return cartUpdated
        } catch (error) {
            throw error
        }
    }
    async serviceUpdateAllProductsToCart (cid, newCart){
        try {
            const cartUpdated = await daoCart.updateAllProductsToCart(cid, newCart)
            return cartUpdated
        } catch (error) {
            throw error
        }
    }
    async serviceUpdateQuantityProdToCart (cid, pid, quantity){
        try {
            const cartUpdated = await daoCart.updateQuantityProdToCart(cid,pid, quantity)
            return cartUpdated
        } catch (error) {
            throw error
        }
    }
    async serviceDeleteAllProductsToCart (cid, pid){
        try {
            const cartUpdated = await daoCart.deleteAllProductsToCart(cid,pid)
            return cartUpdated
        } catch (error) {
            throw error
        }
    }
    async serviceBuyCart (cid, user){
        try {
            const { productsToBuy, productsOutOfStock, amount } = await daoCart.buyCart2(cid)
            const newTicket = dtoTicket(amount, user)           
            return await daoTickets.addTickets(newTicket)
        } catch (error) {
            throw error
        }
    }
}
export const serviceCarts = new ServiceCarts()