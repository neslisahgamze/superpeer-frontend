<template>
  <div>
    <ul>
      <li v-for="(person, index) in people" :key="index" >
         {{ person.name }} - {{ person.birth_year }} - {{ person.height }} - {{ person.mass }} 
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [ 'people' ]
}
</script>

<style>
  li {
    list-style: circle;
    margin: inherit;
  }
</style>