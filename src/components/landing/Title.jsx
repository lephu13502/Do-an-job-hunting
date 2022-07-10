import {Typography} from '@material-tailwind/react';

export default function Title({ heading, children }) {
    return (
        <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
                <Typography className="text-blue-gray-800 text-3xl font-semibold">
                    {heading}
                </Typography>
                <Typography className="text-blue-gray-800 text-sm">{children}</Typography>
            </div>
        </div>
    );
}
