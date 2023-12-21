import { IconSvg } from './IconSvg';

interface IconProps {
  name: string;
}

const Icon = ({ name }: IconProps) => {
  if (name in IconSvg) {
    return IconSvg[name as keyof typeof IconSvg];
  }
  return null;
};

export default Icon;
