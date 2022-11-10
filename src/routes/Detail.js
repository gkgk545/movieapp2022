import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [mv, setMv] = useState({});
  const getMovie = useCallback(async () => {
    const {
      data: { movie },
    } = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMv(movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? null : (
        <MovieDetail
          title={mv.title_long}
          coverImg={mv.medium_cover_image}
          desc={mv.description_full}
          rating={mv.rating}
          genres={mv.genres}
        />
      )}
    </div>
  );
};

export default Detail;
