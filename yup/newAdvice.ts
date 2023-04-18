import * as Yup from "yup";

export const newAdviceSchema = Yup.object({
  title: Yup.string()
    .required("title is required."),

  genre: Yup.array().of(Yup.string())
    .required("Genre is required."),

  duration: Yup.string()
    .required("Movie time is required.")
    .matches(/^\d+:\d+:\d+$/, "Must be like 'h:m:s'"),

  release_year: Yup.number()
    .required("Release year is required.")
    .max(4),

  imdb_rating: Yup.string()
    .required("IMDb rating is required.")
    .matches(/^([1-9](\.\d)?|10(\.0)?)\/10$/, "Must be like 'ratio/10'"),

  likes: Yup.number()
    .required("Like score is required."),

  dislikes: Yup.number()
    .required("Dislike score is required."),

  director: Yup.string()
    .required("Director name is required."),

  banner_url_first: Yup.string()
    .required("First Banner URL is required."),

  banner_url_second: Yup.string()
    .required("Second Banner URL is required."),
 
  summary: Yup.string()
    .required("Summary is required."),
 
  story_shortly: Yup.string()
    .required("Story is required."),
});
