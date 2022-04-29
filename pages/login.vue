<template>
  <div class="container mx-auto w-1/3 py-8">
    <Title>Login | {{ title }}</Title>
    <ul
        v-if="errors.length > 0"
        className="mb-4 list-disc list-inside text-sm text-red-600"
    >
      <li v-for="(error, index) in errors" :key="index">
        {{ error }}
      </li>
    </ul>
    <form action="#" class="space-y-6" @submit.prevent="login">
      <div>
        <label for="email" class="block font-semibold">Email</label>
        <input type="text"
               v-model="email"
               id="email"
               class="px-2 py-2 w-full shadow rounded mt-2"/>
      </div>
      <div>
        <label for="password" class="block font-semibold">Password</label>
        <input type="password"
               v-model="password"
               id="password"
               class="px-2 py-2 w-full shadow rounded mt-2"/>
      </div>

      <div>
        <button class="inline-block bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2">
          Login
        </button>
        <span v-if="isLoading">Loading...</span>
      </div>
    </form>
  </div>
</template>

<script setup>

const title = useState('title')
const {$apiFetch} = useNuxtApp()

const email = ref('')
const password = ref('')
const errors = ref([])
const isLoading = ref(false)

function csrf() {
  return $apiFetch('/sanctum/csrf-cookie')
}

async function login() {
  await csrf()
  isLoading.value = true

    try {
    await $apiFetch('/login', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value,
      },
    })
      window.location.pathname = '/my-info'
    } catch (err) {
      errors.value = Object.values(err.data.errors).flat()
    }
  isLoading.value = false
}
</script>
