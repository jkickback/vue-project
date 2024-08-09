<script setup lang="ts">
import { AdminFieldType } from '@/enums/admin-field-type'
import TaxService from '@/services/domain/tax-service'

import { ref } from 'vue'
const form = ref(
  TaxService.AdminForm
)

</script>

<template>
  <main>
    <h1>{{ form?.Name ?? '' }}</h1>
    <h3>{{ form?.Description }}</h3>
    <!-- <pre>{{ form.Fields }}</pre> -->
    <div v-for="field in form?.Fields" :key="field.Name">
      <label>{{ field.Label }}</label>
      <input
        v-if="field.Type === AdminFieldType.Date"
        v-model="field.Value"
        type="date"
        :placeholder="field.Placeholder"
      />
      <input
        v-else-if="field.Type === AdminFieldType.Number"
        type="number"
        v-model="field.Value"
        :placeholder="field.Placeholder"
      />
      <select v-else-if="field.Type === AdminFieldType.Select" v-model="field.Value">
        <option v-for="option in field.Options" :key="option.Value" :value="option.Value">
          {{ option.Label }}
        </option>
      </select>
      <input v-else type="text" v-model="field.Value" :placeholder="field.Placeholder" />
    </div>
    <div>
      <button class="submit-button">{{ form?.SubmitLabel ?? 'Save' }}</button>
      <button class="cancel-button">{{ form?.CancelLabel ?? 'Cancel' }}</button>
    </div>
  </main>
</template>

<style scoped>
button {
  padding: 10px;
  margin: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: large;
}
.submit-button {
  background-color: green;
  color: white;
}
.cancel-button {
  background-color: rgb(92, 92, 92);
  color: white;
}
</style>
