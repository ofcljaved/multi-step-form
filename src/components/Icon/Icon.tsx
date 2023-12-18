import { IconSvg, IconKey } from './IconSvg';

interface IconProps {
  name: IconKey;
}

const Icon = ({ name }: IconProps) => {
  return IconSvg[name];
};

export default Icon;
