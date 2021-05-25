"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ResultsPerPageContainer = void 0;

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

var ResultsPerPageContainer = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ResultsPerPageContainer, _Component);

  var _super = _createSuper(ResultsPerPageContainer);

  function ResultsPerPageContainer() {
    (0, _classCallCheck2.default)(this, ResultsPerPageContainer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ResultsPerPageContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          resultsPerPage = _this$props.resultsPerPage,
          setResultsPerPage = _this$props.setResultsPerPage,
          view = _this$props.view,
          options = _this$props.options,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["className", "resultsPerPage", "setResultsPerPage", "view", "options"]);
      var View = view || _reactSearchUiViews.ResultsPerPage;
      return View(_objectSpread({
        className: className,
        onChange: function onChange(value) {
          setResultsPerPage(value);
        },
        options: options,
        value: resultsPerPage
      }, rest));
    }
  }]);
  return ResultsPerPageContainer;
}(_react.Component);

exports.ResultsPerPageContainer = ResultsPerPageContainer;
(0, _defineProperty2.default)(ResultsPerPageContainer, "propTypes", {
  // Props
  className: _propTypes.default.string,
  view: _propTypes.default.func,
  options: _propTypes.default.arrayOf(_propTypes.default.number),
  // State
  resultsPerPage: _propTypes.default.number.isRequired,
  // Actions
  setResultsPerPage: _propTypes.default.func.isRequired
});
(0, _defineProperty2.default)(ResultsPerPageContainer, "defaultProps", {
  options: [20, 40, 60]
});

var _default = (0, _.withSearch)(function (_ref) {
  var resultsPerPage = _ref.resultsPerPage,
      setResultsPerPage = _ref.setResultsPerPage;
  return {
    resultsPerPage: resultsPerPage,
    setResultsPerPage: setResultsPerPage
  };
})(ResultsPerPageContainer);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250YWluZXJzL1Jlc3VsdHNQZXJQYWdlLmpzIl0sIm5hbWVzIjpbIlJlc3VsdHNQZXJQYWdlQ29udGFpbmVyIiwicHJvcHMiLCJjbGFzc05hbWUiLCJyZXN1bHRzUGVyUGFnZSIsInNldFJlc3VsdHNQZXJQYWdlIiwidmlldyIsIm9wdGlvbnMiLCJyZXN0IiwiVmlldyIsIlJlc3VsdHNQZXJQYWdlIiwib25DaGFuZ2UiLCJ2YWx1ZSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJhcnJheU9mIiwibnVtYmVyIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVhQSx1Qjs7Ozs7Ozs7Ozs7O1dBZ0JYLGtCQUFTO0FBQUEsd0JBUUgsS0FBS0MsS0FSRjtBQUFBLFVBRUxDLFNBRkssZUFFTEEsU0FGSztBQUFBLFVBR0xDLGNBSEssZUFHTEEsY0FISztBQUFBLFVBSUxDLGlCQUpLLGVBSUxBLGlCQUpLO0FBQUEsVUFLTEMsSUFMSyxlQUtMQSxJQUxLO0FBQUEsVUFNTEMsT0FOSyxlQU1MQSxPQU5LO0FBQUEsVUFPRkMsSUFQRTtBQVVQLFVBQU1DLElBQUksR0FBR0gsSUFBSSxJQUFJSSxrQ0FBckI7QUFFQSxhQUFPRCxJQUFJO0FBQ1ROLFFBQUFBLFNBQVMsRUFBVEEsU0FEUztBQUVUUSxRQUFBQSxRQUFRLEVBQUUsa0JBQUFDLEtBQUssRUFBSTtBQUNqQlAsVUFBQUEsaUJBQWlCLENBQUNPLEtBQUQsQ0FBakI7QUFDRCxTQUpRO0FBS1RMLFFBQUFBLE9BQU8sRUFBUEEsT0FMUztBQU1USyxRQUFBQSxLQUFLLEVBQUVSO0FBTkUsU0FPTkksSUFQTSxFQUFYO0FBU0Q7OztFQXJDMENLLGdCOzs7OEJBQWhDWix1QixlQUNRO0FBQ2pCO0FBQ0FFLEVBQUFBLFNBQVMsRUFBRVcsbUJBQVVDLE1BRko7QUFHakJULEVBQUFBLElBQUksRUFBRVEsbUJBQVVFLElBSEM7QUFJakJULEVBQUFBLE9BQU8sRUFBRU8sbUJBQVVHLE9BQVYsQ0FBa0JILG1CQUFVSSxNQUE1QixDQUpRO0FBS2pCO0FBQ0FkLEVBQUFBLGNBQWMsRUFBRVUsbUJBQVVJLE1BQVYsQ0FBaUJDLFVBTmhCO0FBT2pCO0FBQ0FkLEVBQUFBLGlCQUFpQixFQUFFUyxtQkFBVUUsSUFBVixDQUFlRztBQVJqQixDOzhCQURSbEIsdUIsa0JBWVc7QUFDcEJNLEVBQUFBLE9BQU8sRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVDtBQURXLEM7O2VBNEJULGtCQUFXO0FBQUEsTUFBR0gsY0FBSCxRQUFHQSxjQUFIO0FBQUEsTUFBbUJDLGlCQUFuQixRQUFtQkEsaUJBQW5CO0FBQUEsU0FBNEM7QUFDcEVELElBQUFBLGNBQWMsRUFBZEEsY0FEb0U7QUFFcEVDLElBQUFBLGlCQUFpQixFQUFqQkE7QUFGb0UsR0FBNUM7QUFBQSxDQUFYLEVBR1hKLHVCQUhXLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHdpdGhTZWFyY2ggfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IFJlc3VsdHNQZXJQYWdlIH0gZnJvbSBcIkBlbGFzdGljL3JlYWN0LXNlYXJjaC11aS12aWV3c1wiO1xuXG5leHBvcnQgY2xhc3MgUmVzdWx0c1BlclBhZ2VDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8vIFByb3BzXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZpZXc6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLFxuICAgIC8vIFN0YXRlXG4gICAgcmVzdWx0c1BlclBhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAvLyBBY3Rpb25zXG4gICAgc2V0UmVzdWx0c1BlclBhZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9wdGlvbnM6IFsyMCwgNDAsIDYwXVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICByZXN1bHRzUGVyUGFnZSxcbiAgICAgIHNldFJlc3VsdHNQZXJQYWdlLFxuICAgICAgdmlldyxcbiAgICAgIG9wdGlvbnMsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBWaWV3ID0gdmlldyB8fCBSZXN1bHRzUGVyUGFnZTtcblxuICAgIHJldHVybiBWaWV3KHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIG9uQ2hhbmdlOiB2YWx1ZSA9PiB7XG4gICAgICAgIHNldFJlc3VsdHNQZXJQYWdlKHZhbHVlKTtcbiAgICAgIH0sXG4gICAgICBvcHRpb25zLFxuICAgICAgdmFsdWU6IHJlc3VsdHNQZXJQYWdlLFxuICAgICAgLi4ucmVzdFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTZWFyY2goKHsgcmVzdWx0c1BlclBhZ2UsIHNldFJlc3VsdHNQZXJQYWdlIH0pID0+ICh7XG4gIHJlc3VsdHNQZXJQYWdlLFxuICBzZXRSZXN1bHRzUGVyUGFnZVxufSkpKFJlc3VsdHNQZXJQYWdlQ29udGFpbmVyKTtcbiJdfQ==