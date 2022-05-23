import axios from "axios";
export const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
});

export const apiGetAllPokemons = (info, success, alert) => {
    api.get(`pokemon/?offset=${info}&limit=20`)
        .then((response) => {
            success(response.data);
        })
        .catch((error) => {
            alert(error.response);
        });
};
export const apiGetAllBerries = (info, success, alert) => {
    api.get(`berry/?offset=${info}&limit=20`)
        .then((response) => {
            success(response.data);
        })
        .catch((error) => {
            alert(error.response);
        });
};
export const apiGetAllPokemonsData = (id, success, alert) => {
    api.get(`pokemon/${id}`)
        .then((response) => {
            success(response.data);
        })
        .catch((error) => {
            alert(error.response);
        });
};
export const apiGetAllBerryData = (id, success, alert) => {
    api.get(`berry/${id}`)
        .then((response) => {
            success(response.data);
        })
        .catch((error) => {
            alert(error.response);
        });
};
export const apiGetEvolutionChain = (id, success, alert) => {
    api.get(`evolution-chain/${id}`)
        .then((response) => {
            success(response.data);
        })
        .catch((error) => {
            alert(error.response);
        });
};
export const apiGetPokemonSpecies = (id, success, alert) => {
    api.get(`pokemon-species/${id}`)
        .then((response) => {
            success(response.data);
        })
        .catch((error) => {
            alert(error.response);
        });
};
