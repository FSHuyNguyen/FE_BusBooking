import React, { useState } from 'react';
import '~/components/CustormerInforChild/style.css';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const CustomerInforChild = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            city: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Vui lòng nhập họ tên'),
            phone: Yup.string().min(9, 'Số điện thoại tối thiểu là 10 số').required('Vui lòng nhập số điện thoại'),
            email: Yup.string().email('Kiểm tra lại định dạng Email').required('Vui lòng nhập Email'),
            city: Yup.string().required('Vui lòng nhập thành phố'),
        }),
        onSubmit: (values) => {},
    });
    return (
        <div className="custormer_infor_child ">
            <div className="grid__row">
                <div className="grid__column-6 terms-policies">
                    <div className="notes-container">
                        <p className="notes-container-title">Điều khoản và chính sách</p>
                        <div className="txt">
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>
                                    (*) Vui lòng mang theo email đã xác nhận có mã đặt chỗ để lấy vé trước giờ khởi hành
                                </font>
                            </font>
                            &nbsp;
                            <span className="high-light">
                                <font style={{ verticalAlign: 'inherit' }}>
                                    <font style={{ verticalAlign: 'inherit' }}>60 phút</font>
                                </font>
                            </span>
                            &nbsp;
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>đối với xe đưa đón.</font>
                            </font>
                        </div>
                        <div className="txt">
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>
                                    (*) Thông tin hành khách phải chính xác.
                                </font>
                            </font>
                        </div>
                        <div className="txt">
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>
                                    (*) Hành khách không được đổi / hủy vé trong thời gian lễ, tết ​​(Ngày thường hành
                                    khách có thể đổi / hủy vé
                                </font>
                            </font>
                            &nbsp;
                            <span className="high-light">
                                <font style={{ verticalAlign: 'inherit' }}>
                                    <font style={{ verticalAlign: 'inherit' }}>một lần</font>
                                </font>
                            </span>
                            &nbsp;
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font>và trước 24h), phí hủy 10%. .</font>
                            </font>
                        </div>
                        <div className="txt">
                            <font style={{ verticAllign: 'inherit' }}>
                                (*) Phạm vi dịch vụ xe buýt đưa đón có giới hạn, do đó, chúng tôi sẽ không đón những
                                hành khách nằm ngoài phạm vi dịch vụ.Cảm ơn bạn!
                            </font>
                        </div>
                    </div>
                </div>

                <div className="grid__column-6">
                    <div className="infor-container">
                        <p className="title">Thông tin khách hàng</p>
                        <form id="customer-infor-form" name="form" autoComplete="on" onSubmit={formik.handleSubmit}>
                            <fieldset className="field-set-form">
                                <p className="input-title">Họ tên</p>
                                <input
                                    id="name"
                                    name="name"
                                    autoComplete="name"
                                    type="text"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Họ tên"
                                    className="input full"
                                />
                                {formik.errors.name && formik.touched.name && (
                                    <span className="form-message">{formik.errors.name}</span>
                                )}
                                <p className="input-title">Số điện thoại</p>
                                <input
                                    id="phone"
                                    name="phone"
                                    autoComplete="phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    type="text"
                                    placeholder="Số điện thoại"
                                    className="input full"
                                />
                                {formik.errors.phone && formik.touched.phone && (
                                    <span className="form-message">{formik.errors.phone}</span>
                                )}
                                <p className="input-title">Email</p>
                                <input
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    type="email"
                                    placeholder="Email"
                                    className="input full"
                                />
                                {formik.errors.email && formik.touched.email && (
                                    <span className="form-message">{formik.errors.email}</span>
                                )}
                                <p className="input-title">Thành phố</p>
                                <input
                                    id="city"
                                    name="city"
                                    autoComplete="city"
                                    value={formik.values.city}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    type="text"
                                    placeholder="Thành phố"
                                    className="input full"
                                />
                                {formik.errors.city && formik.touched.city && (
                                    <span className="form-message">{formik.errors.city}</span>
                                )}
                            </fieldset>
                            <div className="customer-infor-right-btn">
                                <button className="customer-infor-next-btn" type="submit">
                                    <font style={{ verticalAlign: 'inherit', fontSize: '20px' }}>Next</font>
                                    <i className="bx bx-chevron-right"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="customer-infor-left-btn">
                        <button className="customer-infor-back-btn" onClick={() => navigate(-1)}>
                            <i className="bx bx-chevron-left"></i>
                            <font style={{ verticalAlign: 'inherit', fontSize: '20px' }}>Back</font>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerInforChild;
