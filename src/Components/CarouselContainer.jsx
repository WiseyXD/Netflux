import {
	useGetPopularMoviesQuery,
	useGetTopMoviesQuery,
	useGetUpcomingMoviesQuery,
} from "../Services/movieApi";
import Carousel from "./Carousel";
import { useSelector } from "react-redux";
export default function CarouselContainer() {
	const movieList = useSelector((state) => state.movie.movies);
	const upcomingMovies = useGetUpcomingMoviesQuery();
	const topMovies = useGetTopMoviesQuery();
	const popularMovies = useGetPopularMoviesQuery();

	if (
		upcomingMovies.isLoading ||
		topMovies.isLoading ||
		popularMovies.isLoading
	) {
		return null;
	}
	console.log(upcomingMovies.data.results);

	return (
		<div className="flex flex-col gap-8 mt-5">
			<Carousel title="Now Playing" movies={movieList} />
			<Carousel
				title="Upcoming Movies"
				movies={upcomingMovies.data.results}
			/>
			<Carousel
				title="Top Rated Movies"
				movies={topMovies.data.results}
			/>
			<Carousel
				title="Popular Movies"
				movies={popularMovies.data.results}
			/>
		</div>
	);
}
