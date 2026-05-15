import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetail() {

  const { slug } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const project = projects.find(
    (project) => project.slug === slug
  )

  if (!project) {
    return (
      <main className="min-h-screen bg-[#f7f2fa] px-6 py-32">
        <h1 className="text-5xl font-semibold text-[#2d1b3d]">
          Project not found.
        </h1>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#f7f2fa] text-[#2c2433]">

      {/* HERO IMAGE */}

      <section className="px-6 pt-32 md:px-12">

        <div
          className="h-[500px] rounded-[2.5rem] bg-cover bg-center"
          style={{
            backgroundImage: `url(${project.image})`,
          }}
        />

      </section>

      {/* CONTENT */}

      <section className="px-6 py-20 md:px-12">

        <div className="mx-auto max-w-5xl">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#8b5fbf] transition hover:opacity-70"
          >
            ← Back to Portfolio
          </Link>

          <p className="mt-12 uppercase tracking-[0.3em] text-[#8b5fbf]">
            Case Study
          </p>

          <h1 className="mt-6 text-5xl font-semibold md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[#5f5566]">
            {project.description}
          </p>

          {/* OVERVIEW */}

          <section className="mt-24">

            <h2 className="text-3xl font-semibold">
              Project Overview
            </h2>

            <div className="mt-8 space-y-6">

              {project.overview?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="leading-relaxed text-[#5f5566]"
                >
                  {paragraph}
                </p>
              ))}

            </div>

          </section>

          {/* EXPECTATIONS */}

          <section className="mt-24">

            <h2 className="text-3xl font-semibold">
              What I Expected
            </h2>

            <div className="mt-8 space-y-6">

              {project.expectations?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="leading-relaxed text-[#5f5566]"
                >
                  {paragraph}
                </p>
              ))}

            </div>

          </section>

          {/* LEARNED */}

          <section className="mt-24">

            <h2 className="text-3xl font-semibold">
              What I Learned
            </h2>

            <ul className="mt-8 space-y-4">

              {project.learned?.map((item) => (
                <li
                  key={item}
                  className="flex gap-4"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#8b5fbf]" />

                  <span className="text-[#5f5566]">
                    {item}
                  </span>
                </li>
              ))}

            </ul>

          </section>

          {/* FRUSTRATIONS */}

          <section className="mt-24">

            <h2 className="text-3xl font-semibold">
              Frustrations & Challenges
            </h2>

            <ul className="mt-8 space-y-4">

              {project.frustrations?.map((item) => (
                <li
                  key={item}
                  className="flex gap-4"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#8b5fbf]" />

                  <span className="text-[#5f5566]">
                    {item}
                  </span>
                </li>
              ))}

            </ul>

          </section>

          {/* SOLUTIONS */}

          <section className="mt-24">

            <h2 className="text-3xl font-semibold">
              Solutions
            </h2>

            <ul className="mt-8 space-y-4">

              {project.solutions?.map((item) => (
                <li
                  key={item}
                  className="flex gap-4"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#8b5fbf]" />

                  <span className="text-[#5f5566]">
                    {item}
                  </span>
                </li>
              ))}

            </ul>

          </section>

          {/* TOOLS */}

          <section className="mt-24">

            <h2 className="text-3xl font-semibold">
              Technology & Tools
            </h2>

            <div className="mt-8 flex flex-wrap gap-4">

              {project.tools?.map((tool) => (
                <div
                  key={tool}
                  className="rounded-full bg-white px-5 py-3 shadow-md"
                >
                  {tool}
                </div>
              ))}

            </div>

          </section>

        </div>

      </section>
      <section className="border-t border-purple-100 px-6 py-24 md:px-12">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-4xl font-semibold text-[#2d1b3d]">
            Explore More Projects
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {projects
              .filter((item) => item.slug !== project.slug)
              .slice(0, 3)
              .map((item) => (

                <Link
                  key={item.slug}
                  to={`/projects/${item.slug}`}
                  className="group overflow-hidden rounded-[2rem] bg-white shadow-lg transition hover:-translate-y-1"
                >

                  <div
                    className="h-64 bg-cover bg-center transition duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  />

                  <div className="p-8">

                    <h3 className="text-2xl font-semibold text-[#2d1b3d]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[#5f5566]">
                      {item.description}
                    </p>

                    <div className="mt-6 text-sm font-semibold uppercase tracking-widest text-[#8b5fbf]">
                      View Case Study →
                    </div>

                  </div>

                </Link>

              ))}

          </div>

        </div>

      </section>
    </main>
  )
}