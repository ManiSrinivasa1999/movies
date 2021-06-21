<template>
  <div>
    <div class="bg-gray-100 py-2 flex flex-col justify-center">
      <div class="py-3 sm:max-w-xl sm:mx-auto">
        <div
          class="
            bg-white
            shadow-lg
            border-gray-100 border
            sm:rounded-3xl
            p-8
            flex
            space-x-8
          "
        >
          <div class="w-1/2">
            <img
              class="rounded-3xl shadow-lg object-fill"
              :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
              alt=""
            />
          </div>
          <div class="flex flex-col w-1/2 space-y-4">
            <div class="flex justify-between items-start">
              <h2 class="text-3xl font-bold">{{ movie.title }}</h2>
              <div class="bg-yellow-400 font-bold rounded-xl p-2">
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
            <p class="text-gray-400 max-h-28 overflow-y-hidden">
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
