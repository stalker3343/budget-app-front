<template>
  <div>
    <v-app>
      <v-container>
        <slot></slot>
      </v-container>
      <v-bottom-navigation grow>
        <v-btn value="recent">
          <v-icon>mdi-history</v-icon>

          <span>Транзакции</span>
        </v-btn>

        <v-btn value="favorites">
          <v-icon>mdi-heart</v-icon>
          <span>Аналитика</span>
        </v-btn>

        <!-- <v-btn value="nearby">
          <v-icon>mdi-map-marker</v-icon>

          <span>Nearby</span>
        </v-btn> -->
      </v-bottom-navigation>
    </v-app>
  </div>
</template>
