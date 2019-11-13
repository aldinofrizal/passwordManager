import React from 'react'
import { useDispatch } from 'react-redux'
import { Typography } from 'antd'
import { updateData } from '../store/action/password'
const {Paragraph} = Typography

export default function List(props){
    const dispatch = useDispatch()
    const onChange = (value) => {
        dispatch(updateData( {value , field : props.field, id : props.record.id} ))
    }
    return (
        <>
            <Paragraph editable={ { onChange } }>{props.record[props.field]}</Paragraph>
        </>
    )
}