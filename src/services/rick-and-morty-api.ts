
import { Characters } from "./types"

export async function getCharacters(): Promise<Characters[]> {
	// '"https://rickandmortyapi.com/api/character"'
	const response = await fetch( import.meta.env.VITE_RICK_AND_MORTY_API_CHARACTERS)
	return response.json() as Promise<Characters[]>
}
