import {Typography} from '@material-tailwind/react';

export default function Header() {
    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
            <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <Typography className="text-white text-3xl font-semibold">
                            Contact Us
                        </Typography>
                        <div className="text-gray-200">
                            <Typography className="text-white text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Maecenas eget nisl id libero tincidunt sodales.
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}