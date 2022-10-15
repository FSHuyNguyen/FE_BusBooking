import '~/components/Search/style.css';
import React, { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-date-picker';
import HandlessTippy from '@tippyjs/react/headless';
import Button from '~/components/Button';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Image from '../Image';
import axios from 'axios';

const Search = () => {
    const dateRef = useRef(null);
    const [dateFrom, setDateFrom] = useState(new Date());
    const [dateTo, setDateTo] = useState(new Date());
    const [showResultFrom, setShowResultFrom] = useState(false);
    const [showResultTo, setShowResultTo] = useState(false);
    const [inputFrom, setInputFrom] = useState('');
    const [inputTo, setInputTo] = useState('');
    const rotateRef = useRef(null);
    const navigate = useNavigate();

    const [dataSearch, setDataSearch] = useState([]);
    useEffect(() => {
        const fetchApiDeal = async () => {
            const res = await axios.get(process.env.REACT_APP_BASE_URL + '/station');
            setDataSearch(res.data.station);
        };
        fetchApiDeal();
    }, []);

    const [roundTrip, setRoundTrip] = useState(false);

    const handleChooseFrom = (value) => {
        setInputFrom(value);
    };

    const handleChooseTo = (value) => {
        setInputTo(value);
    };

    const handleRoundTrip = () => {
        setRoundTrip((state) => !state);
    };

    const handleChangeRoundTrip = () => {
        if (!inputFrom || !inputTo) return;
        rotateRef.current.classList.toggle('rotate');
        setInputFrom(inputTo);
        setInputTo(inputFrom);
    };

    const handleSubmit = () => {
        inputFrom && inputTo
            ? navigate('/search')
            : Notify.warning('Vui lòng nhập điểm đi và điểm đến!', {
                  zindex: `999999`,
                  useIcon: false,
                  cssAnimationStyle: 'from-right',
                  cssAnimationDuration: 600,
                  distance: '30px',
                  showOnlyTheLastOne: true,
                  clickToClose: true,
                  fontSize: '16px',
              });
    };

    return (
        <div className="search__middle">
            <div className="roundtrip-checkbox-container">
                <input
                    id="one-way"
                    type="radio"
                    onClick={handleRoundTrip}
                    className={`${!roundTrip ? 'checked' : ''}`}
                />
                <label htmlFor="one-way" className="one-way-label">
                    Một chiều
                </label>
                <input
                    id="round-trip"
                    type="radio"
                    onClick={handleRoundTrip}
                    className={`${roundTrip ? 'checked' : ''}`}
                />
                <label htmlFor="round-trip" className="round-trip-label">
                    Khứ Hồi
                </label>
            </div>
            <div className="select__box-search">
                <div className="search__group">
                    <div className="">
                        <HandlessTippy
                            visible={showResultFrom}
                            interactive
                            placement="bottom-start"
                            zIndex="9999999"
                            render={(attrs) => (
                                <div className="data_list_search-from" tabIndex={'-1'} {...attrs}>
                                    <ul className="place-list">
                                        {dataSearch &&
                                            dataSearch.map(
                                                (item) =>
                                                    item.point !== inputTo && (
                                                        <li className="place-list-item" key={item.id}>
                                                            <button
                                                                onClick={() => handleChooseFrom(item.point)}
                                                                className="list-item-from"
                                                            >
                                                                {item.point}
                                                            </button>
                                                        </li>
                                                    ),
                                            )}
                                    </ul>
                                </div>
                            )}
                            onClickOutside={() => setShowResultFrom(false)}
                        >
                            <div className="search__input">
                                <label className="search__input__label" htmlFor="">
                                    Từ
                                </label>
                                <input
                                    id="inputFrom"
                                    className="search-input__field"
                                    type="input"
                                    placeholder="Từ nơi nào đến"
                                    value={inputFrom}
                                    onChange={(e) => handleChooseFrom(e.target.value)}
                                    onFocus={() => setShowResultFrom(true)}
                                />
                            </div>
                        </HandlessTippy>
                    </div>
                    <Image
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACTUExURf///+9RHN7k6Pj5+t3j6Pz9/f///97i6Obp7eLm6t7k597i6Ort8Ovr6/v8/P7+/vr7/N3p6e3v8fP19+Pj6uzv8d7j597j5/f4+d7j5+Hl6t3j6N7j6N/j6PSGY+rt7+Tk5PBWI/BTH/epkfiqkvirk/iwmviynP3p4t/j6d3i6P3p4/BVIvBXJP3n4PeokEdwTMlG7ekAAAAxdFJOU///f//z/wGq//5S6P8M////Fv//I/9y2f+l/7/Tgv//Cf//////////g/L//////wDIpbVhAAABPklEQVQ4y5WV15qDIBCFR8Dee09i6ibbfP+nW7L7xYyuKDlXlF8HhuEA/UhJVtY5Y3ldZsl4BlA7bJsqjYvA94MiTqumDWdBl7CIAhKNGHH/g5bteDCR59jWBNSISWFG1CQaBne6ocKsVEPfPUFN34JQW10bQGLAggzyAC1TXQJV0/oDXZvCoqjt/oLEgRU55A6GzFsDPRZy8BrBqqKWg41ghe94lU0PSSX4y+cBdaoEslQAfiiITDMo4ymxUR46D2NxCXUhBi/DWFFDHghC75XTsxPkwHw8+/Zsdkc07jO4YfDYzX7Dwdso9EnZC9bBQ6PNXIZdbKYg3wxKz1kM8vTghB+EoXnCR0f43QlAfoTjovgSlC4vir6VLTPpwpW+CvKXS/q6yhuAvKVIm5S87ckb6QvWfDf7q5TZrzwfP7TlSKhNtCqwAAAAAElFTkSuQmCC"
                        className="change-img center"
                        onClick={handleChangeRoundTrip}
                        alt="change"
                        ref={rotateRef}
                    ></Image>
                    <div className="">
                        <HandlessTippy
                            visible={showResultTo}
                            interactive
                            placement="bottom-start"
                            zIndex="9999999"
                            offset={[-238, 10]}
                            render={(attrs) =>
                                inputFrom ? (
                                    <div className="data_list_search-to" tabIndex={'-1'} {...attrs}>
                                        <ul className="place-list">
                                            {dataSearch &&
                                                dataSearch.map(
                                                    (data) =>
                                                        data.point !== inputFrom && (
                                                            <li className="place-list-item" key={data.id}>
                                                                <button
                                                                    onClick={() => handleChooseTo(data.point)}
                                                                    className="list-item-to"
                                                                >
                                                                    {data.point}
                                                                </button>
                                                            </li>
                                                        ),
                                                )}
                                        </ul>
                                    </div>
                                ) : (
                                    <div className="data_list_select right">
                                        <ul className="place-list">
                                            <li className="place-list-item">
                                                <div className="please-select">Vui lòng chọn điểm đi trước</div>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            }
                            onClickOutside={() => setShowResultTo(false)}
                        >
                            <div className="search__input">
                                <label className="search__input__label" htmlFor="">
                                    Đến
                                </label>
                                <input
                                    id="inputTo"
                                    className="search-input__field"
                                    type="input"
                                    placeholder="Đến nơi nào"
                                    value={inputTo}
                                    onChange={(e) => handleChooseTo(e.target.value)}
                                    onFocus={() => setShowResultTo(true)}
                                />
                            </div>
                        </HandlessTippy>
                    </div>
                </div>

                <div className="search__group__date">
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
                    <div className="search__input">
                        <label
                            className="search__input__label search__input__label-to search__title--disabled"
                            htmlFor=""
                        >
                            Ngày về
                        </label>
                        <DatePicker
                            className={`search-date__field search__input_form search-input__field ${
                                !roundTrip ? 'search__input--disabled' : ''
                            }`}
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
                <Button onClick={handleSubmit} buttonStyle={'search-btn'}>
                    <i className="bx bx-search"></i>TÌM NGAY
                </Button>
            </div>
        </div>
    );
};

export default Search;
