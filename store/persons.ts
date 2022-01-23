import { ActionContext, ActionTree, GetterTree, MutationTree } from "vuex";
import { Person, PersonsState, RootState } from "../types/state";

export const state: () => PersonsState = () => ({
  persons: [
    { firstName: "Jill", lastName: "Smith" },
    { firstName: "Eve", lastName: "Jackson" },
  ]
});

export const getters: GetterTree<PersonsState, RootState> = {};

export const mutations: MutationTree<PersonsState> = {
  add(state, person: Person) {
    state.persons.push(person);
  },
  remove(state, person: Person) {
    state.persons.splice(state.persons.indexOf(person), 1);
  }
};

export const actions: ActionTree<PersonsState, RootState> = {};
