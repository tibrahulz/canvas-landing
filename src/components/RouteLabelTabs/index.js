import { Tabs } from 'antd';

import SwitchButton from '../Switch';
import { StyledRoute } from './StyledRouteLabelTabs';
function RouteLabelTabs(props) {
  const { TabPane } = Tabs;
  const {
    onTabChange,
    tabs,
    customStyle = {},
    customClassName = '',
    activeTab,
    showSwitch = false,
    switchText = 'Tooltips',
    isActiveSwitch = false,
    handleToggle
  } = props;

  return (
    <StyledRoute className={customClassName} style={customStyle}>
      <Tabs
        className="tabContainer"
        activeKey={activeTab.label}
        onChange={onTabChange}
      >
        {tabs?.map(singleTab => (
          <TabPane
            className="tabPane"
            tab={singleTab.label}
            key={singleTab.label}
          />
        ))}
      </Tabs>

      <div className="switchBtn">
        {showSwitch && (
          <SwitchButton
            text={switchText}
            isActive={isActiveSwitch}
            handleToggle={handleToggle}
            customStyle={{
              width: '7.5rem',
              display: 'flex',
              flexDirection: 'row-reverse',
              justifyContent: 'space-between'
            }}
          />
        )}
      </div>
    </StyledRoute>
  );
}
export default RouteLabelTabs;
