import { Link } from 'react-router-dom';
import { NavDropdown, Nav, Navbar, DropdownButton, Dropdown } from 'react-bootstrap';
import { Avatar } from "@material-tailwind/react";
import logo from '../assets/logo1-modified.png';
export default function UserNav() {
  return (
    <Navbar bg="light" expand="lg">
      <div className="container flex items-center justify-between">
        <Navbar.Brand>
          <Link to="/">
            <img alt="" src={logo} width="50" height="50" className="d-inline-block align-center"/>{' '}
            A Job Đây Rồi
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ul className="flex items-center gap-6">
          <NavDropdown title="Tìm công việc" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/jobs">
                Xem bảng tin
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/post-status">
                Đăng trạng thái
              </Link>
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="/about">Về chúng tôi</Nav.Link>
        </ul>
        <ul className="flex items-right gap-6">
        <DropdownButton align="end">
          <Avatar src={logo} />
          Phú Lê
          <Dropdown.Item href="/profile">Hồ sơ của tôi</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        </ul>
      </div>
    </Navbar>
  );
}
