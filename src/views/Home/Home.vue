<script lang="ts" setup>
import { defineAsyncComponent, h } from 'vue';
import {useViewProxy} from '@/router/viewProxy.ts';
const getView = useViewProxy();
h(getView())
</script>
