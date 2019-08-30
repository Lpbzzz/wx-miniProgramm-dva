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

    render() {
        console.log(this.props)
        return (
            <View>
                123
            </View>
        )
    }

}