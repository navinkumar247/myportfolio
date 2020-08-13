
import shumvil from './shumvil-site.gif';
import basava from './Basava-site.gif';
import facerecog from './Facerecog-site.gif'

const projects = [
    {
        title:'Facial Recognition App',
        p1: `This app allows you to identify the detection of faces in any image supplied. This was achieved thanks to Clarifai's artificial intelligence API.`,
        p2:  `Created using React JS, Express JS and PostgreSQL.`,
        img: facerecog,
        href: 'https://facialrecognition-react.herokuapp.com/'      
    },
    {
        title:'Portfolio Site',
        p1: `A portfolio site created for a Automotive Engineer. A fluid and responsive website with database to store contact messages.`,
        p2:  `Created using Django, SQLite, HTML, CSS, Bootstrap and JavaScript.`,
        img: shumvil,
        href: 'https://shumvil.herokuapp.com/'      
    },
    {
        title:'Portfolio Site',
        p1: `A portfolio site created for R&D Systems Engineer. A fluid and responsive website with database to store contact messages.`,
        p2:  `Created using Django, SQLite, HTML, CSS, Bootstrap and Jquery.`,
        img: basava,
        href: 'https://abhishek-basava.herokuapp.com/'      
    }
]

export default projects;