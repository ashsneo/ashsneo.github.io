<script setup>
import Icon from '@components/vue/Icon.vue';

const props = defineProps(['items', 'col','title', 'moreHref', 'tIcon', 'tIconColor'])
</script>

<template>
  <div class="mt-5 first:mt-0">
    <div class="flex justify-between p-1 text-2xl text-[--gray-0]">
      <span class="flex items-center">
        <Icon v-if="tIcon" :icon="tIcon" size="1.2em" :color="tIconColor" />
        {{ title }}
      </span>
      <a v-if="moreHref" :href="moreHref">更多》</a>
    </div>
    <div :class="[
      'grid grid-flow-rol gap-4 grid-cols-1',
      {
        'md:grid-cols-2': col >= 2 && items >= 2,
        'lg:grid-cols-3': col === 3 && items > 3
      }
    ]">
      <slot v-if="items > 0"></slot>
      <p v-else class="flex flex-col items-center justify-center p-10 border-2 rounded border-[--gray-900] bg-[--gray-900]">
        <Icon icon="nothing" size="1.2em" />There is nothing
      </p>
    </div>
  </div>
</template>