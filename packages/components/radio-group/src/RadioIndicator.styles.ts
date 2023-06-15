import { makeVariants } from '@spark-ui/internal-utils'
import { cva, VariantProps } from 'class-variance-authority'

export const radioIndicatorStyles = cva(
  [
    'block',
    'relative',
    'h-full',
    'w-full',
    'after:absolute',
    'after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2',
    'after:h-none',
    'after:w-none',
    'after:block',
    'after:rounded-[50%]',
    "after:content-['']",
    'after:transition-all',
  ],
  {
    variants: {
      intent: makeVariants<
        'intent',
        ['primary', 'secondary', 'success', 'alert', 'error', 'info', 'neutral']
      >({
        primary: ['after:bg-primary'],
        secondary: ['after:bg-secondary'],
        neutral: ['after:bg-neutral'],
        success: ['after:bg-success'],
        alert: ['after:bg-alert'],
        error: ['after:bg-error'],
        info: ['after:bg-info'],
      }),
      size: makeVariants<'size', ['sm', 'md']>({
        sm: ['after:spark-state-checked:h-sz-10', 'after:spark-state-checked:w-sz-10'],
        md: ['after:spark-state-checked:h-sz-16', 'after:spark-state-checked:w-sz-16'],
      }),
    },
    defaultVariants: {
      intent: 'primary',
      size: 'sm',
    },
  }
)

export type RadioIndicatorStylesProps = VariantProps<typeof radioIndicatorStyles>