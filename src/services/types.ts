export interface Info {
  info: number,
  pages: number,
  next: string,
  prec: string,
}

export interface Character {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: object,
  location:  object,
  image:  string,
  episode: string[],
  url:  string
  created: string
}

export interface Characters {
  info: Info,
  resuls: Character[]
}
