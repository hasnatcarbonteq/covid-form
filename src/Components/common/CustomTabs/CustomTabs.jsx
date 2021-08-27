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
    console.log(children.props.index)
    return (
        <Tabs defaultActiveKey='1' centered>
            {
                TabOptions.map((tab, index) => (
                    <TabPane tab={tab.title} key={tab.key} >
                        {children.props.index === tab.key ? children : <></>}
                    </TabPane>
                ))
            }
        </Tabs>
    )
}

export default CustomTabs
