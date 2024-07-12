import { Button } from 'antd';

import StyledSecondaryGradientButton from './StyledSecondaryGradientButton';

function SecondaryGradientButton({
  size = 'large',
  Icon = null,
  text,
  onClick,
  customClassname,
  customStyle,
  disabled = false,
  loading = false
}) {
  return (
    <StyledSecondaryGradientButton
      className={customClassname}
      style={customStyle}
    >
      <Button
        shape="round"
        icon={Icon}
        size={size}
        disabled={disabled}
        loading={loading}
        onClick={onClick}
      >
        <span className="btnText">{text}</span>
      </Button>
    </StyledSecondaryGradientButton>
  );
}

export default SecondaryGradientButton;
