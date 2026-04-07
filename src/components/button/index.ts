import Button from './Button';
import ButtonIcon from './ButtonIcon';
import ButtonGroup from './ButtonGroup';

export type { ButtonColorType, ButtonSizeType, ButtonVariantType } from './types';

export default Object.assign(Button, {
  Icon: ButtonIcon,
  Group: ButtonGroup,
});
