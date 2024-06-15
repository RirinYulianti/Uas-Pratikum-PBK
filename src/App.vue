<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          UAS Pratikum PBK
        </q-toolbar-title>
        <q-btn-group  flat>
          <q-btn :class="{ active: isActive('/widget') }" flat label="Widget" :to="{ path: '/widget' }" />
          <q-btn :class="{ active: isActive('/portfolio') }" flat label="Portfolio" :to="{ path: '/portfolio' }" />
          <q-btn :class="{ active: isActive('/tp2-3') }" flat label="Tp2-3" :to="{ path: '/tp2-3' }" />
          <q-btn :class="{ active: isActive('/tp4') }" flat label="Tp4" :to="{ path: '/tp4' }" />
          <q-btn :class="{ active: isActive('/tp5') }" flat label="Tp5" :to="{ path: '/tp5' }" />
          <q-btn :class="{ active: isActive('/tp6') }" flat label="Tp6" :to="{ path: '/tp6' }" />
        </q-btn-group>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const isActive = (path) => {
  return router.currentRoute.value.path === path
}
</script>

<style scoped>
.active {
  border-bottom: 2px solid rgb(180, 180, 241);
}
</style>
