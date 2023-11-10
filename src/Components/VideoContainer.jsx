import { useSelector, useDispatch } from "react-redux";
import { setTopMovie } from "../Context/Slices/movieSlice";
import { useGetTopMovieTrailerQuery } from "../Services/movieApi";
export default function VideoContainer() {
	const dispatch = useDispatch();
	const topMovie = useSelector((state) => state.movie.movies[0]);
	dispatch(setTopMovie(topMovie));
	const { id } = topMovie;
	// console.log(id);
	const { data, error, isLoading } = useGetTopMovieTrailerQuery(id);
	// console.log(data);
	if (isLoading) {
		return null;
	}
	const trailer = data.results.find((item) => item.type === "Trailer");
	const trailerKey = trailer?.key;
	return (
		<div className="hero min-h-screen">
			<iframe
				src={`https://www.youtube.com/embed/${trailerKey}?si=IRZ9l8OPM4MA2YG9&autoplay=1`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
				className="w-full min-h-screen"
			></iframe>
			<div className="hero-overlay bg-opacity-60 flex justify-start">
				<div className="hero-content text-center text-neutral-conten">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">Hello there</h1>
						<p className="mb-5">
							Provident cupiditate voluptatem et in. Quaerat
							fugiat ut assumenda excepturi exercitationem quasi.
							In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</div>
	);
}
