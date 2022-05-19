import React from 'react'
import ProductSimpleForm from './ProductSimpleForm'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const ProductForm = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'productForm' },
                    ]}
                />
            </div>
            <SimpleCard title="Product Form">
                <ProductSimpleForm />
            </SimpleCard>
            <Box py="12px" />
         
        </Container>
    )
}

export default ProductForm;
