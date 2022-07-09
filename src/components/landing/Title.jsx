import {H3, LeadText} from '@material-tailwind/react';

export default function Title({ heading, children }) {
    return (
        <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
                <H3 color="gray">{heading}</H3>
                <LeadText color="blueGray">{children}</LeadText>
            </div>
        </div>
    );
}
