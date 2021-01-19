import React from 'react';
import Homes from './HomeComponents';

const HomeView = props => {
    return (
        <div>
            {Homes.map((data, i) => (
                <div key={i}>
                    {data}
                </div>
            ))}
        </div>
    )
}

export default HomeView;