import React from 'react'

export default function newsCard(props) {
    return (
        <section className='loginForm'>

            <div className="box">

                <div className="square" style="--i:0;"></div>
                <div className="square" style="--i:1;"></div>
                <div className="square" style="--i:2;"></div>
                <div className="square" style="--i:3;"></div>
                <div className="square" style="--i:4;"></div>
                <div className="square" style="--i:5;"></div>

                <div className="container">
                    <div className="form">
                        <h2>LOGIN to CodePen</h2>
                        <form action="">
                            <div className="inputBx">
                                <input type="text" required="required" />
                                <span>Login</span>
                                <i className="fas fa-user-circle"></i>
                            </div>
                            <div className="inputBx password">
                                <input id="password-input" type="password" name="password" required="required" />
                                <span>Password</span>
                                <a href="#" className="password-control" onclick="return show_hide_password(this);"></a>
                                <i className="fas fa-key"></i>
                            </div>
                            <label className="remember"><input type="checkbox" />
                                Remember</label>
                            <div className="inputBx">
                                <input type="submit" value="Log in" disabled />
                            </div>
                        </form>
                        <p>Forgot password? <a href="#">Click Here</a></p>
                    </div>
                </div>

            </div>
        </section>


    )
}
