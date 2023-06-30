import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const UpdateTypeBusBody = () => {
    const [typeBus, setTypeBus] = useState([]);
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const typebus = async () => {
                const res = await axios.get(process.env.REACT_APP_BASE_URL + '/typebus/' + params.get('typebus_id'));
                setTypeBus(res.data.data);
            };
            typebus();
        } catch (error) {
            console.log(error);
        }
    }, []);

    const formik = useFormik({
        initialValues: {
            name: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Vui lòng nhập loại xe'),
        }),
        onSubmit: (values) => {
            try {
                const update_TypeBus = async () => {
                    const res = await axios.put(
                        process.env.REACT_APP_BASE_URL + '/typebus/' + params.get('typebus_id'),
                        {
                            name: values.name,
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
                        navigate('/admin-typebus');
                        setTimeout(() => {
                            Notify.success('Update TypeBus Success', {
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
                Confirm.show('Update TypeBus', 'Are you sure to Update this TypeBus?', 'Yes', 'No', () => {
                    update_TypeBus();
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
                        <h2>TypeBus</h2>
                    </div>
                    <div className="grid__row">
                        <div className="grid__column-4"></div>
                        <div className="grid__column-4">
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
                                                placeholder={typeBus.name}
                                            />
                                            {formik.errors.name && formik.touched.name && (
                                                <span className="form-message" style={{ marginBottom: '10px' }}>
                                                    {formik.errors.name}
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
                        <div className="grid__column-4"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateTypeBusBody;
