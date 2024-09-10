# Build by astro & tailwindcss

本站采用`Astro`与`Tailwindcss`构建。

阅读量插件`Webviso`。

评论插件`Twikoo`。

部署在`Netlify`。

# Content目录

- `docs`: 存放普通文章，直接存放于根目录。指非系列，项目等文章；
- `series`: 存放系列合集文章，需要创建系列目录，例如/series/css/**.md。指成系列的文章；

# 开发与发布

本地开发执行:

```javascript
npm run dev
```

构建执行:

```javascript
npm run build
```

# 关于文章

虽然所有的文档本质上都是文章，但是还是做了区分：

- 合集：包含了成系列的文章；
- 项目：个人项目介绍文章；
- 文章：除以上分类之外的普通文章；

未来可能会包含其他类型的文章。

# 关于站点结构

- 首页：主要包含所有置顶文章以及最新的10个文章(不区分类型)，可能包括其他模块如站点PV/UV统计，Banner轮播图等；
- 文章：所有未分类的文章列表；
- 合集：系列/合集列表，合集的头图需要放到`public`目录下；
- 标签：文章的标签列表；