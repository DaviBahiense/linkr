import * as yup from "yup";

const regex =
  /(http[s]*:\/\/)([a-z\-_0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_\/._~:?#\[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png|gif)/i;
const registerSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Insira um E-mail válido")
      .required("Campo E-mail é obrigatório"),
    password: yup.string().required("Campo password é obrigatório"),
    name: yup.string().required("Campo username é obrigatório"),
    img: yup
      .string()
      .required("Campo picture é obrigatório")
      .matches(regex, "Link precisa ser URL válida para imagem"),
  })
  .required();

const loginSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Insira um E-mail válido")
      .required("Campo E-mail é obrigatório"),
    password: yup.string().required("Campo password é obrigatório"),
  })
  .required();

export { registerSchema, loginSchema };
