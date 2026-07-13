import calmParentsConfidentKids from './assets/projects/calmParentsConfidentKids.png'
import gapsAfrica from './assets/projects/gapsAfrica.png'
import stepUpForPeace from './assets/projects/stepUpForPeace.png'
import shengPhoto from './assets/images/profilePic.png'
import familyPhoto from './assets/images/yangFamily.png'
import dogPhoto from './assets/images/syrup.png'
import { Link } from 'react-router-dom'
import { projects } from './data/projects'
import { useState } from 'react'



export default function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
<main className="min-h-[100svh] bg-[#f7f2fa] text-[#2c2433]">
      {/* NAVBAR */}

      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#2d1b3d]/80 backdrop-blur-xl">

  <div className="flex items-center justify-between px-6 py-5 md:px-12">

    <h1 className="text-xl font-semibold tracking-wide text-white">
      Go See Creator
    </h1>

    {/* DESKTOP NAV */}

    <nav className="hidden gap-8 text-sm text-white md:flex">

      <a href="#about" className="transition hover:text-[#ffb38a]">
        About
      </a>

      <a href="#portfolio" className="transition hover:text-[#ffb38a]">
        Portfolio
      </a>

      <a href="#process" className="transition hover:text-[#ffb38a]">
        How I Work
      </a>

      <a href="#contact" className="transition hover:text-[#ffb38a]">
        Contact
      </a>

    </nav>

    {/* MOBILE BUTTON */}

    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="flex flex-col gap-1 md:hidden"
    >

      <span className="h-[2px] w-6 bg-white" />

      <span className="h-[2px] w-6 bg-white" />

      <span className="h-[2px] w-6 bg-white" />

    </button>

  </div>

  {/* MOBILE MENU */}

  {menuOpen && (

    <div className="border-t border-white/10 bg-[#2d1b3d] px-6 py-6 md:hidden">

      <nav className="flex flex-col gap-6 text-white">

        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>

        <a
          href="#portfolio"
          onClick={() => setMenuOpen(false)}
        >
          Portfolio
        </a>

        <a
          href="#process"
          onClick={() => setMenuOpen(false)}
        >
          How I Work
        </a>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>

      </nav>

    </div>

  )}

</header>

      {/* HERO */}

      <section
  className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pb-16 pt-28 md:px-12 md:pt-32"        style={{
          backgroundImage:
            'linear-gradient(rgba(45,27,61,.6), rgba(45,27,61,.85)), url(https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1600&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-3xl text-white">
          <p className="mb-5 uppercase tracking-[0.3em] text-[#ffb38a]">
            Hi, I’m Sheng
          </p>

          <h2 className="text-5xl font-semibold leading-tight md:text-7xl">
            Building human-centered digital experiences rooted in emotion, clarity, and structure.
          </h2>

          <p className="mt-8 max-w-2xl text-lg text-white/80 md:text-xl">
Frontend-focused developer combining systems thinking, intentional design, and intuitive digital experiences for individuals, small businesses, and mission-driven organizations.          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="rounded-full bg-[#8b5fbf] px-7 py-4 font-medium text-white transition hover:scale-105"
            >
              View Portfolio
            </a>

            <a
              href="#about"
              className="rounded-full border border-white/30 px-7 py-4 font-medium text-white transition hover:bg-white/10"
            >
              About Sheng
            </a>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}

      <section id="portfolio" className="px-6 py-28 md:px-12">

        <div className="mb-16">
          <p className="mb-4 uppercase tracking-[0.3em] text-[#8b5fbf]">
            Featured Work
          </p>

          <h2 className="text-4xl font-semibold md:text-6xl">
            Selected Projects
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-purple-100"
            >
              <div
                className="h-64"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />

              <div className="p-8">
                <h3 className="text-3xl font-semibold text-[#2d1b3d]">
                  {project.title}
                </h3>

                <p className="mt-4 leading-relaxed text-[#5f5566]">
                  {project.description}
                </p>

                <Link
                  to={`/projects/${project.slug}`}
                  className="mt-6 inline-block text-sm font-semibold uppercase tracking-widest text-[#8b5fbf] transition hover:opacity-70"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}

        </div>
      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="grid gap-16 px-6 py-28 md:grid-cols-2 md:px-12"
      >

        <div>
          <p className="mb-4 uppercase tracking-[0.3em] text-[#8b5fbf]">
            About Sheng
          </p>

          <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
            A blend of logic and heart.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-[#5f5566]">
            I create systems and experiences that help ideas become usable,
            meaningful, and emotionally grounded.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-[#5f5566]">
            My work blends frontend development, storytelling,
            accessibility, visual design, and sustainable structure.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div

            className="relative col-span-2 h-72 overflow-hidden rounded-[2rem] bg-cover"

            style={{

              backgroundImage: `url(${familyPhoto})`,

              backgroundPosition: 'center 33%',

            }}

          >

            <div className="absolute inset-0 bg-[#5b2b73]/25" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#2d1b3d]/50 to-transparent" />

          </div>

          <div
            className="relative h-56 overflow-hidden rounded-[2rem] bg-cover bg-center"
            style={{
              backgroundImage: `url(${shengPhoto})`,
            }}
          >
            <div className="absolute inset-0 bg-[#5b2b73]/25" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#2d1b3d]/50 to-transparent" />  </div>

          <div
            className="relative h-56 overflow-hidden rounded-[2rem] bg-cover bg-center"
            style={{
              backgroundImage: `url(${dogPhoto})`,
            }}
          >
            <div className="absolute inset-0 bg-[#5b2b73]/25" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#2d1b3d]/50 to-transparent" />  </div>
        </div>

      </section>

      {/* PROCESS */}

      <section id="process" className="bg-white px-6 py-28 md:px-12">

        <div className="mx-auto max-w-6xl">

          <div className="mb-16 text-center">
            <p className="mb-4 uppercase tracking-[0.3em] text-[#8b5fbf]">
              How I Work
            </p>

            <h2 className="text-4xl font-semibold md:text-6xl">
              Thoughtful systems. Human experiences.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {[
              {
                title: 'Strategy First',
                text: 'Understanding the purpose before building the interface.',
              },

              {
                title: 'Intentional Design',
                text: 'Designing experiences that feel clear, accessible, and emotionally grounded.',
              },

              {
                title: 'Scalable Structure',
                text: 'Creating systems that evolve without becoming chaotic.',
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-[2rem] border border-purple-100 bg-[#faf7fc] p-8"
              >
                <h3 className="text-2xl font-semibold text-[#2d1b3d]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-[#5f5566]">
                  {item.text}
                </p>
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section id="contact" className="px-6 py-28 md:px-12">

        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 uppercase tracking-[0.3em] text-[#8b5fbf]">
            Contact
          </p>

          <h2 className="text-4xl font-semibold md:text-6xl">
            Let’s build something meaningful.
          </h2>

          <form
            action="https://formspree.io/f/xeenbpyj"
            method="POST"
            className="mt-14 flex flex-col gap-5 text-left"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="rounded-2xl border border-purple-100 bg-white p-5 outline-none transition focus:border-[#8b5fbf]"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="rounded-2xl border border-purple-100 bg-white p-5 outline-none transition focus:border-[#8b5fbf]"
              required
            />

            <textarea
              name="message"
              placeholder="Tell me about your project"
              className="min-h-[220px] rounded-2xl border border-purple-100 bg-white p-5 outline-none transition focus:border-[#8b5fbf]"
              required
            />

            <button
              type="submit"
              className="rounded-full bg-[#8b5fbf] px-8 py-5 font-medium text-white transition hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>

        </div>

      </section>

    </main>
  )
}