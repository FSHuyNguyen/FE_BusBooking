import React from 'react';

const CategoryStatistic = () => {
    return (
        <div className="category-statistic">
            <div className="grid">
                <h2 className="statistic-heading">Platform connects users and bus operators</h2>
                <ul className="statistic-list">
                    <li className="statistic-item">
                        <i className="statistic-item__icon bx bxs-user-check"></i>
                        <div className="statistic-item__header">
                            <h3 className="statistic-item__heading">Personalized search</h3>
                            <p className="statistic-item__description">
                                5000+ routes, 2000+ Bus Operators, and 5000+ Agencies across the country. Helps you
                                quickly choose a favorite bus according to your needs.
                            </p>
                        </div>
                    </li>
                    <li className="statistic-item">
                        <i className="statistic-item__icon bx bxs-hand-up"></i>
                        <div className="statistic-item__header">
                            <h3 className="statistic-item__heading">Easy book</h3>
                            <p className="statistic-item__description">
                                Only taking over 60s to book. VeXeRe accepts a variety of payment options
                            </p>
                        </div>
                    </li>
                    <li className="statistic-item">
                        <i className="statistic-item__icon bx bxs-calendar-check"></i>
                        <div className="statistic-item__header">
                            <h3 className="statistic-item__heading">Guaranteed ticket</h3>
                            <p className="statistic-item__description">
                                We commit a 150% refund if not keeping your tickets. Keep your mind on a happy journey.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CategoryStatistic;
