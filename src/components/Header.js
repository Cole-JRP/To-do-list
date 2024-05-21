import React from 'react'
import Button from "./Button";
    const Header = ({title = 'My startup progress', onAddSection, showAddSection}) => {

    return (
              <header className='header'>
                <h2>{title}</h2>
                <Button
                    color=''
                    text={showAddSection ? 'Close' : 'Add '}
                    onClick={onAddSection}/>
            </header>
    )
}
export default Header