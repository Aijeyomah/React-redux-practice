import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchData } from '../../redux/Actions/GetDateActions'

const About = ({ fetchData, data }) => {
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            {data.map((data, id) => {
                return (
                    <ul key={id}>
                        <li>{data.userId}</li>
                        <li>{data.id}</li>
                        <li>{data.title}</li>
                    </ul>
                )
            })}
Welcome to about
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        data: state.data.apidata
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)