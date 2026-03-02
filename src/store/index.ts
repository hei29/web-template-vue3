import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(createPersistedState()); // pinia持久化

export { pinia };

export * from './modules/global';

export default pinia;