import instance from "./index";

//Users Hub-----------------------------------------------------
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
    registerAccount, Login, getAllCatogaries, getAllRecipies, getAllIngredients
  };