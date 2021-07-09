import React from 'react';
import css from './login.module.css';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { login } from '../../../../services/service';
import {withNoAuth} from "../../../HOC/withNoUth/withNoAuth"
const Login = ()=>{
    const { register, handleSubmit } = useForm();

    const history = useHistory();
    const onSubmit = async (data) => {
      const loggedin = await login(data);
      localStorage.setItem('token', loggedin.token);
      history.push("/course")
      
    };

    return (
        <div className={classNames("container", css.container)}>
            <div className="py-4">
                <h1>login Page</h1>
                <form className={classNames('form', css.formContainer)} onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" 
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            {...register('email', { required: true })}
                            
                            />
                        
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input 
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            {...register('password', { required: true })}
                             
                            />
                    </div>
                    <div className="mb-3 form-check">
                        <input 
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            // {...register('checkbox', { required: true })}
                             
                            />

                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
        </div>
    )
}

export default withNoAuth(Login)