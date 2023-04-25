import { cva } from 'class-variance-authority'

// eslint-disable-next-line tailwindcss/no-custom-classname
export const styles = cva([
  'rounded-md',
  'p-md',
  'bg-surface text-on-surface',
  'w-sz-256',
  'shadow',
  'focus:shadow-lg',
  // directions styles
  'will-change-[transform,opacity]',
  'data-[state=open]:data-[side=bottom]:animate-slideUpAndFade',
  'data-[state=open]:data-[side=left]:animate-slideRightAndFade',
  'data-[state=open]:data-[side=right]:animate-slideLeftAndFade',
  'data-[state=open]:data-[side=top]:animate-slideDownAndFade',
])
