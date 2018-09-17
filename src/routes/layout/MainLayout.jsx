
import React, { Component } from 'react'
import { Layout, Icon, Tooltip, Breadcrumb, BackTop, Avatar, Dropdown, Menu } from 'antd'
import styles from './MainLayout.css'
import SiderMenu from './SideMenu'
import { Images } from '../../constants'
import { withRouter } from 'react-router'
import { Link } from 'dva/router'
import { selectNameFromPath } from '../../utils/routeMatch'


const { Header, Sider, Content } = Layout
//帮助下拉菜单
const helpMenu = (
    <Menu>
        <Menu.Item>
            <div>
                <Icon type="setting" style={{ marginRight: '10px' }} />
                <a target="_blank">使用反馈</a>
            </div>
        </Menu.Item>
    </Menu>
)

/**
 * 主要布局页面
 */
class MainLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            user: '小明'
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }
    componentDidMount() {

    }

    renderBreadcrumb = (currentPathName) => {
        let item = []
        for (let i = 0; i < currentPathName.length; i++) {
            item.push(<Breadcrumb.Item key ={i}>{currentPathName[i].value}</Breadcrumb.Item>)
        }
        return item
    }

    render() {

        console.log('首页的props------------', this.props)
        const { children, location } = this.props
        let currentPathName = selectNameFromPath(location.pathname)
        return (
            <Layout>
                <Sider
                    className={styles.siderMenu}
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className={styles.logo}>
                        <Icon type="github" style={{fontSize:40,marginBottom:12}} />
                        {
                            this.state.collapsed ? "" : <span>示例项目</span>
                        }
                    </div>
                    <SiderMenu />
                </Sider>
                <Layout id="mainContainer" className={styles.contentLayout}>
                    <BackTop target={() => document.getElementById('mainContainer')} style={{height:50,width:50}} />
                    <Header className={styles.header}>
                        <Icon
                            className={styles.trigger}
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        <div className={styles.header_right}>
                            <Avatar shape='circle' size="large" src={Images.exp} className={styles.user_icon} />
                            <p>欢迎你， <a>{this.state.user}</a></p>
                            <Dropdown overlay={helpMenu}>
                                <Icon type='question'
                                    className={styles.user_quit}
                                    style={{
                                        marginRight: '24px'
                                    }} />
                            </Dropdown>
                            <Tooltip placement="bottom" title={'退出'}>
                                <Icon
                                    className={styles.user_quit}
                                    type='poweroff'
                                // onClick={() => { alert('退出') }}
                                />
                            </Tooltip>
                        </div>
                    </Header>
                    <Content style={{ overflow: 'initial', padding: 24, }}>
                        {
                            <Breadcrumb style={{ marginBottom: 24 }}>
                                <Breadcrumb.Item >
                                    <Link to='/' style={{ textDecoration: 'none' }}>
                                        <span >首页</span>
                                    </Link>
                                </Breadcrumb.Item>
                                {
                                    this.renderBreadcrumb(currentPathName)
                                }
                            </Breadcrumb>
                        }
                        <div style={{ minHeight: 500 }}>
                            {
                                children
                            }
                        </div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default withRouter(MainLayout)