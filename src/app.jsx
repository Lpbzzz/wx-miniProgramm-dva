import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import '@tarojs/async-await'

import Index from './pages/index'
import action from './utils/action'
import dva from './dva'
import models from './model'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  onError(e, dispatch) {
    dispatch(action("sys/error", e));
  },
});
const store = dvaApp.getStore();
class App extends Component {

  componentDidMount() {

  }
  config = {
    pages: [
      'pages/useHooks/Hooks',
      'pages/auth/login',
      'pages/index/index',
      'pages/auth/reg',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
    permission: {
      'scope.userLocation': {
        desc: '你的位置信息将用于获取上报位置'
      }
    }
  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
