import {
  MouseEventHandler,
  RefObject,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
  useRef,
} from 'react'
import {
  HiOutlineChevronDown,
  HiOutlineDownload,
  HiOutlineUpload,
  HiOutlineX,
} from 'react-icons/hi'
import dropdown from './dropdown.module.css'

const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  handler: MouseEventHandler<HTMLButtonElement>
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
interface formStateProps {
  formState: string
  setFormState: Dispatch<SetStateAction<string>>
}
const DropDown: FC<formStateProps> = ({ formState, setFormState }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, () => setIsOpen(false))
  useEffect(() => {
    setIsOpen((state) => !state)
  }, [formState])
  return (
    <div ref={ref} className={dropdown.dropdown}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className={`${dropdown.button} ${dropdown.dropdownButton}
          ${isOpen && dropdown.openButton}`}
      >
        {formState}
        {formState === 'Export' ? <HiOutlineUpload /> : <HiOutlineDownload />}
        {!isOpen ? <HiOutlineChevronDown /> : <HiOutlineX />}
      </button>
      <div className={`${dropdown.menu} ${isOpen && dropdown.openMenu}`}>
        {formState === 'Import' ? (
          <button
            type="button"
            className={`${dropdown.button} ${dropdown.dropdownMenuButton}`}
            onClick={() => setFormState('Export')}
          >
            Export <HiOutlineUpload />
          </button>
        ) : (
          <button
            type="button"
            className={`${dropdown.button} ${dropdown.dropdownMenuButton}`}
            onClick={() => setFormState('Import')}
          >
            Import <HiOutlineDownload />
          </button>
        )}
      </div>
    </div>
  )
}

export default DropDown
