import axios from "axios";

const API = "http://localhost/";

const UserSignIn = async (id = "", pw = "") => {
    try {
        const response = await axios.post(API + "sign/in/user", {
            id: id,
            pw: pw,
        });
        return response.data;
    } catch (err) {
        console.error("요청 중 오류 발생", err);
        return { err: err };
    }
};

const VerifyToken = async (token = "") => {
    try {
        const response = await axios.post(API + "sign/verify/token", {
            token: token,
        });
        return response.data;
    } catch (err) {
        console.error("요청 중 오류 발생", err);
        return { err: err };
    }
};

export { UserSignIn, VerifyToken };
