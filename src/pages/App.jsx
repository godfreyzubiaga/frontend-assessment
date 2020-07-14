/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { Tabs, Collapse } from 'antd';
import { useMediaQuery } from 'react-responsive';
import './App.scss';

import sampleData from '../../data.json';

const { Panel } = Collapse;
const { TabPane } = Tabs;

const App = () => {
  const [activeTab, setActiveTab] = useState('0');

  const isDesktopOrLaptop = () => useMediaQuery({
    query: '(min-device-width: 1224px)',
  });

  const isTabletOrMobile = () => useMediaQuery({ query: '(max-width: 1224px)' });

  const onTabChange = (key) => setActiveTab(key);

  return (
    <div className="container">
      {isDesktopOrLaptop() && (
        <Tabs activeKey={activeTab} onChange={onTabChange}>
          {sampleData.length > 0 && sampleData.map(({ title, content }, index) => ( // data should have an ID using index shouldn't be used
            <TabPane tab={title} key={index}>
              <>{content}</>
              {/* I could add dangerouslySetInnerHTML just to render the <p>
                 and other html tags within the data but this is discouraged as invites XSS  */}
            </TabPane>
          ))}
        </Tabs>
      )}
      {isTabletOrMobile() && (
        <Collapse activeKey={[activeTab]} onChange={onTabChange}>
          {sampleData.length > 0 && sampleData.map(({ title, content }, index) => (
            <Panel header={title} key={index}>
              <>{content}</>
            </Panel>
          ))}
        </Collapse>
      )}
    </div>
  );
};

export default App;
