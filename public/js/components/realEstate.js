webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Filter = function (_Component) {
    _inherits(Filter, _Component);

    function Filter() {
        _classCallCheck(this, Filter);

        var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

        _this.state = {
            name: 'Chasity'
        };
        _this.cities = _this.cities.bind(_this);
        _this.homeTypes = _this.homeTypes.bind(_this);
        _this.bedrooms = _this.bedrooms.bind(_this);
        return _this;
    }

    _createClass(Filter, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.populateAction();
        }
    }, {
        key: 'cities',
        value: function cities() {
            if (this.props.globalState.populateFormsData.cities != undefined) {
                var cities = this.props.globalState.populateFormsData.cities;


                console.log(cities);
                return cities.map(function (item) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'option',
                        { key: item, value: item },
                        item
                    );
                });
            }
        }
    }, {
        key: 'homeTypes',
        value: function homeTypes() {
            if (this.props.globalState.populateFormsData.homeTypes != undefined) {
                var homeTypes = this.props.globalState.populateFormsData.homeTypes;


                return homeTypes.map(function (item) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'option',
                        { key: item, value: item },
                        item
                    );
                });
            }
        }
    }, {
        key: 'bedrooms',
        value: function bedrooms() {
            if (this.props.globalState.populateFormsData.bedrooms != undefined) {
                var bedrooms = this.props.globalState.populateFormsData.bedrooms;


                return bedrooms.map(function (item) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'option',
                        { key: item, value: item },
                        item,
                        '+ BR'
                    );
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'section',
                { id: 'filter' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'inside' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h4',
                        null,
                        'Filter'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'label',
                        { htmlFor: 'city' },
                        'City'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'select',
                        { name: 'city', className: 'filters city', onChange: this.props.change },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'option',
                            { value: 'All' },
                            'All'
                        ),
                        this.cities()
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'label',
                        { htmlFor: 'homeType' },
                        'Home Type'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'select',
                        { name: 'homeType', className: 'filters homeType', onChange: this.props.change },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'option',
                            { value: 'All' },
                            'All homes'
                        ),
                        this.homeTypes()
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'label',
                        { htmlFor: 'bedrooms' },
                        'Bedrooms'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'select',
                        { name: 'bedrooms', className: 'filters bedrooms', onChange: this.props.change },
                        this.bedrooms()
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'filters price' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { className: 'title' },
                            'Price'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'min_price', className: 'min-price', onChange: this.props.change, value: this.props.globalState.min_price }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'max_price', className: 'max-price', onChange: this.props.change, value: this.props.globalState.max_price })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'filters floor-space' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { className: 'title' },
                            'Square Feet'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'min_floor_space', className: 'min-floor-space', onChange: this.props.change, value: this.props.globalState.min_floor_space }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'max_floor_space', className: 'max-floor-space', onChange: this.props.change, value: this.props.globalState.max_floor_space })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'more-filters' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { className: 'title more-title' },
                            'More'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'filters more' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'label',
                                { htmlFor: 'more' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    null,
                                    'Elevators'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'elevator', value: 'elevator', type: 'checkbox', onChange: this.props.change })
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'label',
                                { htmlFor: 'more' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    null,
                                    'Swimming Pool'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'swimming_pool', value: 'swimming_pool', type: 'checkbox', onChange: this.props.change })
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'label',
                                { htmlFor: 'more' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    null,
                                    'Finished Basement'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'finished_basement', value: 'finished basement', type: 'checkbox', onChange: this.props.change })
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'label',
                                { htmlFor: 'more' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    null,
                                    'Gym'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'gym', value: 'gym', type: 'checkbox', onChange: this.props.change })
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'label',
                                { htmlFor: 'more' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    null,
                                    'Fireplace'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'fireplace', value: 'fireplace', type: 'checkbox', onChange: this.props.change })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Filter;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Filter);

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__realEstate__ = __webpack_require__(63);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

        _this.state = {
            name: 'Chasity'
        };
        return _this;
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'header',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'logo' },
                    'AtlantaLux Real Estate'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'nav',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'a',
                        { href: '#' },
                        'Advertise'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'a',
                        { href: '/about' },
                        'About Us'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'a',
                        { href: '#' },
                        'Log In'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'a',
                        { href: '#', className: 'register-btn' },
                        'Register'
                    )
                )
            );
        }
    }]);

    return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Listings = function (_Component) {
    _inherits(Listings, _Component);

    function Listings() {
        _classCallCheck(this, Listings);

        var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

        _this.state = {
            name: 'chasity'
        };
        _this.loopListings = _this.loopListings.bind(_this);
        return _this;
    }

    _createClass(Listings, [{
        key: 'loopListings',
        value: function loopListings() {
            var _this2 = this;

            var listingsData = this.props.listingsData;


            if (listingsData == undefined || listingsData.length == 0) {
                return "Sorry your filter did not match any listing.";
            }

            return listingsData.map(function (listing, index) {
                if (_this2.props.globalState.view == 'box') {

                    //THIS IS THE BOX VIEW  
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-md-3', key: index },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'listing' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    { className: 'address' },
                                    listing.address
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'details' },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'col-md-3' },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'user-img' })
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'col-md-9' },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'user-details' },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'span',
                                                { className: 'user-name' },
                                                'Nina Simone'
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'span',
                                                { className: 'post-date' },
                                                '07/31/2018'
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'listing-details' },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'div',
                                                { className: 'floor-space' },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'far fa-square' }),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'span',
                                                    null,
                                                    listing.floorSpace,
                                                    ' ft\xB2'
                                                )
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'div',
                                                { className: 'bedrooms' },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fas fa-bed' }),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'span',
                                                    null,
                                                    listing.rooms,
                                                    ' bedrooms'
                                                )
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'view-btn' },
                                            'View Listing'
                                        )
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'bottom-info' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    { className: 'price' },
                                    listing.price
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    { className: 'location' },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fas fa-map-marker-alt' }),
                                    listing.city,
                                    ', ',
                                    listing.state
                                )
                            )
                        )
                    );

                    //End of if statement
                } else {

                    //THIS IS THE LONG VIEW 
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-md-12 col-lg-6', key: index },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'listing' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    { className: 'address' },
                                    listing.address
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'details' },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'col-md-3' },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'user-img' })
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'col-md-9' },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'user-details' },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'span',
                                                { className: 'user-name' },
                                                'Nina Simone'
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'span',
                                                { className: 'post-date' },
                                                '07/31/2018'
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'listing-details' },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'div',
                                                { className: 'floor-space' },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'far fa-square' }),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'span',
                                                    null,
                                                    listing.floorSpace,
                                                    ' ft\xB2'
                                                )
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'div',
                                                { className: 'bedrooms' },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fas fa-bed' }),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'span',
                                                    null,
                                                    listing.rooms,
                                                    ' bedrooms'
                                                )
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'view-btn' },
                                            'View Listing'
                                        )
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'bottom-info' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    { className: 'price' },
                                    listing.price
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    { className: 'location' },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fas fa-map-marker-alt' }),
                                    listing.city,
                                    ', ',
                                    listing.state
                                )
                            )
                        )
                    );
                }

                //End of if and else statement for  both views
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'section',
                { id: 'listings' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    { className: 'search-area' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'search', onChange: this.props.change })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    { className: 'sortby-area' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'results' },
                        this.props.globalState.filteredData.length,
                        ' results found'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'sort-options' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'select',
                            { name: 'sortby', className: 'sortby', onChange: this.props.change },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'option',
                                { value: 'price-asc' },
                                'Lowest Price'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'option',
                                { value: 'price-asc' },
                                'Highest Price'
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'view' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fas fa-list', onClick: this.props.changeView.bind(null, "long") }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fas fa-th', onClick: this.props.changeView.bind(null, "box") })
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    { className: 'listings-results' },
                    this.loopListings()
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    { id: 'pagination' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'ul',
                        { className: 'pages' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'li',
                            null,
                            'Prev'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'li',
                            { className: 'active' },
                            '1'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'li',
                            null,
                            '2'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'li',
                            null,
                            '3'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'li',
                            null,
                            '4'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'li',
                            null,
                            '5'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'li',
                            null,
                            'Next'
                        )
                    )
                )
            );
        }
    }]);

    return Listings;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Listings);

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var listingsData = [{
    address: '5 Peachtree St',
    city: 'Atlanta',
    state: 'GA',
    rooms: '4',
    price: '520000',
    floorSpace: '2200',
    more: ['gym', 'fireplace'],
    homeType: 'Condo',
    image: 'http://www.petrealtynetwork.com/wp-content/uploads/2017/11/werwerewrwer.jpg'
}, {
    address: '7413 Piedmont Ave',
    city: 'Duluth',
    state: 'GA',
    rooms: '6',
    price: '252000',
    floorSpace: '3200',
    more: ['elevator', 'swimming pool'],
    homeType: 'Mansion',
    image: 'https://i.pinimg.com/originals/49/b7/10/49b71020328e0ce6f17cd87cb3ac4f4a.jpg'
}, {
    address: '9008 Moreland Ave',
    city: 'Sandy Springs',
    state: 'GA',
    rooms: '2',
    price: '820000',
    floorSpace: '1200',
    more: ['fireplace', 'finished basement'],
    homeType: 'Bungalow',
    image: 'https://i.pinimg.com/originals/40/92/05/409205fb368715747947816deb3f3c77.jpg'
}, {
    address: '235 Roswell Road',
    city: 'Sandy Springs',
    state: 'GA',
    rooms: '4',
    price: '520000',
    floorSpace: '2600',
    more: ['swimming pool', 'gym'],
    homeType: 'Ranch',
    image: 'https://1.bp.blogspot.com/-NI8WWnABLSc/UzGQD9c0tGI/AAAAAAAALDE/LY2iBuSBibk/s1600/Stan+Dixon+painted+brick+relaxed+khaki.jpg'
}, {
    address: '5842 W Wesley Road',
    city: 'Roswell',
    state: 'GA',
    rooms: '9',
    price: '420000',
    floorSpace: '3650',
    more: ['elevator', 'gym'],
    homeType: 'Mansion',
    image: 'https://i.pinimg.com/originals/07/66/89/0766890adf04deeed1b3bced820ec279.jpg'
}, {
    address: '100 Druid Hills Road',
    city: 'Atlanta',
    state: 'GA',
    rooms: '3',
    price: '670000',
    floorSpace: '1100',
    more: ['finished basement', 'gym'],
    homeType: 'Bungalow',
    image: 'http://luxport.s3.amazonaws.com/8574/50%2BAvery%2BDrive%2BNe%2BAtlanta%2BGA%2BUSA%2B574257_001_S.jpg'
}, {
    address: '2000 Peachtree Road',
    city: 'Roswell',
    state: 'GA',
    rooms: '4',
    price: '520000',
    floorSpace: '2200',
    more: ['swimming pool', 'fireplace'],
    homeType: 'Condo',
    image: 'https://www.allatlantacondos.com/wp-content/uploads/2016/05/DSC_0085-690x460.jpg'
}, {
    address: '2905 Peachtree Battle Road',
    city: 'Duluth',
    state: 'GA',
    rooms: '5',
    price: '350000',
    floorSpace: '2200',
    more: ['elevator', 'finished basement'],
    homeType: 'Condo',
    image: 'https://i.pinimg.com/736x/d0/9a/79/d09a7905192a40d24ee28a45ebc0a180--atlanta-apartments-atlanta-condo.jpg'
}];

