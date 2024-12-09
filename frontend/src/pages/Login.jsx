import React from "react";
import { TextField, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  function handlelogin() {
    navigate("/");
  }

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen flex bg-slate-50">
      <div className="hidden md:flex md:w-1/3 lg:w-1/2 bg-slate-50 justify-center items-center flex-col p-8">
        <img
          src="https://via.placeholder.com/300x400"
          alt="Illustration"
          className="max-w-full h-auto mb-8"
        />
        <h2 className="text-3xl font-bold mb-2">Hi, Welcome back</h2>
        <p className="text-gray-600 text-center">
          More effectively with optimized workflows.
        </p>
      </div>
      <div className="flex flex-1 justify-center items-center bg-white p-8">
        <div className="w-full max-w-md">
          <div className="flex justify-between items-center mb-8">
            <IconButton
              className="bg-white hover:bg-gray-100 "
              onClick={handleClick}
            >
              <ArrowBackIcon />
            </IconButton>
            <a href="/help" className="text-gray-600 hover:text-gray-900">
              Need help?
            </a>
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 text-black">
              Sign in to your account
            </h2>
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a href="/register" className="text-blue-500 hover:underline">
                Get started
              </a>
            </p>
          </div>
          <form noValidate>
            <div className="mb-4">
              <TextField
                fullWidth
                label="Email address"
                variant="outlined"
                className="bg-white"
              />
            </div>
            <div className="flex justify-end mb-4">
              <a
                href="/forgot-password"
                className="text-gray-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <div className="mb-6 relative">
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                className="bg-white"
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={handleClickShowPassword}
                      className="focus:outline-none"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 "
                onClick={handlelogin}
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="text-center text-gray-500 mb-4">OR</div>
          <div className="flex justify-center space-x-4">
            <IconButton className="bg-white hover:bg-gray-100">
              <GoogleIcon fontSize="large" />
            </IconButton>
            <IconButton className="bg-white hover:bg-gray-100">
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton className="bg-white hover:bg-gray-100">
              <CloseIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
