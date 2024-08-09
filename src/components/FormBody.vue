<script setup lang="ts">
import AdminForm from '@/models/admin-form'
import AdminField from '@/models/admin-field'
import { AdminFieldType } from '@/enums/admin-field-type'
import SelectOption from '@/models/select-option'

import { ref } from 'vue'

const form = ref(
  new AdminForm({
    Name: 'Edit Something',
    Description: 'This is a form to edit some specific thing that we should explain here.',
    SubmitLabel: 'Save',
    CancelLabel: 'Cancel',
    Fields: [],
    Columns: 3
  })
)

form.value.Fields = [
  new AdminField({
    Name: 'Name',
    Label: 'Name',
    Type: AdminFieldType.Text,
    Value: 'John Doe',
    Placeholder: '',
    Required: false
  }),
  new AdminField({
    Name: 'Email',
    Label: 'Email',
    Type: AdminFieldType.Text,
    Value: '',
    Placeholder: '',
    Required: true
  }),
  new AdminField({
    Name: 'Age',
    Label: 'Age',
    Type: AdminFieldType.Number,
    Value: 21,
    Placeholder: '',
    Required: false
  }),
  new AdminField({
    Name: 'Types',
    Label: 'Types',
    Type: AdminFieldType.Select,
    Value: '',
    Placeholder: '',
    Required: false,
    Options: [
      new SelectOption('1', 'Type 1'),
      new SelectOption('2', 'Type 2'),
      new SelectOption('3', 'Type 3')
    ]
  })
]
</script>

<template>
  <main>
    <h1>{{ form.Name }}</h1>
    <h3>{{ form.Description }}</h3>
    <!-- <pre>{{ form.Fields }}</pre> -->
    <div v-for="field in form.Fields" :key="field.Name">
      <label>{{ field.Label }}</label>
      <input
        v-if="field.Type === AdminFieldType.Text"
        v-model="field.Value"
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
    </div>
    <div>
      <button class="submit-button">{{ form.SubmitLabel }}</button>
      <button class="cancel-button">{{ form.CancelLabel }}</button>
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
  background-color: red;
  color: white;
}
</style>
