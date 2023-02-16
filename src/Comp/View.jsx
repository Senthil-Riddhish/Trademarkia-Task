import React, { useEffect } from 'react'

const View = () => {
    const data=JSON.parse(localStorage.getItem('climate'));
    return (
        <div>
            {
                data.map((objs) => {
                    return (
                        <div>Hi</div>
                    )
                })
            }
        </div>
    )
}

export default View
