import * as Yup from 'yup';

const ProfileSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, 'Demasiado corto')
    .max(50, 'Demasiado Largo')
    .required('Requerido'),
  texto: Yup.string()
    .min(6, 'Demasiado corto')
    .max(250, 'Demasiado Largo')
    .required('Requerido'),
  email: Yup.string()
    .email('Email invalido')
    .required('Requerido'),
});

export default ProfileSchema;