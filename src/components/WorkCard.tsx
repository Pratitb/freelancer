import { LuArrowUpRight } from 'react-icons/lu'
import { Link } from 'react-router-dom'

interface WorkProps {
    getStatus?: string
    getName?: string
    imageSrc?: string
    title?: string
    desc?: string
    projectLink: string
}

const WorkCard = ({ imageSrc, title, desc, projectLink }: WorkProps) => {
    // getStatus, getName,
    return (
        <div className='bg-bgCard shadow-lg rounded-lg p-4'>
            <div className='relative'>
                <img src={imageSrc} alt="" className='rounded-lg' />
            </div>
            <div className='p-2'>
                <p className='font-bold text-lg capitalize mt-2'>{title}</p>
                <p className='text-subtle text-sm'>{desc}</p>
                <div className='flex items-center gap-1 uppercase text-xs font-medium tracking-wide text-secondary mt-4'>
                    <Link to={projectLink}>view project</Link>
                    <LuArrowUpRight />
                </div>
            </div>
        </div>
    )
}

export default WorkCard