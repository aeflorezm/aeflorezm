<template>
  <core-section id="what-ive-done">
    <abstract-3 />

    <core-heading>What I've done</core-heading>

    <v-col cols="12">
      <v-carousel
        :cycle="false"
        :height="650"
        :show-arrows="false"
        class="elevation-0"
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="(project, i) in project"
          :key="i"
          @click="redirect(1)"
        >
          <project :value="project" />
        </v-carousel-item>

        <v-carousel-item
          v-for="(project2, i) in project2"
          :key="i"
          @click="redirect(2)"
        >
          <project2 :value="project2" />
        </v-carousel-item>

        <v-carousel-item
          v-for="(project3, i) in project3"
          :key="i"
          @click="redirect(3)"
        >
          <project3 :value="project3" />
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </core-section>
</template>

<script>
  export default {
    name: 'WhatIveDone',

    components: {
      Abstract3: () => import('@/components/Abstract3'),
      Project: () => import('@/components/Project'),
      Project2: () => import('@/components/Project2'),
      Project3: () => import('@/components/Project3'),
    },

    data: () => ({
      project: [
        {
          name: 'Beneficiar Entidad Cooperativa',
          category: 'Affiliation process',
          src: 'beneficiar_logo.svg',
        },
      ],
      project2: [
        {
          name: 'Work.r',
          category: 'Recommendation engine',
          src: 'workr.png',
        },
      ],
      project3: [
        {
          name: 'Under construction',
          category: 'Under construction',
          src: 'construction.svg',
        },
      ],
    }),
    methods: {
      redirect (ruta) {
        if (ruta === 1) {
          window.location.href = 'https://www.beneficiar.com.co/'
        }
        if (ruta === 2) {
          window.location.href = 'https://labs.workr.com.co/'
        }
      },
    },
  }
</script>
