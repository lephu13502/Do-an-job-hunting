import {useState} from 'react';
import {Link} from 'react-router-dom';
import {getAuth, sendPasswordResetEmail} from 'firebase/auth';
import {toast} from 'react-toastify';
import {Card, CardBody, Typography, Button, Input} from '@material-tailwind/react';
import SimpleFooter from '../components/SimpleFooter';
import Page from '../components/login/Page';
import Container from '../components/login/Container';

function ForgotPassword() {
    const [email, setEmail] = useState('');

    const onChange = (e) => {
        setEmail(e.target.value);
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const auth = getAuth();
            await sendPasswordResetEmail(auth, email)
            toast.success('Email sent successfully')
        } catch (error) {
            toast.error('Could not send email')
        }
    }
    return (
        <Page>
            <Container>
                <Card>
                    <div className="flex justify-center bg-bb">
                        <Typography variant="h5" color="Black">
                            Forgot Password
                        </Typography>
                    </div>
                    <CardBody>
                        <form onSubmit={onSubmit}>
                            <div className="mb-12 px-4 bg-bb">
                                <Input type="email" className="emailInput" placeholder="Email" id="email" 
                                value={email} onChange={onChange} variant="standard"/>
                            </div>
                            <Link className='forgotPasswordLink' to='/login'>
                                Sign in
                            </Link>
                            <div className="flex justify-center bg-bb">
                                <button>
                                    <Button type="submit" color="light-blue" buttonType="link" size="lg" ripple="true" variant="gradient">
                                        Send Reset Link
                                    </Button>
                                </button>
                            </div>
                        </form>
                    </CardBody>
                </Card>
            </Container>
            <SimpleFooter />
        </Page>
    );
}

export default ForgotPassword