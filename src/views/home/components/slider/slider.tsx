import { useEffect, useRef, useState } from "react"
import { dataTest } from "../../../../data"
import { ItemTarget } from "./components/item-target/item-target"
import styles from "./slider.module.sass"

export const Slider = () => {
	const dataSlider = dataTest.filter((item) => item.slider)
	const sliderRef = useRef<HTMLDivElement | null>(null)
	const [movemendInX, setMovementInX] = useState(0)
	const [actual, setActual] = useState(1)

	useEffect(() => {
		window.onresize = () => {
			setMovementInX(0)
		}
		setInterval(next, 5000)
	}, [])
	useEffect(() => {
		const slider = sliderRef.current
		if (!slider || !slider.parentElement) return
		if (!slider.firstChild || !slider.lastChild) return
		const firstChild = slider.firstChild as HTMLElement
		const lastChild = slider.lastChild as HTMLElement
		if (movemendInX == -lastChild.offsetWidth) return

		const durationString = getComputedStyle(slider).transitionDuration
		const duration = parseFloat(durationString) * 1000
		setTimeout(() => {
			slider.style.transitionDuration = "0s"
			if (movemendInX >= 0) {
				setMovementInX((prev) => prev - lastChild.offsetWidth)
				slider.insertAdjacentElement("afterbegin", lastChild)
				setActual((actual) => actual - 1)
			} else {
				setMovementInX((prev) => prev + lastChild.offsetWidth)
				slider.insertAdjacentElement("beforeend", firstChild)
				setActual((actual) => actual + 1)
			}
		}, duration + 20)
	}, [movemendInX, dataSlider])

	useEffect(() => {
		if (actual < 0) setActual(dataSlider.length - 1)
		if (actual > dataSlider.length - 1) setActual(0)
	}, [actual, dataSlider])

	const next = () => {
		const slider = sliderRef.current
		if (!slider || !slider.parentElement || !slider.firstChild) return
		const container = slider.parentElement
		slider.style.transitionDuration = ".35s"
		setMovementInX((prev) => prev - container.offsetWidth)
	}

	const prev = () => {
		const slider = sliderRef.current
		if (!slider || !slider.parentElement || !slider.firstChild) return
		const container = slider.parentElement
		slider.style.transitionDuration = ".35s"
		setMovementInX((prev) => prev + container.offsetWidth)
	}

	const goTo = (position: number, actual: number) => {
		const slider = sliderRef.current
		if (!slider || !slider.firstChild) return
		if (position == actual) return

		if (actual < position) {
			for (let i = actual; i < position; i++) {
				console.log(position, actual)
				next()
			}
		}
		if (actual > position) {
			for (let i = actual; i > position; i--) {
				prev()
			}
		}
	}
	return (
		<div className={styles.container}>
			<div className={styles.visible}>
				<div
					className={styles.slider}
					ref={sliderRef}
					style={{
						transform: `translateX(${movemendInX}px)`,
					}}
				>
					{dataSlider.map((item, i) => (
						<ItemTarget {...item} key={i} />
					))}
				</div>
			</div>
			<div className={styles.controls}>
				<div className={styles.controls_container}>
					<span onClick={prev}>{"<"}</span>
					{dataSlider.map((_, i) => (
						<div
							className={`${styles.bullet} ${actual == i && styles.selected}`}
							key={i}
							onClick={() => goTo(i, actual)}
						/>
					))}
					<span onClick={next}>{">"}</span>
				</div>
			</div>
		</div>
	)
}
