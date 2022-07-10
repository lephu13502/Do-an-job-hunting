import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { setDoc,doc,serverTimestamp} from 'firebase/firestore';
import {db} from '../firebase.config'
import visibilityIcon from '../assets/svg/visibilityIcon.svg';
import OAuth from '../components/OAuth';
import {Card, CardBody, Typography, Button, Input} from '@material-tailwind/react';
import SimpleFooter from '../components/SimpleFooter';
import Page from '../components/login/Page';
import Container from '../components/login/Container';

function Register() {
    const [showPassword,setShowPassword] = useState(false) 
    const [formData,setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const {name, email, password} = formData
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
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            updateProfile(auth.currentUser, {displayName: name})
            const formDataCopy = {...formData}
            delete formDataCopy.password
            formDataCopy.timestamp = serverTimestamp()
            await setDoc(doc(db, 'users', user.uid), formDataCopy)
            navigate('/')
        } catch (error) {
            toast.error('Wrong registeration')
        }

    }
    return (
        <Page>
            <Container>
                <Card>
                    <div className="flex justify-center bg-bb">
                        <Typography variant="h5" color="Black">
                            Register
                        </Typography>
                    </div>
                    <CardBody>
                        <form onSubmit={onSubmit}>
                            <div className="mb-12 px-4 bg-bb">
                                <Input type="text" className="nameInput" placeholder="Name" id="name" 
                                value={name} onChange={onChange} variant="standard"/>
                            </div>
                            <div className="mb-8 px-4">
                                <Input type="email" className="emailInput" placeholder="Email" id="email" 
                                value={email} onChange={onChange} variant="standard"/>
                            </div>
                            <div className="passwordInputDiv">
                                <div className="mb-4 px-4">
                                    <Input type={showPassword ? 'text' : 'password'} className='passwordInput' placeholder='Password' id='password' 
                                    value={password} onChange={onChange} variant="standard"/>
                                    <img src={visibilityIcon} alt='show password' className="showPassword" 
                                    onClick={() => setShowPassword((prevState)=>!prevState)}/>
                                </div>
                            </div>
                            <div className="flex justify-center bg-bb">
                                <button>
                                    <Button type="submit" color="light-blue" buttonType="link" size="lg" ripple="true" variant="gradient">
                                        Register
                                    </Button>
                                </button>
                                
                            </div>
                        </form>
                        <OAuth/>
                        <Link to='/login' className='registerLink'>
                            Already had an account? Login instead
                        </Link>
                    </CardBody>
                </Card>
            </Container>
            <SimpleFooter />
        </Page>
    );
}
export default Register