/* harmony default export */ __webpack_exports__["a"] = (listingsData);

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header_js__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Filter_js__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Listings_js__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_listingsData_js__ = __webpack_require__(110);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            name: 'chat',
            listingsData: __WEBPACK_IMPORTED_MODULE_6__data_listingsData_js__["a" /* default */],
            city: 'All',
            homeType: 'All',
            bedrooms: '0',
            min_price: 0,
            max_price: 1000000,
            min_floor_space: 0,
            max_floor_space: 10000,
            elevator: false,
            finished_basement: false,
            gym: false,
            swimming_pool: false,
            fireplace: false,
            filteredData: __WEBPACK_IMPORTED_MODULE_6__data_listingsData_js__["a" /* default */],
            sortby: 'price-dsc',
            populateFormsData: '',
            view: 'box',
            search: ''
        };

        _this.change = _this.change.bind(_this);
        _this.filteredData = _this.filteredData.bind(_this);
        _this.populateForms = _this.populateForms.bind(_this);
        _this.changeView = _this.changeView.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var listingsData = this.state.listingsData.sort(function (a, b) {
                return a.price - b.price;
            });

            this.setState({
                listingsData: listingsData
            });
        }
    }, {
        key: 'change',
        value: function change(event) {
            var _this2 = this;

            var name = event.target.name;
            var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

            this.setState(_defineProperty({}, name, value), function () {
                console.log(_this2.state);
                _this2.filteredData();
            });
        }
    }, {
        key: 'changeView',
        value: function changeView(viewName) {
            this.setState({
                view: viewName
            });
        }
    }, {
        key: 'filteredData',
        value: function filteredData() {
            var _this3 = this;

            var newData = this.state.listingsData.filter(function (item) {
                return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space && item.rooms >= _this3.state.bedrooms;
            });

            if (this.state.city != "All") {
                newData = newData.filter(function (item) {
                    return item.city == _this3.state.city;
                });
            }

            //Elevator
            if (this.state.elevator != false) {
                newData = newData.filter(function (item) {
                    return item.elevator == _this3.state.elevator;
                });
            }

            console.log(this.state.elevator);

            if (this.state.homeType != "All") {
                newData = newData.filter(function (item) {
                    return item.homeType == _this3.state.homeType;
                });
            }

            if (this.state.sortby == 'price-dsc') {
                newData = newData.sort(function (a, b) {
                    return a.price - b.price;
                });
            }

            if (this.state.sortby == 'price-asc') {
                newData = newData.sort(function (a, b) {
                    return b.price - a.price;
                });
            }

            if (this.state.search != '') {
                newData = newData.filter(function (item) {
                    var city = item.city.toLowerCase();
                    var searchText = _this3.state.search.toLowerCase();
                    var n = city.match(searchText);

                    if (n != null) {
                        return true;
                    }
                });
            }

            this.setState({
                filteredData: newData
            });
        }
    }, {
        key: 'populateForms',
        value: function populateForms() {
            //City
            var cities = this.state.listingsData.map(function (item) {
                return item.city;
            });

            cities = new Set(cities);
            cities = [].concat(_toConsumableArray(cities));

            cities = cities.sort();

            //homeType
            var homeTypes = this.state.listingsData.map(function (item) {
                return item.homeType;
            });

            homeTypes = new Set(homeTypes);
            homeTypes = [].concat(_toConsumableArray(homeTypes));

            homeTypes = homeTypes.sort();

            //Bedrooms
            var bedrooms = this.state.listingsData.map(function (item) {
                return item.rooms;
            });

            bedrooms = new Set(bedrooms);
            bedrooms = [].concat(_toConsumableArray(bedrooms));

            bedrooms = bedrooms.sort();

            //Elavator
            var elevator = this.state.listingsData.filter(function (item) {
                return item.more.includes('elevator');
            });

            elevator = new Set(elevator);
            elevator = [].concat(_toConsumableArray(elevator));

            elevator = elevator.sort();

            this.setState({
                populateFormsData: {
                    homeTypes: homeTypes,
                    bedrooms: bedrooms,
                    cities: cities,
                    elevator: elevator
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header_js__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    { id: 'content-area' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Filter_js__["a" /* default */], { change: this.change, globalState: this.state, populateAction: this.populateForms }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Listings_js__["a" /* default */], { listingsData: this.state.filteredData, change: this.change, globalState: this.state, changeView: this.changeView })
                )
            );
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var app = document.getElementById('app');

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(App, null), app);

/***/ })

},[63]);