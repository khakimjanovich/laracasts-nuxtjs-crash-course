<template>
  <div class="post-container py-8">
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
    <div class="post-preview leading-relaxed mt-4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias, animi ea esse eveniet excepturi
      facere laudantium magnam magni maiores nemo obcaecati praesentium quas qui quos rem suscipit ullam voluptatum.
    </div>
    <div class="mt-4">
      <NuxtLink to="/posts/1" class="bg-blue-600 hover:bg-blue-800 text-white rounded inline-block px-4 py-2">
        Read More
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItem"
}
</script>

<style scoped>

</style>
