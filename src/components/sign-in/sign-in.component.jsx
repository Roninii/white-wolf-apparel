import React from 'react'
import BaseButton from '../base-button/base-button.component'
import FormInput from '../form-input/form-input.component'

import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = e => {
        e.preventDefault()

        this.setState({ email: '', password: ''})
    }

    handlechange = e => {
        const { value, name } = e.target

        this.setState({ [name]: value })
    }
    
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        id="sign-in-email" 
                        value={this.state.email} 
                        handleChange={this.handlechange} 
                        label='email' 
                        required 
                    />
                    <FormInput 
                        type="password" 
                        name="password"
                        id="sign-in-password" 
                        value={this.state.password} 
                        handleChange={this.handlechange} 
                        label='password' 
                        required 
                    />

                    <BaseButton type="submit">Submit</BaseButton>
                </form>
            </div>
        )
    }
}

export default SignIn