import StatusCard from './StatusCard';
import Teamwork from '../../assets/img/teamwork.jpeg';
import {Card, CardBody, IconButton ,Typography} from '@material-tailwind/react';

export default function WorkingSection() {
    return (
        <section className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap relative z-50">
                    <StatusCard 
                        color="yellow" 
                        icon1="Marketing"
                        title="20 công việc"
                    >
                        Là ngành quan trọng nhất của những doanh nghiệp,
                        với đa dạng vị trí ứng tuyển.
                    </StatusCard>
                    <StatusCard
                        color="blue"
                        icon="IT"
                        title="37 công việc"
                    >
                        Một trong những ngành có xu hướng phát triển và phổ biến rộng rãi,
                        với nhiều cơ hội việc làm.
                    </StatusCard>
                    <StatusCard
                        color="green"
                        icon1="Design"
                        title="17 công việc"
                    >
                        Ngành hiện có vai trò quan trọng trong nhiều công việc như Marketing,PR,... 
                    </StatusCard>
                </div>

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <Typography className="text-black text-6xl text-center">
                                <IconButton name="person" size="sm" color="light-blue"/>
                                Ajob
                            </Typography>
                        </div>
                        <Typography className="text-blue-gray-800 text-xl font-semibold">
                            Team chúng tôi
                        </Typography>
                        <Typography className="text-blue-gray-800 text-sm">
                            Với nhu cầu tìm việc và cạnh tranh ngày càng cao, đội ngũ AJob với sứ mệnh cung cấp đến bạn một trang web có thể dễ dàng tìm kiếm cũng như tìm hiểu các công việc phù hợp.  
                        </Typography>
                        <Typography className="text-blue-gray-800 text-sm">
                            AJob mong muốn được tạo nên một môi trường tìm việc làm an toàn và đáng tin cậy, cũng như nguồn việc làm phong phú và đa dạng. 
                        </Typography>
                        <a
                            href="#pablo"
                            className="font-medium text-light-blue-500 mt-2 inline-block"
                        >
                            Đọc thêm
                        </a>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                        <img src={Teamwork} alt="Teamwork" />
                            <CardBody>
                                <Typography className="text-blue-gray-800 text-xl font-semibold">
                                    Mục tiêu
                                </Typography>
                                <Typography className="text-blue-gray-800 text-sm">
                                    Đam mê với sản phẩm và dịch vụ của mình, coi những trở ngại là những thách thức, cơ hội phát triển mới.
                                </Typography>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
