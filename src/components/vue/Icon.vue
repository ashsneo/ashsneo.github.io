<script setup>
import { iconPaths } from '@components/IconPaths';

const {
	color = 'currentcolor', gradient, icon, size,
	gradStartColor = 'var(--gradient-stop-1)',
	gradHarfColor = 'var(--gradient-stop-2)',
	gradEndColor = 'var(--gradient-stop-3)'
} = defineProps(['icon', 'color', 'size', 'gradient', 'gradStartColor', 'gradHarfColor', 'gradEndColor']);
const iconPath = iconPaths[icon];

const gradientId = 'icon-gradient-' + Math.round(Math.random() * 10e12).toString(36);
</script>

<template>
<svg
	xmlns="http://www.w3.org/2000/svg"
	width="40"
	height="40"
	viewBox="0 0 1024 1024"
	aria-hidden="true"
	:stroke="gradient ? `url(#${gradientId})` : color"
	:fill="gradient ? `url(#${gradientId})` : color"
	:style="size ? {'--size': size} : {}"
>
	<g v-html="iconPath" scale="0.8"/>
	<linearGradient
		v-if="gradient"
		:id="gradientId"
		x1="0%"
		x2="100%"
		y1="0%"
		y2="0%"
		gradientUnits="userSpaceOnUse"
	>
		<stop :stop-color="gradStartColor" />
		<stop offset=".5" :stop-color="gradHarfColor" />
		<stop offset="1" :stop-color="gradEndColor" />
	</linearGradient>
</svg>
</template>

<style scoped>
	svg {
		vertical-align: middle;
		width: var(--size, 1em);
		height: var(--size, 1em);
	}
</style>
