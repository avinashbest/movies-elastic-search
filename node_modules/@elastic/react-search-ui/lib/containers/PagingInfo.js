"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PagingInfoContainer = void 0;

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

var PagingInfoContainer = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(PagingInfoContainer, _Component);

  var _super = _createSuper(PagingInfoContainer);

  function PagingInfoContainer() {
    (0, _classCallCheck2.default)(this, PagingInfoContainer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(PagingInfoContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          pagingStart = _this$props.pagingStart,
          pagingEnd = _this$props.pagingEnd,
          resultSearchTerm = _this$props.resultSearchTerm,
          totalResults = _this$props.totalResults,
          view = _this$props.view,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["className", "pagingStart", "pagingEnd", "resultSearchTerm", "totalResults", "view"]);
      var View = view || _reactSearchUiViews.PagingInfo;
      return View(_objectSpread({
        className: className,
        searchTerm: resultSearchTerm,
        start: pagingStart,
        end: pagingEnd,
        totalResults: totalResults
      }, rest));
    }
  }]);
  return PagingInfoContainer;
}(_react.Component);

exports.PagingInfoContainer = PagingInfoContainer;
(0, _defineProperty2.default)(PagingInfoContainer, "propTypes", {
  // Props
  className: _propTypes.default.string,
  view: _propTypes.default.func,
  // State
  pagingStart: _propTypes.default.number.isRequired,
  pagingEnd: _propTypes.default.number.isRequired,
  resultSearchTerm: _propTypes.default.string.isRequired,
  totalResults: _propTypes.default.number.isRequired
});

