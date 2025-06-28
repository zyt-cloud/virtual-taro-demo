import { View, Text, Button } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'
import { useState } from 'react'
import Vertical from '@/components/demos/vertical'
import Horizontal from '@/components/demos/horizontal'
import Grid from '@/components/demos/grid'
import FollowPage from '@/components/demos/follow-page-scroll'
import Dynamic from '@/components/demos/dynamic'

export default function Index() {
  const [name, setName] = useState('vertical')
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View style={{ padding: 14 }}>
      <View className="demo-btns">
        <Button onClick={() => setName('vertical')}>
          <Text>垂直列表</Text>
        </Button>
        <Button onClick={() => setName('horizontal')}>
          <Text>水平列表</Text>
        </Button>
        <Button onClick={() => setName('grid')}>
          <Text>网格</Text>
        </Button>
        <Button onClick={() => setName('followPage')}>
          <Text>跟随页面滚动</Text>
        </Button>
        <Button onClick={() => setName('dynamic')}>
          <Text>动态尺寸</Text>
        </Button>
      </View>
      {name === 'vertical' && <Vertical />}
      {name === 'horizontal' && <Horizontal />}
      {name === 'grid' && <Grid />}
      {name === 'followPage' && <FollowPage />}
      {name === 'dynamic' && <Dynamic />}
    </View>
  )
}
