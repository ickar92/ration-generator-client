<template>
  <nav class="navigation">
    <ul>
      <li><router-link to="menu">Menu</router-link></li>
      <li>Meals
        <ul class="meals">
          <li><router-link to="breakfast">Breakfast</router-link></li>
          <li><router-link to="snack1">Snack 1</router-link></li>
          <li><router-link to="lunch">Lunch</router-link></li>
          <li><router-link to="snack2">Snack 2</router-link></li>
          <li><router-link to="dinner">Dinner</router-link></li>
        </ul>
      </li>
      <li><router-link to="about">About</router-link></li>
    </ul>
  </nav>
</template>

<style>
.navigation {
  border: 2px solid #000;
  height: 100vh;
}
.navigation > ul {
  padding: 0;
}
ul {
  list-style-type: none;
  margin: 10px;
}
.meals {
  padding-left: 20px;
}
</style>
