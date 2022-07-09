import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';
import OAuth from '../components/OAuth';
import {Card, CardHeader, CardBody, CardFooter, H5, InputIcon, Checkbox, Button} from '@material-tailwind/react';
import DefaultNavbar from '../components/Navbar';
import SimpleFooter from '../components/SimpleFooter';
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
            navigate('/')
        }
        } catch (error) {
            toast.error('Invalid email or password')
        }
    }
    return (
        <Page>
            <DefaultNavbar/>
            <Container>
                <Card>
                    <CardHeader color="lightBlue">
                        <H5 color="white" style={{ marginBottom: 0 }}>
                            Login
                        </H5>
                    </CardHeader>

                    <CardBody>
                        <div className="mb-12 px-4 bg-bb">
                            <InputIcon
                                type="email"
                                color="lightBlue"
                                placeholder="Email Address"
                                iconName="email"
                            />
                        </div>
                        <div className="mb-8 px-4">
                            <InputIcon
                                type="password"
                                color="lightBlue"
                                placeholder="Password"
                                iconName="lock"
                            />
                        </div>
                        <div className="mb-4 px-4">
                            <Checkbox
                                color="lightBlue"
                                text="Remember Me"
                                id="remember"
                            />
                        </div>
                    </CardBody>
                    <CardFooter>
                        <div className="flex justify-center bg-bb">
                            <Button
                                color="lightBlue"
                                buttonType="link"
                                size="lg"
                                ripple="dark"
                            >
                                Get Started
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </Container>
            <SimpleFooter />
        </Page>
    );
}
export default Login
