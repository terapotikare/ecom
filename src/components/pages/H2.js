
import React from 'react'; 
import { Form, Input, Button } from 'antd';
import ReactDOM from 'react-dom';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const H2 = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Ad-Soyad"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
        </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Şifreniz"
        
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input/>
        <Input />
        </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Telefon"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input/>
      </Form.Item>
      
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

ReactDOM.render(<H2 />,document.getElementById('root')
);
export default H2;