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

  imdb_score: Yup.number()
    .required("IMBD score is required."),
    
  likes: Yup.number()
    .required("Like score is required."),

  dislikes: Yup.number()
    .required("Dislike score is required."),

  director: Yup.string()
    .required("IMBD score is required."),

  banner_url_first: Yup.string()
    .required("First Banner URL is required."),

  banner_url_second: Yup.string()
    .required("Second Banner URL is required."),
 
  summary: Yup.string()
    .required("Summary is required."),
 
  story_shortly: Yup.string()
    .required("Story is required."),
});
