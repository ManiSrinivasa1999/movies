<template>
  <div class="min-h-screen bg-gray-100">
    <h1 class="text-3xl p-4">Top Rated movies</h1>
    <div v-for="movie in topRated" :key="movie.id" class="flex flex-row">
      <movies-card :movie="movie" class="mx-4" />
    </div>
    <h1 class="text-3xl">Upcoming movies</h1>
    <div v-for="movie in upcoming" :key="movie.id">
      <movies-card :movie="movie" class="mx-4" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MoviesCard from '~/components/MoviesCard.vue'

export default {
  name: 'Home',
  components: { MoviesCard },
  data() {
    return {
      topRated: [],
      upcoming: [],
      apiKey: '3e2f665548b77e19eccae74ea3710ccc',
      topRatedPagination: 1,
      upcomingPagination: 4,
    }
  },
  async fetch() {
    const topRated = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&page=${this.topRatedPagination}`
    )
    this.topRated.push(...topRated.data.results)
    const upcoming = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&page=${this.topRatedPagination}`
    )
    this.upcoming.push(...upcoming.data.results)
  },
}
</script>
