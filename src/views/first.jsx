import React, { Component } from 'react';
import { Button } from 'antd'

class MyComponent extends Component {
  changeProps = (handleParams) => {
    return () => {
      console.log(handleParams, '90909090')
      this.props.parent.getChildrenMessage(this, handleParams)
    }
  }
  render() {
    return (
      <div>
        父组件传递过来的数据：{this.props.message}<br/>
        <Button type='primary' onClick={ this.changeProps('子组件事件传参修改父组件数据')}>修改</Button>
      </div>
    );
  }
}

export default MyComponent;