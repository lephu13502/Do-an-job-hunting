import StatusCard from './StatusCard';
import Teamwork from '../../assets/img/teamwork.jpeg';
import {Card, CardBody, IconButton ,Typography} from '@material-tailwind/react';

export default function WorkingSection() {
    return (
        <section className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap relative z-50">
                    <StatusCard color="red" icon="stars" title="Awarded Agency">
                        Divide details about your product or agency work into
                        parts. A paragraph describing a feature will be enough.
                    </StatusCard>
                    <StatusCard
                        color="light-blue"
                        icon="autorenew"
                        title="Free Revisions"
                    >
                        Keep you user engaged by providing meaningful
                        information. Remember that by this time, the user is
                        curious.
                    </StatusCard>
                    <StatusCard
                        color="teal"
                        icon="fingerprint"
                        title="Verified Company"
                    >
                        Write a few lines about each one. A paragraph describing
                        a feature will be enough. Keep you user engaged!
                    </StatusCard>
                </div>

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <Typography className="text-white text-6xl">
                                <IconButton name="person" size="lg" color="light-blue" />
                            </Typography>
                        </div>
                        <Typography className="text-blue-gray-800 text-xl font-semibold">
                            Our Team
                        </Typography>
                        <Typography className="text-blue-gray-800 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas eget nisl id libero tincidunt sodales.
                        </Typography>
                        <Typography className="text-blue-gray-800 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas eget nisl id libero tincidunt sodales.
                        </Typography>
                        <a
                            href="#pablo"
                            className="font-medium text-light-blue-500 mt-2 inline-block"
                        >
                            Read More
                        </a>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                        <img src={Teamwork} alt="Teamwork" />
                            <CardBody>
                                <Typography className="text-blue-gray-800 text-xl font-semibold">
                                    Teamwork
                                </Typography>
                                <Typography className="text-blue-gray-800 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Maecenas eget nisl id libero
                                    tincidunt sodales.
                                </Typography>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
