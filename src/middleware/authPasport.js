export function authPassport(req, res, next) {
    console.log('authpassport', req.isAuthenticated())
    console.log('req.user', req.user)
    if (req.isAuthenticated()) {
        next()
    } else {
        res.status(300).redirect('/login')
    }
}
export function authPassport2(req, res, next) {
    if (!req.isAuthenticated()) {
        next()
    } else {
        res.status(300).redirect('/')
    }
}