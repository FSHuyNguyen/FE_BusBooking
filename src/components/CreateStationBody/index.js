import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix';
import axios from 'axios';

const CreateStationBody = () => {
    const formik = useFormik({
        initialValues: {
            point: '',
            location: '',
            address: '',
        },
        validationSchema: Yup.object({
            point: Yup.string().required('Vui lòng điểm khởi hành'),
            location: Yup.string().required('Vui lòng địa điểm'),
            address: Yup.string().required('Vui lòng địa chỉ'),
        }),
        onSubmit: (values) => {
            try {
                const create_station = async () => {
                    const res = await axios.post(
                        process.env.REACT_APP_BASE_URL + '/station',
                        {
                            point: values.point,
                            location: values.location,
                            address: values.address,
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
                        Notify.success('Create Station Success', {
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
                };
                Confirm.show('Create Station', 'Are you sure to create this Station?', 'Yes', 'No', () => {
                    create_station();
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
                        <h2>Station</h2>
                    </div>
                    <div className="grid__row">
                        <div className="grid__column-4"></div>
                        <div className="grid__column-5">
                            <div className="card">
                                <div className="card-body">
                                    <form className="auth-form-admin-body" onSubmit={formik.handleSubmit}>
                                        <div>
                                            <label htmlFor="">Point</label>
                                            <input
                                                type="text"
                                                name="point"
                                                className="auth-form-control"
                                                value={formik.values.point}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                placeholder="Point"
                                            />
                                            {formik.errors.point && formik.touched.point && (
                                                <span className="form-message">{formik.errors.point}</span>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="">Location</label>
                                            <input
                                                type="text"
                                                name="location"
                                                className="auth-form-control"
                                                value={formik.values.location}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                placeholder="Location"
                                            />
                                            {formik.errors.location && formik.touched.location && (
                                                <span className="form-message">{formik.errors.location}</span>
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
                                                placeholder="Address"
                                            />
                                            {formik.errors.address && formik.touched.address && (
                                                <span className="form-message" style={{ marginBottom: '1rem' }}>
                                                    {formik.errors.address}
                                                </span>
                                            )}
                                        </div>

                                        <div>
                                            <button type="submit" className="btn-admin-signin">
                                                Create
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

export default CreateStationBody;
