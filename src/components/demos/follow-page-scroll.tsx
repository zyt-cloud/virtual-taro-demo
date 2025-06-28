import { Button, View } from '@tarojs/components'
import { type VirtualizerInstance, VirtualList } from '@z-cloud/virtual-taro'
import { randomColors, randomSize } from './utils'
import { useRef } from 'react'

export default function VirtualListWithPageScroll() {
  const randomSizes = Array.from({ length: 2000 }, () => randomSize() + 80)
  const instanceRef = useRef<VirtualizerInstance>()

  return (
    <View>
      <View className="demo-btns">
        <Button onClick={() => instanceRef.current?.scrollToIndex(100, { behavior: 'smooth' })}>
          scrollToIndex(100) with smooth
        </Button>
        <Button onClick={() => instanceRef.current?.scrollToOffset(300, 'smooth')}>
          scrollToOffset(300) with align center
        </Button>
      </View>
      <VirtualList
        itemClassName="demo-list-item"
        count={2000}
        gap={8}
        size={(index) => randomSizes[index]}
        lanes={2}
        followPageScroll
        overscan={5}
        onReady={(instance) => (instanceRef.current = instance)}
      >
        {({ index }) => (
          <View
            style={{
              backgroundColor: randomColors[index % randomColors.length],
            }}
            className={index % 2 ? 'demo-list-odd' : 'demo-list-even'}
          />
        )}
      </VirtualList>
    </View>
  )
}
