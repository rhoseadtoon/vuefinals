<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex min-h-[180vh]">
    <div class="w-[320px] fixed bg-teal-900 flex flex-col">
      <div class="heading p-10 bg-teal-800">
        <h1 class="text-2xl text-white text-center">
            Dashboard
        </h1>
      </div>
      <nav class="flex flex-col justify-center items-stretched text-center gap-4 text-white h-[52vh]">
        <RouterLink to="/" class="py-7 hover:bg-teal-700 hover:text-white hover:py-5 duration-200">Home</RouterLink>
        <RouterLink to="Students" class="py-7 hover:bg-teal-700 hover:text-white hover:py-5 duration-200">Student</RouterLink>
        <RouterLink to="Counselors" class="py-7 hover:bg-teal-700 hover:text-white hover:py-5 duration-200">Counselor</RouterLink>
        <RouterLink to="Appointments" class="py-7 hover:bg-teal-700 hover:text-white hover:py-5 duration-200">Appointment</RouterLink>
      </nav>
      <div class="p-16 bg-teal-800 text-white text-center">
        <br />
        Copyright &copy; 2023.<br />All rights reversed.
      </div>
    </div>
    <div class="main-content bg-gray-100 flex-1">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.main-content {
  margin-left: 40.7vh;
}
h1 {
  margin-top: 50px;
}
</style>
