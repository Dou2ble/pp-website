import Image from 'next/image'
import { Silkscreen } from 'next/font/google'

const silk = Silkscreen({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <main
      className={` flex flex-col min-h-screen bg-[#282828] text-white overflow-hidden ${silk.className}`}
    >
      <h1 className='text-4xl' ></h1>

      <div className='group absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-3/4'>
        <img src="/images/pancakeLarge.png" alt="Large Pancake" className='rounded-full transition-transform scale-[2] group-hover:scale-[2.3]'/>
        <div className="font-Silkscreen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl font-bold text-center transition-transform group-hover:rotate-6 group-hover:scale-[1.2]">
          Pancake Clicker
        </div>
      </div>

      <div className='m-16'>
        <div className='mt-[760px]'>
          <p className='text-center text-xl'>A new kind of clicker game</p>
          <p>Introducing "Pancake Clicker" – a new kind of clicker game that sizzles with excitement! Immerse yourself in the delectable world of flapjacks and unleash your inner chef as you embark on a mouth-watering clicking adventure. This extraordinary clicker experience goes beyond the ordinary, offering a syrupy blend of addictive tapping, golden griddle upgrades, and pancake perfection. Elevate your pancake prowess as you flip, stack, and click your way to pancake paradise. With buttery-smooth graphics and a batterific soundtrack, "Pancake Clicker" serves up a tantalizing treat for your gaming cravings. Are you ready to taste the sweet success of becoming the ultimate pancake maestro? Click your way to pancake perfection – it's not just a game; it's a flipping fantastic culinary journey!</p>
          <br />
        </div>
        <div>
          <p className='text-center text-xl'>explore different upgrades</p>
          <p>Dive into the mouthwatering universe of "Pancake Clicker," where a symphony of delectable upgrades awaits your culinary prowess! Elevate your pancake empire with sizzling enhancements that will leave you craving for more. Unleash the "Golden Griddle" upgrade to accelerate your flipping speed, turning your pancake preparation into a mesmerizing culinary ballet. Upgrade your spatula to the "Epic Flipper" for a flawless flip every time, ensuring the perfect golden brown on every pancake. Harness the power of the "Butter Booster" to add a rich and creamy touch, making each click a taste bud-tantalizing experience. As you ascend the syrupy ranks, unlock the "Maple Mastery" to double your tapping efficiency, and watch the pancake pile grow exponentially. With an array of upgrades at your fingertips, "Pancake Clicker" isn't just a game—it's a gourmet adventure where every click takes you one step closer to pancake perfection!</p>
          <br />
        </div>
        <div>
          <p className='text-center text-xl'>intriguing features</p>
          <p>Embark on a culinary odyssey with "Pancake Clicker," where every click unfolds a world of intriguing features that will whisk you away to pancake paradise! Delight in the immersive "Pancake Planet" mode, where your clicks resonate across a pancake-filled galaxy, unlocking cosmic upgrades and secret recipes. Unleash the "Time-Flipping Warp" feature, allowing you to bend time and cook pancakes at an otherworldly speed. Engage in epic "Pancake Challenges" against other players globally, testing your flipping finesse and strategic tapping skills. Discover the mystical "Flavor Fusion" laboratory, where you can concoct unique pancake blends, each with its own special boost. With customizable pancake skins, daily quests, and surprise events, "Pancake Clicker" keeps the excitement sizzling. Immerse yourself in a world where every click is a step towards unlocking the extraordinary—because flipping pancakes has never been this captivating! Get ready for a pancake adventure that transcends the batter.</p>
          <br />
        </div>
        <div>
          <p className='text-center text-xl'>satasfying gameplay</p>
          <p>Indulge your senses in the deeply satisfying gameplay of "Pancake Clicker," where every click is a symphony of culinary delight! Experience the unparalleled pleasure of a perfectly timed flip with our intuitive tapping system, providing a tactile and gratifying sensation as you master the art of pancake preparation. Revel in the visually stunning animations as your pancake pile grows with each precision click, creating a mesmerizing feast for the eyes. The game's seamless progression and rewarding upgrades ensure a constant flow of satisfaction, enticing you to click your way to pancake perfection. With a user-friendly interface and an array of delightful sound effects, "Pancake Clicker" transforms the simple act of clicking into a deeply gratifying, sensory-rich experience. Are you ready to immerse yourself in a world where each click leaves you craving for more? Welcome to a gameplay experience that's as satisfying as a stack of freshly flipped pancakes!</p>
        </div>
      </div>
      
      

    </main>
  )
}
