import { ReactNode } from 'react'

import { useDropdown } from './DropdownContext'

interface ItemsProps {
  // inline?: boolean // TODO: to disabled Popover wrapping and behaviour
  children: ReactNode
}

export const Items = ({ children }: ItemsProps) => {
  const { isOpen } = useDropdown()

  return (
    <ul
      className={`flex max-h-sz-320 flex-col overflow-auto ${
        isOpen ? 'block' : 'pointer-events-none opacity-0'
      }`}
    >
      {children}
    </ul>
  )
}

Items.id = 'Items'
Items.displayName = 'Dropdown.Items'
