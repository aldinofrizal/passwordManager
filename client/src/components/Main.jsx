import React from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'
import { isLoaded } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { Table, Spin } from 'antd'

import List from './List'
import DeleteDoc from './DeleteDoc'

const { Column } = Table

export default function Main(props) {
    
    useFirestoreConnect([
        { collection: 'passwordData' }
    ])

    const passwordData = useSelector(state => state.firestore.ordered.passwordData)
    
    return (
        <>
            <Spin tip="loading.." size="large" spinning={!isLoaded(passwordData)} >
                <Table dataSource={passwordData} pagination={false} rowKey={record => record.id}>
                    <Column
                        title="URL"
                        key="urlChange"
                        render={(text, record) => (
                            <List record={record} field="url" />
                        )}
                    />
                    <Column
                        title="username"
                        key="usernameChange"
                        render={(text, record) => (
                            <List record={record} field="username" />
                        )}
                    />
                    <Column
                        title="password"
                        key="passwordChange"
                        render={(text, record) => (
                            <List record={record} field="password" />
                        )}
                    />
                    <Column
                        key="delete"
                        render={(text, record) => (
                            <DeleteDoc id={record.id} />
                        )}
                    />
                </Table>
            </Spin>
        </>
    )
}