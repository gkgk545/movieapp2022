import { Link } from "react-router-dom";

const MovieDetail = ({ title, coverImg, desc, rating, genres }) => {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <img src={coverImg} alt={title} />
        <p>{desc}</p>
        <span>rating: {rating}</span>
        <br />
        <br />
        <span>genres</span>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
      <Link to="/">
        <h2>Back to Home</h2>
      </Link>
    </>
  );
};

export default MovieDetail;
