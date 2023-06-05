<!--
 * @Autor: wangliangxin3
 * @Email: wangliangxin3@jd.com
 * @Description: 
 * @Date: 2023-06-02 16:05:20
 * @LastEditors: wangliangxin3
 * @LastEditTime: 2023-06-05 16:33:59
-->
<template>
  <button class="wl-button" :class="buttonStyle"><slot></slot></button>
</template>

<script lang="ts" setup>
import "./style/index.less";
import { computed } from "vue";
defineOptions({
  name: 'wl-button'
})

type ButtonProps = {
  type? :string
}

const buttonProps = defineProps<ButtonProps>()

const buttonStyle = computed(()=> {return { [`wl-button--${buttonProps.type}`]: buttonProps.type }})

</script>
