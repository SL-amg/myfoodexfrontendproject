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
  const response = await instance.put("/accounts", userInfo);
  localStorage.setItem("token", response.token);
  console.log("login data", response);
  return response;
} // to check this page not working


//to get catogaries from the server
async function getAllCatogaries() {
  const data = await instance.get("/categories");
  console.log(data, "categories")
  return data;
}

//to get recipies from the server
async function getAllRecipies() {
  const data = await instance.get("/recipes");
  console.log(data, "recipies")
  return data;
}

//to get all ingredients from the server
async function getAllIngredients() {
  const data = await instance.get("/recipes");
  console.log(data, "recipies")
  return data;
}

  export {
    registerAccount, Login, getAllCatogaries, getAllRecipies, getAllIngredients
  };