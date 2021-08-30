import React from 'react'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const TabOptions = [
    {
        title: 'Personal Information',
        key: '1',
    },
    {
        title: 'Insurance Details',
        key: '2',
    },
    {
        title: 'Family Information',
        key: '3',
    },
]

function CustomTabs(props) {

    const {children} = props;

    return (
        <Tabs defaultActiveKey='1' centered>
            {
                TabOptions.map((tab, index) => (
                    <TabPane tab={tab.title} key={tab.key} >
                        {children[index] ? children[index] : <></>}
                    </TabPane>
                ))
            }
            {/* <TabPane tab='Personal Information' key='1'>
                {children[0] ? children : <></>}
            </TabPane>
            <TabPane tab='Insurance Details' key='2'>
                {children[1] ? children : <></>}
            </TabPane> */}
        </Tabs>
    )
}

export default CustomTabs
