import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  
 
  
  TreeSelect,
  
} from 'antd';

import { Contact } from 'antd/lib/config-provider';

export default function FormSizeDemo() {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Ad">
          <Input />
        </Form.Item>

        <Form.Item label="Soyad">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Email">
          <TreeSelect
            treeData={[
              {
                title: 'Light',
                value: 'light',
                children: [
                  {
                    title: 'Bamboo',
                    value: 'bamboo',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Mesaj">
          <Input />
        </Form.Item>
        
        
        
        
        
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48971.73212002341!2d41.225626629101555!3d39.90260405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406e5ee0394adfcf%3A0x2142f21576de545!2sAtat%C3%BCrk%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1631640731201!5m2!1str!2str" style={{width:"100%", height:"450px", style:"border:0;"}} allowfullscreen="" loading="lazy"></iframe>
    </>
  );
};

