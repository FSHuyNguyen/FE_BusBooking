import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import moment from 'moment';

const UpdateDriverBody = () => {
    const navigate = useNavigate();
    const [driver, setDriver] = useState([]);
    const [params, setParams] = useSearchParams();

    useEffect(() => {
        try {
            const driver = async () => {
                const res = await axios.get(process.env.REACT_APP_BASE_URL + '/driver/' + params.get('driver_id'));
                setDriver(res.data.data);
            };
            driver();
        } catch (error) {
            console.log(error);
        }
    }, []);

    const formik = useFormik({
        initialValues: {
            name: '',
            address: '',
            birth: '',
            phone: '',
            card_id: '',
            email: '',
            sex: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Vui lòng nhập họ tên'),
            address: Yup.string().required('Vui lòng nhập địa chỉ'),
            birth: Yup.string().required('Vui lòng nhập ngày tháng năm sinh'),
            phone: Yup.string().min(9, 'Số điện thoại tối thiểu là 9 ký tự').required('Vui lòng nhập số điện thoại'),
            card_id: Yup.string().required('Vui lòng nhập CMND'),
            email: Yup.string().email('Kiểm tra lại định dạng email').required('Vui lòng nhập email'),
            sex: Yup.string().required('Vui lòng nhập giới tính'),
        }),
        onSubmit: (values) => {
            var birth;
            if (moment(values.birth, 'DD/MM/YYYY', true).format()) {
                birth = moment(values.birth, 'DD-MM-YYYY').format('YYYY-MM-DD');
            }
            try {
                const update_Driver = async () => {
                    const res = await axios.put(
                        process.env.REACT_APP_BASE_URL + '/driver/' + params.get('driver_id'),
                        {
                            name: values.name,
                            address: values.address,
                            birth: birth,
                            phone: values.phone,
                            card_id: values.card_id,
                            email: values.email,
                            sex: values.sex,
                        },
                        {
                            headers: {
                                Accept: 'application/json',
                                ContentType: 'application/json',
                                Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
                            },
                        },
                    );
                    if (res.status === 200) {
                        navigate('/admin-driver');
                        setTimeout(() => {
                            Notify.success('Update Driver Success', {
                                zindex: `999999`,
                                useIcon: false,
                                cssAnimationStyle: 'from-right',
                                cssAnimationDuration: 500,
                                distance: '30px',
                                showOnlyTheLastOne: true,
                                clickToClose: true,
                                fontSize: '16px',
                            });
                        }, 500);
                    }
                };
                Confirm.show('Update Driver', 'Are you sure to update this Driver?', 'Yes', 'No', () => {
                    update_Driver();
                });
            } catch (error) {
                console.log(error);
            }
        },
    });

    return (
        <div className="content-body">
            <div className="container-fluid">
                <div className="grid">
                    <div className="grid__row pages-titles">
                        <h2>Driver</h2>
                    </div>
                    <div className="grid__row">
                        <div className="grid__column-3"></div>
                        <div className="grid__column-6">
                            <div className="card">
                                <div className="card-body">
                                    <form className="auth-form-admin-body" onSubmit={formik.handleSubmit}>
                                        <div>
                                            <label htmlFor="">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="auth-form-control"
                                                value={formik.values.name}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                placeholder={driver.name}
                                            />
                                            {formik.errors.name && formik.touched.name && (
                                                <span className="form-message">{formik.errors.name}</span>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="">Address</label>
                                            <input
                                                type="text"
                                                name="address"
                                                className="auth-form-control"
                                                value={formik.values.address}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                placeholder={driver.address}
                                            />
                                            {formik.errors.address && formik.touched.address && (
                                                <span className="form-message">{formik.errors.address}</span>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="auth-form-control"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                placeholder={driver.email}
                                            />
                                            {formik.errors.email && formik.touched.email && (
                                                <span className="form-message">{formik.errors.email}</span>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="">Birth</label>
                                            <input
                                                type="text"
                                                name="birth"
                                                className="auth-form-control"
                                                value={formik.values.birth}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                placeholder={driver.birth}
                                            />
                                            {formik.errors.birth && formik.touched.birth && (
                                                <span className="form-message">{formik.errors.birth}</span>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="">Card_ID</label>
                                            <input
                                                type="text"
                                                name="card_id"
                                                className="auth-form-control"
                                                value={formik.values.card_id}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                placeholder={driver.card_id}
                                            />
                                            {formik.errors.card_id && formik.touched.card_id && (
                                                <span className="form-message">{formik.errors.card_id}</span>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="">Phone</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                className="auth-form-control"
                                                value={formik.values.phone}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                placeholder={driver.phone}
                                            />
                                            {formik.errors.phone && formik.touched.phone && (
                                                <span className="form-message">{formik.errors.phone}</span>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="">Sex</label>
                                            <input
                                                type="text"
                                                name="sex"
                                                className="auth-form-control"
                                                value={formik.values.sex}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                placeholder={driver.sex}
                                            />
                                            {formik.errors.sex && formik.touched.sex && (
                                                <span className="form-message" style={{ marginBottom: '1rem' }}>
                                                    {formik.errors.sex}
                                                </span>
                                            )}
                                        </div>

                                        <div>
                                            <button type="submit" className="btn-admin-signin">
                                                Update
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid__column-3"></div>
                </div>
            </div>
        </div>
    );
};

export default UpdateDriverBody;
