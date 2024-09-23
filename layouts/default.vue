<template>
  <div>
    <v-app>
      <v-main>



        <v-container>
          <slot></slot>
        </v-container>
      </v-main>
      <v-bottom-navigation grow>
        <v-btn :to="{ name: 'add-transaction' }" value="favorites">
          <v-icon>mdi-heart</v-icon>
          <span>Главная</span>
        </v-btn>


        <v-btn :to="{ name: 'index' }" value="recent">
          <v-icon>mdi-history</v-icon>

          <span>Импорт</span>
        </v-btn>

        <v-btn :to="{ name: 'analytic' }" value="favorites">
          <v-icon>mdi-heart</v-icon>
          <span>Аналитика</span>
        </v-btn>

        <v-btn :to="{ name: 'accounts' }" value="favorites">
          <v-icon>mdi-heart</v-icon>
          <span>Счета</span>
        </v-btn>





        <!-- <v-btn value="nearby">
          <v-icon>mdi-map-marker</v-icon>

          <span>Nearby</span>
        </v-btn> -->
      </v-bottom-navigation>
    </v-app>
  </div>
</template>
