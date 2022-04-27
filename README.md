# Malumotni fetchlash

> ㊟ `Fetchlash` o'zgaruvchiga malumot o'rnatish tushiniladi

Nuxtda `useFetch`, `useLazyFetch`, `useAsyncData` va `useLazyAsyncData` kabi
metodlar orqali applicationda malumotni fetch qilish mumkin

 ```
 👉 `useFetch`, `useLazyFetch`, `useAsyncData` va `useLazyAsyncData` faqatgina
 `setup` yoki `Lifecycle Hooks` da ishlaydi!
 ```

## `useAsyncData`

Sahifalarni, komponentalarni va pluginlarni ichida `useAsyncData` assinxron
amalga oshadigan malumotlarni olish uchun ishlatish mumkin!

`👉 Ko'proq malumotlarni bu yerdan o'qishingiz mumkin:`
[Use Async Data](https://v3.nuxtjs.org/api/composables/use-async-data)

### Masalan

```javascript
let counter = 0
export default () => {
    counter++
    return JSON.stringify(counter)
}
```

```vue

<script setup>
const {data} = await useAsyncData('count', () => $fetch('/api/count'))
</script>

<template>
  Page visits: {{ data }}
</template>
```

`👉 Ko'proq malumotlarni bu yerdan o'qishingiz mumkin:`
[Use Async Data](https://v3.nuxtjs.org/api/composables/use-async-data)

## `useLazyAsyncData`

Ushbu kompozable `useAysncData` bilan bir xilda faqatgina `lazy: true`
optsiyasi bilan ishlatiladi Boshqa gap bilan aytganda assinxron funksiyasi
navigatsiyani bloklamaydi. Bu shuni bildiradiki, siz malumotni qayerda `null`
bo'lishini hal qilishingiz kerak bo'ladi (yoki istalgan qiymatni `default`
funksiyada aniqlash kerak bo'ladi)

`👉 Ko'proq malumotlarni bu yerdan o'qishingiz mumkin:`
[Use Lazy Async Data.](https://v3.nuxtjs.org/api/composables/use-lazy-async-data)

### Masalan

```vue

<template>
  <div>
    {{ pending ? 'Loading' : count }}
  </div>
</template>

<script setup>
const {pending, data: count} = useLazyAsyncData('count', () => $fetch('/api/count'))
watch(count, (newCount) => {
  // count null bolgani uchun kontentni korish
  // qobiliyati avvaliga mavjud emas
  // lekin siz watch qilishingiz mumkin
})
</script>
```

## useFetch

Sahifa, komponenta, va pluginlar ichida `useFetch` ni istalgan URL orqali universal
holatda malumotni fetchlash uchun ishlatiladi.

Ushbu kompozable `useAsyncData` va `$fetch` atrofida qulay wrapperni taqdim etadi.
Bu avtomatik tarzda URLga asoslanib key generatsiya qiladi va API responsi turini
aniqlab oladi

`👉 Ko'proq malumotlarni bu yerdan o'qishingiz mumkin:`
[UUse Fetch.](https://v3.nuxtjs.org/api/composables/use-fetch)

### Masalan

```vue
<script setup>
const {data} = await useFetch('/api/count')
</script>

<template>
  Page visits: {{ data.count }}
</template>
```
