import { Switch } from 'antd';

import StyledSwitch from './StyledSwitch';

function SwitchButton({
  text = 'Publish',
  handleToggle,
  isActive = false,
  customStyle = {},
  disabled = false,
  className,
  customSwitchStyle
}) {
  return (
    <StyledSwitch style={customStyle} className={className}>
      <Switch
        checked={isActive}
        onClick={handleToggle}
        disabled={disabled}
        style={customSwitchStyle}
      />
      <span>{text}</span>
    </StyledSwitch>
  );
}

export default SwitchButton;
