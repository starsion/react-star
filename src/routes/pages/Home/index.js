/**
 * 首页
 */
import React, { Component } from 'react'
import styles from './index.css'
import { Tabs } from 'antd'
import echarts from 'echarts/lib/echarts'

class HomePage extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <div className={styles.home_container}>
                首页
            </div>
        )
    }
}

export default HomePage
