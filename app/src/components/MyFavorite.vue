<template>
  <h3>Meus Favoritos</h3>

  <movie-card
    v-for="movie in favorite"
    :key="movie.id"
    :movie="movie"
  />

  <div v-if="!favorite.length">
    Você não tem nenhum filme favorito
  </div>
</template>

<script setup>
import {useMovie} from "@/composables/useMovie"
  import MovieCard from '@/components/MovieCard.vue';

const {favorite} = useMovie();

</script>
