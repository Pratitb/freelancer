import './App.css'
import Header from './components/Header'
import { LuUserRound } from 'react-icons/lu'
import WorkCard from './components/WorkCard'
import { services, whyPointers } from './utils/data'
import Hero from './components/Hero'
import FeatureBox from './components/FeatureBox'

const App = () => {
  const getYear = new Date().getFullYear()
  return (
    <main className=''>
      <section className='container'>
        <Header name='pratit bangdiwala' role='ai designer and website developer.' />
        <Hero icon={LuUserRound} preHead='website design and development' head={`it's ${getYear}. your business is still not online? your next customer will come via reels and a website.`} desc='I can help you with business websites, landing pages, redesigns, maintainance.' />
        <FeatureBox preHead='services' head='everything you need, to get online' desc='from design to development, i help you with the entire process so you can take care of business' getFeatures={services} />
        {/* work section */}
        <div className='mb-16'>
          {/* <p className='headText'>featured work</p> */}
          <div className='mt-4 flex flex-col gap-12'>
            <WorkCard imageSrc={`./work-1.png`} getStatus='emerald-500' getName='live' title='the tile theory - australia' desc="australia's destination for premium tiles. excellent quality meets intelligent pricing." projectLink='https://thetiletheory.com.au/' />
            <WorkCard imageSrc={`./work-2.png`} getStatus='emerald-500' getName='live' title='go wood industries - india' desc="we manufacture all our products from premium quality raw materials acquired from reliable sources." projectLink='https://thetiletheory.com.au/' />
            <WorkCard imageSrc={`./work-3.png`} getStatus='emerald-500' getName='live' title='enarchitecture EN+AD - india' desc="we combine environment and architecture to create humane spaces that inspire and endure co-ordination between built and un-built." projectLink='https://thetiletheory.com.au/' />
          </div>
        </div>
        <FeatureBox preHead='why work with me' head='a partner who cares about your business' getFeatures={whyPointers} />
        {/* why me */}
        {/* <div className='mb-16'>
          <p className='headText'>why me as your tech partner.</p>
          <div className='flex flex-col items-center gap-4 mt-8'>
            {whyPointers.map(item => <div key={item.id} className='bg-bgCard rounded-lg w-full p-4'>
              <p className='rounded-lg capitalize font-medium'>{`${item.id}. ${item.point}`}</p>
            </div>)}
          </div>
        </div> */}
      </section>
    </main>
  )
}

export default App
