import * as Yup from "yup";

export const newAdviceSchema = Yup.object({
  name: Yup.string()
    .required("Password is required."),

  genre: Yup.string()
    .required("Genre is required."),

  time: Yup.string()
    .required("Movie time is required."),

  publish_year: Yup.number()
    .required("Publish year is required."),

  imbd_score: Yup.number()
    .required("IMBD score is required."),

  director: Yup.string()
    .required("IMBD score is required."),

  banner_url: Yup.string()
    .required("Banner URL is required."),
 
  summary: Yup.string()
    .required("Summary is required."),
 
  story_shortly: Yup.string()
    .required("Story is required."),
});
