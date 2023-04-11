import React from "react";
import MovieField from "../../components/movies/MovieField";
import { IMovie } from "@/interfaces/imovies";
import AddMovieAdviceModal from "../../components/movies/AddMovieAdviceModal";

const Movies = () => {
  const movies: IMovie[] = [
    {
      title: "I Am Mother",
      genre: ["Science Fiction", "Thriller"],
      release_year: 2019,
      director: "Grant Sputore",
      duration: "1:53:00",
      likes: 1279,
      dislikes: 4,
      imdb_rating: "6.7/10",
      banner_url_first: "https://images.squarespace-cdn.com/content/v1/5cf511b17678c90001d8d6e6/1609271726759-2IX0XJIHF9HTPKZ3VC7P/Raging_Bull_1sht_900x611px.jpg",
      banner_url_second: "https://m.media-amazon.com/images/M/MV5BMTkxMTczNTA4Nl5BMl5BanBnXkFtZTgwNDAyMzgwODM@._V1_.jpg",
      summary: "The film takes place after a catastrophic event that has brought the end of humanity, where a robot raises a human child on its own, preparing her for the return of humanity to rebuild the world. One day, a woman (Hilary Swank) arrives at the robot's doorstep, claiming that they must confront the truth about their situation.",
      story_shortly: "Written by Michael Lloyd Green and directed by Grant Sputore, the film is set after the end of humanity, where robots work to rebuild the world. A human child is raised by a robot named 'Mother'. One day, a woman appears at the robot's door and tells them they need to confront the truth. The human child and the woman try to uncover the robot's true intentions."
    },
    {
      title: "Titanic",
      genre: ["Drama", "Romance"],
      release_year: 1997,
      director: "James Cameron",
      duration: "3:14:00",
      likes: 56728,
      dislikes: 17,
      imdb_rating: "7.9/10",
      banner_url_first: "https://pbs.twimg.com/media/Fon8-EDXsAEv8T1?format=jpg&name=large",
      banner_url_second: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
      summary: "The film is a fictionalized retelling of the sinking of the RMS Titanic, a luxurious passenger liner that sank on its maiden voyage in 1912. The story follows the romance between a wealthy woman named Rose (Kate Winslet) and a poor artist named Jack (Leonardo DiCaprio) who fall in love aboard the ship, but are separated by their social differences when the Titanic hits an iceberg and begins to sink.",
      story_shortly: "Written and directed by James Cameron, the film tells the story of the Titanic, a luxurious passenger liner that sinks on its maiden voyage after hitting an iceberg. The main characters are Rose, a wealthy young woman who is engaged to a wealthy but cruel man, and Jack, a poor artist who wins a ticket to board the Titanic in a card game. Rose and Jack fall in love on the ship, but their romance is challenged by their differing social classes. When the Titanic hits an iceberg and begins to sink, Rose and Jack must fight for survival while also trying to escape the ship and be reunited with each other. The film is notable for its stunning special effects and its portrayal of the ship's sinking, as well as for its iconic theme song, 'My Heart Will Go On' by Celine Dion."
    },
    {
      title: "The Godfather",
      genre: ["Crime", "Drama"],
      release_year: 1972,
      director: "Francis Ford Coppola",
      duration: "2:55:00",
      likes: 27461,
      dislikes: 7,
      imdb_rating: "9.2/10",
      banner_url_first: "https://http2.mlstatic.com/D_NQ_NP_757308-MLA52604378004_112022-O.jpg",
      banner_url_second: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/714ZOEiVNtL._RI_.jpg",
      summary: "The film tells the story of Vito Corleone (Marlon Brando), the leader of the Italian mafia family, in New York. The family is living the American dream, but is facing trouble with other mafia families. Vito Corleone's son Michael (Al Pacino), although not interested in getting involved with the family business, decides to become the leader of the family after a series of events.",
      story_shortly: "The film is adapted from the novel of the same name by Mario Puzo. Set in New York, it portrays the conflict between the Corleone family and other mafia families. Michael, Vito Corleone's son, gets injured in a war and avoids getting involved with the family business. However, after Vito Corleone's assassination, Michael decides to become the leader of the family and has to fight against other mafia families."
    },
    {
      title: "The Exorcist",
      genre: ["Horror"],
      release_year: 1973,
      director: "William Friedkin",
      duration: "2:02:00",
      likes: 35461,
      dislikes: 26,
      imdb_rating: "8/10",
      banner_url_first: "https://cdn.europosters.eu/image/1300/posters/the-exorcist-i75296.jpg",
      banner_url_second: "https://images.fanart.tv/bigpreview/the-exorcist-55aa928add484.jpg",
      summary: "The film follows the story of a young girl named Regan (Linda Blair) who becomes possessed by a demon, leading her mother (Ellen Burstyn) to seek the help of two Catholic priests to perform an exorcism to save her daughter's soul.",
      story_shortly: "Directed by William Friedkin and based on the novel by William Peter Blatty, 'The Exorcist' is a horror film about the possession of a young girl named Regan. After experiencing strange and disturbing events, Regan is diagnosed with a mental illness, but her condition worsens and she becomes violent and seemingly possessed by a demon. Her mother seeks the help of Father Karras (Jason Miller) and Father Merrin (Max von Sydow), who attempt to perform an exorcism on the girl to rid her of the demon. The film is known for its shocking and disturbing content, including scenes of violence and blasphemy, and is considered a classic of the horror genre."
    },
    {
      title: "Extraction",
      genre: ["Action", "Thriller"],
      release_year: 2020,
      director: "Sam Hargrave",
      duration: "1:57:00",
      likes: 1654,
      dislikes: 8,
      imdb_rating: "6.7/10",
      banner_url_first: "https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
      banner_url_second: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiFYJaGTMW9j2rI-Y15CLJzE-Mo2_ywnVmnhyT6JVQQB_oUz4i_yWO9LB84Vnz5q3uUaU&usqp=CAU",
      summary: "The film follows Tyler Rake (Chris Hemsworth), a black market mercenary, who is hired to rescue the kidnapped son of an international crime lord from Dhaka, Bangladesh.",
      story_shortly: "Directed by Sam Hargrave, 'Extraction' is an action-thriller film that follows Tyler Rake (Chris Hemsworth), a black market mercenary with a troubled past, who is hired to rescue the kidnapped son of an international crime lord from Dhaka, Bangladesh. Rake's mission takes him through the chaotic streets of Dhaka, where he must navigate dangerous factions and violent criminals to complete his mission. Along the way, he encounters Ovi (Rudhraksh Jaiswal), the young boy he is tasked with rescuing, and the two develop a bond as they fight for survival. The film is known for its intense action sequences and impressive stunt work, with Hemsworth performing many of his own stunts. It was released on Netflix in 2020 and has been well received by audiences for its adrenaline-pumping action and gripping story."
    },
    {
      title: "Forrest Gump",
      genre: ["Comedy Drama", "Romance"],
      release_year: 1994,
      director: "Robert Zemeckis",
      duration: "2:22:00",
      likes: 47250,
      dislikes: 19,
      imdb_rating: "8.8/10",
      banner_url_first: "https://ae01.alicdn.com/kf/H9d23a2966a9c4f8287dc2ed980e2aa6dh/3x5ft-FLAG-BANNER-for-Forrest-Gump-movie.jpg_Q90.jpg_.webp",
      banner_url_second: "https://images.fanart.tv/fanart/forrest-gump-5ff1f81333e42.jpg ",
      summary: "The film follows the life of Forrest Gump (Tom Hanks), a man with a low IQ who unwittingly becomes a witness to and participant in some of the defining events of the 20th century, all while pursuing his lifelong love, Jenny (Robin Wright).",
      story_shortly: "Directed by Robert Zemeckis, 'Forrest Gump' is a comedy-drama film that follows the life of Forrest Gump, a man with a low IQ who leads an extraordinary life. The film spans several decades, from the 1950s to the 1980s, and features Gump as an unwitting participant in some of the most significant events of the era, including the Vietnam War and the Watergate scandal. Along the way, he becomes a football star, meets several U.S. Presidents, and even starts his own successful shrimp fishing business. Through it all, he maintains his lifelong love for Jenny, who struggles with her own personal demons. The film is known for its heartwarming story, memorable characters, and iconic soundtrack. It won several Academy Awards, including Best Picture, Best Director, and Best Actor for Tom Hanks' portrayal of Forrest Gump."
    },
    {
      title: "Braveheart",
      genre: ["Action", "Drama", "Biography"],
      release_year: 1995,
      director: "Mel Gibson",
      duration: "2:57:00",
      likes: 61274,
      dislikes: 23,
      imdb_rating: "8.3/10",
      banner_url_first: "https://play-lh.googleusercontent.com/sTZ1PEpi8TxwKxtmDIPeaIePQgELMUfDTBL2eZWsgpOHtlc3knO8tY1NsELo-YHzbS1r",
      banner_url_second: "https://i.pinimg.com/736x/c9/ba/fd/c9bafddeb28da43e9a028ca7193a4fa5.jpg",
      summary: "The film is a fictionalized retelling of the life of William Wallace (Mel Gibson), a 13th-century Scottish warrior who led the Scots in the First War of Scottish Independence against King Edward I of England.",
      story_shortly: "Directed by Mel Gibson, 'Braveheart' is an epic historical drama that tells the story of William Wallace, a Scottish warrior who led a rebellion against the English during the 13th century. After the English invade Scotland and kill his wife, Wallace becomes a leader of the Scottish resistance and inspires his people to fight for their freedom. Along the way, he falls in love with Princess Isabella, the wife of the English king's son, and leads the Scots to victory in several battles, including the famous Battle of Stirling Bridge. However, as his legend grows, he faces betrayal and ultimately meets a tragic fate. The film is known for its sweeping battle scenes, stunning cinematography, and Gibson's powerful performance as Wallace. It won five Academy Awards, including Best Picture and Best Director."
    },
    {
      title: "The Green Mile",
      genre: ["Crime", "Drama", "Fantasy"],
      release_year: 1999,
      director: "Frank Darabont",
      duration: "3:09:00",
      likes: 51678,
      dislikes: 2,
      imdb_rating: "8.6/10",
      banner_url_first: "https://media.posterlounge.com/images/big/1878346.jpg",
      banner_url_second: "https://i5.walmartimages.com/asr/7e7bdd18-3b09-49ee-80b2-c2258fe9f8c8_1.8d8ac10b7a26b730d4946269943dba3f.jpeg",
      summary: "The film tells the story of a death row corrections officer, Paul Edgecomb (Tom Hanks), who meets an enigmatic prisoner named John Coffey (Michael Clarke Duncan), who possesses extraordinary healing powers.",
      story_shortly: "Directed by Frank Darabont, 'The Green Mile' is a crime drama film based on the novel of the same name by Stephen King. The story follows the life of Paul Edgecomb, a corrections officer who works on death row at a Louisiana penitentiary during the 1930s. When a giant African-American man named John Coffey is sentenced to death for the murder of two young girls, he is placed in Edgecomb's care. However, as Edgecomb spends time with Coffey, he begins to realize that he possesses extraordinary healing powers and may be innocent of the crime he's been accused of. As tensions rise and Coffey's execution date approaches, Edgecomb must grapple with the moral implications of his job and the possibility of sparing Coffey's life. The film is known for its powerful performances, especially by Hanks and Duncan, and its poignant exploration of themes such as justice, forgiveness, and redemption. It was nominated for four Academy Awards, including Best Picture."
    },
    {
      title: "F filmi",
      release_year: 1990,
      director: "someone 6",
    },
    {
      title: "G filmi",
      release_year: 1994,
      director: "someone 7",
    },
    {
      title: "E filmi",
      release_year: 1975,
      director: "someone 5",
    },
    {
      title: "F filmi",
      release_year: 1990,
      director: "someone 6",
    },
    {
      title: "G filmi",
      release_year: 1994,
      director: "someone 7",
    },
  ];

  return (
    <>
      {/* <AddMovieAdviceModal /> */}
      <MovieField movies={movies} />
    </>
  );
};

export default Movies;
