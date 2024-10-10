<script setup>
import Card from '@components/vue/Card.vue';
import Panel from '@components/vue/Panel.vue';

import { ref, onMounted } from 'vue';

const props = defineProps(['posts'])

const maxPostNum = 10;
const tops = ref([]);
const newPosts = ref([]);

onMounted(() => {
    props.posts.sort(({data: data1}, {data: data2}) => {
        return data1.date < data2.date ? 1 : -1;
    }).forEach((post) => {
        const { top, topTo } = post.data;
        const result = {
            ...post,
            href: `/content/${post.collection}/${post.slug}`
        }
        if (top && Date.parse(topTo) > Date.now()) {
            tops.value.push(result);
        } else {
            if (newPosts.value.length < maxPostNum) {
                newPosts.value.push(result);
            }
        }
    });
})
</script>
<template>
    <Panel :items=tops.length :col="3" title="置顶" tIcon="hot" tIconColor="var(--rose-400)">
        <Card v-for="{data, href} in tops"
            :directionRow=false
            :title="data.title"
            :date="data.date"
            :description="data.description"
            :href="href"
            :pic="data.headPic || ''"
            :tags="data.tags" />
    </Panel>
    <Panel :items="newPosts.length" title="最新文章" :moreHref="newPosts.length > maxPostNum ? '/docs/' : ''">
        <Card v-for="{data, href} in newPosts"
            :directionRow=false
            :title="data.title"
            :date="data.date"
            :description="data.description"
            :href="href"
            :pic="data.headPic"
            :tags="data.tags" />
    </Panel>
</template>