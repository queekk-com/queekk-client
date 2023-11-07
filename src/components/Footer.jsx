import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="mainFoot">
                <div className="listCont">
                    <div className="listHead">
                        <h3>Documentation</h3>
                    </div>
                    <ul className="lists">
                        <li>
                            <Link>Guide</Link>
                        </li>
                        <li>
                            <Link>Tutorial</Link>
                        </li>
                        <li>
                            <Link>Examples</Link>
                        </li>
                        <li>
                            <Link>Server Api</Link>
                        </li>
                        <li>
                            <Link>Client Api</Link>
                        </li>
                    </ul>
                </div>
                <div className="listCont">
                    <div className="listHead">
                        <h3>Help</h3>
                    </div>
                    <ul className="lists">
                        <li>
                            <Link>Troubleshooting</Link>
                        </li>
                        <li>
                            <Link>GitHub Discussions</Link>
                        </li>
                        <li>
                            <Link>Slack</Link>
                        </li>
                        <li>
                            <Link>Stack Overflow</Link>
                        </li>
                    </ul>
                </div>
                <div className="listCont">
                    <div className="listHead">
                        <h3>News</h3>
                    </div>
                    <ul className="lists">
                        <li>
                            <Link>Blog</Link>
                        </li>
                        <li>
                            <Link>Twitter</Link>
                        </li>
                    </ul>
                </div>
                <div className="listCont">
                    <div className="listHead">
                        <h3>Tools</h3>
                    </div>
                    <ul className="lists">
                        <li>
                            <Link>CDN</Link>
                        </li>
                        <li>
                            <Link>Admin UI</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='bottomFoot'>
                <p>
                    © 2023 Queekk. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer