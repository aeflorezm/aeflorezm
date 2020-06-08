<template>
  <v-sheet
    class="py-md-5"
    height="100%"
    color="transparent"
  >
    <div class="text-center mb-5">
      <core-subheading
        class="mb-1"
        v-text="value.name"
      />
      <span
        class="subheading"
        v-text="value.category"
      />
    </div>
    <v-row>
      <v-col cols="auto">
        <div
          class="mb-3"
          style="max-width: 400px;"
        >
          <core-subheading class="mb-3">
            Project Details
          </core-subheading>
          <core-text>
            Beneficiar it's an entity of the solidarity economy that since its inception has worked hard to offer its associates
            a wide portfolio of benefits and services that allow them to continuously improve their quality of life and those of their families.This project
            consisted in the implementation of a brand new affiliation process with a form powered by AI to make it easier and cleaner. This product has
            facial recognition, optical character recognition, liveness detection and a document analysis engine.
          </core-text>

          <core-subheading>
            Project Info
          </core-subheading>
          <v-list class="transparent">
            <v-list-item>
              <v-list-item-action>
                <v-icon color="primary">
                  mdi-account
                </v-icon>
              </v-list-item-action>
              <v-list-item-title class="mr-2">
                Client Name
              </v-list-item-title>
              <v-list-item-title class="caption grey--text text--lighten-1 hidden-sm-and-down">
                Beneficiar Entidad Cooperativa
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-icon color="primary">
                  mdi-calendar
                </v-icon>
              </v-list-item-action>
              <v-list-item-title class="mr-2">
                Project Dates
              </v-list-item-title>
              <v-list-item-title class="caption grey--text text--lighten-1 hidden-sm-and-down">
                2020
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-icon color="primary">
                  mdi-tag
                </v-icon>
              </v-list-item-action>
              <v-list-item-title class="mr-2">
                Project Category
              </v-list-item-title>
              <v-list-item-title class="caption grey--text text--lighten-1 hidden-sm-and-down">
                Affiliation process
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </div>
      </v-col>
      <v-col
        v-if="value.src"
        class="hidden-sm-and-down"
      >
        <v-img
          :src="require(`@/assets/projects/${value.src}`)"
          height="350"
          width="500"
          contain
          class="mx-auto"
        />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
  export default {
    props: {
      value: {
        type: Object,
        default: () => ({
          name: '',
          category: '',
          src: undefined,
        }),
      },
    },

  }
</script>
