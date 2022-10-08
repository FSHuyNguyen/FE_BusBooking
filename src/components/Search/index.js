import React, { useRef, useState } from 'react';
import images from '~/assets/img';
import DatePicker from 'react-date-picker';
import HandlessTippy from '@tippyjs/react/headless';

const Search = () => {
    const dateRef = useRef(null);
    const [dateFrom, setDateFrom] = useState(new Date());
    const [dateTo, setDateTo] = useState(new Date());
    const [showResult, setShowResult] = useState(false);
    return (
        <div className="search__middle">
            <div className="grid__row">
                <div className="grid__column-5 grid__column-md-12 search__group">
                    <HandlessTippy
                        visible={showResult}
                        interactive
                        render={(attrs) => (
                            <div className="box" tabIndex="-1" {...attrs}>
                                My tippy box
                            </div>
                        )}
                        onClickOutside={() => setShowResult(false)}
                    >
                        <div className="search__input">
                            <label className="search__input__label" htmlFor="">
                                Từ
                            </label>
                            <input
                                id="inputFrom"
                                className="search-input__field"
                                type="input"
                                placeholder="Từ nơi nào đến?"
                                value=""
                                onChange={(e) => e.preventDefault()}
                                onFocus={() => setShowResult(true)}
                            />
                            {/* <div className="search-input__hint search-input__hint--hidden" id="hintDepflight">
                            <div className="search-input__hint-airpost">
                                <h4>Sân bay nội địa</h4>
                                <div className="grid__row search-input__hint-list">
                                    <div className="grid__column-2-4">
                                        <h4 className="search-input__hint-area">Miền Bắc</h4>
                                        <ul>
                                            <li className="search-input__hint-place">Hà Nội (HAN)</li>
                                            <li className="search-input__hint-place">Hải Phòng (HPH)</li>
                                            <li className="search-input__hint-place">Thanh Hóa (THD)</li>
                                        </ul>
                                    </div>
                                    <div className="grid__column-2-4">
                                        <h4 className="search-input__hint-area">Miền Trung</h4>
                                        <ul>
                                            <li className="search-input__hint-place">Hà nội</li>
                                            <li className="search-input__hint-place">Hà nội</li>
                                            <li className="search-input__hint-place">Hà nội</li>
                                        </ul>
                                    </div>
                                    <div className="grid__column-2-4">
                                        <h4 className="search-input__hint-area">Miền Nam</h4>
                                        <ul>
                                            <li className="search-input__hint-place">Hà nội</li>
                                            <li className="search-input__hint-place">Hà nội</li>
                                            <li className="search-input__hint-place">Hà nội</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        </div>
                    </HandlessTippy>
                    <img className="search__double-arrow" id="double-arrow" src={images.doubleArrowV2} alt="" />
                    <div className="search__input">
                        <label className="search__input__label" htmlFor="">
                            Đến
                        </label>
                        <input
                            id="inputTo"
                            className="search-input__field"
                            type="input"
                            placeholder="Đến nơi nào?"
                            value=""
                            onChange={(e) => e.preventDefault()}
                        />
                        <div className="search-input__hint search-input__hint--hidden" id="hintArrflight">
                            <div className="search-input__hint-airpost">
                                <h4>Sân bay nội địa</h4>
                                <div className="grid__row search-input__hint-list">
                                    <div className="grid__column-2-4">
                                        <h4 className="search-input__hint-area">Miền Bắc</h4>
                                        <ul>
                                            <li className="search-input__hint-place">Hà Nội (HAN)</li>
                                            <li className="search-input__hint-place">Hải Phòng (HPH)</li>
                                            <li className="search-input__hint-place">Thanh Hóa (THD)</li>
                                        </ul>
                                    </div>
                                    <div className="grid__column-2-4">
                                        <h4 className="search-input__hint-area">Miền Trung</h4>
                                        <ul>
                                            <li className="search-input__hint-place">Hà nội</li>
                                            <li className="search-input__hint-place">Hà nội</li>
                                            <li className="search-input__hint-place">Hà nội</li>
                                        </ul>
                                    </div>
                                    <div className="grid__column-2-4">
                                        <h4 className="search-input__hint-area">Miền Nam</h4>
                                        <ul>
                                            <li className="search-input__hint-place">Hà nội</li>
                                            <li className="search-input__hint-place">Hà nội</li>
                                            <li className="search-input__hint-place">Hà nội</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid__column-4 grid__column-md-12 search__group">
                    <div className="search__input ">
                        <label className="search__input__label" htmlFor="">
                            Ngày đi
                        </label>
                        <DatePicker
                            className="search-date__field search__input_form search-input__field"
                            minDate={new Date()}
                            inputRef={dateRef}
                            onChange={setDateFrom}
                            clearIcon={false}
                            calendarIcon={false}
                            value={dateFrom}
                            showLeadingZeros={true}
                        />
                    </div>
                    <div className="search__input ">
                        <label className="search__input__label search__input__label-to" htmlFor="">
                            Ngày về
                        </label>
                        <DatePicker
                            className="search-date__field search__input_form search-input__field"
                            minDate={new Date()}
                            inputRef={dateRef}
                            onChange={setDateTo}
                            clearIcon={false}
                            calendarIcon={false}
                            value={dateTo}
                            showLeadingZeros={true}
                        />
                    </div>
                </div>

                <div className="grid__column-3 grid__column-md-12 search__group">
                    <div className="search__input">
                        <label className="search__input__label" htmlFor="">
                            Số khách
                        </label>
                        <div className="search__input__qty">
                            <input
                                className="search__field"
                                type="input"
                                placeholder="Đi cùng với ai?"
                                value=""
                                onChange={(e) => e.preventDefault()}
                            />
                            <button className="btn btn--primary btn-search">
                                <i className="bx bx-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
