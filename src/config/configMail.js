import {createTransport} from 'nodemailer'
import config from './configEnv.js';

const transport = createTransport({
    service:'gmail',
    port: 587,
    auth:{
        user: config.EMAIL_TO_SEND,
        pass: config.PASS_NODEMAILER
    }
})
async function sendEmail (subject, bodyMail){
    try {
        const info = await transport.sendMail({
            from: config.EMAIL_TO_SEND,
            to: config.EMAIL_TO_RECEIVE_FOR_TEST,
            subject: subject,
            html: bodyMail
            }       
        )
        console.log(info);
    } catch (error) {
        console.log(error);
    }
}
export const datosUsuarioNuevo = (datosUsuarioNuevo) => {
    return `
    <h1>Usuario Nuevo</h1>
    <h2>Nombre Completo: ${datosUsuarioNuevo.nombre} ${datosUsuarioNuevo.apellido}</h2>
    <h2>Fecha de Nacimiento: ${datosUsuarioNuevo.fechaNacimiento}</h2>
    <h2>Direccion: ${datosUsuarioNuevo.direccion}</h2>
    <h2>Telefono: ${datosUsuarioNuevo.telefono}</h2>
    <h2>Email: ${datosUsuarioNuevo.username}</h2>
    `
}
export default sendEmail
