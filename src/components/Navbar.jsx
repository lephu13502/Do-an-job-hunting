import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button, Typography } from "@material-tailwind/react";
 
export default function Example() {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 opacity-75"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
 
  return (
    <Navbar className="mx-auto max-w-screen-xl">
      <div className="container flex items-center justify-between text-blue-grey-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          A Job Đây Rồi
        </Typography>
        <ul className="flex items-center gap-6">
          <Typography as="li" variant="small" className="p-1 font-normal">
            <Link to="/">Về chúng tôi</Link>

          </Typography>
          <Typography as="li" variant="small" className="p-1 font-normal">
            <Link to="/about">Tìm nhân sự</Link>
          </Typography>
          <Typography as="li" variant="small" className="p-1 font-normal">
            <Link to="/contact">Tìm công việc</Link>
          </Typography>
        </ul>
        <ul className="flex items-right gap-6">
          <Button variant="gradient" size="sm">
            Đăng nhập
          </Button>
          <Button variant="gradient" size="sm" color="amber">
            Đăng ký
          </Button>
        </ul>
      </div>
    </Navbar>
  );
}
