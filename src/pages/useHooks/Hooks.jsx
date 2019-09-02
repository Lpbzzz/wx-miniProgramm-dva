import Taro, { Component } from '@tarojs/taro';
import { Text, View, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'


@connect(({ feeds }) => {
    return {
        feeds
    }
})
export default class Hooks extends Component {


    config = {
        navigationBarTitleText: 'Hooks',
        backgroundTextStyle: 'dark'
    }

    constructor() {
        super(...arguments)

    }
    componentDidMount(){
        wx.cloud.init()
    }
    btnClick=()=>{
        wx.getLocation({
            success:function(r){
                console.log(r)
            }
        })
    }

    render() {
        console.log(this.props)
        return (
            <View>
                <Button onClick={this.btnClick}></Button>
            </View>
        )
    }

}