<template>
  <main>
    <hgroup>
      <h4>Countries</h4>
      <h5>Simple query awaited (SSR)</h5>
    </hgroup>
    <p>fetching = {{ fetching }}</p>
    <p>error = {{ error }}</p>
    <table>
      <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="c of countries"
          :key="c.code"
        >
          <td>
            <kbd>{{ c.code }}</kbd>
          </td>
          <td>{{ c.name }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script setup lang="ts">
import { CountriesDocument } from '~/gql/queries/countries'

const { data, fetching, error } = await useQuery({
  query: CountriesDocument,
  variables: {},
})

const countries = computed(() => data.value?.countries ?? [])
</script>
