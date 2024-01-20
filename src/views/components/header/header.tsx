import rocketLogo from "../../../assets/rocket.png"
import searchIcon from "../../../assets/search.svg"
import carShoppingIcocn from "../../../assets/car shopping.svg"
import styles from "./style.module.sass"
import { HeaderProps } from "./types/header.props"
import { ChangeEvent, useRef } from "react"

export const Header = ({ setQuery, query }: HeaderProps) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		setQuery(ev.target.value)
	}
	const handleEnter = () => {
		inputRef.current?.blur()
	}

	const handleFocus = () => {
		document.querySelectorAll("label[for='search']").forEach((el) => {
			el.setAttribute("active", "true")
		})
	}

	const handleBlur = () => {
		document.querySelectorAll("label[for='search']").forEach((el) => {
			el.removeAttribute("active")
		})
	}
	return (
		<div className={styles.header}>
			<img src={rocketLogo} alt="rocket" />
			<label>
				<img src={searchIcon} alt="search icon" />
				<input
					ref={inputRef}
					type="text"
					placeholder="Buscar"
					onChange={handleChange}
					value={query}
					id="search"
					onFocus={handleFocus}
					onBlur={handleBlur}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							handleEnter()
						}
					}}
				/>
			</label>
			<img src={carShoppingIcocn} alt="car shopping" />
		</div>
	)
}
