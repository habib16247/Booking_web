import * as Yup from "yup"


export const signUpSchema = Yup.object({
    name: Yup.string().min(4).max(20).required("Please enter your name"),
    phoneNumber: Yup.number()
        .typeError('Phone number must be a number')
        .test('len', 'Phone must be exactly 11 digits', val => val && val.toString().length === 11)
        .required('Phone number is required'),
        
    email: Yup.string().email().required("Please enter your email!"),
    password: Yup.string().min(8).required("Please enter your password!"),
    confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null], "Password must matched!")
})