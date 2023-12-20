import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Students from '../views/Students.vue';
import Counselors from '../views/Counselors.vue';
import Appointments from '../views/Appointments.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/students',
      name: 'students',
      component: Students
    },
    {
      path: '/counselors',
      name: 'counselors',
      component: Counselors
    },
    {
      path: '/appointments',
      name: 'appointments',
      component: Appointments
    },
  ]
});

export default router;
