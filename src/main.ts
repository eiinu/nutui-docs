import { createApp } from 'vue';
import NewMain from './views/NewMain.vue';
import '@/assets/styles/reset.scss';
import { Hover } from '@/directive/hover/hover';

createApp(NewMain).directive('hover', Hover).mount('#doc');
