import {
  Card,
  Input,

  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

const SignUp = () => {


  const nav = useNavigate();

  const userSchema = Yup.object({
    email: Yup.string().email('').required('email required'),
    fullname: Yup.string().required('fullname required'),
    password: Yup.string().min(5).max(20).required(),

  });


  const formik = useFormik({

    initialValues: {
      fullname: '',
      email: '',
      password: ''
    },

    onSubmit: (val, { resetForm }) => {

    },
    validationSchema: userSchema

  });
  return (
    <form onSubmit={formik.handleSubmit}>


      <Card className="mx-auto max-w-80 pt-4" color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>

        <form className="mt-5">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              name="fullname"
              onChange={formik.handleChange}
              value={formik.values.fullname}
              placeholder="fullname"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {formik.errors.fullname && formik.touched.fullname && <h1 className="text-pink-600"> {formik.errors.fullname}</h1>}

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {formik.errors.email && formik.touched.email && <h1 className="text-pink-600"> {formik.errors.email}</h1>}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {formik.errors.password && formik.touched.password && <h1 className="text-pink-600"> {formik.errors.password}</h1>}
          </div>

          <Button type="submit" className="mt-6" fullWidth>
            Sign Up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?
            <button onClick={() => nav(-1)} type="button" className="ml-2 font-medium text-gray-900">
              Login
            </button>
          </Typography>
        </form>
      </Card >
    </form >
  );
}
export default SignUp



