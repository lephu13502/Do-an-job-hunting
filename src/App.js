import React, {useState} from 'react'
import LoginPage from './components/login/LoginPage';

function App() {
  const adminUser = {
    email: "abc@admin.com",
    password: "abc123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
//lưu input ng dùng nhập 
    if(details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in!"); //chỉ hiện ở console 
      setUser({
        name: details.name,
        email: details.email
      })
    }
    else {
      console.log("Error! Please try again.");
      setError("Error! Please try again.");
    }
  }

  const Logout = details => {
    console.log("Logout");
//chuyển về trạng thái mặc định
    setUser({name: "", email: ""});
  }

  return (
    <div className="App">
      {(user.email != "") ? (
        <div className = "welcome">
          <h2>Welcome, <span>{user.name}!</span> Wish you all the best.</h2>
          <button onClick={Logout}>Sign Out</button>
        </div>
      ) : (
        <LoginPage Login={Login} error={error}/>
      )
      }
    </div>
  );
}

export default App;
