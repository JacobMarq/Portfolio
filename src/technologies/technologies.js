import { Technology } from '../technology';

// import RailsPNG from '../img/Icons/rails.png';
// import RubyPNG from '../img/Icons/ruby.png';
import Css3PNG from '../img/Icons/css3.png';
import Html5PNG from '../img/Icons/html5.png';
import JavaScriptPNG from '../img/Icons/js.png';
import PythonPNG from '../img/Icons/python.png';
import ReactjsPNG from '../img/Icons/reactjs.png';
import AngularPNG from '../img/Icons/angular.png';
import ExpoPNG from '../img/Icons/expo.png';
import Ibmdb2PNG from '../img/Icons/ibm.png';
import JavaPNG from '../img/Icons/java.png';
import LaravelPNG from '../img/Icons/laravel.png';
import MysqlPNG from '../img/Icons/mysql.png';
import NetlifyPNG from '../img/Icons/netlify.png';
import PhpPNG from '../img/Icons/php.png';
import TypeScriptPNG from '../img/Icons/typescript.png';

const toolsRaw = [
    // { identifier: "Rails", image: RailsPNG },
    // { identifier: "Ruby", image: RubyPNG },
    { identifier: "CSS3", image: Css3PNG },
    { identifier: "HTML5", image: Html5PNG },
    { identifier: "JavaScript", image: JavaScriptPNG },
    { identifier: "Python", image: PythonPNG },
    { identifier: "React", image: ReactjsPNG },
    { identifier: "Angular", image: AngularPNG },
    { identifier: "Expo", image: ExpoPNG },
    { identifier: "IBMDb2", image: Ibmdb2PNG },
    { identifier: "Java", image: JavaPNG },
    { identifier: "Laravel", image: LaravelPNG },
    { identifier: "MySQL", image: MysqlPNG },
    { identifier: "Netlify", image: NetlifyPNG },
    { identifier: "PHP", image: PhpPNG },
    { identifier: "TypeScript", image: TypeScriptPNG },
];

// Export Compiled List
export const technologiesList = toolsRaw.map(
    t => new Technology(t.identifier, t.image)
);

// Export individual references
export const [
    //techRails,
    //techRuby,
    techCSS,
    techHTML,
    techJavaScript,
    techPython,
    techReact,
    techAngular,
    techExpo,
    techIBMDb2,
    techJava,
    techLaravel,
    techMySQL,
    techNetlify,
    techPHP,
    techTypeScript,
] = technologiesList;