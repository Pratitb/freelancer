import { LuArrowRight } from 'react-icons/lu'
import Button from './Button'
import type { RefObject } from 'react'

interface ButtonProps {
    head?: string
    desc?: string
    getRef?: RefObject<HTMLDivElement | null>
}

const ContactCard = ({ head, desc, getRef }: ButtonProps) => {
    return (
        <>
            <p className="heroText">contact</p>
            <div className='w-full bg-primary bg-[url(./contact-bg-3.jpg)] bg-no-repeat bg-center bg-cover rounded-lg p-6 mt-4 mb-24'>
                <div className=' max-w-fit' ref={getRef}>
                    <p className='text-white font-semibold capitalize text-xl'>{head}</p>
                    <p className='text-subtle text-sm mb-4'>{desc}</p>
                    <Button name='email' leadIcon={LuArrowRight} variant='secondary' />
                </div>
            </div>
        </>
    )
}

export default ContactCard