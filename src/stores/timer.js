import { writable } from "svelte/store";
let {subscribe, set, update} = writable({})

export const timer = {
    subscribe,
    set,

    /**
     * @param {{}} timer
     */
    updateTime(timer){
        update((value) => value = {...timer})
    }
}