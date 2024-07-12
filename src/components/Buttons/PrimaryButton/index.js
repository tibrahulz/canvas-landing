import { Button, Tooltip } from 'antd';

import StyledPrimaryButton from './StyledPrimaryButton';

function PrimaryButton({
  size,
  Icon,
  text,
  onClick,
  customClassname,
  customStyle = null,
  disabled = false,
  loading = false,
  showTooltip = false,
  tooltipTitle,
  additionalText
}) {
  return (
    <StyledPrimaryButton
      className={customClassname}
      style={customStyle}
      size={size}
    >
      {!showTooltip ? (
        <Button
          type="primary"
          shape="round"
          icon={Icon}
          size={size}
          disabled={disabled}
          loading={loading}
          onClick={onClick}
        >
          {text} <em>{additionalText}</em>
        </Button>
      ) : (
        <Tooltip placement="right" title={tooltipTitle}>
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
        </Tooltip>
      )}
    </StyledPrimaryButton>
  );
}

export default PrimaryButton;
