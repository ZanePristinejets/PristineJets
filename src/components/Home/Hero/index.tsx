import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-18%20123005-8tD9McUcvRtCiFy5h2ieRiqVgAzPXs.png')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center p-6 md:p-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-white">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-1"
              >
                <path d="M20 8L32 20L20 24L8 20L20 8Z" fill="white" />
                <path d="M20 24L32 20V28L20 32L8 28V20L20 24Z" fill="white" opacity="0.7" />
              </svg>
            </div>
            <div className="text-white">
              <div className="text-lg font-bold tracking-wider">PRISTINE</div>
              <div className="text-sm tracking-widest -mt-1">JETS</div>
            </div>
          </div>

          {/* Contact Button */}
          <Button
            variant="outline"
            className="border-white/50 text-white hover:bg-white hover:text-black transition-colors duration-300 px-6 py-2 text-sm tracking-wider bg-transparent"
          >
            CONTACT US
          </Button>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col justify-center items-center text-center px-6 md:px-8 pb-20">
          {/* Subtitle */}
          <div className="text-orange-400 text-sm md:text-base tracking-[0.3em] mb-8 font-light">
            FAST, RELIABLE, PRISTINE FINISHES
          </div>

          {/* Main Headline */}
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.2em] leading-tight mb-12 max-w-6xl">
            FLIGHT-READY
            <br />
            DETAILING AT BZN
          </h1>

          {/* Description */}
          <p className="text-white/90 text-base md:text-lg max-w-2xl leading-relaxed mb-12 font-light">
            24/7 mobile crew delivering meticulous exterior & interior care coordinated with local FBOs,
            <br />
            under strict safety and aviation insurance.
          </p>

          {/* CTA Button */}
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-sm tracking-wider font-medium transition-colors duration-300">
            CONTACT US
          </Button>
        </main>
      </div>
    </div>
  )
}
