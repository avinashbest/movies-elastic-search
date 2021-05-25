"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _viewHelpers = require("../view-helpers");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var LayoutSidebar = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(LayoutSidebar, _React$Component);

  var _super = _createSuper(LayoutSidebar);

  function LayoutSidebar(props) {
    var _this;

    (0, _classCallCheck2.default)(this, LayoutSidebar);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "toggleSidebar", function () {
      _this.setState(function (_ref) {
        var isSidebarToggled = _ref.isSidebarToggled;
        return {
          isSidebarToggled: !isSidebarToggled
        };
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderToggleButton", function (label) {
      if (!_this.props.children) return null;
      return /*#__PURE__*/_react.default.createElement("button", {
        hidden: true,
        type: "button",
        className: "sui-layout-sidebar-toggle",
        onClick: _this.toggleSidebar
      }, label);
    });
    _this.state = {
      isSidebarToggled: false
    };
    return _this;
  }

  (0, _createClass2.default)(LayoutSidebar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children;
      var isSidebarToggled = this.state.isSidebarToggled;
      var classes = (0, _viewHelpers.appendClassName)(className, isSidebarToggled ? "".concat(className, "--toggled") : null);
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.renderToggleButton("Show Filters"), /*#__PURE__*/_react.default.createElement("div", {
        className: classes
      }, this.renderToggleButton("Save Filters"), children));
    }
  }]);
  return LayoutSidebar;
}(_react.default.Component);

(0, _defineProperty2.default)(LayoutSidebar, "propTypes", {
  className: _propTypes.default.string,
  children: _propTypes.default.node
});
var _default = LayoutSidebar;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXlvdXRzL0xheW91dFNpZGViYXIuanMiXSwibmFtZXMiOlsiTGF5b3V0U2lkZWJhciIsInByb3BzIiwic2V0U3RhdGUiLCJpc1NpZGViYXJUb2dnbGVkIiwibGFiZWwiLCJjaGlsZHJlbiIsInRvZ2dsZVNpZGViYXIiLCJzdGF0ZSIsImNsYXNzTmFtZSIsImNsYXNzZXMiLCJyZW5kZXJUb2dnbGVCdXR0b24iLCJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7OztJQUVNQSxhOzs7OztBQU1KLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsOEJBQU1BLEtBQU47QUFEaUIsZ0dBS0gsWUFBTTtBQUNwQixZQUFLQyxRQUFMLENBQWM7QUFBQSxZQUFHQyxnQkFBSCxRQUFHQSxnQkFBSDtBQUFBLGVBQTJCO0FBQ3ZDQSxVQUFBQSxnQkFBZ0IsRUFBRSxDQUFDQTtBQURvQixTQUEzQjtBQUFBLE9BQWQ7QUFHRCxLQVRrQjtBQUFBLHFHQVdFLFVBQUFDLEtBQUssRUFBSTtBQUM1QixVQUFJLENBQUMsTUFBS0gsS0FBTCxDQUFXSSxRQUFoQixFQUEwQixPQUFPLElBQVA7QUFFMUIsMEJBQ0U7QUFDRSxRQUFBLE1BQU0sTUFEUjtBQUVFLFFBQUEsSUFBSSxFQUFDLFFBRlA7QUFHRSxRQUFBLFNBQVMsRUFBQywyQkFIWjtBQUlFLFFBQUEsT0FBTyxFQUFFLE1BQUtDO0FBSmhCLFNBTUdGLEtBTkgsQ0FERjtBQVVELEtBeEJrQjtBQUVqQixVQUFLRyxLQUFMLEdBQWE7QUFBRUosTUFBQUEsZ0JBQWdCLEVBQUU7QUFBcEIsS0FBYjtBQUZpQjtBQUdsQjs7OztXQXVCRCxrQkFBUztBQUFBLHdCQUN5QixLQUFLRixLQUQ5QjtBQUFBLFVBQ0NPLFNBREQsZUFDQ0EsU0FERDtBQUFBLFVBQ1lILFFBRFosZUFDWUEsUUFEWjtBQUFBLFVBRUNGLGdCQUZELEdBRXNCLEtBQUtJLEtBRjNCLENBRUNKLGdCQUZEO0FBSVAsVUFBTU0sT0FBTyxHQUFHLGtDQUNkRCxTQURjLEVBRWRMLGdCQUFnQixhQUFNSyxTQUFOLGlCQUE2QixJQUYvQixDQUFoQjtBQUtBLDBCQUNFLDREQUNHLEtBQUtFLGtCQUFMLENBQXdCLGNBQXhCLENBREgsZUFFRTtBQUFLLFFBQUEsU0FBUyxFQUFFRDtBQUFoQixTQUNHLEtBQUtDLGtCQUFMLENBQXdCLGNBQXhCLENBREgsRUFFR0wsUUFGSCxDQUZGLENBREY7QUFTRDs7O0VBbER5Qk0sZUFBTUMsUzs7OEJBQTVCWixhLGVBQ2U7QUFDakJRLEVBQUFBLFNBQVMsRUFBRUssbUJBQVVDLE1BREo7QUFFakJULEVBQUFBLFFBQVEsRUFBRVEsbUJBQVVFO0FBRkgsQztlQW9ETmYsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgYXBwZW5kQ2xhc3NOYW1lIH0gZnJvbSBcIi4uL3ZpZXctaGVscGVyc1wiO1xuXG5jbGFzcyBMYXlvdXRTaWRlYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaXNTaWRlYmFyVG9nZ2xlZDogZmFsc2UgfTtcbiAgfVxuXG4gIHRvZ2dsZVNpZGViYXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSgoeyBpc1NpZGViYXJUb2dnbGVkIH0pID0+ICh7XG4gICAgICBpc1NpZGViYXJUb2dnbGVkOiAhaXNTaWRlYmFyVG9nZ2xlZFxuICAgIH0pKTtcbiAgfTtcblxuICByZW5kZXJUb2dnbGVCdXR0b24gPSBsYWJlbCA9PiB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmNoaWxkcmVuKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGhpZGRlblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPVwic3VpLWxheW91dC1zaWRlYmFyLXRvZ2dsZVwiXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlU2lkZWJhcn1cbiAgICAgID5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaXNTaWRlYmFyVG9nZ2xlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBhcHBlbmRDbGFzc05hbWUoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBpc1NpZGViYXJUb2dnbGVkID8gYCR7Y2xhc3NOYW1lfS0tdG9nZ2xlZGAgOiBudWxsXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7dGhpcy5yZW5kZXJUb2dnbGVCdXR0b24oXCJTaG93IEZpbHRlcnNcIil9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJUb2dnbGVCdXR0b24oXCJTYXZlIEZpbHRlcnNcIil9XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0U2lkZWJhcjtcbiJdfQ==