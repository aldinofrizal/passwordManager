import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteData } from '../store/action/password'
import { Button, Popconfirm } from 'antd'

export default function DeleteDoc(props) {
    const dispatch = useDispatch()
    const { id } = props

    const deleteDoc = () => {
        console.log('masuk fire event')
        dispatch(deleteData({ id }))
    }

    return (
        <>
            <Popconfirm
                placement="right"
                title="Delete Confirmation"
                onConfirm={deleteDoc}
                okText="Yes"
                cancelText="No"
            >
                <Button type="danger"  size="small">Delete</Button>

            </Popconfirm>
        </>
    )
}