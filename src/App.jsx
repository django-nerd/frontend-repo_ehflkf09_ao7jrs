import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // enable smooth scrolling for in-page anchors in older browsers
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  const Section = ({ id, children, className = '' }) => (
    <section id={id} className={`scroll-mt-24 ${className}`}>{children}</section>
  )

  const NavLink = ({ href, children }) => (
    <a href={href} className="px-3 py-2 text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-100 transition">
      {children}
    </a>
  )

  const FeatureCard = ({ title, desc, icon }) => (
    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-rose-500 to-amber-400 text-white flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  )

  const TeamCard = ({ name, role }) => (
    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 text-center">
      <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center text-2xl">💈</div>
      <h4 className="text-base font-semibold text-gray-900">{name}</h4>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  )

  const Testimonial = ({ quote, name }) => (
    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
      <p className="text-gray-700 leading-relaxed">“{quote}”</p>
      <div className="mt-4 text-sm text-gray-500">— {name}</div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-white text-gray-900">
      {/* Top Nav */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-rose-500 to-amber-400 flex items-center justify-center text-white font-bold">BC</div>
            <span className="font-semibold">BarberCall</span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#team">Team</NavLink>
            <NavLink href="#testimonials">Stories</NavLink>
            <a href="#contact" className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition">
              Book a Call
            </a>
          </nav>
          <a href="#contact" className="md:hidden inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-900 text-white text-sm">Book</a>
        </div>
      </header>

      {/* Hero */}
      <Section id="home" className="pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm border border-gray-100 text-sm mb-4">
                <span className="text-rose-600">New</span>
                <span className="text-gray-600">On-demand grooming for teams & events</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Sharp looks, on call.
                <span className="block text-transparent bg-clip-text bg-gradient-to-br from-rose-500 to-amber-500">BarberCall</span>
              </h1>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                A premium barber service that comes to you—boardroom, studio, or backstage. We make booking effortless and the experience unforgettable.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a href="#contact" className="px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition font-medium">Book a Company Call</a>
                <a href="#services" className="px-5 py-3 rounded-lg bg-white border border-gray-200 hover:border-gray-300 transition font-medium">View Services</a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2"><span>⭐️⭐️⭐️⭐️⭐️</span> <span>200+ 5-star reviews</span></div>
                <div>Trusted by startups & studios</div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-gray-900 to-gray-700 shadow-xl overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{backgroundImage:'radial-gradient(circle at 20% 20%, white 0, transparent 25%), radial-gradient(circle at 80% 30%, white 0, transparent 25%), radial-gradient(circle at 40% 80%, white 0, transparent 25%)'}}/>
                <div className="absolute inset-0 flex items-center justify-center text-7xl">💈</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-md border border-gray-100 p-4">
                <div className="text-sm font-medium">Mobile Chair Ready</div>
                <div className="text-xs text-gray-500">Set up anywhere in 10 minutes</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* About */}
      <Section id="about" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">What is BarberCall?</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We provide on-call barbering for companies, productions, and events. Our vetted stylists arrive with professional gear,
            deliver consistent results, and maintain a clean, efficient setup so your team stays focused.
          </p>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" className="py-20 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-bold">Services</h2>
            <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900">Custom packages →</a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard title="Executive Cuts" desc="Clean, consistent cuts optimized for professional settings and on-camera presence." icon={<span>✂️</span>} />
            <FeatureCard title="Beard & Line-Up" desc="Precision shaping and maintenance with hot towel finish." icon={<span>🧖‍♂️</span>} />
            <FeatureCard title="On-Site Setup" desc="Mobile station with sanitized tools, cape, mirror, and easy cleanup." icon={<span>🧳</span>} />
            <FeatureCard title="Team Sessions" desc="Block booking for 5–50 people with streamlined scheduling." icon={<span>👥</span>} />
            <FeatureCard title="Photo/Film Ready" desc="Continuity-safe grooming for studios, sets, and live events." icon={<span>🎥</span>} />
            <FeatureCard title="Recurring Visits" desc="Weekly or monthly appearances to keep everyone camera-ready." icon={<span>📅</span>} />
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TeamCard name="Alex R." role="Lead Barber" />
            <TeamCard name="Mina K." role="Grooming Specialist" />
            <TeamCard name="Jordan T." role="Event Coordinator" />
            <TeamCard name="Sam P." role="Client Success" />
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" className="py-20 bg-white/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Client Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Testimonial quote="Booked for our product launch—team looked sharp, schedule ran smooth. 10/10." name="Studio Nimbus" />
            <Testimonial quote="Perfect for offsite week. Set-up was quick and zero mess afterward." name="Avenue Labs" />
            <Testimonial quote="Our exec headshots turned out great thanks to the grooming support on set." name="North & Co." />
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold">Book a Company Call</h2>
              <p className="mt-3 text-gray-600">Tell us about your team or event. We’ll confirm availability and send a tailored proposal.</p>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex gap-3"><span>📍</span><span>Serving on-site within the metro area</span></li>
                <li className="flex gap-3"><span>⏱️</span><span>Typical session: 15–25 minutes per person</span></li>
                <li className="flex gap-3"><span>🧼</span><span>Hospital-grade sanitation and disposables</span></li>
              </ul>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input required className="w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input className="w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900" placeholder="Company or event" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" required className="w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Team size</label>
                  <input type="number" min="1" className="w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900" placeholder="e.g. 12" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows="4" className="w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900" placeholder="Date, location, preferred time window..." />
              </div>
              <button className="w-full py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition font-medium">Request Proposal</button>
              <p className="text-xs text-gray-500">We’ll get back within one business day.</p>
            </form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-100 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-700">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-rose-500 to-amber-400 flex items-center justify-center text-white text-sm font-bold">BC</div>
            <span>BarberCall</span>
          </div>
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} BarberCall. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
