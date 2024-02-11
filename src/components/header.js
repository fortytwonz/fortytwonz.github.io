import * as React from "react"
import { Link } from "gatsby"
import Logo from '../images/logo-6.svg'

const Header = ({ siteHeader }) => (
    <header
        style={{
            margin: 'auto',
            display: 'flex',
            /*alignItems: 'center',
            padding: 'var (--space-4) var(--size-gutter)',
            justifyContent: 'space-between',*/
        }}
        >
        <Link
        to="/"
        style={{
            fontSize: 'var(--font-sm)',
            textDecoration: 'none',
        }}        
        >
            {siteHeader}
        </Link>
        <img
            alt="FortyTwo Technology"
            height={40}
            style={{ margin: 0 }}
            src={Logo}
        />

        </header>
)

