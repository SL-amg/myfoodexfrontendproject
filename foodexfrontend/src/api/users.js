import instance from "./index";

//Users Hub-----------------------------------------------------
//to get all users
async function getAllUsers() {
  const data = await instance.get("/accounts");
  console.log(data, "users")
  return data;
}

// to register a new Account
const registerAccount = async (userInfo) => {
    const response = await instance.post("/accounts/signup", userInfo);
    localStorage.setItem("token", response.token);
    console.log("login data", response);
    return response;
  };

// to Login to an Exisiting Account
async function Login(userInfo) {
  const response = await instance.post("/accounts/signin", userInfo);
  localStorage.setItem("token", response.token);
  console.log("login data", response);
  return response;
} // to check this page not working

//to get user details
async function getUserDetails() {
  const data = await instance.get("/accounts/details");
  console.log(data, "users")
  return data;
}

//Catgoires Hub-----------------------------------------------------
//to get catogaries from the server
async function getAllCatogaries() {
  const data = await instance.get("/categories");
  console.log(data, "categories")
  return data;
}

//Recipies Hub -----------------------------------------------------
//to get recipies from the server
async function getAllRecipies() {
  const data = await instance.get("/recipes");
  console.log(data, "recipies")
  return data;
}


//Ingredients Hub-----------------------------------------------------
//to get all ingredients from the server

async function getAllIngredients() {
  const data = await instance.get("/ingredients");
  console.log(data, "ingredients")
  return data;
}

  export {
    registerAccount, Login, getAllCatogaries, getAllIngredients, getAllRecipies, getAllUsers, getUserDetails };