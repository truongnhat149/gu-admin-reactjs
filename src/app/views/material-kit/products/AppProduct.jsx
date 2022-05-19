import React from 'react'
import ProductTable from './ProductTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Button } from '@mui/material'
import classNames from 'classnames/bind';
import styles from './AppProduct.module.scss';

const cx = classNames.bind(styles);

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

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const AppProduct = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/gu' },
                        { name: 'listProduct' },
                    ]}
                />
            </div>

            <Box py="12px" />
            <SimpleCard title="Products" className={cx('card')}>
                <StyledButton variant="contained" className={cx('btn-product')}>
                   <a   href='/gu/productForm'
                  
                   > Add Product
                   
                   </a>
                  
                </StyledButton>
                <ProductTable />
            </SimpleCard>
        </Container>
    )
}

export default AppProduct
