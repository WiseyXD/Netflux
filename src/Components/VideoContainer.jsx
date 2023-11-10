import { useSelector, useDispatch } from "react-redux";
import { setTopMovie } from "../Context/Slices/movieSlice";
import { useGetTopMovieTrailerQuery } from "../Services/movieApi";
export default function VideoContainer() {
	const dispatch = useDispatch();
	const topMovie = useSelector((state) => state.movie.movies[1]);
	console.log(topMovie);
	dispatch(setTopMovie(topMovie));
	const { id, title, overview, vote_average } = topMovie;
	const { data, error, isLoading } = useGetTopMovieTrailerQuery(id);
	if (isLoading) {
		return null;
	}
	const trailer = data.results.find((item) => item.type === "Trailer");
	console.log(trailer);
	const trailerKey = trailer?.key;
	return (
		<div className="hero min-h-screen">
			<iframe
				src={`https://www.youtube.com/embed/${trailerKey}?si=IRZ9l8OPM4MA2YG9&autoplay=1&mute=1&rel=0&controls=0`}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
				className="w-full min-h-screen"
			></iframe>
			<div className=" bg-opacity-90 flex justify-start  max-w-full w-11/12 mx-auto my-0">
				<div className="hero-content text-left text-neutral-content">
					<div className="max-w-md text-white">
						<h1 className="mb-5 text-4xl font-bold">{title}</h1>
						<p className="mb-5">{overview}</p>
						<div className="flex justify-start gap-3">
							<button className="btn px-16 text-lg bg-gray-200  text-black hover:bg-transparent hover:border hover:border-gray-400 hover:text-white">
								Play
							</button>
							<button className="btn px-16 text-lg bg-gray-200  text-black hover:bg-transparent hover:border hover:border-gray-400 hover:text-white">
								Info
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
