import {Input, Textarea, Button, Typography} from '@material-tailwind/react';

export default function Form() {
    return (
        <div className="flex flex-wrap justify-center mt-24">
            <div className="w-full lg:w-8/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                    <div className="flex-auto p-5 lg:p-10">
                        <div className="w-full text-center">
                            <Typography className="text-blue-gray-800 text-xl font-semibold">
                                Contact Us
                            </Typography>
                            <Typography className="text-blue-gray-800 text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Maecenas eget nisl id libero tincidunt sodales.
                            </Typography>
                        </div>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="flex gap-8 mt-16 mb-12">
                                <Input
                                    type="text"
                                    placeholder="Full Name"
                                    color="light-blue"
                                />
                                <Input
                                    type="email"
                                    placeholder="Email Address"
                                    color="light-blue"
                                />
                            </div>

                            <Textarea color="light-blue" placeholder="Message" />

                            <div className="flex justify-center mt-10">
                                <Button color="light-blue" >
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
