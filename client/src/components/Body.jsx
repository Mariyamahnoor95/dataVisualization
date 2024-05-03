import React from 'react'
import ChartGrid from './ChartGrid'
import Record from './Record'

const Body = ({data}) => {
    return (
        <div className='w-3/4 mx-3'>
            <ChartGrid data={data} />
            <Record />
        </div>
    )
}

export default Body