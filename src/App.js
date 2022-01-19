import { Button, DatePicker, Input, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
const { Search } = Input;
function onChange(date, dateString) {
  console.log(date, dateString, "antd 日期选择器");
}
const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item icon={<DownOutlined />} disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);
function buttonClick (num) {
  console.log('按钮被点击了', num)
}
function inputSearch (ev) {
  console.log('ev:', ev)
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary" onClick={buttonClick}>ant Button</Button>
        <DatePicker onChange={onChange} format="YYYY-DD-MM" />
        <Input onChange={inputSearch} placeholder="这是一个普通输入框" width="200" />
        <Search onSearch={inputSearch} placeholder="这是一个搜索框" enterButton="查询" />
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Hover me <DownOutlined />
          </a>
        </Dropdown>
      </header>
    </div>
  );
}

export default App;
