"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SocialMedia =
/*#__PURE__*/
function (_Component) {
  _inherits(SocialMedia, _Component);

  function SocialMedia(props) {
    var _this;

    _classCallCheck(this, SocialMedia);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SocialMedia).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "fetchMetadata", function (url) {
      if (url === '') return;

      _axios["default"].post('http://13.112.111.78:3001/ogbot', {
        url: url,
        json: 0
      }).then(function (data) {
        var meta = data.data.meta[0];

        _this.setState({
          image: meta.image,
          ogTitle: meta.title,
          hostName: meta.host_name
        });
      })["catch"](function (error) {
        console.log(error);
      });
    });

    _this.state = {
      image: '',
      ogTitle: '',
      hostName: '',
      error: false
    };
    return _this;
  }

  _createClass(SocialMedia, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          direction = _this$props.direction,
          url = _this$props.url,
          title = _this$props.title;
      var _this$state = this.state,
          image = _this$state.image,
          ogTitle = _this$state.ogTitle,
          hostName = _this$state.hostName,
          error = _this$state.error;
      if (error) return null;
      return _react["default"].createElement("div", {
        className: "social-media"
      }, _react["default"].createElement("div", {
        className: "social-media--".concat(direction)
      }, _react["default"].createElement("img", {
        alt: "",
        src: image
      }), _react["default"].createElement("div", {
        className: "info"
      }, _react["default"].createElement("div", {
        className: "info__title"
      }, title === '' ? ogTitle : title), _react["default"].createElement("div", {
        className: "info__host-name"
      }, hostName))), _react["default"].createElement("div", {
        className: "social-media__delete-btn"
      }, "x"));
    }
  }]);

  return SocialMedia;
}(_react.Component);

exports["default"] = SocialMedia;
SocialMedia.propTypes = {
  direction: _propTypes["default"].string,
  url: _propTypes["default"].string,
  title: _propTypes["default"].string
};
SocialMedia.defaultProps = {
  direction: 'horizontal',
  url: '',
  title: ''
};
