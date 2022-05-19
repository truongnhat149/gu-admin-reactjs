import React from 'react'
import UserTable from './UserTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system';
import { Button } from '@mui/material'
import classNames from 'classnames/bind';
import styles from './AppUser.module.scss';

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

const AppUser = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'listUser' },
                    ]}
                />
            </div>

            <Box py="12px" />
            <SimpleCard title="Users">
                <StyledButton variant="contained" className={cx('btn-user')}>
                    <a href="/gu/userForm"> Add User</a>
                </StyledButton>
                <UserTable />
            </SimpleCard>
        </Container>
    )
}

export default AppUser
