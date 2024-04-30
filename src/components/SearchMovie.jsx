import React from 'react'

const SearchMovie = (props) => {
    return (
        <div className='col col-sm-4'>
            <input type="text" className='form-control' placeholder='search movies...'
                value={props.value}
                onChange={(event) => props.setSearchMovie(event.target.value)}
            />
        </div>
    )
}

export default SearchMovie