/* eslint-disable vue/multi-word-component-names */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from "primevue/button"
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Textarea from 'primevue/textarea'
import DatePicker from 'primevue/datepicker'
import FloatLabel from 'primevue/floatlabel'
import InputNumber from 'primevue/inputnumber'
import ToggleSwitch from 'primevue/toggleswitch'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Menu from 'primevue/menu'


const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.use(createPinia())
app.use(router)
app.component('Button', Button);
app.component('InputText', InputText);
app.component('Select', Select);
app.component('Textarea', Textarea);
app.component('DatePicker', DatePicker);
app.component('FloatLabel', FloatLabel);
app.component('InputNumber', InputNumber);
app.component('ToggleSwitch', ToggleSwitch);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Menu', Menu);


app.mount('#app')
