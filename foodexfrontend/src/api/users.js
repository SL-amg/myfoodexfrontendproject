import instance from "./index";


// to register a new Account
const registerAccount = async (userInfo) => {
    const response = await instance.post("/accounts", userInfo);
    localStorage.setItem("token", response.token);
    console.log("login data", response);
    return response;
  };

// to Login to an Exisiting Account
async function Login(userInfo) {
  const response = await instance.post("/accounts", userInfo);
  localStorage.setItem("token", response.token);
  console.log("login data", response);
  return response;
}


  export {
    registerAccount, Login,
  };