import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { AtAvatar, AtInput, AtForm, AtButton, AtImagePicker } from 'taro-ui'

import TX from '../../assets/img/tx.jpg'
import { RegNumber } from '../../utils/regexp'

export default class Test extends Taro.Component {

    config = {
        navigationBarTitleText: '注册'
    }

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: '',
            code: '',
            password: '',
            files: [],
            imgUrl: ''
        }
    }
    handelChangeName = (value) => {
        this.setState({
            name: value,
        })
        return value
    }
    handelChangePhone = (value) => {
        if (RegNumber(value)) {
            this.setState({
                phone: value,
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
            password: value
        })
        return value
    }
    submit = (ev) => {
        console.log('ev', ev)
        console.log(this.state)
    }
    changeAvatar = (files) => {
        console.log(files)
        this.setState({
            files: files
        })
    }
    chooseImg = () => {
        const _this = this
        wx.chooseImage({
            success: function (ev) {
                console.log(ev)
                _this.setState({
                    imgUrl: ev.tempFilePaths[0]
                })
            }
        })
    }

    render() {
        const { name, phone, code, password, files, imgUrl } = this.state
        return (
            <View
                style={{
                    width: '100%',
                    height: '100vh', display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: `url(${TX})`,
                    backgroundSize: '80% 40%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center 0%',
                }}
            >
                <View
                    style={{ width: '90%' }}>
                    <View
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onClick={this.chooseImg}>
                        <AtAvatar image={imgUrl} circle ></AtAvatar>
                    </View>


                    {/* <AtImagePicker
                        files={files}
                        onChange={this.changeAvatar}
                        length={1}
                        style={{width:'100px',height:'100px'}}
                    /> */}

                    <View style={{ width: '100%' }}>
                        <AtForm
                            onSubmit={this.submit}
                        >
                            <AtInput
                                name='name'
                                title='姓名'
                                type='text'
                                placeholder='请输入姓名'
                                value={name}
                                onChange={this.handelChangeName}
                            />
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
                                name='password'
                                title='密码'
                                type='password'
                                placeholder='输入密码'
                                value={password}
                                onChange={this.handleChangePassword}
                            />
                            <AtButton formType='submit'>完成</AtButton>
                        </AtForm>
                    </View>
                </View>
            </View>
        );
    }
}