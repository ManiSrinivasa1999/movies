<template>
  <div>
    <div class="flex flex-col justify-center py-2 mx-4 bg-gray-100">
      <div class="w-full py-3 sm:mx-auto">
        <div class="flex p-8 space-x-8 card">
          <div class="w-1/2">
            <img
              class="object-fill shadow-lg rounded-3xl"
              :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
              :alt="movie.name"
            />
          </div>
          <div class="flex flex-col w-1/2 space-y-4">
            <div class="flex items-start justify-between">
              <h2 class="text-3xl font-bold">{{ movie.title }}</h2>
              <div class="p-2 font-bold bg-yellow-400 rounded-xl">
                {{ movie.vote_average }}
              </div>
            </div>
            <div>
              <div class="text-sm text-gray-400">
                {{
                  compareDates(movie.release_date)
                    ? 'Released on'
                    : 'Releases on'
                }}
              </div>
              <div class="text-lg text-gray-800">
                {{ formatDate(movie.release_date) }}
              </div>
            </div>
            <p class="overflow-y-hidden text-gray-400 line-clamp-6">
              {{ movie.overview }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formatDate from '@/utils/date'
export default {
  name: 'MoviesCard',
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate,
    compareDates(date) {
      return new Date(date) < new Date()
    },
  },
}
</script>
<style>
.card {
  @apply bg-white border border-gray-100 shadow-lg rounded-3xl;
}
</style>
