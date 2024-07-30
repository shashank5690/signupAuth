import * as yup from 'yup';

export const schema = yup.object().shape({
  username: yup.string()
    .min(4, 'Username must be at least 4 characters long')
    .max(20, 'Username must be no more than 20 characters long')
    .required('Username is required'),

  password: yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(/[!@#$%^&*()_+{}\[\]:;"'<>,.?~\\/-]/, 'Password must contain at least one special character')
    .required('Password is required'),
});
