import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const AppProduct = Loadable(lazy(() => import("../material-kit/products/AppProduct")));
const AppUser = Loadable(lazy(() => import("../material-kit/users/AppUser")));
const UserForm = Loadable(lazy(() => import("./formUser/UserForm")));
const ProductForm = Loadable(lazy(() => import('./formProduct/ProductForm')));
const AppButton = Loadable(lazy(() => import("./buttons/AppButton")));
const AppIcon = Loadable(lazy(() => import("./icons/AppIcon")));
const AppProgress = Loadable(lazy(() => import("./AppProgress")));
const AppMenu = Loadable(lazy(() => import("./menu/AppMenu")));

const materialRoutes = [

    {
        path: '/gu/listProduct',
        element: <AppProduct />,
    },
    {
        path: '/gu/listUser',
        element: <AppUser />,
    },
   
    {
        path: '/gu/userForm',
        element: <UserForm />,
    }, 
    {
        path: '/gu/productForm',
        element: <ProductForm />,
    },
    {
        path: '/gu/buttons',
        element: <AppButton />,
    },
    {
        path: '/gu/icons',
        element: <AppIcon />,
    },
    {
        path: '/gu/progress',
        element: <AppProgress />,
    },
    {
        path: '/gu/menu',
        element: <AppMenu />,
    },
  
]

export default materialRoutes
