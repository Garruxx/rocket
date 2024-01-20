import { useState } from "react"
import { Header } from "../components/header/header"
import { Menu, MobileMenu } from "../components/menu/menu"
import { Slider } from "./components/slider/slider"
import styles from "./styles.module.sass"
import { Item } from "./components/item/item"
import { dataTest } from "../../data"
import { PageData } from "./types/data.type"
export const Home = () => {
	const [query, setQuery] = useState("")

	const handlerFilter = (item: PageData) => {
		if (query === "") return true
		return (
			item.title.toLowerCase().includes(query.toLowerCase()) ||
			item.category.toLowerCase().includes(query.toLowerCase()) ||
			item.description.toLowerCase().includes(query.toLowerCase())
		)
	}

	return (
		<div className={styles.home}>
			<div className={styles.header}>
				<Header query={query} setQuery={setQuery} />
			</div>
			<div className={styles.body}>
				<Menu />
				<div className={styles.content}>
					<Slider />
					<div className={styles.container}>
						<h2 className={styles.title}>Lo más nuevo</h2>
						<div className={styles.items}>
							{dataTest.filter(handlerFilter).map((item, i) => (
								<Item {...item} key={item.id + i} />
							))}
						</div>
					</div>
				</div>
				<MobileMenu />
			</div>
		</div>
	)
}
