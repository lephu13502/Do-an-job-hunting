import axios from "axios"
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from "./authSlice"

const apiRequest = ({
    loginCandidate: async(user, dispatch, navigate) => {
        dispatch(loginStart())
        try {
            const res = await axios.post("http://localhost:8000/auth/candidate/login", user)
            dispatch(loginSuccess(res.data))
            navigate("/explore")
        } catch (error) {
            dispatch(loginFailed())
        }
    },
    registerCandidate: async(user, dispatch, navigate) => {
        dispatch(registerStart())
        try {
            await axios.post("http://localhost:8000/auth/candidate/register", user)
            dispatch(registerSuccess())
            navigate("/explore")
        } catch (error) {
            dispatch(registerFailed())
        }
    },
    loginRecruiter: async(user, dispatch, navigate) => {
        dispatch(loginStart())
        try {
            const res = await axios.post("http://localhost:8000/auth/recruiter/login", user)
            dispatch(loginSuccess(res.data))
            navigate("/explore")
        } catch (error) {
            dispatch(loginFailed())
        }
    },
    registerRecruiter: async(user, dispatch, navigate) => {
        dispatch(registerStart())
        try {
            await axios.post("http://localhost:8000/auth/recruiter/register", user)
            dispatch(registerSuccess())
            navigate("/explore")
        } catch (error) {
            dispatch(registerFailed())
        }
    },
})
export default apiRequest
