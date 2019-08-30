import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtInput, AtForm } from 'taro-ui'

export default class Login extends Component {

    config = {
        navigationBarTitleText: '登录页'
    }

    testClickHandel = () => {
        // console.log(111)
        // Taro.login({
        //     timeout: 2000,
        //     success: function (su) {
        //         console.log(su)
        //     }
        // })
        Taro.getLocation({
            type: 'gcj02',
            altitude: true,
            success: function (su) {
                console.log(su)
            }
        })
    }


    render() {
        return (
            <View className='index'>
                <AtForm>
                    <AtInput type='text' name='userName' placeholder='请输入用户名'></AtInput>
                    <AtInput type='password' name='password' placeholder='请输入密码'></AtInput>
                    <AtButton type='primary' onClick={this.testClickHandel}>登录</AtButton>
                </AtForm>
                <Text className='reg-login-jump' onClick={() => Taro.redirectTo({ url: '/pages/auth/reg' })}>没已有账号？点击去注册</Text>
            </View>
        )
    }
}
