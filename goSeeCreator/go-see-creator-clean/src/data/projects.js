import calmParentsConfidentKids from '../assets/projects/calmParentsConfidentKids.png'
import gapsAfrica from '../assets/projects/gapsAfrica.png'
import stepUpForPeace from '../assets/projects/stepUpForPeace.png'

export const projects = [
    {
        title: 'Calm Parents Confident Kids',
        slug: 'calm-parents-confident-kids',

        description:
'Rebuilding a collaborative parenting platform in React as a case study in scalable frontend development and emotionally grounded UX.',
        image: calmParentsConfidentKids,

        overview: [
            'I took on this project to help support the launch of Calm Parents Confident Kids, a collaborative book written by 14 authors from different professional and personal backgrounds. Each contributor shared their experience with braintraining, the Articulating Reticular System, and the impact those practices had on their mindset, relationships, parenting, and personal growth.',
            'The website served multiple purposes. It introduced the book, highlighted each author, showcased their individual businesses or personal brands, and acted as a central place for visitors to learn more about the project and upcoming launch events. Looking back, it functioned not only as a book launch website, but also as a collaborative marketing campaign.',
            'The project was originally built using a drag and drop builder and included a homepage, meet the authors section, book launch showcase, and resource page. At the time, I had very little experience with web design systems, frontend structure, or user experience thinking. My approach was driven almost entirely by curiosity and experimentation.',
            'Although the final result lacked cohesion in many areas, the project became a foundational turning point in how I understood design, frontend development, and digital user experiences.'
        ],
        expectations: [
            'Going into the project, my primary goal was simple: create something visually exciting and meaningful for the authors and audience. I wanted the website to feel energetic, expressive, and emotionally engaging.',
            'At the time, my understanding of web design was heavily centered around visuals. I was drawn to typography, colors, animations, transitions, and interactive effects. My belief was that if individual sections looked impressive on their own, the overall website experience would naturally come together.',
            'I also underestimated the complexity of managing a multi-page collaborative project. With more than 20 pages and multiple authors involved, there were many moving pieces that required consistency, organization, and long-term maintainability — concepts I had not yet fully developed as a designer or developer.',
            'Most importantly, I did not yet understand the importance of restraint. I believed more ideas, more effects, and more features automatically created a better experience.'
        ],
        frustrations: [
            'I struggled to create boundaries as a designer and developer, often trying to implement every idea or request instead of filtering what actually improved the experience.',
            'At the time, I lacked the confidence and technical understanding to communicate design limitations clearly.',
            'I found it personally difficult to say "no" to ideas, even when they conflicted with usability, cohesion, or platform capabilities.',
            'My focus on animations, effects, and visual excitement often created cluttered or inconsistent experiences.',
            'The platform provided creative flexibility early on, but became limiting when trying to implement more advanced customization or scalable systems.',
            'Template dependency restricted deeper frontend control and dynamic functionality.',
            'Managing more than 20 pages manually became overwhelming and inefficient.',
            'I lacked a structured design system, which made maintaining visual consistency difficult throughout the site.',
            'Balancing the goals of 14 different authors, brands, and perspectives within one cohesive experience was challenging.'

        ],

        solutions: [
            'I relied heavily on research, experimentation, and fail-and-learn problem solving throughout the project.',
            'I utilized platform documentation and user guides, frontend tutorials, and YouTube videos to better understand web design and development principles.',
            'I began studying responsive design, layout systems, color theory, and user experience more intentionally',
            'I discovered and incorporated tools that still influence my workflow today, including Excalidraw for visual planning and TPGi Accessibility Testing for accessibility awareness.',
            'After the original launch, I revisited the project as a personal learning experience rather treating it as a finished project.',
            'I started rebuilding portions of the site using concepts learned through freeCodeCamp and AI-assisted developement workflows.',
            'I shifted toward more dynamic and organized web structures to reduce repetitive manual updates.',
            'Simplifying layouts and reducing unneccesary visual noise created more mental clarity for stronger UI and UX decisions.',
            'AI tools were used to analyze the website for improvements related to responsiveness, efficiency, cohesion, accessibility, and CTA clarity.',
            'Revisiting the website helped transform it from a visually experimental website into a foundational learning experience in frontend systems and user-centered design.'

        ],
        learned:[
        'Strong web design is not created through visuals alone. Typography, colors, and animations only work well when supported by structure, hierarchy, spacing, and cohesion.',
        'User experience becomes clearer when slowing down and experiencing the website as a visitor instead of only as the builder.',
        'Responsive design is essential. Layouts and effects that work on one screen size may completely fail on another.',
        'Multi-page websites require organization and scalable systems to remain maintainable over time.',
        'Repetitive copy-and-paste workflows increate the likelihood of broken links, misinformation, and inconsistent user experiences.',
        'Dynamic web building and reusable structures create more efficiency, clarity, and flexibility than static page duplication.',
        'Accessibility, spacing, and readability play a major role in how users emotionally experience a website.',
        'Creative experimentation, even when messy, can become the foundation for stronger frontend systems and design thinking.',
        'Good design often comes from reducing noise rather than continuously adding more features or effects.',
        'This project introduced me to responsive design principles, color theory, frontend structure, and user-centered thinking.'
        ],
        tools: [
            'React',
            'Tailwind CSS',
            'Vite',
            'Responsive Design',
            'Mobile-First Development',
            'Wireframing and structural thinking',
            'Git/GitHub',
        ],
    },

    {
        title: 'GAPSAFRICA',
        slug: 'gapsafrica',

        description:
            'A humanitarian storytelling and fundraising platform designed for accessibility and impact.',

        image: gapsAfrica,

        overview: [
            'GAPSAFRICA is a humanitarian platform focused on storytelling, accessibility, transparency, and community-centered fundraising.',
            'The project supports initiatives serving refugee communities through education, empowerment, peace initiatives, and sustainable development.',
            'The platform needed to communicate urgency, humanity, trust, and hope simultaneously.',
            'A major focus was creating a scalable structure that could evolve over time while remaining lightweight and accessible across devices and internet conditions.'
        ],
        expectations: [
            'Initially, I expected the project to function primarily as a nonprofit informational website.',
            'As development evolved, I realized the deeper challenge was translating a living humanitarian mission into a coherent digital experience.',
            'The platform needed to:',
            'Build donor trust',
            'Communicate legitimacy',
            'Preserve emotional storytelling',
            'Remain accessible in low-bandwidth environments',
            'Support long-term scalability',
            'Balance impact with simplicity'
        ],
        frustrations: [
            'Translating emotionally heavy content into digestible layouts',
            'Structuring large amounts of mission information',
            'Designing donor-focused user journeys',
            'Balancing emotional storytelling with usability',
            'Coordinating evolving project direction and stakeholder input',
            'Managing deployment, domain configuration, and hosting workflows',
            'Maintaining mobile responsiveness across sections'
        ],
        solutions: [
            'Breaking content into modular sections',
            'Designing reusable layouts and content systems',
            'Creating stronger visual hierarchy',
            'Simplifying navigation structure',
            'Optimizing responsiveness for smaller screens',
            'Prioritizing readability and emotional pacing',
            'Reducing unnecessary technical complexity',
            'Structuring the platform for future scalability'
        ],
        learned: [
            'How critical narrative architecture is in fundraising',
            'The importance of accessibility in global-facing websites',
            'How trust is built through clarity and consistency',
            'The importance of lightweight performance optimization',
            'How emotional storytelling affects user engagement',
            'How difficult it can be to simplify complex missions into intuitive structures'
        ],
        tools: [
            'React',
            'HTML/CSS/JavaScript',
            'Tailwind CSS',
            'AWS S3',
            'CloudFront',
            'Route 53',
            'Vercel',
            'Git/GitHub',
            'Responsive Design Systems',
            'Mobile-First Development'
        ]
    },

    {
        title: 'Step Up for Peace',
        slug: 'step-up-for-peace',

        description:
            'A campaign experience centered around participation, awareness, and collective movement.',

        image: stepUpForPeace,

        overview: [
            'Step Up for Peace is a campaign-based digital experience centered around participation, awareness, collective action, and social storytelling.',
            'The campaign encouraged users to engage through movement, contribution, and shareable participation experiences.',
            'The project focused heavily on emotional energy, interaction, and simplicity.',
            'The experience needed to feel hopeful, immediate, and easy to engage with.'
        ],
        expectations: [
            'Initially, I expected the campaign to function as a simple awareness landing page.',
            'As the idea evolved, the project became more experiential.',
            'The focus shifted toward:',
            'User participation',
            'Social Sharing',
            'Emotional momentum',
            'Campaign identity',
            'Frictionless interaction',
            'Community energy',
            'The challenge became designing participation itself.'
        ],
        frustrations: [
            'Clarifying campaign messaging',
            'Reducing user confusion',
            'Structuring intuitive participation flows',
            'Balancing storytelling with usability',
            'Designing mobile-friendly interactions',
            'Refining CTA hierarchy',
            'Maintaining visual cohesion across campaign assets'
        ],
        solutions: [
            'Simplified interaction flows',
            'Clarified instructional messaging',
            'Strengthened visual hierarchy',
            'Improved CTA placement',
            'Reduced unnecessary content',
            'Focused heavily on responsiveness',
            'Built stronger emotional consistency through branding and visuals'
        ],
        learned: [
            'How powerful interactive campaigns can be emotionally',
            'The importance of reducing friction in participation flows',
            'How social sharing influences engagement',
            'How visual identity shapes campaign momentum',
            'The importance of emotionally resonant CTA design',
            'How simplicity increases usability'
        ],
        tools: [
            'Social Sharing Optimization',
            'Vercel',
            'DNS Routing',
            'Git/GitHub',
        ] 
    },
]