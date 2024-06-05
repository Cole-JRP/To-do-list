import React, { useState } from 'react'

const AddSection = ({ addSection }) => {
    const [newSectionTitle, setNewSectionTitle] = useState('')

    const onAddSection = (e) => {
        e.preventDefault()

        if (!newSectionTitle) {
            alert('Please add a section name')
            return
        }

        const trimmedTitle = newSectionTitle.trim()
        if (trimmedTitle) {
            addSection(trimmedTitle);
            setNewSectionTitle('');
        }
    };

    return (
        <form className={'add-section-form'}
              onSubmit={onAddSection}>
            <div className={'form-control'}>
                <label>Section</label>
                <input
                    type={'text'}
                    value={newSectionTitle}
                    onChange={(e) => setNewSectionTitle(e.target.value)}
                    placeholder='New Section'/>
            </div>

            <input
                type='submit'
                value='Add Section'
                className='btn btn-block'
            />
        </form>
    )
}

export default AddSection