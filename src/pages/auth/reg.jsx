import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtButton, AtInput, AtForm } from 'taro-ui'

export default class Reg extends Component {

    config = {
        navigationBarTitleText: '注册页'
    }

    goLogin = () => {
        Taro.redirectTo({
            url: '/pages/auth/login'
        })
    }


    render() {
        return (
            <View className='index'>
                <AtForm>
                    <AtInput type='text' name='userName' placeholder="请输入用户名"></AtInput>
                    <AtInput type='password' name='password' placeholder="请输入密码"></AtInput>
                    <AtInput type='reePassword' name='reePassword' placeholder="请再次输入密码"></AtInput>
                    <AtButton type='primary' onClick={this.testClickHandel}>注册</AtButton>
                </AtForm>
                <Text className='reg-login-jump' onClick={() => { this.goLogin() }}>已有账号？点击去登录</Text>
            </View>
        )
    }
}
