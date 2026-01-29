<template>
  <section class="bg-gray-100 font-sans py-16 px-[9%] relative">
    <div class="max-w-5xl">
      <!-- Disclaimer Title -->
      <h3 class="text-2xl font-sans font-bold text-gray-900 mb-6">
        Disclaimer:
      </h3>

      <!-- Disclaimer Content -->
      <div class="space-y-6 text-gray-700 font-medium text-sm leading-relaxed">
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
          to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
          text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
        </p>

        <p>
          Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined
          handful of model sentence structures, to generate which looks reasonable. The generated Lorem Ipsum is
          therefore always
        </p>
      </div>
    </div>

  
  </section>
</template>

<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>