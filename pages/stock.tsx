import React, { ReactElement } from 'react'
import Header from '../components/layouts/header'
import Layout from '../components/layouts/layout'
import Menu from '../components/layouts/menu'
import MaterialTable from 'material-table'


interface Props { 
    
}

export default function Stock({ }: Props): ReactElement {
    return (
        <Layout>
            <MaterialTable
                columns={[
                    { title: "No", field: 'no' },
                    { title: "Name", field: 'name' },
                ]}
                data={[
                    { no: 1, name: "Next" },
                    { no: 1, name: "React" },
                    { no: 1, name: "Test" },
                    { no: 1, name: "May" },
            ]}
                title="Demo" />
        </Layout>
    )
}
