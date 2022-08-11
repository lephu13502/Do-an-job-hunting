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

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        username: username,
        password: password,
      };
      apiRequest.loginCandidate(newUser, dispatch, navigate);
      toast.success("Login Successfully");
    } catch (error) {
      toast.error("Invalid username or password");
    }
  };
  return (
    <Page>
      <Container>
        <Card>
          <div className="flex justify-center bg-bb">
            <Typography variant="h5" color="black">
              Đăng nhập
            </Typography>
          </div>
          <CardBody>
            <form onSubmit={onSubmit}>
              <div className="mb-12 px-4 bg-bb">
                <Input
                  type="username"
                  className="emailInput"
                  placeholder="Tên đăng nhập"
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                  variant="standard"
                />
              </div>
              <div className="passwordInputDiv">
                <div className="mb-8 px-4">
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
              <Link to="/forgot-password" className="forgotPasswordLink">
                Quên mật khẩu
              </Link>
              <div className="flex justify-center bg-bb">
                <Button
                  type="submit"
                  color="light-blue"
                  size="lg"
                  ripple={true}
                  variant="gradient"
                >
                  Đăng nhập
                </Button>
              </div>
            </form>
            <OAuth />
            <Link to="/register" className="registerLink">
              Không có tài khoản? Đăng ký ngay
            </Link>
          </CardBody>
        </Card>
      </Container>
    </Page>
  );
}
export default Login;
