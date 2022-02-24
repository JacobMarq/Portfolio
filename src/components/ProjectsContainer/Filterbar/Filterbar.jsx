import './Filterbar.css';
import React from "react";
import HTML5 from '../../../img/Icons/html5.png';
import CSS3 from '../../../img/Icons/css3.png';
import JS from '../../../img/Icons/js.png';
import REACTJS from '../../../img/Icons/reactjs.png';
import RUBY from '../../../img/Icons/ruby.png';
import RAILS from '../../../img/Icons/rails.png';

const html = 'HTML';
const css = 'CSS';
const js = 'JavaScript';
const ruby = 'Ruby';
const reactjs = 'React';
const rails = 'Rails';

const Filterbar = props => {
    let htmlButtonClass = '';
    let cssButtonClass = '';
    let jsButtonClass = '';
    let rubyButtonClass = '';
    let reactButtonClass = '';
    let railsButtonClass = '';

    //add active class to active filters
    props.filterValues.forEach(value => {
        switch (value) {
            case html:
                htmlButtonClass = 'active';
                break;
            case css:
                cssButtonClass = 'active';
                break;
            case js:
                jsButtonClass = 'active';
                break;
            case ruby:
                rubyButtonClass = 'active';
                break;
            case reactjs:
                reactButtonClass = 'active';
                break;
            case rails:
                railsButtonClass = 'active';
                break;
            default:
                break;
        }
    });


    return (
        <div className='table'>
            <ul className='horizontal-list'>
                <li><button id={html} className={htmlButtonClass} onClick={props.click}>
                    <img src={HTML5} alt="html5 logo" />
                    HTML
                    </button></li>
                <li><button id={css} className={cssButtonClass} onClick={props.click}>
                    <img src={CSS3} alt="CSS3 logo" />
                    CSS
                    </button></li>
                <li><button id={js} className={jsButtonClass} onClick={props.click}>
                    <img src={JS} alt="JavaScript logo" />
                    JavaScript
                    </button></li>
                <li><button id={ruby} className={rubyButtonClass} onClick={props.click}>
                    <img src={RUBY} alt="Ruby logo" />
                    Ruby
                    </button></li>
                <li><button id={reactjs} className={reactButtonClass} onClick={props.click}>
                    <img src={REACTJS} alt="React.js logo" />
                    React.js
                    </button></li>
                <li><button id={rails} className={railsButtonClass} onClick={props.click}>
                    <img src={RAILS} alt="Rails logo" />
                    Rails
                    </button></li>
            </ul>
        </div>
    );
};

export default Filterbar;