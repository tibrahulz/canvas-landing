import { Button } from 'antd';

import StyledSecondaryButton from './StyledSecondaryButton';

function SecondaryButton({
  size = 'small',
  Icon = null,
  text,
  onClick,
  customClassname,
  customStyle,
  disabled = false,
  loading = false
}) {
  return (
    <StyledSecondaryButton className={customClassname} style={customStyle}>
      <Button
        shape="round"
        icon={Icon}
        size={size}
        disabled={disabled}
        loading={loading}
        onClick={onClick}
      >
        {text}
      </Button>
    </StyledSecondaryButton>
  );
}

export default SecondaryButton;
