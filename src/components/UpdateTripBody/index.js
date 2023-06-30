import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';

const UpdateTripBody = () => {
    const [trip, setTrip] = useState([]);
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const trip = async () => {
                const res = await axios.get(process.env.REACT_APP_BASE_URL + '/trip/' + params.get('trip_id'));
                setTrip(res.data.data);
            };
            trip();
        } catch (error) {
            console.log(error);
        }
    }, []);

    const formik = useFormik({
        initialValues: {
            time_start: '',
            time_end: '',
        },
        validationSchema: Yup.object({
            time_start: Yup.string().required('Vui lòng nhập ngày khởi hành'),
            time_end: Yup.string().required('Vui lòng nhập ngày đến'),
        }),
        onSubmit: (values) => {
            try {
                const update_trip = async () => {
                    const res = await axios.put(
                        process.env.REACT_APP_BASE_URL + '/trip/' + params.get('trip_id'),
                        {
                            time_start: values.time_start,
                            time_end: values.time_end,
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
                        navigate('/admin-trip');
                        setTimeout(() => {
                            Notify.success('Update Trip Success', {
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
                Confirm.show('Update Trip', 'Are you sure to Update this Trip?', 'Yes', 'No', () => {
                    update_trip();
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
                        <h2>Trip</h2>
                    </div>
                    <div className="grid__row">
                        <div className="grid__column-4"></div>
                        <div className="grid__column-5">
                            <div className="card">
                                <div className="card-body">
                                    <form className="auth-form-admin-body" onSubmit={formik.handleSubmit}>
                                        <div>
                                            <label htmlFor="">Time Start</label>
                                            <input
                                                type="text"
                                                name="time_start"
                                                className="auth-form-control"
                                                value={formik.values.time_start}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                placeholder={trip.time_start}
                                            />
                                            {formik.errors.time_start && formik.touched.time_start && (
                                                <span className="form-message">{formik.errors.time_start}</span>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="">Time End</label>
                                            <input
                                                type="text"
                                                name="time_end"
                                                className="auth-form-control"
                                                value={formik.values.time_end}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                placeholder={trip.time_end}
                                            />
                                            {formik.errors.time_end && formik.touched.time_end && (
                                                <span className="form-message" style={{ marginBottom: '1rem' }}>
                                                    {formik.errors.time_end}
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
                        <div className="grid__column-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateTripBody;
