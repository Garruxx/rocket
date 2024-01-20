import { Dispatch, SetStateAction } from "react"

export interface HeaderProps {
	setQuery: Dispatch<SetStateAction<string>>
	query: string
}
