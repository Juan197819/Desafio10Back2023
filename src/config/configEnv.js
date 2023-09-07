import 'dotenv/config'
console.log('process', process.argv[2])
export default {
    NODE_ENV: process.env.NODE_ENV,
    PERSISTENCIA: process.env.PERSISTENCIA || process.argv[2],
    MONGO_ATLAS: process.env.MONGO_ATLAS,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    EMAIL_TO_RECEIVE_FOR_TEST: process.env.EMAIL_TO_RECEIVE_FOR_TEST,
    EMAIL_TO_SEND: process.env.EMAIL_TO_SEND,
    PASS_NODEMAILER: process.env.PASS_NODEMAILER,
}
