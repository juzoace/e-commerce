import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
// import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
const SignIn = () => {

    const initialState = {
        email: '',
        password: ''
    }
    const [authDetails, setAuthDetails] = useState(initialState);

    const handleSubmit = async (e) => {
        console.log(authDetails);
    }

    return (
        <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                name='email'
                value={authDetails.email}
                type='text'
                handleChange={(e) => setAuthDetails({...authDetails, email: e.target.value})}
                label='email'
                required
                 /> 
                <FormInput 
                name='password'
                value={authDetails.password}
                type='password'
                handleChange={(e) => setAuthDetails({...authDetails, password: e.target.value})}
                label='password'
                required
                />

                <CustomButton type='submit' >Sign In</CustomButton>
            </form>
        </div>
    )
}

export default SignIn;