import { Button } from 'antd';

import StyledPrimaryGradientButton from './StyledPrimaryGradientButton';

function PrimaryGradientButton({
  size = 'small',
  Icon,
  text,
  onClick,
  customClassname,
  customStyle = null,
  disabled = false,
  loading = false
}) {
  return (
    <StyledPrimaryGradientButton
      className={customClassname}
      style={customStyle}
    >
      <Button
        type="primary"
        shape="round"
        icon={Icon}
        size={size}
        disabled={disabled}
        loading={loading}
        onClick={onClick}
      >
        {text}
      </Button>
    </StyledPrimaryGradientButton>
  );
}

export default PrimaryGradientButton;
