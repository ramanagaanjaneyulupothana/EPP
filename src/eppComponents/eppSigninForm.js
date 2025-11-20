

export default function EppSigninForm(){
    return(
        <div className="d-flex justify-content-center align-items-center mt-4">
            <div className="border border-2 border-light rounded rounded-3 p-4">
                <img src="/images/Eenadu-Pellipandiri-Logo.jpg" alt="Logo" />
                <h3> <span className="bi bi-person"></span>LOGIN</h3>
                <hr />
                <dl>
                    <dd><input type="text" className="form-control" placeholder="Profile ID/Mobile No"/></dd>
                    <dd><input type="text" className="form-control" placeholder="Enter Password" /></dd>
                </dl>
                <div>
                    <input type="checkbox" />
                    <span>Show Password</span>
                    <span>Forgot Password?</span>
                </div>
                <button className="btn btn-danger w-100">Sign In</button>
                <span>OR</span>
                <button className="btn btn-danger w-100">Reuest OTP</button>
                <div>
                    <span>Not Yet Registered?</span>
                    <a href="">Register Now</a>
                </div>
            </div>
        </div>
    )
}

export function EppRegisterForm(){
    return(
        <div className="d-flex justify-content-center align-items-center mt-4">
            <div className="border border-2 border-primary rounded rounded-3 p-4">                 
                <button className="btn btn-danger">Quick Search</button>
                <button className="btn btn-danger">Free Registration</button>
                <input type="text" className="form-control" placeholder="Name"/> <br />
                <label>
                    <input type="radio" name="gender" value="male" />Male
                </label>
                <label style={{ marginLeft: '10px' }}>
                    <input type="radio" name="gender" value="female" /> Female
                </label>
                <div id="date">
                    Day|Month|Year
                </div>
                <select placeholder="Religion">
                    <option>HINDU</option>
                    <option>MUSLIM</option>
                    <option>CHRISTIAN</option>
                    <option>OTHERS</option>
                </select>
                <select>
                    <option>Kapu</option>
                    <option>Kamma</option>
                </select>
                <input type="text" className="form-control" placeholder="Mobile No" />
                <input type="email" className="form-control" placeholder="Email" />
                <button className="btn btn-danger w-100"><span className="bi bi-arrow-bar-right"></span>Create Profile</button>
            </div>
        </div>
    )
}