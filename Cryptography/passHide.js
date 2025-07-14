import bcrypt from "bcrypt";

export const encryptPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    if (password !== hashedPassword) return hashedPassword;
  } catch (error) {
    throw new Error(
      "Bcrypt failed to hashed the password please try later : ",
      error
    );
  }
};

export const decryptPassword = async (userPassword, encryptPassword) => {
  try {
    const decrypt = await bcrypt.compare(userPassword, encryptPassword);
    return decrypt;
  } catch (error) {
    throw new Error(
      "Some error occured while decrypting the password : ",
      error
    );
  }
};
