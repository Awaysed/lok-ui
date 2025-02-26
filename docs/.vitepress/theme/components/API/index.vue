<script setup lang="ts">
import { data } from './api.data'

interface APIProps {
  type: 'prop' | 'event' | 'slot'
  component: string
}
const props = defineProps<APIProps>()
const meta = data[props.component]
const propKeys = ['name', 'description', 'type', 'default']
const eventKeys = ['name', 'description', 'type']
const slotKeys = ['name', 'description', 'type']
</script>

<template>
  <table v-if="type === 'prop' && meta?.props">
    <thead>
      <th>属性</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </thead>
    <tbody>
      <tr v-for="item in meta.props">
        <td v-for="key in propKeys">
          <slot :name="`${item.name}-${key}`" :text="item[key]">
            <code v-if="key == 'type' || key == 'default'">{{
              item[key] || '-'
            }}</code>
            <span v-else>{{ item[key] || '-' }}</span>
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
  <table v-if="type === 'event' && meta?.events">
    <thead>
      <th>事件</th>
      <th>说明</th>
      <th>类型</th>
    </thead>
    <tbody>
      <tr v-for="item in meta.events">
        <td v-for="key in eventKeys">
          <slot :name="`${item.name}-${key}`" :text="item[key]">
            <code v-if="key == 'type'">{{
              item[key] || '-'
            }}</code>
            <span v-else>{{ item[key] || '-' }}</span>
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
  <table v-if="type === 'slot' && meta?.slots">
    <thead>
      <th>插槽</th>
      <th>说明</th>
      <th>类型</th>
    </thead>
    <tbody>
      <tr v-for="item in meta.slots">
        <td v-for="key in slotKeys">
          <slot :name="`${item.name}-${key}`" :text="item[key]">
            <code v-if="key == 'type'">{{
              item[key] || '-'
            }}</code>
            <span v-else>{{ item[key] || '-' }}</span>
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>
