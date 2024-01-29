<script setup>
const route = useRoute();
const { data } = await useFetch(`http://www.omdbapi.com/?apikey=b4a16316&i=${route.params.id}`, {
  pick: ["Plot", "Title", "Error", "Poster"],
  key: `/movies/${route.params.id}`,
})

if (data.value.Error === 'Incorrect IMDb ID.') {
  showError({ statusCode: 404, statusMessage: 'Page Not Found!' })
}
useHead({
  title: data.value.Title,
  meta: [
    { name: 'description', content: data.value.Plot },
    { name: 'og:description', content: data.value.Plot },
    { name: 'og:image', content: data.value.Poster },
    { name: 'twitter:card', content: `summary_large_image` },
  ]
})
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>

