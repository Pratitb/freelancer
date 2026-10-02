import './App.css'
import Header from './components/Header'
import { LuUserRound } from 'react-icons/lu'
import WorkCard from './components/WorkCard'
import { menuLinks, projects, services, whyPointers } from './utils/data'
import Hero from './components/Hero'
import FeatureBox from './components/FeatureBox'
import ContactCard from './components/ContactCard'
import Menu from './components/Menu'
import { useRef, useState } from 'react'
import type { Sections } from './utils/types'

const App = () => {
  const getYear = new Date().getFullYear()
  const [activeLink, setActiveLink] = useState('home')

  const workSection = useRef<HTMLDivElement>(null)
  const contactSection = useRef<HTMLDivElement>(null)
  const homeSection = useRef<HTMLDivElement>(null)
  const serviceSection = useRef<HTMLDivElement>(null)
  const whySection = useRef<HTMLDivElement>(null)

  const sections: Sections = {
    home: homeSection,
    services: serviceSection,
    work: workSection,
    why: whySection,
    contact: contactSection
  }

  const handleActiveMenuItem = (label: string) => {
    setActiveLink(label ?? 'home')
  }

  return (
    <main className=''>
      <section className='container'>
        <Header getSection={homeSection} name='pratit bangdiwala' role='ai designer and website developer.' />
        <Hero getWork={workSection} getContact={contactSection} icon={LuUserRound} preHead='website design and development' head={`it's ${getYear}. your business is still not online? your next customer will come via reels and a website.`} desc='I can help you with business websites, landing pages, redesigns, maintainance.' />
        <FeatureBox getSection={serviceSection} preHead='services' head='everything you need, to get online' desc='from design to development, i help you with the entire process so you can take care of business' getFeatures={services} />
        {/* work section */}
        <div className='mb-8 pt-8' ref={workSection}>
          {<p className="heroText">work</p>}
          <div className='mt-4 flex flex-col gap-12 md:flex-row md:gap-4 overflow-x-auto max-w-fit'>
            {projects.map(item => <WorkCard imageSrc={item.cover} title={item.name} desc={item.desc} projectLink={item.url} />)}
          </div>
        </div>
        <FeatureBox getSection={whySection} preHead='why work with me' head='a partner who cares about your business' getFeatures={whyPointers} />
        <ContactCard getRef={contactSection} head='have a project in mind?' desc='Lets discuss ideas and see how we can bring it live.' />
        <Menu getActiveFn={handleActiveMenuItem} getLinks={menuLinks} active={activeLink} getSections={sections} />
      </section>
    </main>
  )
}

export default App
