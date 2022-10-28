import images from '~/assets/img';

const PayMethod = [
    {
        id: 1,
        data: [
            {
                id: 1,
                img: images.vnpay,
                name: 'VNPay',
            },
        ],
    },
    {
        id: 2,
        data: [
            {
                id: 2,
                img: images.momo,
                name: 'Momo Wallet',
            },
        ],
    },
    {
        id: 3,
        data: [
            {
                id: 3,
                img: images.zalopay,
                name: 'Zalo Wallet',
            },
        ],
    },
];

export default PayMethod;
