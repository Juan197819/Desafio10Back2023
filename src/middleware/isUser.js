export function isUser(req, res, next) {
    if (req.user.rol == 'Usuario') {
        next()
    } else {
        throw new Error('Access denied!! (Route only for user)')
    }
}