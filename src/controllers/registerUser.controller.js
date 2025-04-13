import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.util.js";

const registerUser = asyncHandler(async (req, res) => {
  const {
    username,
    first_name,
    last_name,
    email,
    password,
    contact,
    blood_group,
    birth_date,
    gender,
    weight,
    height,
  } = req.body;

  //validaiton
  if (
    [
      username,
      first_name,
      last_name,
      email,
      password,
      contact,
      blood_group,
      birth_date,
    ].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are must required");
  }

  // create user object
  const user = await User.create({
    username: username.toLowerCase(),
    first_name,
    last_name,
    email,
    password,
    contact,
    blood_group,
    birth_date,
    gender,
    height,
    weight,
  });

  if (!user) {
    throw new ApiError(500, "error while regostering user");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, user, "User Created Succesfully"));
});

export { registerUser };
