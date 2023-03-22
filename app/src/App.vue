<template>
  <v-app>
    <v-app-bar title="Filmes" class="text-center" />
    <v-main class="mt-4">
      <v-container>
        {{ isLoading }}
        <v-row>
          <v-col
            v-for="movie in movies.data"
            :key="movie.id"
            cols="12"
            md="6"
            lg="3"
            >
            <v-card class="border">
              <v-card-text>
                <h2>{{ movie.name }}</h2>
                <p>{{ movie.description }}</p>
                <div>{{ movie.duration }}</div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>2</v-col>
          <v-col>3</v-col>
        </v-row>
      </v-container>

    </v-main>
  </v-app>
</template>

<script setup>
  import axios from 'axios';
  import { useAsyncState } from '@vueuse/core'

  const { state: movies, isReady, isLoading } = useAsyncState(
  axios
    .get('http://localhost:8000/api/movies')
    .then(t => t.data),
  {},
)

</script>
