import { TypeMaterialIconName } from './icons.types'

export interface IGenre {
	genres: IGenreItem[]
}

export interface IGenreItem {
	_id: string
	name: string
	slug: string
	description: string
	icon: TypeMaterialIconName
}
