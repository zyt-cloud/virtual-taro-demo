# taro 虚拟组件 VirtualList

> 还提供其他平台包: web: @z-cloud/virtual-react，@z-cloud/virtual-vue。 uni-app: @z-cloud/virtual-uni。文档建设中...

该组件包含常规虚拟列表、瀑布流、网格 grid

[使用文档](https://github.com/zyt-cloud/virtual-taro-demo) 请查看 pages 对应的页面

## 使用注意事项

跟随页面滚动的虚拟列表需要在页面注册 onPageScroll 事件，具体如下

```ts
onPageScroll((e) => {
  instanceRef.value?.onScroll(e)
})
```

## 配置项

```ts
{
  /**
   * 列表项数量
   */
  count: number
  /**
   * 每一项的大小，竖向滚动为高度，横向滚动为宽度
   */
  size: number | ((index: number) => number)
  /**
   * 可见范围外两端渲染数量，该值越大出现白屏的概率越小。建议跟随页面滚动的虚拟列表该值可稍微配置大一些。
   * @default 1
   */
  overscan?: number
  /**
   * 动态尺寸 grid 模式暂不支持
   */
  dynamicSize?: boolean
  /**
   * girdSize [行尺寸，列尺寸] 提供该值会覆盖 size 配置
   */
  gridSize?: [number, number]
  /**
   * grid 模式
   */
  grid?: boolean
  // 是否跟随页面滚动， 此时不需要设置虚拟列表高度
  followPageScroll?: boolean
  /**
   * 水平滚动
   * @default false
   */
  horizontal?: boolean
  /**
   * 每项之间的间距
   * @default 0
   */
  gap?: number
  /**
   * 应用于虚拟列表起始位置的padding
   */
  paddingStart?: number
  /**
   * 应用于虚拟列表末尾位置的padding
   */
  paddingEnd?: number
  /**
   * 初始滚动位置
   */
  initialOffset?: number | (() => number)
  /**
   * 滚动元素距离页面顶部的距离
   */
  scrollMargin?: number
  /**
   * 列表被分成的列数或行数 (垂直列表对应列数，水平列表对应行数)
   * @default 1
   */
  lanes?: number
  className?: string
  style?: CSSProperties
  itemClassName?: string
  itemStyle?: CSSProperties
}
```
