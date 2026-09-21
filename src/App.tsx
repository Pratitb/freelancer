import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import { LuUserRound } from 'react-icons/lu'
import WorkCard from './components/WorkCard'
import { clients, whyPointers } from './utils/data'

const App = () => {
  const getYear = new Date().getFullYear()
  return (
    <main className='bg-bgMain'>
      <section className='container'>
        {/* header */}
        <Header name='pratit bangdiwala' role='website builder & AI designer.' />
        {/* about */}
        <Card icon={LuUserRound} head={`it's ${getYear}. your business is still not online? your next customer will come via reels and a website.`} desc='i can help you with business websites, landing pages, redesigns, maintainance' />
        {/* work section */}
        <div className='mb-16'>
          <p className='headText'>work</p>
          <div className='mt-4 flex flex-col gap-8'>
            <WorkCard imageSrc={`./work-1.png`} getStatus='emerald-500' getName='live' title='the tile theory - australia' desc="australia's destination for premium tiles. excellent quality meets intelligent pricing." projectLink='https://thetiletheory.com.au/' />
            <WorkCard imageSrc={`./work-2.png`} getStatus='emerald-500' getName='live' title='go wood industries - india' desc="we manufacture all our products from premium quality raw materials acquired from reliable sources." projectLink='https://thetiletheory.com.au/' />
            <WorkCard imageSrc={`./work-3.png`} getStatus='emerald-500' getName='live' title='enarchitecture EN+AD - india' desc="we combine environment and architecture to create humane spaces that inspire and endure co-ordination between built and un-built." projectLink='https://thetiletheory.com.au/' />
          </div>
        </div>
        {/* clients */}
        <div className='mb-16'>
          <p className='headText'>clients</p>
          <div className='flex flex-col items-center gap-4 mt-8'>
            {clients.map(item => <div key={item.id} className='bg-bgCard rounded-lg w-full p-4'>
              <img src={item.url} alt='client logo' className='rounded-lg' />
            </div>)}
          </div>
        </div>
        {/* why me */}
        <div className='mb-16'>
          <p className='headText'>why me as your tech partner.</p>
          <div className='flex flex-col items-center gap-4 mt-8'>
            {whyPointers.map(item => <div key={item.id} className='bg-bgCard rounded-lg w-full p-4'>
              <p className='rounded-lg capitalize font-medium'>{`${item.id}. ${item.point}`}</p>
            </div>)}
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
