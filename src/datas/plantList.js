import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		isBestSale: true,
		isSpecialOffer: true,
		water:2,
		light:3,
		cover: monstera,
		price: 15
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		isBestSale: true,
		isSpecialOffer: false,
		water:3,
		light:2,
		cover: lyrata,
		price: 25
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		isBestSale: false,
		isSpecialOffer: true,
		water:1,
		light:2,
		cover: pothos,
		price: 10
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
		isBestSale: true,
		isSpecialOffer: true,
		water:2,
		light:2,
		cover: succulent,
		price: 20
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		isBestSale: false,
		isSpecialOffer: false,
		water:3,
		light:3,
		cover: olivier,
		price: 30
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
		isBestSale: true,
		isSpecialOffer: true,
		water:1,
		light:3,
		cover: basil,
		price: 15
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		isBestSale: false,
		isSpecialOffer: false,
		water:2,
		light:1,
		cover: mint,
		price: 5
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
		isBestSale: true,
		isSpecialOffer: true,
		water:3,
		light:2,
		cover: calathea,
		price: 10
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		isBestSale: false,
		isSpecialOffer: false,
		water: 1,
		light:2,
		cover: cactus,
		price: 5
	}
]