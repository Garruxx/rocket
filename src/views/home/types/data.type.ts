export interface PageData {
	img: string
	title: string
	description: string
	price: number
	link: string
	id: string
	prevPrice: number
	provider: "wefere" | "rocketmerch" | "estelar"
	category: string
	slider: boolean
	providerImg: string
}
