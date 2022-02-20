import React, {Component} from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

class AboutContainer extends Component {
    render() {
        return(
            <>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Critical Thinking" key="1">
                        Using logic and reasoning to identify the strengths and weaknesses
                        of alternative solutions, conclusions or approaches to problems.
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </>
        );
    }
}

export default AboutContainer;