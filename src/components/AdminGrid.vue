<script setup lang="ts">
import TaxService from '@/services/domain/tax-service'

import { ref } from 'vue'
const data = ref(
  TaxService.GetAll()
)
const columns = TaxService.AdminForm?.Fields?.map((field) => {
  return {
    field: field.Name,
    header: field.Label
  }
})

</script>

<template>
<DataTable :value="data" tableStyle="min-width: 50rem">
  <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" />
</DataTable>
</template>

<style scoped>


</style>
