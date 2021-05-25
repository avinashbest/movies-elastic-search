"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ErrorBoundaryContainer = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _ = require("..");

var _reactSearchUiViews = require("@elastic/react-search-ui-views");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ErrorBoundaryContainer = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ErrorBoundaryContainer, _Component);

  var _super = _createSuper(ErrorBoundaryContainer);

  function ErrorBoundaryContainer() {
    (0, _classCallCheck2.default)(this, ErrorBoundaryContainer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ErrorBoundaryContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          error = _this$props.error,
          view = _this$props.view,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className", "error", "view"]);
      var View = view || _reactSearchUiViews.ErrorBoundary;
      return View(_objectSpread({
        className: className,
        children: children,
        error: error
      }, rest));
    }
  }]);
  return ErrorBoundaryContainer;
}(_react.Component);

exports.ErrorBoundaryContainer = ErrorBoundaryContainer;
(0, _defineProperty2.default)(ErrorBoundaryContainer, "propTypes", {
  // Props
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  view: _propTypes.default.func,
  // State
  error: _propTypes.default.string.isRequired
});

var _default = (0, _.withSearch)(function (_ref) {
  var error = _ref.error;
  return {
    error: error
  };
})(ErrorBoundaryContainer);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250YWluZXJzL0Vycm9yQm91bmRhcnkuanMiXSwibmFtZXMiOlsiRXJyb3JCb3VuZGFyeUNvbnRhaW5lciIsInByb3BzIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJlcnJvciIsInZpZXciLCJyZXN0IiwiVmlldyIsIkVycm9yQm91bmRhcnkiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFYUEsc0I7Ozs7Ozs7Ozs7OztXQVVYLGtCQUFTO0FBQUEsd0JBQytDLEtBQUtDLEtBRHBEO0FBQUEsVUFDQ0MsUUFERCxlQUNDQSxRQUREO0FBQUEsVUFDV0MsU0FEWCxlQUNXQSxTQURYO0FBQUEsVUFDc0JDLEtBRHRCLGVBQ3NCQSxLQUR0QjtBQUFBLFVBQzZCQyxJQUQ3QixlQUM2QkEsSUFEN0I7QUFBQSxVQUNzQ0MsSUFEdEM7QUFHUCxVQUFNQyxJQUFJLEdBQUdGLElBQUksSUFBSUcsaUNBQXJCO0FBRUEsYUFBT0QsSUFBSTtBQUNUSixRQUFBQSxTQUFTLEVBQVRBLFNBRFM7QUFFVEQsUUFBQUEsUUFBUSxFQUFSQSxRQUZTO0FBR1RFLFFBQUFBLEtBQUssRUFBTEE7QUFIUyxTQUlORSxJQUpNLEVBQVg7QUFNRDs7O0VBckJ5Q0csZ0I7Ozs4QkFBL0JULHNCLGVBQ1E7QUFDakI7QUFDQUUsRUFBQUEsUUFBUSxFQUFFUSxtQkFBVUMsSUFBVixDQUFlQyxVQUZSO0FBR2pCVCxFQUFBQSxTQUFTLEVBQUVPLG1CQUFVRyxNQUhKO0FBSWpCUixFQUFBQSxJQUFJLEVBQUVLLG1CQUFVSSxJQUpDO0FBS2pCO0FBQ0FWLEVBQUFBLEtBQUssRUFBRU0sbUJBQVVHLE1BQVYsQ0FBaUJEO0FBTlAsQzs7ZUF1Qk4sa0JBQVc7QUFBQSxNQUFHUixLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUFFQSxJQUFBQSxLQUFLLEVBQUxBO0FBQUYsR0FBaEI7QUFBQSxDQUFYLEVBQXVDSixzQkFBdkMsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aFNlYXJjaCB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgRXJyb3JCb3VuZGFyeSB9IGZyb20gXCJAZWxhc3RpYy9yZWFjdC1zZWFyY2gtdWktdmlld3NcIjtcblxuZXhwb3J0IGNsYXNzIEVycm9yQm91bmRhcnlDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8vIFByb3BzXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZpZXc6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8vIFN0YXRlXG4gICAgZXJyb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGVycm9yLCB2aWV3LCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgVmlldyA9IHZpZXcgfHwgRXJyb3JCb3VuZGFyeTtcblxuICAgIHJldHVybiBWaWV3KHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZXJyb3IsXG4gICAgICAuLi5yZXN0XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNlYXJjaCgoeyBlcnJvciB9KSA9PiAoeyBlcnJvciB9KSkoRXJyb3JCb3VuZGFyeUNvbnRhaW5lcik7XG4iXX0=