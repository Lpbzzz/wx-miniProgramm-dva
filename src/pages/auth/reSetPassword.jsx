import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { AtForm, AtInput, AtButton } from 'taro-ui'


import { RegNumber } from '../../utils/regexp'



export default class ReSetPassWord extends Component {
    config = {
        navigationBarTitleText: '重置密码'
    }
    constructor(props) {
        super(props)
        this.state = {
            phone: '',
            code: '',
            newPassword: ''
        }
    }
    handelChangePhone = (value) => {
        if (RegNumber(value)) {
            this.setState({
                phone: value
            })
            return value
        } else {
            this.setState({
                phone: this.state.phone
            })
            return this.state.phone
        }
    }
    handleChangeCode = (value) => {
        this.setState({
            code: value
        })
        return value
    }
    handleChangePassword = (value) => {
        this.setState({
            newPassword: value
        })
        return value
    }
    submit = () => {
        console.log(this.state)
    }
    render() {
        const { phone, code, newPassword } = this.state
        return (
            <View style={{ padding: '0 5%' }}>
                <Text> 使用已经注册的手机号码找回密码 </Text>
                <AtForm onSubmit={this.submit}>
                    <AtInput
                        name='phone'
                        title='手机'
                        type='phone'
                        placeholder='请输入手机号'
                        value={phone}
                        onChange={this.handelChangePhone}
                    />

                    <AtInput
                        clear
                        title='验证码'
                        type='text'
                        maxLength='4'
                        placeholder='验证码'
                        value={code}
                        onChange={this.handleChangeCode}
                    >
                        {/* <Image src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568021324884&di=bcf14fdae13c96e47c9ad69ad56f1493&imgtype=0&src=http%3A%2F%2Fs4.sinaimg.cn%2Fmw690%2F003bsgbmgy6R6efoOr1c3' /> */}
                        <AtButton size='small'>获取验证码</AtButton>
                    </AtInput>
                    <AtInput
                        name='newPassword'
                        title='密码'
                        type='password'
                        placeholder='输入密码'
                        value={newPassword}
                        onChange={this.handleChangePassword}
                    />
                    <AtButton formType='submit'>完成</AtButton>
                </AtForm>
            </View>
        )
    }
}