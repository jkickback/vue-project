<script setup lang="ts">
import { AdminFieldType } from '@/enums/admin-field-type'
import TaxService from '@/services/domain/tax-service'

import { ref } from 'vue'
const form = ref(
  TaxService.AdminForm
)

</script>

<template>
    <h1>{{ form?.Name ?? '' }}</h1>
    <h3>{{ form?.Description }}</h3>
    <!-- <pre>{{ form.Fields }}</pre> -->
    <div class="row" v-for="field in form?.Fields" :key="field.Name">
         <label :for="field.Name">{{ field.Label }}</label>
        <ToggleSwitch
          v-if="field.Type === AdminFieldType.Checkbox"
          :id="field.Name"
          v-model="field.Value"
          :placeholder="field.Placeholder"
        />
        <DatePicker
          v-else-if="field.Type === AdminFieldType.Date"
          :id="field.Name"
          v-model="field.Value"
          :placeholder="field.Placeholder"
        />
        <InputNumber
          v-else-if="field.Type === AdminFieldType.Number"
          v-model="field.Value"
          :placeholder="field.Placeholder"
          inputId="withoutgrouping" :useGrouping="false" fluid
          :id="field.Name"
        />
        <Select v-else-if="field.Type === AdminFieldType.Select"
          v-model="field.Value"
          :options="field.Options"
          optionLabel="Label"
          optionValue="Value"
          :id="field.Name" />

        <InputText v-else v-model="field.Value" :placeholder="field.Placeholder"
          :id="field.Name" />
    </div>
    <div>
      <Button :label="form?.SubmitLabel ?? 'Save'" severity="primary" />
      <Button :label="form?.CancelLabel ?? 'Cancel'" severity="secondary" />
    </div>
</template>

<style scoped>
button {
  padding: 10px;
  margin: 20px;
  font-size: large;
}
label {
  font-weight: bolder;
  margin-bottom: 6px;;
}
.row {
  display: flex;
  flex-direction: column;
  margin: 10px;
}
</style>
