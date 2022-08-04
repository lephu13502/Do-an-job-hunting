import {Typography,Button, IconButton} from '@material-tailwind/react';

export default function LandingTeamCard({ img, name, position }) {
    return (
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
                <img src={img} alt="img" />
                <div className="pt-6 text-center">
                    <Typography className="text-blue-gray-800 text-xl font-semibold">{name}</Typography>
                    <Typography className="text-blue-gray-800 text-sm">{position}</Typography>
                    <div className="flex items-center justify-center">
                        <IconButton name="facebook" size="lg" color="light-blue" />
                        <IconButton name="twitter" size="lg" color="light-blue" />
                        <IconButton name="instagram" size="lg" color="light-blue" />
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
