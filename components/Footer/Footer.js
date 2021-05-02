import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div className={classes.footer}>
            <h3>
                In my spare time I read books, practice meditation, play board
                games, travel and work on side projects.
            </h3>
            <div className={classes.social}>
                <ul>
                    <li className={classes.icons}>
                        <a href='https://www.linkedin.com/in/abhinay-reddy/'>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li className={classes.icons}>
                        <a href='https://github.com/xprmnts'>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li className={classes.icons}>
                        <a href='mailto:abhinay@outlook.com'>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
