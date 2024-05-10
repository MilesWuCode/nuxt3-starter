<template>
  <div>
    <Navbar class="fixed top-0 z-10" />

    <Menu
      class="fixed bottom-0 top-[68px] z-10 hidden w-[20rem] overflow-y-auto lg:block"
    />

    <Drawer>
      <div class="pt-[68px] lg:pl-[20rem]">
        <div class="min-h-[calc(100vh-68px-68px)]">
          <slot />
        </div>
        <Footer />
      </div>
    </Drawer>
  </div>
</template>

<style scoped></style>
