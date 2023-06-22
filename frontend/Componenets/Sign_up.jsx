import React, { Component } from 'react'

export default class SignUp extends Component {
    render() {
        return (
            <form>
                
                <h3>Sign up</h3>
                <div  className='mb-3'>
                <div style={{ display: "block" }}>First name</div>                    <input
                        type= "text"
                        className="form_control"
                        placeholder="First name"
                    />
                </div>

                <div className="mb-3">
                <div style={{ display: "block" }}>Last name</div>                    
                    <input type= "text" className="from-control" placeholder="Last name" />
                </div>

                <div className="mb-3">
                <div style={{ display: "block" }}>E-mail</div>                    
                    <input
                        type="email"
                        className= "form-control"
                        placeholder="Enter email"
                    />
                </div>

                <div className="mb-3">
                <div style={{ display: "block" }}>Password</div>                    
                    <input
                        type="password"
                        className=  "form-control"
                        placeholder="Enter password "
                    />
                </div>
                <div className="mb-3">
                <div style={{ display: "block" }}>Confirm password</div>                    
                    <input
                        type="password"
                        className=  "form-control"
                        placeholder="Enter password "
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign up
                    </button>
                </div>
                <p className="forgot=password text-right">
                    Already registered? <a href="/sign-in">sign in?</a>
                </p>
            </form>
        )
    }
}

