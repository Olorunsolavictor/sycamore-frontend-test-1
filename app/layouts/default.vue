
<template>
  <div class="pb-[500px] md:pb-[300px]">
    <div class="w-screen min-h-screen relative z-20 bg-gray-100">
      <AppNavbar />

      <slot />

      <AppFooter />
    </div>

    <section class="fixed bottom-0 left-0 right-0 z-0">
      <AppSubFooter />
    </section>
  </div>
</template>
