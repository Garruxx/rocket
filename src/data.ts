import { PageData } from "./views/home/types/data.type"
import wefereLogo from "./assets/wefere.svg"
import estelarLogo from "./assets/estelar.svg"
import rocketLogo from "./assets/rocket-logo.webp"
export const dataTest: PageData[] = [
	{
		img: "https://wefere.com/cdn/shop/products/Navidad_Fondo_Blanco_FINAL_740x.jpg?v=1576202648",
		title: "Suéter Navidad Wefere",
		description:
			"Suéter rojo con dibujo de arbolito en serigrafía blanca. 50% Algodón / 50% Poliester.",
		price: 300.0,
		link: "https://wefere.com/products/sueter-navidad-wefere",
		id: "XXXXXXXXXXXXXXXXXXXXXXXXX",
		prevPrice: 490.0,
		provider: "wefere",
		providerImg: wefereLogo,
		category: "Suéters",
		slider: true,
	},
	{
		img: "https://wefere.com/cdn/shop/products/image_random_B_740x.jpg?v=1582158590",
		title: "Bolsa Random WEFERE: ¡Edición Limitada a 100 Unidades!",
		description: `
            Ediciones especiales, sudaderas, playeras, códigos para Tus10Segundos 
            completamnete gratis en Wefere o Wefere News, prototipos de futuros 
            productos y mucho más... en la Bolsa Random WEFERE podrás encontrar 
            cualquiera de estos artículos del canal Wefere y lo mejor: ¡
            Todo irá autografiado por el Rey Waffle o el Rey Panqueque! 

            Nuestros paquetes están limitados a solo 100 unidades y contienen 1 
            artículo con un valor entre $ 240.00 MXN  y $ 2,000.00 MXN. 
            Para este artículo no existen cambios ni devoluciones de ningún tipo. 
        `,
		price: 290.0,
		link: "https://wefere.com/products/bolsa-random-wefere",
		id: "XXXXXXXXXXXXXXXXXXXXXXXXX",
		prevPrice: 0,
		provider: "rocketmerch",
		providerImg: rocketLogo,
		category: "Caja misteriosa",
		slider: true,
	},
	{
		img: "https://wefere.com/cdn/shop/products/glow_740x.png?v=1568252845",
		title: "Playera OVNI (Brilla en la oscuridad) Últimas Piezas.",
		description: `
            layera negra con vinil blanco que brilla en la oscuridad. 100% algodón. 
            Últimas piezas!
            Firmada por el Rey Waffle!
        `,
		price: 310.0,
		link: "https://wefere.com/products/playera-ovni-piki-brilla-en-la-oscuridad",
		id: "XXXXXXXXXXXXXXXXXXXXXXXXX",
		prevPrice: 0,
		provider: "wefere",
		category: "playera",
		providerImg: wefereLogo,
		slider: true,
	},
	{
		img: "https://wefere.com/cdn/shop/products/IMG_8401-Editar_740x.jpg?v=1574292008",
		title: "Playera OVNI (Brilla en la oscuridad) Últimas Piezas.",
		description: `
            Sudadera negra con vinil blanco que brilla en la oscuridad. 50% Algodón / 50% Poliester. 
            Dibuja lo que quieras con la linterna mágica que viene incluida! 
        `,
		price: 590.0,
		link: "https://wefere.com/products/sudadera-cuadrito-con-linterna-para-dibujar-brilla-en-la-oscuridad",
		id: "XXXXXXXXXXXXXXXXXXXXXXXXX",
		prevPrice: 0,
		provider: "wefere",
		category: "sudadera",
		providerImg: wefereLogo,
		slider: false,
	},
	{
		img: "https://wefere.com/cdn/shop/products/IMG_8707-Editar_740x.jpg?v=1579745352",
		title: "Playera Piki",
		description: `Playera 100% algodón con ilustración de Piki en serigrafía.`,
		price: 320.0,
		link: "https://wefere.com/products/playera-piki-1",
		id: "XXXXXXXXXXXXXXXXXXXXXXXXX",
		prevPrice: 0,
		provider: "wefere",
		category: "playera",
		providerImg: wefereLogo,
		slider: true,
	},
	{
		img: "https://wefere.com/cdn/shop/products/IMG_8656-Editar-2-Editar_740x.jpg?v=1574292241",
		title: "Playera Cuadrito con Linterna para Dibujar (brilla en la oscuridad)",
		description: `
            Playera negra con vinil blanco que brilla en la oscuridad. 
            100% algodón. Dibuja lo que quieras con la linterna mágica que viene incluida! 
        `,
		price: 360.0,
		link: "https://wefere.com/products/playera-cuadrito-con-linterna-para-dibujar-brilla-en-la-oscuridad",
		id: "XXXXXXXXXXXXXXXXXXXXXXXXX",
		prevPrice: 0,
		provider: "wefere",
		category: "playera",
		providerImg: wefereLogo,
		slider: false,
	},
	{
		img: "https://wefere.com/cdn/shop/files/1_e400725a-ca7a-43d5-8ea1-f5eb0a1e1c3d_740x.jpg?v=1693248819",
		title: "Playera Estelar",
		description: `
            Playera negra con vinil blanco que brilla en la oscuridad. 
            100% algodón. Dibuja lo que quieras con la linterna mágica que viene incluida! 
        `,
		price: 359.0,
		link: "https://wefere.com/collections/rocketmerch/products/playera-estelar",
		id: "XXXXXXXXXXXXXXXXXXXXXXXXX",
		prevPrice: 0,
		provider: "estelar",
		category: "playera",
		providerImg: estelarLogo,
		slider: true,
	},
]
