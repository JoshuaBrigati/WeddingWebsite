import PropTypes from 'prop-types'
import Link from 'next/link'

const Header = (props) => (
    <header id="header" className="alt">
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;"><p>Menu</p></a>
        </nav>
        {/* <Link href="/">
            <a className="logo"><strong>J + R</strong> <span>by Joshua Brigati</span></a>
        </Link> */}
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header