var _default = (0, _.withSearch)(function (_ref) {
  var pagingStart = _ref.pagingStart,
      pagingEnd = _ref.pagingEnd,
      resultSearchTerm = _ref.resultSearchTerm,
      totalResults = _ref.totalResults;
  return {
    pagingStart: pagingStart,
    pagingEnd: pagingEnd,
    resultSearchTerm: resultSearchTerm,
    totalResults: totalResults
  };
})(PagingInfoContainer);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250YWluZXJzL1BhZ2luZ0luZm8uanMiXSwibmFtZXMiOlsiUGFnaW5nSW5mb0NvbnRhaW5lciIsInByb3BzIiwiY2xhc3NOYW1lIiwicGFnaW5nU3RhcnQiLCJwYWdpbmdFbmQiLCJyZXN1bHRTZWFyY2hUZXJtIiwidG90YWxSZXN1bHRzIiwidmlldyIsInJlc3QiLCJWaWV3IiwiUGFnaW5nSW5mbyIsInNlYXJjaFRlcm0iLCJzdGFydCIsImVuZCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRWFBLG1COzs7Ozs7Ozs7Ozs7V0FZWCxrQkFBUztBQUFBLHdCQVNILEtBQUtDLEtBVEY7QUFBQSxVQUVMQyxTQUZLLGVBRUxBLFNBRks7QUFBQSxVQUdMQyxXQUhLLGVBR0xBLFdBSEs7QUFBQSxVQUlMQyxTQUpLLGVBSUxBLFNBSks7QUFBQSxVQUtMQyxnQkFMSyxlQUtMQSxnQkFMSztBQUFBLFVBTUxDLFlBTkssZUFNTEEsWUFOSztBQUFBLFVBT0xDLElBUEssZUFPTEEsSUFQSztBQUFBLFVBUUZDLElBUkU7QUFXUCxVQUFNQyxJQUFJLEdBQUdGLElBQUksSUFBSUcsOEJBQXJCO0FBRUEsYUFBT0QsSUFBSTtBQUNUUCxRQUFBQSxTQUFTLEVBQVRBLFNBRFM7QUFFVFMsUUFBQUEsVUFBVSxFQUFFTixnQkFGSDtBQUdUTyxRQUFBQSxLQUFLLEVBQUVULFdBSEU7QUFJVFUsUUFBQUEsR0FBRyxFQUFFVCxTQUpJO0FBS1RFLFFBQUFBLFlBQVksRUFBRUE7QUFMTCxTQU1ORSxJQU5NLEVBQVg7QUFRRDs7O0VBakNzQ00sZ0I7Ozs4QkFBNUJkLG1CLGVBQ1E7QUFDakI7QUFDQUUsRUFBQUEsU0FBUyxFQUFFYSxtQkFBVUMsTUFGSjtBQUdqQlQsRUFBQUEsSUFBSSxFQUFFUSxtQkFBVUUsSUFIQztBQUlqQjtBQUNBZCxFQUFBQSxXQUFXLEVBQUVZLG1CQUFVRyxNQUFWLENBQWlCQyxVQUxiO0FBTWpCZixFQUFBQSxTQUFTLEVBQUVXLG1CQUFVRyxNQUFWLENBQWlCQyxVQU5YO0FBT2pCZCxFQUFBQSxnQkFBZ0IsRUFBRVUsbUJBQVVDLE1BQVYsQ0FBaUJHLFVBUGxCO0FBUWpCYixFQUFBQSxZQUFZLEVBQUVTLG1CQUFVRyxNQUFWLENBQWlCQztBQVJkLEM7O2VBbUNOLGtCQUNiO0FBQUEsTUFBR2hCLFdBQUgsUUFBR0EsV0FBSDtBQUFBLE1BQWdCQyxTQUFoQixRQUFnQkEsU0FBaEI7QUFBQSxNQUEyQkMsZ0JBQTNCLFFBQTJCQSxnQkFBM0I7QUFBQSxNQUE2Q0MsWUFBN0MsUUFBNkNBLFlBQTdDO0FBQUEsU0FBaUU7QUFDL0RILElBQUFBLFdBQVcsRUFBWEEsV0FEK0Q7QUFFL0RDLElBQUFBLFNBQVMsRUFBVEEsU0FGK0Q7QUFHL0RDLElBQUFBLGdCQUFnQixFQUFoQkEsZ0JBSCtEO0FBSS9EQyxJQUFBQSxZQUFZLEVBQVpBO0FBSitELEdBQWpFO0FBQUEsQ0FEYSxFQU9iTixtQkFQYSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3aXRoU2VhcmNoIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBQYWdpbmdJbmZvIH0gZnJvbSBcIkBlbGFzdGljL3JlYWN0LXNlYXJjaC11aS12aWV3c1wiO1xuXG5leHBvcnQgY2xhc3MgUGFnaW5nSW5mb0NvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLy8gUHJvcHNcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmlldzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLy8gU3RhdGVcbiAgICBwYWdpbmdTdGFydDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHBhZ2luZ0VuZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHJlc3VsdFNlYXJjaFRlcm06IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB0b3RhbFJlc3VsdHM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBwYWdpbmdTdGFydCxcbiAgICAgIHBhZ2luZ0VuZCxcbiAgICAgIHJlc3VsdFNlYXJjaFRlcm0sXG4gICAgICB0b3RhbFJlc3VsdHMsXG4gICAgICB2aWV3LFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgVmlldyA9IHZpZXcgfHwgUGFnaW5nSW5mbztcblxuICAgIHJldHVybiBWaWV3KHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHNlYXJjaFRlcm06IHJlc3VsdFNlYXJjaFRlcm0sXG4gICAgICBzdGFydDogcGFnaW5nU3RhcnQsXG4gICAgICBlbmQ6IHBhZ2luZ0VuZCxcbiAgICAgIHRvdGFsUmVzdWx0czogdG90YWxSZXN1bHRzLFxuICAgICAgLi4ucmVzdFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTZWFyY2goXG4gICh7IHBhZ2luZ1N0YXJ0LCBwYWdpbmdFbmQsIHJlc3VsdFNlYXJjaFRlcm0sIHRvdGFsUmVzdWx0cyB9KSA9PiAoe1xuICAgIHBhZ2luZ1N0YXJ0LFxuICAgIHBhZ2luZ0VuZCxcbiAgICByZXN1bHRTZWFyY2hUZXJtLFxuICAgIHRvdGFsUmVzdWx0c1xuICB9KVxuKShQYWdpbmdJbmZvQ29udGFpbmVyKTtcbiJdfQ==