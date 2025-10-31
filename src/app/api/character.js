import { apiFetch } from "./client"; // той самий client.js, як у попередньому прикладі

export const CharactersAPI = {
  async getAll(params = {}) {
    const query = new URLSearchParams(params);
    return apiFetch(`/character/?${query.toString()}`);
  },
};
