import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const people = [
  {
    name: 'Felix Leclerc, Jr.',
    role: 'Full Stack Engineer',
    imageUrl: './felix.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/FelixLec',
    githubUrl: 'https://github.com/FelixLJR',
  },
  {
    name: 'Jason Breen',
    role: 'Full Stack Engineer',
    imageUrl: './jason.png',
    linkedinUrl: '',
    githubUrl: '',
  },
  {
    name: 'Zhiyi Huang',
    role: 'Full Stack Engineer',
    imageUrl: './zhiyi.png',
    linkedinUrl: 'http://www.linkedin.com/in/zhyhuang',
    githubUrl: 'https://github.com/zhiyi15',
  },
  {
    name: 'Tim Chang',
    role: 'Full Stack Engineer',
    imageUrl: './tim.png',
    linkedinUrl: '',
    githubUrl: '',
  },
  {
    name: 'Justin Marchant',
    role: 'Full Stack Engineer',
    imageUrl: './justin.png',
    linkedinUrl: '',
    githubUrl: '',
  },
 
  
]

export default function Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re a team of passionate engineers who love to build cool stuff.
          </p>

        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="Engineer" />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <AiFillLinkedin size={20}/>
                  </a>
                </li>
                <li>
                  <a href={person.githubUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <AiFillGithub size={20}/>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
