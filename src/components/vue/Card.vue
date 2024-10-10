<script setup>
import Icon from '@components/vue/Icon.vue'
import { defaultCardHeadImg } from '@utils/image';
import { ref, onBeforeMount } from 'vue';
  
const defaultPic = ref({})
const { directionRow = true, pic, title, date, description, href, tags } = defineProps(['directionRow', 'pic', 'title', 'date', 'description', 'href', 'tags']);

onBeforeMount(async () => {
  defaultPic.value = await defaultCardHeadImg()
})
</script>

<template>
  <a :class="[
    'group',
    'flex gap-2 border-[1px] rounded-md box-border shadow-sm border-[--gray-900]',
    'hover:cursor-pointer hover:scale-[.99] hover:bg-[var(--gray-800)]',
    directionRow ? 'flex-col md:flex-row md:items-center' : 'flex-col',
  ]" :href="href">
    <img v-if="pic || pic === ''" :class="[
      'object-cover object-center rounded-md',
      `${directionRow ? 'w-full h-32 md:w-1/5 md:h-full' : 'w-full h-32'}`,
    ]" :src="pic || defaultPic.default?.src" alt="" />
    <div class="grid p-1">
      <span class="text-lg text-[--gray-0]">{{ title }}</span>
      <span v-if="date" class="flex items-center text-sm text-[--gray-200]">
        <Icon icon="date" size="1.5rem" color="var(--gray-200)" />
        {{ date }}
      </span>
      <!-- <AutoSpan content={description} className="text-[--gray-200] text-base max-h-24" /> -->
      <span :class="[
        'card-desc overflow-hidden text-ellipsis text-base',
        description ? 'text-[--gray-200]' : 'text-[--gray-400]'
      ]">{{ description === '' ? description : description || '作者很懒，没有留下任何说明' }}</span>
        <div v-if="tags && tags.length > 0">
          <span v-for="tag in tags" class="inline-block m-1 px-1 py-[0.1rem] rounded-sm bg-[--gray-900] group-hover:border-[--gray-800] text-[--gray-300] text-sm">{{ tag }}</span>
        </div>
    </div>
  </a>
</template>

<style scoped>
.card-desc {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>