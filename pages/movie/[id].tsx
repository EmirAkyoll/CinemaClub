import React from "react";

const Movie = () => {
  return (
    <div className="movie-page">
      <h1 className="movie-page-header">TITANIC</h1>
      
      <div className="movie-page-banners">
        <img
          src="https://pbs.twimg.com/media/Fon8-EDXsAEv8T1?format=jpg&name=large"
          alt=""
          className="movie-page-banners-item"
        />
        <img
          src="https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"
          alt=""
          className="movie-page-banners-item"
        />
      </div>

      <div className="movie-page-texts">
        <p className="movie-page-texts-item">
          The film is a fictionalized retelling of the sinking of the RMS
          Titanic, a luxurious passenger liner that sank on its maiden voyage in
          1912. The story follows the romance between a wealthy woman named Rose
          (Kate Winslet) and a poor artist named Jack (Leonardo DiCaprio) who
          fall in love aboard the ship, but are separated by their social
          differences when the Titanic hits an iceberg and begins to sink.
        </p>
        <p className="movie-page-texts-item">
          Written and directed by James Cameron, the film tells the story of the
          Titanic, a luxurious passenger liner that sinks on its maiden voyage
          after hitting an iceberg. The main characters are Rose, a wealthy
          young woman who is engaged to a wealthy but cruel man, and Jack, a
          poor artist who wins a ticket to board the Titanic in a card game.
          Rose and Jack fall in love on the ship, but their romance is
          challenged by their differing social classes. When the Titanic hits an
          iceberg and begins to sink, Rose and Jack must fight for survival
          while also trying to escape the ship and be reunited with each other.
          The film is notable for its stunning special effects and its portrayal
          of the ship's sinking, as well as for its iconic theme song, 'My Heart
          Will Go On' by Celine Dion.
        </p>
      </div>

      <div className="movie-page-comments"></div>
    </div>
  );
};

// export const getServerSideProps = async ({ params }) => {
//     const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/movies/${params.id}`);

//     return {
//       props: {
//         movies: res.data ? res.data : null,
//       },
//     };
// };

export default Movie;
