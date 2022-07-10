
import Navbar from '../components/Navbar';
import SimpleFooter from '../components/SimpleFooter';
import Page from '../components/login/Page';
import Container from '../components/login/Container';
import {Card, CardHeader, CardBody, CardFooter, Typography, Button, IconButton} from '@material-tailwind/react';
export default function Register() {
    return (
        <Page>
            <Navbar/>
            <Container>
                <Card>
                    <CardHeader color="lightBlue">
                        <Typography className="text-blue-gray-800 text-3xl font-semibold">
                            Register
                        </Typography>
                    </CardHeader>

                    <CardBody>
                        <div className="mb-10 px-4">
                            <IconButton name="person" size="xl" color="lightBlue" />
                        </div>
                        <div className="mb-10 px-4">
                            <IconButton name="email" size="xl" color="lightBlue" />
                        </div>
                        <div className="mb-4 px-4">
                            <IconButton name="password" size="xl" color="lightBlue" />
                        </div>
                    </CardBody>
                    <CardFooter>
                        <div className="flex justify-center">
                            <Button
                                color="lightBlue"
                                buttonType="link"
                                size="lg"
                                ripple="dark"
                            >
                                Register
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </Container>
            <SimpleFooter />
        </Page>
    );
}
