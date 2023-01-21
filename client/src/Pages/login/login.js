import './login.css';
import Navbar from '../../Components/Navbar1p2';
import password from '../../assets/images/login/password.png';
import login from '../../assets/images/login/login.png'
import { BrowserRouter as Router} from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Checkbox } from '@mui/material';
import google from '../../assets/images/login/google.png';
import facebook from '../../assets/images/login/facebook.png';
import twitter from '../../assets/images/login/twitter.png';
import Signup from './signup.js';
import { useHistory } from "react-router-dom";
const Login=()=>{
    const history = useHistory();
    return(
    <Router>
        <div className='signbody'>
        <Navbar/>
        <div className="loginbody">
            <div className='loginleft'>
                <div className='loginbox'>
                    <p className='ltext1'>Hello!</p>
                    <p className='ltext2'>Enter your personal details and start journey with us</p>
                    <br></br>
                    <button className='lbutton1' type="Signup" onClick={() => history.push('/signup.js')}>Sign Up</button>
                </div>
            </div>
            <div className='loginright'>
                <p className='ltext3'>Log In</p>
                <form className="form" id="login">
                    <div className="formlogininput">
                        <div className='lcontainer'>
                            <p className='ltextinside'>Login email or phone number</p>
                            <input type="text" className='lfield1' id="lusername" style={{backgroundImage:`url(${login} )`}}></input>
                        </div>
                        <div className='lcontainer'>
                            <p className='ltextinside'>Password</p>
                            <input type="text" className='lfield1' id="lpassword" style={{backgroundImage:`url(${password})`}}></input>
                        </div>
                        <div className='lcontainer'>
                            <p className='ltextoutside'>You are?</p>
                            <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="Alumni"
                                name="radio-buttons-group"
                                >
                                <div className='loptions'>
                                <FormControlLabel value="Alumni" control={<Radio />} label={<p className='signtext'>Alumni</p>}/>
                                <FormControlLabel value="Admin" control={<Radio />} label={<p className='signtext'>Admin</p>} />
                                <FormControlLabel value="GS" control={<Radio />} label={<p className='signtext'>GS</p>} />
                                <FormControlLabel value="Others" control={<Radio />} label={<p className='signtext'>Others</p>}/>
                                </div>
                            </RadioGroup>
                            </FormControl>
                        </div>
                        <button className="loginbutton" type="login">Log In</button>
                        <div className='lremember'>
                                <FormControlLabel value="remember" control={<Checkbox />} label="Remember Me" labelPlacement="start" />
                        </div>
                        <div className='ldivider'>
                            <div className='ldivide'></div>
                            <p>or login with</p>
                            <div className='ldivide'></div>
                        </div>
                        <div className='lsocials'>
                            
                            <a href="#">
                            <div  className="lsmallsocials" style={{height: '3.2vw',width: '3.2vw',borderRadius: '300px',border:'solid 1px black'}}>
                            <img src={google}/></div>
                            </a>
                            <a href="#">
                            <div  className="lsmallsocials" style={{height: '3.2vw',width: '3.2vw',borderRadius: '300px',border:'solid 1px black'}}>
                            <img src={facebook}/></div>
                            </a>
                            <a href="#">
                            <div  className="lsmallsocials" style={{height: '3.2vw',width: '3.2vw',borderRadius: '300px',border:'solid 1px black'}}>
                            <img src={twitter}/></div>
                            </a>
                        </div>
                        <div style={{display:'flex',padding:"20px"}}>
                            <a href="#" style={{color: "black",textDecoration:'none'}}><p>forgot email or password?</p></a>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Router>
    );
}

export default Login;