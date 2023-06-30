import React from 'react';
import '~/components/CategoryStatistic/style.css';

const CategoryStatistic = () => {
    return (
        <div className="category-statistic">
            <div className="grid container">
                <h2 className="statistic-heading">Platform connects users and bus operators</h2>
                <ul className="statistic-list">
                    <li className="statistic-item">
                        <i className="statistic-item__icon bx bxs-user-check"></i>
                        <div className="statistic-item__header">
                            <h3 className="statistic-item__heading">Hơn 20.000.000 hành khách</h3>
                            <p className="statistic-item__description">
                                Thực hiện phương châm “Chất lượng là Danh dự”, Bus Line đang phục vụ hơn 20 triệu lượt
                                hành khách mỗi năm thông qua 250 văn phòng tại 39/63 tỉnh thành Việt Nam với 60 tuyến
                                liên tỉnh và hơn 2.000 xe các loại.
                            </p>
                        </div>
                    </li>
                    <li className="statistic-item">
                        <i className="statistic-item__icon bx bxs-gas-pump"></i>
                        <div className="statistic-item__header">
                            <h3 className="statistic-item__heading">Hơn 250 xe khách đưa đón</h3>
                            <p className="statistic-item__description">
                                BusLine có hơn 250 chiếc xe khách nhằm phục vụ cho nhu cầu của khách hàng.
                            </p>
                        </div>
                    </li>
                    <li className="statistic-item">
                        <i className="statistic-item__icon bx bxs-bus"></i>
                        <div className="statistic-item__header">
                            <h3 className="statistic-item__heading">Hơn 100 chuyến mỗi ngày</h3>
                            <p className="statistic-item__description">BusLine phục vụ hơn 100 chuyến mỗi ngày.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CategoryStatistic;
