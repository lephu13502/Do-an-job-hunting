import {H3, Paragraph, Input, Textarea, Button} from '@material-tailwind/react';

export default function Form() {
    return (
        <div className="flex flex-wrap justify-center mt-24">
            <div className="w-full lg:w-8/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                    <div className="flex-auto p-5 lg:p-10">
                        <div className="w-full text-center">
                            <H3 color="gray">Want to work with us?</H3>
                            <Paragraph color="blueGray">
                                Complete this form and we will get back to you
                                in 24 hours.
                            </Paragraph>
                        </div>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="flex gap-8 mt-16 mb-12">
                                <Input
                                    type="text"
                                    placeholder="Full Name"
                                    color="lightBlue"
                                />
                                <Input
                                    type="email"
                                    placeholder="Email Address"
                                    color="lightBlue"
                                />
                            </div>

                            <Textarea color="lightBlue" placeholder="Message" />

                            <div className="flex justify-center mt-10">
                                <Button color="lightBlue" ripple="light">
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
