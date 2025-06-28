import { Button, View } from '@tarojs/components'
import { VirtualList, type VirtualizerInstance } from '../virtual-list'
import { useRef } from 'react'

export default function GridVirtualList() {
  const instanceRef = useRef<VirtualizerInstance>()

  return (
    <View>
      <View className="demo-btns">
        <Button onClick={() => instanceRef.current?.scrollToIndex(2000, { behavior: 'instant' })}>
          scrollToIndex(2000)
        </Button>
        <Button onClick={() => instanceRef.current?.scrollToIndex(3000, { align: 'center' })}>
          scrollToIndex(3000) with align center
        </Button>
      </View>
      <VirtualList
        style={{ height: 400, fontSize: 14 }}
        itemClassName="demo-list-item"
        count={10000}
        size={60}
        grid
        gridSize={[200, 80]}
        gap={10}
        overscan={5}
        onReady={(virtualizer) => {
          instanceRef.current = virtualizer
        }}
      >
        {({ index }, colItem) => (
          <View className={index % 2 ? 'demo-list-odd' : 'demo-list-even'}>
            cell {index},{colItem?.index}
          </View>
        )}
      </VirtualList>
    </View>
  )
}
