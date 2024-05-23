import ProjectPicture1 from '../../../assets/images/pictures/projects/proj-1.webp';
import ProjectPicture2 from '../../../assets/images/pictures/projects/proj-2.webp';
import ProjectPicture3 from '../../../assets/images/pictures/projects/proj-3.webp';
import ProjectPicture4 from '../../../assets/images/pictures/projects/proj-4.webp';
import ProjectPicture5 from '../../../assets/images/pictures/projects/proj-5.webp';
import ProjectPicture6 from '../../../assets/images/pictures/projects/proj-6.webp';
import { AllAboutAllCode, AllAboutAllLink, CitiesGameCode, CitiesGameLink, ElegantCode, ElegantLink, LessonerLink, ShotThemAllCode, ShotThemAllLink,  StoreFinderLink } from '../../../constants/Constants';

export const ProjectCardData = [
  {
    id: 1, 
    src: `${ProjectPicture1}`, 
    alt: 'Project Picture 1', 
    title: 'The Lessoner', 
    mainText: 'This is a one-page application in which anyone could teach and learn by posting video lessons. With a team of more than 30 people representing such areas as Frontend, Backend, design, testing (QA), project management (PM), business analytics (BA) and Project Owner, we developed the application “The Lessoner” in which every interested person I could teach and learn myself by posting video lessons.', 
    stackSpanText: 'Tech stack :', 
    stackText: 'React, Redux, React Router, TypeScript, SCSS, Figma, GitHub, Jira, Confluence, Slack, Zoom, Scrum.', 
    chainLinkText: 'Live Preview', 
    githubLinkText: 'View Code', 
    chainLink: `${LessonerLink}`, 
    githubLink: `${LessonerLink}`
  
  },
  {
    id: 2, 
    src: `${ProjectPicture2}`, 
    alt: 'Project Picture 2', 
    title: 'All About All', 
    mainText: 'In this project I practice using my skills.', 
    stackSpanText: 'Tech stack :', 
    stackText: 'React, module SCSS, Redux Toolkit, React Router, TypeScript, Github', 
    chainLinkText: 'Live Preview', 
    githubLinkText: 'View Code', 
    chainLink: `${AllAboutAllLink}`, 
    githubLink: `${AllAboutAllCode}`
  },
  {
    id: 3, 
    src: `${ProjectPicture3}`, 
    alt: 'Project Picture 3', 
    title: 'Cities Game', 
    mainText: 'This is a “Cities” game. The application saves settings in LocalStorage (current progress, sound on/off, keyboard open/closed, which city base the game was played with). The application also receives information about the selected city (description and picture) from a third-party site, and it brings the information to the desired form (finds the necessary classes in the markup, removes unnecessary information, and does not get a preview image, but one with good resolution).', 
    stackSpanText: 'Tech stack :', 
    stackText: 'HTML, CSS, SCSS, JavaScript, Docker, Bitbucket, LocalStorage', 
    chainLinkText: 'Live Preview', 
    githubLinkText: 'View Code', 
    chainLink: `${CitiesGameLink}`, 
    githubLink: `${CitiesGameCode}`
  },
  {
    id: 4, 
    src: `${ProjectPicture4}`, 
    alt: 'Project Picture 4', 
    title: 'Shot Them All', 
    mainText: 'This is a shooter game.', 
    stackSpanText: 'Tech stack :', 
    stackText: 'HTML, CSS, SCSS, JavaScript, Canvas, LocalStorage', 
    chainLinkText: 'Live Preview', 
    githubLinkText: 'View Code', 
    chainLink: `${ShotThemAllLink}`, 
    githubLink: `${ShotThemAllCode}`
  },
  {
    id: 5, 
    src: `${ProjectPicture5}`, 
    alt: 'Project Picture 5', 
    title: 'ELEGANT', 
    mainText: 'This is a multi-page site.', 
    stackSpanText: 'Tech stack :', 
    stackText: 'HTML, CSS, JavaScript, Adobe Photoshop, Bootstrap5, Flexbox, Grid, @ keyframes', 
    chainLinkText: 'Live Preview', 
    githubLinkText: 'View Code', 
    chainLink: `${ElegantLink}`, 
    githubLink: `${ElegantCode}`
  },
  {
    id: 6, 
    src: `${ProjectPicture6}`, 
    alt: 'Project Picture 6', 
    title: 'StoreFinder', 
    mainText: 'This is a one-page application that works with a database of stores and their products. he application receives data about stores and their products from a local server. The application allows you to: search by stores and products, sort by product status, sort by columns of the product table, sorting products by status, by table columns and search work together taking into account all parameters, create/delete stores and products, edit products.', 
    stackSpanText: 'Tech stack :', 
    stackText: 'HTML, CSS, JavaScript, MVC, Fetch, JSDoc, local server', 
    chainLinkText: 'Live Preview', 
    githubLinkText: 'View Code', 
    chainLink: `${StoreFinderLink}`, 
    githubLink: `${StoreFinderLink}`
  },
]