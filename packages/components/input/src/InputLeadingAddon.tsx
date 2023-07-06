import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

import { InputAddon, InputAddonProps } from './InputAddon'

export type InputLeadingAddonProps = InputAddonProps

export const InputLeadingAddon = forwardRef<HTMLDivElement, InputLeadingAddonProps>(
  ({ className, ...others }, ref) => (
    <InputAddon
      ref={ref}
      className={cx(className, 'rounded-l-lg !rounded-r-none mr-[-1px]')}
      {...others}
    />
  )
)

InputLeadingAddon.displayName = 'InputGroup.LeadingAddon'
