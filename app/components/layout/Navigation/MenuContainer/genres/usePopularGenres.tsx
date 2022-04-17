import { getGenreUrl } from 'config/url.config'
import { useQuery } from 'react-query'

import { IGenre } from '@/shared/types/movie.types'

import { GenreService } from '@/services/genre.service'

import { IMenuItem } from '../menu.interface'

const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genre menu',
		() => GenreService.getPopularGenres(),
		{
			select: ({ data }) => {
				return data.genres
					.map(
						(genre) =>
							({
								icon: genre.icon,
								link: getGenreUrl(genre.slug),
								title: genre.name,
							} as IMenuItem)
					)
					.splice(0, 4)
			},
		}
	)

	return queryData
}

export default usePopularGenres
