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
        <div className='bg-bgCard rounded-lg shadow-lg p-6'>
            <div className='relative'>
                <img src={imageSrc} alt="" className='rounded-lg' />
            </div>
            <div className=''>
                <p className='font-semibold text-lg capitalize mt-2'>{title}</p>
                <p>{desc}</p>
                <div className='flex items-center gap-2 underline uppercase text-xs font-medium tracking-wider mt-4'>
                    <Link to={projectLink}>view project</Link>
                    <LuArrowUpRight />
                </div>
            </div>
        </div>
    )
}

export default WorkCard