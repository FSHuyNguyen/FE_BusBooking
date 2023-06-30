import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';

const UpdatePriceBody = () => {
    const [price, setPrice] = useState([]);
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    const [typebus, setTypeBus] = useState([]);
    const [station, setStation] = useState([]);
    const [selectTypeBus, setSelectTypeBus] = useState();
    const [selectStationStart, setSelectStationStart] = useState();
    const [selectStationEnd, setSelectStationEnd] = useState();

    useEffect(() => {
        try {
            const price = async () => {
                const res = await axios.get(process.env.REACT_APP_BASE_URL + '/price/' + params.get('price_id'));
                setPrice(res.data.data);
            };
            price();
        } catch (error) {
            console.log(error);
        }
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
            const station = async () => {
                const res = await axios.get(process.env.REACT_APP_BASE_URL + '/station');
                setStation(res.data.station);
            };
            station();
        } catch (error) {
            console.log(error);
        }
    }, []);

    const formik = useFormik({
        initialValues: {
            price: '',
            image: '',
            distance: '',
            station_start: '',
            station_end: '',
            type_bus_id: '',
        },
        validationSchema: Yup.object({
            price: Yup.string().required('Vui lòng giá'),
            image: Yup.string().required('Vui lòng thêm hình ảnh'),
            distance: Yup.string().required('Vui lòng thông tin'),
        }),
        onSubmit: (values) => {
            try {
                const updatePrice = async () => {
                    const res = await axios.put(
                        process.env.REACT_APP_BASE_URL + '/price/' + params.get('price_id'),
                        {
                            price: values.price,
                            image: values.image,
                            distance: values.distance,
                            station_start: selectStationStart,
                            station_end: selectStationEnd,
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
                        navigate('/admin-price');
                        setTimeout(() => {
                            Notify.success('Update Price Success', {
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
                Confirm.show('Update Price', 'Are you sure to Update this Price?', 'Yes', 'No', () => {
                    updatePrice();
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
                        <h2>Price</h2>
                    </div>
                    <div className="grid__row">
                        <div className="grid__column-2"></div>
                        <div className="grid__column-8">
                            <div className="card">
                                <div className="card-body">
                                    <form className="auth-form-admin-body" onSubmit={formik.handleSubmit}>
                                        <div>
                                            <label htmlFor="">Price</label>
                                            <input
                                                type="text"
                                                name="price"
                                                className="auth-form-control"
                                                value={formik.values.price}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                placeholder={price.price}
                                            />
                                            {formik.errors.price && formik.touched.price && (
                                                <span className="form-message">{formik.errors.price}</span>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="">Image</label>
                                            <input
                                                type="text"
                                                name="image"
                                                className="auth-form-control"
                                                value={formik.values.image}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                placeholder={price.image}
                                            />
                                            {formik.errors.image && formik.touched.image && (
                                                <span className="form-message">{formik.errors.image}</span>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="">Distance</label>
                                            <input
                                                type="text"
                                                name="distance"
                                                className="auth-form-control"
                                                value={formik.values.distance}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                placeholder={price.distance}
                                            />
                                            {formik.errors.distance && formik.touched.distance && (
                                                <span className="form-message" style={{ marginBottom: '1rem' }}>
                                                    {formik.errors.distance}
                                                </span>
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
                                        <select
                                            className="custom-select filter-select"
                                            style={{ marginBottom: '20px', width: '100%' }}
                                            onChange={(e) => setSelectStationStart(e.target.value)}
                                        >
                                            {station.map((item, index) => (
                                                <option id={item.id} value={item.id} key={index}>
                                                    {item.point}
                                                </option>
                                            ))}
                                        </select>
                                        <select
                                            className="custom-select filter-select"
                                            style={{ marginBottom: '20px', width: '100%' }}
                                            onChange={(e) => setSelectStationEnd(e.target.value)}
                                        >
                                            {station.map((item, index) => (
                                                <option id={item.id} value={item.id} key={index}>
                                                    {item.point}
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
                        <div className="grid__column-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePriceBody;
