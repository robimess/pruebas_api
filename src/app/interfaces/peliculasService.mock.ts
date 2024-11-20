import { Observable, of } from "rxjs";
import { mockPeliculas } from "../mocks/peliculas.mock";
import { Root } from "./peliculas";

export const PeliculasServiceMock: {
    obtenerDramas: () => Observable<Root>
} = {
    obtenerDramas: () => of(mockPeliculas),
}