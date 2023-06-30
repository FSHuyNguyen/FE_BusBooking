const DropDownData = [
    {
        id: 1,
        data: [
            {
                id: 1,
                icon: 'bx bx-user',
                title: 'Hồ sơ',
                url: '/me/profile',
            },
            {
                id: 2,
                icon: 'bx bxs-cart',
                title: 'Đơn hàng',
                url: '/me/ticket',
            },
        ],
    },
    {
        id: 2,
        data: [
            {
                id: 1,
                icon: 'bx bx-palette',
                title: 'Chủ đề',
                children: {
                    id: 1,
                    title: 'Chủ đề',
                    data: [
                        {
                            id: 1,
                            data: [
                                {
                                    id: 1,
                                    icon: 'bx bxs-sun',
                                    title: 'Màu sáng',
                                },
                                {
                                    id: 2,
                                    icon: 'bx bxs-moon',
                                    title: 'Màu tối',
                                },
                            ],
                        },
                    ],
                },
            },
            {
                id: 2,
                icon: 'bx bx-globe',
                title: 'Ngôn ngữ',
                children: {
                    id: 1,
                    title: 'Ngôn ngữ',
                    data: [
                        {
                            id: 1,
                            data: [
                                {
                                    id: 1,
                                    icon: 'bx bx-globe',
                                    title: 'Tiếng anh',
                                },
                                {
                                    id: 2,
                                    icon: 'bx bx-globe',
                                    title: 'Tiếng việt',
                                },
                            ],
                        },
                    ],
                },
            },
        ],
    },
    {
        id: 3,
        data: [
            {
                id: 1,
                icon: 'bx bx-log-out',
                title: 'Đăng xuất',
                url: '/logout',
            },
        ],
    },
];

export default DropDownData;
