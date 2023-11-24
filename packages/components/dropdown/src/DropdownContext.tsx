import { Popover } from '@spark-ui/popover'
import { useSelect } from 'downshift'
import {
  createContext,
  Dispatch,
  Fragment,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'

import { type DownshiftState, type DropdownItem, type ItemsMap } from './types'
import { getElementByIndex, getOrderedItems } from './utils'
export interface DropdownContextState extends DownshiftState {
  computedItems: ItemsMap
  highlightedItem: DropdownItem | undefined
  hasPopover: boolean
  setHasPopover: Dispatch<SetStateAction<boolean>>
}

type DropdownContextProps = PropsWithChildren

const DropdownContext = createContext<DropdownContextState | null>(null)

export const DropdownProvider = ({ children }: DropdownContextProps) => {
  const [computedItems, setComputedItems] = useState<ItemsMap>(new Map())
  const [hasPopover, setHasPopover] = useState<boolean>(false)

  const downshift = useSelect({
    items: Array.from(computedItems.values()),
    isItemDisabled: item => item.disabled,
    itemToString: item => (item ? item.text : ''),
    // getA11yStatusMessage?: (options: A11yStatusMessageOptions<Item>) => string
    // getA11ySelectionMessage?: (options: A11yStatusMessageOptions<Item>) => string
    // highlightedIndex?: number
    // initialHighlightedIndex?: number
    // defaultHighlightedIndex?: number
    // isOpen?: boolean
    // initialIsOpen?: boolean
    // defaultIsOpen?: boolean
    // selectedItem?: Item | null
    // initialSelectedItem?: Item | null
    // defaultSelectedItem?: Item | null
    // id?: string
    // labelId?: string
    // menuId?: string
    // toggleButtonId?: string
    // getItemId?: (index: number) => string
    // scrollIntoView?: (node: HTMLElement, menuNode: HTMLElement) => void
    // stateReducer?: (
    //   state: UseSelectState<Item>,
    //   actionAndChanges: UseSelectStateChangeOptions<Item>,
    // ) => Partial<UseSelectState<Item>>
    // onSelectedItemChange?: (changes: UseSelectStateChange<Item>) => void
    // onIsOpenChange?: (changes: UseSelectStateChange<Item>) => void
    // onHighlightedIndexChange?: (changes: UseSelectStateChange<Item>) => void
    // onStateChange?: (changes: UseSelectStateChange<Item>) => void
    // environment?: Environment
  })

  /**
   * Indices in a Map are set when an element is added to the Map.
   * If for some reason, in the Dropdown:
   * - children order changes
   * - children are added
   * - children are removed
   *
   * The Map must be rebuilt from the new children in order to preserve logical indices.
   *
   * Downshift is heavily indices based for keyboard navigation, so it it important.
   */
  const syncItems = ({ children }: { children: ReactNode }) => {
    const newMap: ItemsMap = new Map()

    getOrderedItems(children).forEach(itemData => {
      newMap.set(itemData.value, itemData)
    })

    setComputedItems(newMap)
  }

  useEffect(() => {
    syncItems({ children })
  }, [children])

  const WrapperComponent = hasPopover ? Popover : Fragment

  return (
    <DropdownContext.Provider
      value={{
        ...downshift,
        computedItems,
        highlightedItem: getElementByIndex(computedItems, downshift.highlightedIndex),
        hasPopover,
        setHasPopover,
      }}
    >
      <Popover open={downshift.isOpen}>
        <WrapperComponent>{children}</WrapperComponent>
      </Popover>
    </DropdownContext.Provider>
  )
}

export const useDropdown = () => {
  const context = useContext(DropdownContext)

  if (!context) {
    throw Error('useDropdown must be used within a Dropdown provider')
  }

  return context
}