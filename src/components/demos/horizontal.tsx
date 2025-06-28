import { View, Button } from '@tarojs/components'
import { VirtualList, type VirtualizerInstance } from '../virtual-list'
import { useRef } from 'react'

export default function RowVirtualList() {
  const instanceRef = useRef<VirtualizerInstance>()

  return (
    <View>
      <View className="demo-btns">
        <Button onClick={() => instanceRef.current?.scrollToIndex(2000, { behavior: 'smooth' })}>
          scrollToIndex(2000) with smooth
        </Button>
        <Button onClick={() => instanceRef.current?.scrollToIndex(3000, { align: 'center' })}>
          scrollToIndex(3000) with align center
        </Button>
        <Button onClick={() => instanceRef.current?.scrollToOffset(4000, 'smooth')}>
          scrollToOffset(4000) with smooth
        </Button>
      </View>
      <VirtualList
        style={{ height: 200 }}
        itemClassName="demo-list-item"
        count={10000}
        overscan={5}
        horizontal
        gap={10}
        size={120}
        onReady={(virtualizer) => {
          instanceRef.current = virtualizer
        }}
      >
        {({ index }) => <View className={index % 2 ? 'demo-list-odd' : 'demo-list-even'}>第 {index} 行</View>}
      </VirtualList>
    </View>
  )
}
