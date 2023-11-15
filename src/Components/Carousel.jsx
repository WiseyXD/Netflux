export default function Carousel({ title, movies }) {
	return (
		<div className="w-full px-3">
			<h1 className=" text-white text-2xl my-2">{title}</h1>
			<div className="carousel rounded-box flex gap-5">
				{movies.map((movie) => (
					<div className="carousel-item flex-col" key={movie.id}>
						<img
							src={
								"https://image.tmdb.org/t/p/w200" +
								movie.poster_path
							}
							alt="Burger"
							className="max-w-[200px]"
						/>
						<p className="text-white">{movie.original_title}</p>
					</div>
				))}
			</div>
		</div>
	);
}
