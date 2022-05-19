export const navigations = [
    {
        name: 'Dashboard',
        path: '/dashboard/default',
        icon: 'dashboard',
    },
    {
        label: '',
        type: 'label',
    },
    {
        name: 'Users',
        icon: 'favorite',
        badge: { color: 'secondary' },
        children: [
            {
                name: 'List',
                path: '/gu/listUser',
                iconText: 'T',
            },
            {
                name: 'New Users',
                path: '/gu/userForm',
              
            },
        
        ],
    },
    {
        label: '',
        type: 'label',
    },
    {
        name: 'Products',
        icon: 'favorite',
        badge: { color: 'secondary' },
        children: [
            {
                name: 'List',
                path: '/gu/listProduct',
                iconText: 'T',
            },
            {
                name: 'New Products',
                path: '/gu/productForm',
              
            },
        ]
    }
]
