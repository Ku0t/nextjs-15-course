export default function Login() {
    return (
        <>
        <div className="login-container">
            <h1 className="text-gradient">KTNOTES</h1>
            <h2>Organised note taking made easy</h2>
            <p>Build your very own archive of easily navigated and indexed information and notes</p>
            <div className="full-line"></div>
            <h6>Sign In</h6>
            <div>
                <p>Email</p>
                <input type="text" placeholder="Enter your email address" />
            </div>
            <div>
                <p>Password</p>
                <input type="password" placeholder="********" />
            </div>
            <button className="submit-btn">
                <h6>Submit</h6>
            </button>
            <div className="secondary-btns-container">
                <button className="card-button-secondary">
                    <small>Log In</small>
                </button>
                <button className="card-button-secondary">
                    <small>Forgot Password</small>
                </button>
            </div>
            <div className="full-line"></div>
            <footer>
                <a target="_blank" href="https://github.com/Ku0t/nextjs-15-course">
                    <img src="https://avatars.githubusercontent.com/u/156494711?s=400&v=4" alt="pfp" />
                    <h6>@Ku0t</h6>
                    <i className="fa-brands fa-github"></i>
                </a>
            </footer>
        </div>
        </>
    )
}