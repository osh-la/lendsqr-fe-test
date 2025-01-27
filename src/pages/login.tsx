const Login
  = () => {
    return (
      <>
        <div className="Login-body">
          <div className="Login-container">
            <div className="Login-image-container">
              <img className="Logo-image" src="/logo.png" alt="logo" />
              <img className="Login-image" src="/signIn.png" alt="signin image" />
            </div>


            <div className="Login-form">
              <div className="Login-form-text">
                <h1 className="Login-header">Welcome!</h1>
                <p className="Login-text">Enter details to login.</p>
              </div>
              <form className="Login-details">
                <input type="email" placeholder="Email" />
                <div className="form-group">
                  <input type="password" placeholder="Password" />
                  <span className="show-password">SHOW</span>
                </div>
                <a className="Forgotten-password" href="/">FORGOT PASSWORD?</a>
                <input className="Login" type="submit" value="LOG IN" />
              </form>
            </div>
          </div>
        </div>

      </>
    )
  }

export default Login
