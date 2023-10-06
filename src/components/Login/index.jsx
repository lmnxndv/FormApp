import "./style.css";
import { Form, Input, Button } from "antd";
import { useFormik } from "formik";
import { validationSchema } from "../../validation/UserValidation";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container">
      <div className="main">
        <Form layout="vertical" onFinish={formik.handleSubmit}>
          <Form.Item
            label="First name:"
            hasFeedback
            validateStatus={
              formik.touched.firstName && formik.errors.firstName
                ? "error"
                : "success"
            }
          >
            <Input
              placeholder="First Name.."
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.firstName && formik.errors.firstName
                  ? "error-input"
                  : ""
              }
              allowClear
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="error-message">{formik.errors.firstName}</div>
            ) : null}
          </Form.Item>
          <Form.Item
            label="Last name:"
            hasFeedback
            validateStatus={
              formik.touched.firstName && formik.errors.firstName
                ? "error"
                : "success"
            }
          >
            <Input
              placeholder="Last Name..."
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.lastName && formik.errors.lastName
                  ? "error-input"
                  : ""
              }
              allowClear
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="error-message">{formik.errors.lastName}</div>
            ) : null}
          </Form.Item>
          <Form.Item
            label="Email:"
            hasFeedback
            validateStatus={
              formik.touched.firstName && formik.errors.firstName
                ? "error"
                : "success"
            }
          >
            <Input
              placeholder="example@mail.com"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.email && formik.errors.email ? "error-input" : ""
              }
              allowClear
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error-message">{formik.errors.email}</div>
            ) : null}
          </Form.Item>
          <Form.Item
            label="Phone number:"
            hasFeedback
            validateStatus={
              formik.touched.firstName && formik.errors.firstName
                ? "error"
                : "success"
            }
          >
            <Input
              style={{ width: "400px" }}
              value={formik.values.phoneNumber || "+994"}
              name="phoneNumber"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? "error-input"
                  : ""
              }
              allowClear
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="error-message">{formik.errors.phoneNumber}</div>
            ) : null}
          </Form.Item>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
