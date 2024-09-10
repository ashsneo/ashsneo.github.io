import { z, defineCollection } from 'astro:content';

const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().or(z.undefined()).optional(),
    headPic: z.string().optional(),
    tagType: z.string().default('其它'),// 标签分类，会在标签页面用于头部显示
    tags: z.array(z.string()).optional(),
    top: z.boolean().default(false),
    topTo: z.string().optional().default(''),
  }),
});

const seriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
    headPic: z.string().optional(),
    tagType: z.string().default('其它'),// 标签分类，会在标签页面用于头部显示
    tags: z.array(z.string()).optional(),
    top: z.boolean().default(false),
    topTo: z.string().optional().default(''),
    series: z.string(),// 合集分类，会在合集页面展示
  }),
});

export const collections = {
  'docs': docsCollection,
  'series': seriesCollection,
};