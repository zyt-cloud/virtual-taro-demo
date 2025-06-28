import { VirtualList, type VirtualizerInstance } from '../virtual-list'
import { useRef } from 'react'
import { randomColors } from './utils'
import { View } from '@tarojs/components'

const dynamicSizes = new Array(10000).fill(true).map(() => Math.round(Math.random() * 80 + 120))

export default function DynamicSizeVirtualList() {
  const instanceRef = useRef<VirtualizerInstance>()

  return (
    <View>
      <VirtualList
        style={{ height: 400 }}
        itemClassName="demo-list-item"
        count={10000}
        dynamicSize
        overscan={5}
        size={130}
        gap={8}
        lanes={2}
        onReady={(virtualizer) => {
          instanceRef.current = virtualizer
        }}
      >
        {({ index }) => (
          <View
            style={{
              height: dynamicSizes[index],
              backgroundColor: randomColors[index % randomColors.length],
            }}
            className={index % 2 ? 'demo-list-odd' : 'demo-list-even'}
          />
        )}
      </VirtualList>
    </View>
  )
}
