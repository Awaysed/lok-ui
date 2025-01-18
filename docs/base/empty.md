---
title: GFTable-\@lok/fund-base
---

# GFEmpty

暂无数据组件

<!-- ## 基础用法

::: demo
base/empty/ex1
::: -->

## 尺寸大小

::: demo
base/empty/ex2
:::

<!-- ## 使用基金线内部字体

::: demo
base/empty/ex3
:::

## 自定义图片&文本

::: demo
base/empty/ex4
:::

## 补充说明文本

::: demo
base/empty/ex5
::: -->

## props

| Props      |        说明        |    类型 | 是否必传 | 默认值   |
| ---------- | :----------------: | ------: | -------- | -------- | 
| text       |        文本        |  string | 否       | 暂无数据 |
| isText     |    是否需要文本    | boolean | 否       | true     |
| size       |   尺寸大小(small、medium、large)   | string   | 否  | medium |
| fundFamily | 是否使用基金线字体 | boolean | 否       | false    |
| show | 是否展示(通常传入!loading解决loading和暂无数据同时出现问题) | boolean | 否     | true    |

## 插槽

| Slots      |        说明        |
| ---------- | :----------------: |
| img       |       自定义图片        |
| text     |    自定义文本    |
| supplement       |   补充文本   |

