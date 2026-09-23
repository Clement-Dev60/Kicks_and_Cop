import api from "./axios";

export const searchSneakers = async (query) => {
    const response = await api.get("/search", {
        params: {
            query: query,
        },
    });

    return response.data;
};