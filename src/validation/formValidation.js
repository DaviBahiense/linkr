import * as yup from 'yup'

const registerSchema = yup.object().shape({
    email: yup.string().email('Insira um E-mail válido').required('Campo E-mail é obrigatório'),
    password: yup.string().required('Campo password é obrigatório'),
    name: yup.string().required('Campo username é obrigatório'),
    img: yup.string().url().required('Campo picture é obrigatório'),
}).required()

const loginSchema = yup.object().shape({
    email: yup.string().email('Insira um E-mail válido').required('Campo E-mail é obrigatório'),
    password: yup.string().required('Campo password é obrigatório'),
}).required()


export {
    registerSchema,
    loginSchema
}