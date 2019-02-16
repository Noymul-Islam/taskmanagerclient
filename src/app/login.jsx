import React, { Component } from 'react';
import language from './assets/languageFile.json'
import logo from './assets/todo.jpg'
class Login extends Component {

    render() {

        return (
            <div>
                <p className="fontsize-24">
                    {language.PUT_CREDENTIALS}
                </p>
                <div className="card">
                    <div className="card-header">
                        <img src={logo} alt="Todo Icon" width="80" />
                    </div>
                    <div className="card-body col-sm-10 offset-sm-1 text-center">
                      <form className="justify-content-center">
            
                       <div className="form-group">
                         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                       </div>
                     <div className="form-group">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                   
                   <button type="submit" className="btn btn-primary">{language.SUBMIT}</button>
                   </form>

                       
                   </div>
                </div>
            </div>
            
                        );
                    }
                
                }
export default Login;