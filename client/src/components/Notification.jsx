import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { notification } from 'antd'
import { emptyState } from '../store/action/password'

export default function Notification(props){
    const dispatch = useDispatch()
    const password = useSelector(state => state.password)

    useEffect(() => {
        if (password.type) {
            if (password.status) mainNotification('success')
            else mainNotification('error')
        }
    }, [password]);

    const close = () => {
        dispatch(emptyState())
    }

    const mainNotification = type => {
        notification[type]({
            message: (password.status) ? 'Success' : 'Fail',
            description: password.message,
            onClose: close
        });
    }

    return (
        <></>
    )
}