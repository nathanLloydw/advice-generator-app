import { createApp } from 'vue'
import '../css/styles.css'

import AdviceBlock from './components/advice-block.vue'

const app = createApp({})

app.component('advice-block', AdviceBlock);

app.mount('#app')