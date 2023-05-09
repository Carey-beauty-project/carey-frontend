
import { Button, Checkbox, Form, Input, message } from 'antd';
import React from 'react';
//import 'antd/dist/antd.css'
import { useNavigate } from 'react-router-dom';
//import App from '../App';
import bg from '../photos/images/p11.jpg'



const Login = (data) => {
  const navigate = useNavigate();
  const onFinish = (values) => {
      fetch("http://localhost:5000/auth/Login", {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data),
      }).then(res => {
        console.log(res)
        message.info("Successfully logged in")
       navigate("/App");
      }
     
      )
      .catch(error => message.error(error.message))
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
     <div style= {{ position:'relative' , backgroundImage: `url(${bg})`,
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
        justifyContent: 'center',
        
    }}>
     
     <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        fontSize: 20,
      }}>
      <strong> Login Page</strong>

      </div>
      <div style={{width:5,height:-5}}></div>
     
    <Form
    style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      marginTop: 20,
    }}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
       <Form.Item
     label={<label style={{color:'white'}}><strong>Email</strong></label>}
        name="Email" 
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >  
        <Input />
      </Form.Item>

      <Form.Item
        label={<label style={{color:'white'}}><strong>Password</strong></label>}
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
       <strong> <Checkbox>Remember me</Checkbox></strong>
      </Form.Item>

      
      
        <Button type="primary" htmlType="submit">
          SUBMIT
        </Button>
      <p className="mt-3">Forgot password?</p>
    </Form>
   
    </div>
    </div>
   
    </>
  );
};

export default Login;