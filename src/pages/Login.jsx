import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import visibilityIcon from '../assets/svg/visibilityIcon.svg';
import OAuth from '../components/OAuth';
import {Card, CardBody, Typography, Button, Input} from '@material-tailwind/react';
import Page from '../components/login/Page';
import Container from '../components/login/Container';

function Login() {
    const [showPassword,setShowPassword] = useState(false) 
    const [formData,setFormData] = useState({
        email: '',
        password: ''
    })
    const {email,password} = formData
    const navigate = useNavigate()
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value

        }))
    }
    const onSubmit = async(e) => {
        e.preventDefault()
        try {
        const auth =getAuth()
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        if (userCredential.user) {
            navigate('/explore')
        }
        } catch (error) {
            toast.error('Invalid email or password')
        }
    }
    return (
        <Page>
            <Container>
                <Card>
                    <div className="flex justify-center bg-bb">
                        <Typography variant="h5" color="black">
                            Đăng nhập
                        </Typography>
                    </div>
                    <CardBody>
                        <form onSubmit={onSubmit}>
                            <div className="mb-12 px-4 bg-bb">
                                <Input type="email" className="emailInput" placeholder="Email" id="email" 
                                value={email} onChange={onChange} variant="standard"/>
                            </div>
                            <div className="passwordInputDiv">
                                <div className="mb-8 px-4">
                                    <Input type={showPassword ? 'text' : 'password'} className='passwordInput' placeholder='Mật khẩu' id='password' 
                                    value={password} onChange={onChange} variant="standard"/>
                                    <img src={visibilityIcon} alt='show password' className="showPassword" 
                                    onClick={() => setShowPassword((prevState)=>!prevState)}/>
                                </div>
                            </div>
                            <Link to='/forgot-password' className='forgotPasswordLink'>
                                Quên mật khẩu
                            </Link>
                            <div className="flex justify-center bg-bb">
                                <Button type="submit" color="light-blue" size="lg" ripple={true} variant="gradient">
                                    Đăng nhập
                                </Button>
                            </div>
                        </form>
                        <OAuth/>
                        <Link to='/register' className='registerLink'>
                            Không có tài khoản? Đăng ký ngay
                        </Link>
                    </CardBody>
                </Card>
            </Container>
        </Page>
    );
}
export default Login
