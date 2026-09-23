import { LuArrowRight } from 'react-icons/lu'
import Button from './Button'

interface ButtonProps {
    head?: string
    desc?: string
}

const ContactCard = ({ head, desc }: ButtonProps) => {
    return (
        <div className='bg-primary rounded-lg p-6 mb-24'>
            <p className='text-white font-semibold capitalize text-xl'>{head}</p>
            <p className='text-subtle text-sm mb-4'>{desc}</p>
            <Button name='email' leadIcon={LuArrowRight} variant='secondary' />
        </div>
    )
}

export default ContactCard