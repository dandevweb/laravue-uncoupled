import { ref } from "vue"

const favorite = ref([])

export const useMovie = () => {

  function add(movie) {
    const isAdded = favorite.value.some(o => o.id === movie.id)

    if (!isAdded) favorite.value.push(movie)
  }

  function remove(id) {
    const index = favorite.value.findIndex(o => o.id === id)
    if (index >= 0) {
      favorite.value.splice(index, 1)
    }

  }

  function inFavorite(id) {
    return favorite.value.some(o => o.id === id)
  }

  function addOrRemove(movie) {
    if (inFavorite(movie.id)) {
      remove(movie.id)
    } else {
      add(movie)
    }
  }

  return {
    favorite,
    add,
    remove,
    inFavorite,
    addOrRemove,
  }
}
