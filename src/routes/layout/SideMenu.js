import React, { Component } from 'react';
import { Menu, Icon } from 'antd'
import { Link } from 'dva/router'
import { withRouter } from 'react-router'
import { selectKeysFromPath } from '../../utils/routeMatch'

/**
 * 侧边菜单栏，根据用户权限动态配置
 */
class SiderMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usertype: '1'//暂定1是管理员，2是用户
        }
    }

    renderMenu = () => {
        const { location } = this.props
        let currentKey = selectKeysFromPath(location.pathname)
        if (this.state.usertype === '1') {
            return (
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} selectedKeys={[currentKey]}>
                    <Menu.Item key="1">
                        <Link to="/">
                            <Icon type="home" />
                            <span>首页</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/page1">
                            <Icon type="search" />
                            <span>页面1</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/page2">
                            <Icon type="star-o" />
                            <span>页面2</span>
                        </Link>
                    </Menu.Item>
                </Menu>

            )
        }
        else if (this.state.usertype === '2') {
            return (
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} selectedKeys={[location.pathname]}>
                    <Menu.Item key="1">
                        <Link to="/">
                            <Icon type="home" />
                            <span>首页</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/page1">
                            <Icon type="home" />
                            <span>page1</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            )
        }
    }
    render() {
        return (
            <div>
                {
                    this.renderMenu()
                }
            </div>
        )
    }
}

export default withRouter(SiderMenu)