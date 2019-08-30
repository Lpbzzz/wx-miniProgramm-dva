import Taro, { Component, useState, } from '@tarojs/taro';
import { Text, View, Button } from '@tarojs/components'

function Counter({ initialCount }) {
    const [count, setCount] = useState(20);
    return (
        <View>
            Count: {count}
            <Button onClick={() => setCount(20)}>Reset2</Button>
            <Button onClick={() => setCount(count + 1)}>+</Button>
            <Button onClick={() => setCount(count - 1)}>-</Button>
        </View>
    );
}

export default Counter