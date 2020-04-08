import React from 'react';
import Product from './Product'
import { useContext } from 'react';
import { ServicesContext} from '../../App'

const Services = () => {
    const user = useContext(ServicesContext)
    return (
        <div>
        Hello {user}
        <Product />
        </div>
    )
}

export default Services;