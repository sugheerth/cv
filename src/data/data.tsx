import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import astar from '../../public/assets/images/portfolio/AStar.gif';
import dijkstra from '../../public/assets/images/portfolio/dijkstra.gif';
import gap_follow from '../../public/assets/images/portfolio/gap_follow.gif';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
/*import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';*/
import profilepic from '../images/profilepic.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Sugheerth Sreedharan\'s Portfolio',
  description: "An aspiring Robotics and AI Engineer with a background in Mechanical Engineering and Core Software Development",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Sugheerth Sreedharan.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
       A competent <strong className="text-stone-100">Software Development Engineer</strong> with 5 years of experience in building cloud applications at <strong className="text-stone-100">Zoho Corporation</strong>
        and an academic background in <strong className="text-stone-100">Mechanical Engineering from SASTRA University</strong>, Thanjavur, India. 
        Currently pursuing Masters of Science in <strong className="text-stone-100">Engineering Science( Robotics )</strong> at <strong className="text-stone-100">University at Buffalo</strong>, The State University of New York 
        with a zeal to excel in Robot Perception and Planning, Autonomous Driving and Software for Robotics.
      </p>
    </>
  ),
  actions: [
    {
      href: 'assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Buffalo, NY', Icon: MapIcon},
    {label: 'Age', text: '27', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Cars, Movies, Series', Icon: SparklesIcon},
    {label: 'Study', text: 'University at Buffalo, SUNY', Icon: AcademicCapIcon},
    {label: 'Major', text: 'Robotics', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 8,
      },
      {
        name: 'Tamil',
        level: 10,
      },
      {
        name: 'Telugu',
        level: 10,
      },
      {
        name: 'German',
        level: 3,
      }
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'GoLang',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'JavaScript',
        level: 7,
      },
      {
        name: 'React',
        level: 2,
      },
    ],
  },
  {
    name: 'Robotics',
    skills: [
      {
        name: 'ROS',
        level: 9,
      },
      {
        name: 'Autoware',
        level: 4,
      },
      {
        name: 'CARLA',
        level: 4,
      },
      {
        name: 'AirSim',
        level: 4,
      },
      
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'A-Star Global Path Planning',
    description: 'A-Star Path Planning with successively updated goal points, simulated through Unity and visualized using RVIZ.',
    url: 'assets/images/portfolio/AStar.gif',
    image: astar,
  },
  {
    title: 'Dijkstra Global Path Planning',
    description: 'Dijkstra Path Planning with successively updated goal points, simulated through Unity and visualized using RVIZ.',
    url: 'assets/images/portfolio/dijkstra.gif',
    image: dijkstra,
  },
  {
    title: 'Gap Follow - Local Planning',
    description: 'Gap Follow to avoid obstacles using largest gap algorithm, simulated using Unity and visualized using RVIZ.',
    url: 'assets/images/portfolio/gap_follow.gif',
    image: gap_follow,
  },
  /*{
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },*/
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Expected: Dec 2024',
    location: 'University at Buffalo, SUNY',
    title: 'Masters in Engineering Science(Robotics)',
    content: <p>In my pursuit of a Master's degree, I cultivated a comprehensive skill set encompassing fundamental disciplines crucial to advancing within the field. Through rigorous academic study and practical application, I acquired proficiency in Robotics principles, Control Systems, Path Planning, Perception, Motion Planning, Simulation methodologies, and Machine Learning techniques. Additionally, I delved into emerging domains such as Reinforcement Learning and Deep Learning, enhancing my ability to design sophisticated intelligent systems. Moreover, my education emphasized the seamless integration of these concepts into practical, real-world applications, leveraging advanced Computer Vision methodologies. This diverse expertise positions me effectively to address complex challenges and spearhead innovation within the realm of Robotics technology and AI.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'sugheert@buffalo.edu',
      href: 'mailto:sugheert@buffalo.edu',
    },
    {
      type: ContactType.Location,
      text: '83 Custer Street, Buffalo, NY-14214',
      href: 'https://maps.app.goo.gl/JHASHdqCSyhtTuhk8',
    },
    {
      type: ContactType.Instagram,
      text: '@_ploo.vee.uh.fahyl_',
      href: 'https://www.instagram.com/_ploo.vee.uh.fahyl_/',
    },
    {
      type: ContactType.Github,
      text: 'sugheerth',
      href: 'https://github.com/sugheerth',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/sugheerth'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'linkedin.com/in/sugheerth-s'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/_ploo.vee.uh.fahyl_/'},
];
