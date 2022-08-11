import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import OAuth from "../components/OAuth";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import Page from "../components/login/Page";
import Container from "../components/login/Container";
import apiRequest from "../redux/apiRequest";
import { useDispatch } from "react-redux";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        email: email,
        username: username,
        password: password,
      };
      apiRequest.registerRecruiter(newUser, dispatch, navigate);
      toast.success("Register Successfully");
    } catch (error) {
      toast.error("Wrong registeration");
      console.log(error);
    }
  };
  return (
    <Page>
      <Container>
        <Card>
          <div className="flex justify-center bg-bb">
            <Typography variant="h5" color="black">
              Đăng ký
            </Typography>
          </div>
          <CardBody>
            <form onSubmit={onSubmit}>
              <div className="mb-12 px-4 bg-bb">
                <Input
                  type="text"
                  className="nameInput"
                  placeholder="Tên nhà tuyển dụng"
                  id="name"
                  onChange={(e) => setUsername(e.target.value)}
                  variant="standard"
                />
              </div>
              <div className="mb-8 px-4">
                <Input
                  type="email"
                  className="emailInput"
                  placeholder="Email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  variant="standard"
                />
              </div>
              <div className="passwordInputDiv">
                <div className="mb-4 px-4">
                  <Input
                    type={showPassword ? "text" : "password"}
                    className="passwordInput"
                    placeholder="Mật khẩu"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    variant="standard"
                  />
                  <img
                    src={visibilityIcon}
                    alt="show password"
                    className="showPassword"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                </div>
              </div>
              <div className="flex justify-center bg-bb">
                <Button
                  type="submit"
                  color="light-blue"
                  size="lg"
                  ripple={true}
                  variant="gradient"
                >
                  Đăng ký
                </Button>
              </div>
            </form>
            <OAuth />
            <Link to="/login" className="registerLink">
              Đã có tài khoản? Đăng nhập ngay
            </Link>
            <Link to="/register" className="registerLink">
              Đăng ký ứng viên
            </Link>
          </CardBody>
        </Card>
      </Container>
    </Page>
  );
}
export default Register;
