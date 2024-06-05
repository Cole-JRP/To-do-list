import React from 'react'
import { useLocation } from 'react-router-dom'
import Button from "./Button";

    const Header = ({title = 'My startup progress', onAddSection, showAddSection }) => {
      const location = useLocation()

    return (
              <header className='header'>
                <h2> {title} </h2>
                {location.pathname === '/' && (
                  <Button
                  color=''
                  text={showAddSection ? 'Close' : 'Add '}
                  onClick={onAddSection}
                />
                )}
            </header>
    )
}
export default Header