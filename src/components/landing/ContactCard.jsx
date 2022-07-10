import {Typography} from '@material-tailwind/react';

export default function ContactCard({ icon, title, children }) {
    return (
        <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-blue-gray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center mb-6">
                <Typography className="text-6xl">{icon}</Typography>
            </div>
            <Typography className="text-blue-gray-800 text-xl font-semibold">{title}</Typography>
            <Typography className="text-blue-gray-800 text-sm">{children}</Typography>
        </div>
    );
}