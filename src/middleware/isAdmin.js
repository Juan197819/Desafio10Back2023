export function isAdmin(req, res, next) {
    if (req.method == 'GET') {
        next()
    } else {
        if (req.user.rol=='Administrador') {
            next()
        } else {
            throw new Error('Access denied!! Route only for administrators')
        }
    }
}