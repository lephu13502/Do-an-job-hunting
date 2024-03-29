import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import googleIcon from "../assets/svg/googleIcon.svg";

function OAuth() {
  const navigate = useNavigate();
  const location = useLocation();
  // const onGoogleClick = async () => {
  //   try {
  //     const auth = getAuth();
  //     const provider = new GoogleAuthProvider();
  //     const result = await signInWithPopup(auth, provider);
  //     const user = result.user;
  //     const docRef = doc(db, "users", user.uid);
  //     const docSnap = await getDoc(docRef);
  //     if (!docSnap.exists) {
  //       await setDoc(doc(db, "users", user.uid), {
  //         name: user.displayName,
  //         email: user.email,
  //         timestamp: serverTimestamp(),
  //       });
  //     }
  //     navigate("/explore");
  //   } catch (error) {
  //     toast.error("Couldnt authorize with google");
  //   }
  // };
  return (
    <div className="socialLogin">
      <p className="social">
        Đăng {location.pathname === "/register" ? "ký" : "nhập"} bằng tài khoản
      </p>
      <button className="socialIconDiv">
        <img className="socialIconImg" src={googleIcon} alt="google" />
      </button>
    </div>
  );
}

export default OAuth;
