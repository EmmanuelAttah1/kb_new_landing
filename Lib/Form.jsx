'use client';

import styles from './../app/page.module.css'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


const antIcon = <LoadingOutlined style={{ fontSize: 24, color:'black', marginLeft:'5px' }} spin />;

const Form = (props) => {
    const {updateSubForm,data,submitForm,loading} = props

    return (
        <form className = {styles.waitList} onSubmit={(e) => {
            e.preventDefault();
            submitForm();
          }}>
            <label  for = "firstName">First Name</label>
            <input onChange={(e)=>{updateSubForm("first_name",e.target.value)}} value={data['first_name']} name='first_name' id='firstName' required  />  
            <label for = "lastName" >Last Name</label>
            <input  onChange={(e)=>{updateSubForm("last_name",e.target.value)}} value={data['last_name']} name='last_name' id='lastName' required/>
            <label for = "email" >Email Address</label>
            <input onChange={(e)=>{updateSubForm("email",e.target.value)}} value={data['email']} name='email' id='email' required type='email' />  
            <button type='submit'>Join Wait-list {loading&&<Spin indicator={antIcon} />} </button>                  
        </form>
    )
}

export default Form