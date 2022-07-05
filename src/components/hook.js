import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

import { AppConstant } from "../constants/constants"

const useLogin = () => {
    const [userName, setUserName] = useState(" ");
    const [password, setPassword] = useState("");

   const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const onUsernameChange = (event) => {
        const value = event.target?.value || ""
        setUserName(value);
    };

    const onPasswordChange = (event) => {
        const value = event.target?.value || ""
        setPassword(value);
    };
    
    async function validateCredenitals() {
        try {
            const res = await axios.get(AppConstant.fakeApi.users);

            const userNameIsValid = res.data.users.some(
                (obj) => obj.userName === userName
            );
            const passwordIsValid = res.data.users.some(
                (obj) => obj.password === password
            );

            if (userNameIsValid && passwordIsValid) {
                localStorage.setItem("user", userName);

                navigate(AppConstant.navigation.dashboard);

                enqueueSnackbar("Login Successfully", { variant: "success" });
            } else {
                enqueueSnackbar("Username or password did not match", {
                    variant: "error",
                });
            }
        } catch (err) {
            enqueueSnackbar("Something went wrong", {
                variant: "error",
            });
            return err;
        }
    }


    return {
        userName,
        password,
        setUserName,
        setPassword,
        onUsernameChange,
        onPasswordChange,
        validateCredenitals
    };

}

export default useLogin;