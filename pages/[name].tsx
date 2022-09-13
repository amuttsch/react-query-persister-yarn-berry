import {useRouter} from "next/router";
import {useQuery} from "@tanstack/react-query";

const PokePage = () =>{
    const router = useRouter()
    const {name} = router.query
    const {data} = useQuery(['pokemon', name], () => fetchCurrentPokemon(name))

    const fetchCurrentPokemon = (name: any) => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
            res.json()
        )
    }

    if (!data) return null
    console.log(data)

    return (
        <div>
            <p onClick={() => router.back()}>← Go back</p>
            <h2>Poke {data.name} page</h2>
            <p>ID: {data.id}</p>
            <p>Weight: {data.weight}</p>
            <p>Base experience: {data.base_experience}</p>
        </div>
    )
}

export default PokePage