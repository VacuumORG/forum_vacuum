import Image from 'next/image'
import { forwardRef } from 'react'

interface ModalProps {
  children?: JSX.Element
}

const Modal = forwardRef<HTMLDialogElement, ModalProps>(function Modal(
  { children },
  ref
) {
  return (
    <dialog
      ref={ref}
      className="theme-modal open:flex p-0 rounded-lg w-[864px] h-[550px]"
    >
      <div className="bg-[url('/computer_img.png')] flex items-center">
        <Image
          width={300}
          height={300}
          src="/vaccum_logo.png"
          alt="vaccum logo"
        />
      </div>
      <section className="p-4 w-full">{children}</section>
    </dialog>
  )
})

export default Modal
