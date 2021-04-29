import * as yup from "yup";

export let userschema = yup.object().shape({
  name: yup.string("name is required"),
});
