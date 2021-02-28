import React from 'react'

function Header() {
    return (
					<header style={{cursor:'pointer'}} onClick={()=> window.location.reload()}>
						
							<h1>Github Finder</h1>
							<h5>Find Users and repositories</h5>
						
					</header>
				);
}

export default Header
