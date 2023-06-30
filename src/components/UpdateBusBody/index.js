import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
const UpdateBusBody = () => {
    const [typebus, setTypeBus] = useState([]);
    const [selectTypeBus, setSelectTypeBus] = useState(null);

    const [bus, setBus] = useState([]);
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const typeBusess = async () => {
                const res = await axios.get(process.env.REACT_APP_BASE_URL + '/typebus');
                setTypeBus(res.data.type_bus);
            };
            typeBusess();
        } catch (error) {
            console.log(error);
        }

        try {
            const bus = async () => {
                const res = await axios.get(process.env.REACT_APP_BASE_URL + '/bus/' + params.get('bus_id'));
                setBus(res.data.data);
            };
            bus();
        } catch (error) {
            console.log(error);
        }
    }, []);

    const formik = useFormik({
        initialValues: {
            name: '',
            license_plates: '',
            type_bus_id: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Vui lòng tên xe'),
            license_plates: Yup.string().required('Vui lòng nhập biển số xe'),
        }),
        onSubmit: (values) => {
            if (selectTypeBus === 5) {
                Notify.warning('Please select the type bus orther', {
                    zindex: `999999`,
                    useIcon: false,
                    cssAnimationStyle: 'from-right',
                    cssAnimationDuration: 500,
                    distance: '30px',
                    showOnlyTheLastOne: true,
                    clickToClose: true,
                    fontSize: '16px',
                });
                setSelectTypeBus(null);
            }
            try {
                if (selectTypeBus !== null) {
                    const update_Bus = async () => {
                        const res = await axios.put(
                            process.env.REACT_APP_BASE_URL + '/bus/' + params.get('bus_id'),
                            {
                                name: values.name,
                                license_plates: values.license_plates,
                                type_bus_id: selectTypeBus,
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
                            navigate('/admin-bus');
                            setTimeout(() => {
                                Notify.success('Update Bus Success', {
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
                    Confirm.show('Update Bus', 'Are you sure to Update this Bus?', 'Yes', 'No', () => {
                        update_Bus();
                    });
                } else {
                    Notify.failure('Please select the type bus orther', {
                        zindex: `999999`,
                        useIcon: false,
                        cssAnimationStyle: 'from-right',
                        cssAnimationDuration: 500,
                        distance: '30px',
                        showOnlyTheLastOne: true,
                        clickToClose: true,
                        fontSize: '16px',
                    });
                }
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
                        <h2>Bus</h2>
                    </div>
                    <div className="grid__row">
                        <div className="grid__column-4"></div>
                        <div className="grid__column-5">
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
                                                placeholder={bus.name}
                                            />
                                            {formik.errors.name && formik.touched.name && (
                                                <span className="form-message">{formik.errors.name}</span>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="">License Plates</label>
                                            <input
                                                type="text"
                                                name="license_plates"
                                                className="auth-form-control"
                                                value={formik.values.license_plates}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                placeholder={bus.license_plates}
                                            />
                                            {formik.errors.license_plates && formik.touched.license_plates && (
                                                <span className="form-message">{formik.errors.license_plates}</span>
                                            )}
                                        </div>
                                        <select
                                            className="custom-select filter-select"
                                            style={{ marginBottom: '20px', width: '100%' }}
                                            onChange={(e) => setSelectTypeBus(e.target.value)}
                                        >
                                            {typebus.map((item, index) => (
                                                <option id={item.id} value={item.id} key={index}>
                                                    {item.name}
                                                </option>
                                            ))}
                                        </select>
                                        <div>
                                            <button type="submit" className="btn-admin-signin">
                                                Update
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="grid__column-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateBusBody;
