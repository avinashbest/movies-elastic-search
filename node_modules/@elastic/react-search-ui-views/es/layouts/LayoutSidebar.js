import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import PropTypes from "prop-types";
import React from "react";
import { appendClassName } from "../view-helpers";

var LayoutSidebar = /*#__PURE__*/function (_React$Component) {
  _inherits(LayoutSidebar, _React$Component);

  var _super = _createSuper(LayoutSidebar);

  function LayoutSidebar(props) {
    var _this;

    _classCallCheck(this, LayoutSidebar);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "toggleSidebar", function () {
      _this.setState(function (_ref) {
        var isSidebarToggled = _ref.isSidebarToggled;
        return {
          isSidebarToggled: !isSidebarToggled
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderToggleButton", function (label) {
      if (!_this.props.children) return null;
      return /*#__PURE__*/React.createElement("button", {
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

  _createClass(LayoutSidebar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children;
      var isSidebarToggled = this.state.isSidebarToggled;
      var classes = appendClassName(className, isSidebarToggled ? "".concat(className, "--toggled") : null);
      return /*#__PURE__*/React.createElement(React.Fragment, null, this.renderToggleButton("Show Filters"), /*#__PURE__*/React.createElement("div", {
        className: classes
      }, this.renderToggleButton("Save Filters"), children));
    }
  }]);

  return LayoutSidebar;
}(React.Component);

_defineProperty(LayoutSidebar, "propTypes", {
  className: PropTypes.string,
  children: PropTypes.node
});

export default LayoutSidebar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXlvdXRzL0xheW91dFNpZGViYXIuanMiXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwiUmVhY3QiLCJhcHBlbmRDbGFzc05hbWUiLCJMYXlvdXRTaWRlYmFyIiwicHJvcHMiLCJzZXRTdGF0ZSIsImlzU2lkZWJhclRvZ2dsZWQiLCJsYWJlbCIsImNoaWxkcmVuIiwidG9nZ2xlU2lkZWJhciIsInN0YXRlIiwiY2xhc3NOYW1lIiwiY2xhc3NlcyIsInJlbmRlclRvZ2dsZUJ1dHRvbiIsIkNvbXBvbmVudCIsInN0cmluZyIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLE9BQWxCO0FBRUEsU0FBU0MsZUFBVCxRQUFnQyxpQkFBaEM7O0lBRU1DLGE7Ozs7O0FBTUoseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCLG9FQUtILFlBQU07QUFDcEIsWUFBS0MsUUFBTCxDQUFjO0FBQUEsWUFBR0MsZ0JBQUgsUUFBR0EsZ0JBQUg7QUFBQSxlQUEyQjtBQUN2Q0EsVUFBQUEsZ0JBQWdCLEVBQUUsQ0FBQ0E7QUFEb0IsU0FBM0I7QUFBQSxPQUFkO0FBR0QsS0FUa0I7O0FBQUEseUVBV0UsVUFBQUMsS0FBSyxFQUFJO0FBQzVCLFVBQUksQ0FBQyxNQUFLSCxLQUFMLENBQVdJLFFBQWhCLEVBQTBCLE9BQU8sSUFBUDtBQUUxQiwwQkFDRTtBQUNFLFFBQUEsTUFBTSxNQURSO0FBRUUsUUFBQSxJQUFJLEVBQUMsUUFGUDtBQUdFLFFBQUEsU0FBUyxFQUFDLDJCQUhaO0FBSUUsUUFBQSxPQUFPLEVBQUUsTUFBS0M7QUFKaEIsU0FNR0YsS0FOSCxDQURGO0FBVUQsS0F4QmtCOztBQUVqQixVQUFLRyxLQUFMLEdBQWE7QUFBRUosTUFBQUEsZ0JBQWdCLEVBQUU7QUFBcEIsS0FBYjtBQUZpQjtBQUdsQjs7OztXQXVCRCxrQkFBUztBQUFBLHdCQUN5QixLQUFLRixLQUQ5QjtBQUFBLFVBQ0NPLFNBREQsZUFDQ0EsU0FERDtBQUFBLFVBQ1lILFFBRFosZUFDWUEsUUFEWjtBQUFBLFVBRUNGLGdCQUZELEdBRXNCLEtBQUtJLEtBRjNCLENBRUNKLGdCQUZEO0FBSVAsVUFBTU0sT0FBTyxHQUFHVixlQUFlLENBQzdCUyxTQUQ2QixFQUU3QkwsZ0JBQWdCLGFBQU1LLFNBQU4saUJBQTZCLElBRmhCLENBQS9CO0FBS0EsMEJBQ0UsMENBQ0csS0FBS0Usa0JBQUwsQ0FBd0IsY0FBeEIsQ0FESCxlQUVFO0FBQUssUUFBQSxTQUFTLEVBQUVEO0FBQWhCLFNBQ0csS0FBS0Msa0JBQUwsQ0FBd0IsY0FBeEIsQ0FESCxFQUVHTCxRQUZILENBRkYsQ0FERjtBQVNEOzs7O0VBbER5QlAsS0FBSyxDQUFDYSxTOztnQkFBNUJYLGEsZUFDZTtBQUNqQlEsRUFBQUEsU0FBUyxFQUFFWCxTQUFTLENBQUNlLE1BREo7QUFFakJQLEVBQUFBLFFBQVEsRUFBRVIsU0FBUyxDQUFDZ0I7QUFGSCxDOztBQW9EckIsZUFBZWIsYUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgYXBwZW5kQ2xhc3NOYW1lIH0gZnJvbSBcIi4uL3ZpZXctaGVscGVyc1wiO1xuXG5jbGFzcyBMYXlvdXRTaWRlYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaXNTaWRlYmFyVG9nZ2xlZDogZmFsc2UgfTtcbiAgfVxuXG4gIHRvZ2dsZVNpZGViYXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSgoeyBpc1NpZGViYXJUb2dnbGVkIH0pID0+ICh7XG4gICAgICBpc1NpZGViYXJUb2dnbGVkOiAhaXNTaWRlYmFyVG9nZ2xlZFxuICAgIH0pKTtcbiAgfTtcblxuICByZW5kZXJUb2dnbGVCdXR0b24gPSBsYWJlbCA9PiB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmNoaWxkcmVuKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGhpZGRlblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPVwic3VpLWxheW91dC1zaWRlYmFyLXRvZ2dsZVwiXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlU2lkZWJhcn1cbiAgICAgID5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaXNTaWRlYmFyVG9nZ2xlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBhcHBlbmRDbGFzc05hbWUoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBpc1NpZGViYXJUb2dnbGVkID8gYCR7Y2xhc3NOYW1lfS0tdG9nZ2xlZGAgOiBudWxsXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7dGhpcy5yZW5kZXJUb2dnbGVCdXR0b24oXCJTaG93IEZpbHRlcnNcIil9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJUb2dnbGVCdXR0b24oXCJTYXZlIEZpbHRlcnNcIil9XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0U2lkZWJhcjtcbiJdfQ==