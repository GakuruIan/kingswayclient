import * as yup from 'yup'


export const BookSchema = yup.object().shape({
    fullname:yup.string().required("Fullname is required")
      .min(5, "Fullname can't be less than 5 characters")
      .max(60, "Fullname can't be more than 60 characters")
      .matches(/^[A-Za-z ]*$/, 'Please enter a valid name'),
    email:yup.string().email("Please enter a valid email")
    .required("email is required"),
    phone: yup.string().required("Phone number is required")
    .min(10,"Phone number must contain 10 numbers")
    .max(18,"Phonenumber cant exceed more then 18 numbers"),
    
})