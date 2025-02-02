/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
  firstName: 'Santiago Ramon',
  lastName: 'Alvarez Gomez',
  jobTitle: 'Full Stack Developer',
  photo: 'null',
  city: 'Medellin',
  postalCode: '050022',
  country: 'Colombia',
  phone: '+573057668478',
  email: 'stiago4r@gmail.com',
  education: [
    {
      school: 'Universidad EAFIT',
      degree: 'Bachelor',
      graduationDate: '2024',
      description: 'Software Engineering',
    },
  ],
  links: [
    {
      label: 'GitHub',
      link: 'https://github.com/stiag0',
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/santiago-alvarez-b6a530233/',
    },
  ],
  skills: [
    'Python',
    'django',
    'JavaScript',
    'TypeScript',
    'React',
    'Angular',
    'vue',
    'CSS',
    'Unity',
    'c++',
    'C#',
    'PostgreSQL',
    'MongoDB',
    'java',
    'vba'
  ],
  languages: ['Spanish' , 'English'],
  professionalSummary: `Developer with a background in web, mobile and game development, having 2+ years of practice and leadership building interactive experiences.
    Disciplined, organized, humble and accessible person. Committed to good morals, continuous learning, innovation and development of optimal solutions.
    Great enthusiastic teamwork, considered cautious, assertive, helpful and creative.`,
  employmentHistory: [
    {
      jobTitle: 'Full-stack Developer',
      startDate: 'January 2023',
      endDate: 'December 2024',
      employer: 'Central de belleza ©',
      city: 'Medellín',
      achievements: [
        `Developed a responsive website for a local beauty suply center using wordpress and PHP solutions`,
        `Collaborated with the design team to create a visually appealing and user-friendly website`,
        `Optimized the website's performance by implementing caching, compression`,
        `Worked closely with infomation to cleen up the data by creating a database`,
      ],
    },
    {
      jobTitle: 'Full-stack Developer',
      startDate: 'August 2021',
      endDate: 'February 2022',
      employer: 'Tigo Colombia',
      city: 'Remote',
      achievements: [
        `Develop multiple automations on microsoft environment to resolve 
        delays operational timelapse using excel macros, power-Query (DAX) 
        and Power Automate to deploy software with a dynamic response 
        compared to classic excel usages. deliver quality products and
        made several on-boarding processes to new developers.`,
        `Mentored team members in development, issues and technical
        Progression.`,
        `Designed a normalyzer to format data-sets as a tool to improve 
        the consumers data ratio and make it more accessible to the operational team.`
      ],
    },
    {
      jobTitle: 'Software Developer',
      startDate: 'january 2019',
      endDate: 'june 2022',
      employer: 'Centraldelbarbero.com',
      city: 'Medellín',
      achievements: [
        `Developed, launched and managed the commercialization of a
        successful app along with other engineer using scrum, Firebase
        and Angular`,
        `Collaborated with other developers to identify and alleviate
        software errors and inefficiencies.`,
        `Discussed project progress with customers, collected feedback on
        different stages and directly addressed concerns.`,
        `Got over 5,000 downloads, more than 300 users online at the same
        time and more than 3,000 usd in revenues.`,
      ],
    },
    {
      jobTitle: 'showcase salesman',
      startDate: 'February 2010',
      endDate: 'December 2013',
      employer: 'Central de belleza ©',
      city: 'Medellín',
      achievements: [
        `Was my first job and become a complete new challenge
        to me but after the training time i become a successful deal closer,
        of course i was better selling hair dryer, hair straighteners or 
        ellectrodomestics in general, but not let that limit myself and learn
        a lot of other products and even learn how to 
        combine colors to recommend a nail polish or hair dye.`,
        'Perform a social network integration business.',
      ],
    },
  ],
};

const formatResume = (r) => ({
  ...r,
  address: [r.country, r.city, r.postalCode].filter(Boolean).join(', '),
});

new Vue({
  el: '#app',
  data: formatResume(resume),
});

/**
 * Wait for animatable-component to be loaded (Only for VanillaJS)
 **/
function animatableLoaded() {
  document.querySelector('body').classList.remove('d-none');
}
if (customElements) {
  customElements.whenDefined('animatable-component').then(animatableLoaded);
} else animatableLoaded();
