import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../state/store";
import {attemptLogin} from "../../state/actions/user/userSlice";

const Login = () => {
    const dispatch = useDispatch<AppDispatch>();

    const handleTest = () => {
        dispatch(attemptLogin())
    }

    return(
        <>
            <Box textAlign={'center'} p={2}>
                <Typography component={'h1'} p={2}>Test Saga!</Typography>
                <Button onClick={handleTest} variant={'contained'}>DISPATCH</Button>
            </Box>
        </>
    )
}

export default Login;
