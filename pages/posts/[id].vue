<template>
  <div class="container mx-auto w-1/2 py-8">
    <h3 class="text-3xl font-bold ">
      <NuxtLink t="/posts/1">
        Title of the page
      </NuxtLink>
    </h3>
    <div class="post-meta text-gray-700 flex items-center space-x-2">
      <div>
        Feb. 02. 2020
      </div>
      <div>
        &middot;
      </div>
      <div>
        Yunusali Abdurakhmanov
      </div>
    </div>
    <div class="post-content mt-4">
      {{ $route.params.id }} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, eligendi est iste omnis rerum
      suscipit veniam? Asperiores, cum delectus deserunt explicabo hic illum ipsam iste laboriosam, numquam odit,
      quisquam voluptatum.
    </div>
  </div>
</template>
<script>
export default {
  name: "[id]"
}
</script>

<style scoped>

</style>
