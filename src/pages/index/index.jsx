import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtButton } from 'taro-ui'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '唐杰'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <AtButton type='primary'>测试的</AtButton>
      </View>
    )
  }
}
