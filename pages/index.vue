<template>
  <div class="min-h-screen bg-gray-100">
    <div class="flex justify-between px-4 pt-8 pb-3">
      <h1 class="sm:text-[48px] text-3xl font-extrabold ml-0">
        Top Rated movies
      </h1>
      <input
        v-model.trim="search"
        type="search"
        class="p-4 border-0 rounded shadow bg-purple-white"
        placeholder="Search by movie name..."
      />
    </div>
    <div class="flex flex-row flex-wrap">
      <movies-card
        v-for="movie in topRated"
        :key="movie.id"
        :movie="movie"
        class="w-full lg:w-1/3 sm:w-1/2"
      />
    </div>
    <button @click="fetchMoreTopRated">Load More</button>
    <h1 id="upcoming" class="p-4 text-[48px] font-extrabold">
      Upcoming movies
    </h1>
    <div class="flex flex-row flex-wrap">
      <movies-card
        v-for="movie in upcoming"
        :key="movie.id"
        :movie="movie"
        class="w-full lg:w-1/3 sm:w-1/2"
      />
    </div>
    <button @click="fetchMoreUpcoming">Load More</button>
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
      upcomingPagination: 1,
      search: '',
    }
  },
  async fetch() {
    const topRated = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&page=${this.topRatedPagination}&query=${this.search}`
    )
    this.topRated.push(...topRated.data.results)
    const upcoming = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&page=${this.topRatedPagination}&query=${this.search}`
    )
    this.upcoming.push(...upcoming.data.results)
  },
  watch: {
    search(val) {
      this.topRated = []
      this.upcoming = []
      this.fetchMoreTopRated()
      this.fetchMoreUpcoming()
    },
  },
  methods: {
    async fetchMoreTopRated() {
      this.topRatedPagination += 1
      const topRated = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&page=${this.topRatedPagination}&query=${this.search}`
      )
      this.topRated.push(...topRated.data.results)
    },
    async fetchMoreUpcoming() {
      this.upcomingPagination += 1
      const upcoming = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&page=${this.upcomingPagination}&query=${this.search}`
      )
      this.upcoming.push(...upcoming.data.results)
    },
    upcomingMovies() {
      const container = this.$el.querySelector('#upcoming')
      container.scrollTop = container.scrollHeight
    },
  },
}
</script>
<style>
button {
  @apply block px-6 py-2 mx-auto transition duration-500 ease-in-out border border-indigo-500 hover:border-transparent bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white;
}
</style>
