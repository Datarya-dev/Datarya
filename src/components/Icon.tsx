import type { SVGProps } from 'react';

type IconName =
  | 'arrow'
  | 'check'
  | 'chevron'
  | 'close'
  | 'external'
  | 'mail'
  | 'menu'
  | 'moon'
  | 'phone'
  | 'plus'
  | 'send'
  | 'sun';

const paths: Record<IconName, string> = {
  arrow: 'M5 12h13M13 6l6 6-6 6',
  check: 'm5 12 4 4L19 6',
  chevron: 'm7 10 5 5 5-5',
  close: 'M6 6l12 12M18 6 6 18',
  external: 'M14 5h5v5M19 5l-8 8M19 14v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4',
  mail: 'M4 6h16v12H4zM4 7l8 6 8-6',
  menu: 'M4 7h16M4 12h16M4 17h16',
  moon: 'M20 14.5A7.5 7.5 0 1 1 9.5 4 6 6 0 0 0 20 14.5Z',
  phone: 'M6 3h4l2 5-2.5 1.5a15 15 0 0 0 6 6L17 13l5 2v4a2 2 0 0 1-2 2C10.3 21 3 13.7 3 5a2 2 0 0 1 2-2h1Z',
  plus: 'M12 5v14M5 12h14',
  send: 'M21 3 10 14M21 3l-7 18-4-7-7-4 18-7Z',
  sun: 'M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z'
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 18, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  );
}
