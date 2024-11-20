export interface Root {
    results: Result[]
  }
  
  export interface Result {
    id: number
    title: string
    posterURL: string
    imdbId: string
  }