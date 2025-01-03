// import Validator from "validator";
import isEmpty from "../is-empty";

export const validateUploadProfileImage = data => {
  let errors = {};

  if (isEmpty(data.fileName)) {
    errors.fileName = "File name is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
