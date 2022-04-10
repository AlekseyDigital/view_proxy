import { ref, Component, defineEmits, defineProps, defineAsyncComponent } from 'vue';
import { viewOptions, ViewOptions } from './viewFactory';

export const useViewProxy = () => {
  const prop = defineProps({
    view: {
      type: Component,
      required: true
    }
  });
  const comp = defineAsyncComponent(() => import('./' + ''));
  return {
    comp
  }
};

export default function getView() {
  return viewOptions[view];
}
