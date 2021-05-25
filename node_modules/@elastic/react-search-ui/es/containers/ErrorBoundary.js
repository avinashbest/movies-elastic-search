import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import PropTypes from "prop-types";
import { Component } from "react";
import { withSearch } from "..";
import { ErrorBoundary } from "@elastic/react-search-ui-views";
export var ErrorBoundaryContainer = /*#__PURE__*/function (_Component) {
  _inherits(ErrorBoundaryContainer, _Component);

  var _super = _createSuper(ErrorBoundaryContainer);

  function ErrorBoundaryContainer() {
    _classCallCheck(this, ErrorBoundaryContainer);

    return _super.apply(this, arguments);
  }

  _createClass(ErrorBoundaryContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          error = _this$props.error,
          view = _this$props.view,
          rest = _objectWithoutProperties(_this$props, ["children", "className", "error", "view"]);

      var View = view || ErrorBoundary;
      return View(_objectSpread({
        className: className,
        children: children,
        error: error
      }, rest));
    }
  }]);

  return ErrorBoundaryContainer;
}(Component);

_defineProperty(ErrorBoundaryContainer, "propTypes", {
  // Props
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  view: PropTypes.func,
  // State
  error: PropTypes.string.isRequired
});

export default withSearch(function (_ref) {
  var error = _ref.error;
  return {
    error: error
  };
})(ErrorBoundaryContainer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250YWluZXJzL0Vycm9yQm91bmRhcnkuanMiXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwiQ29tcG9uZW50Iiwid2l0aFNlYXJjaCIsIkVycm9yQm91bmRhcnkiLCJFcnJvckJvdW5kYXJ5Q29udGFpbmVyIiwicHJvcHMiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImVycm9yIiwidmlldyIsInJlc3QiLCJWaWV3Iiwibm9kZSIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsT0FBMUI7QUFDQSxTQUFTQyxVQUFULFFBQTJCLElBQTNCO0FBQ0EsU0FBU0MsYUFBVCxRQUE4QixnQ0FBOUI7QUFFQSxXQUFhQyxzQkFBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsV0FVRSxrQkFBUztBQUFBLHdCQUMrQyxLQUFLQyxLQURwRDtBQUFBLFVBQ0NDLFFBREQsZUFDQ0EsUUFERDtBQUFBLFVBQ1dDLFNBRFgsZUFDV0EsU0FEWDtBQUFBLFVBQ3NCQyxLQUR0QixlQUNzQkEsS0FEdEI7QUFBQSxVQUM2QkMsSUFEN0IsZUFDNkJBLElBRDdCO0FBQUEsVUFDc0NDLElBRHRDOztBQUdQLFVBQU1DLElBQUksR0FBR0YsSUFBSSxJQUFJTixhQUFyQjtBQUVBLGFBQU9RLElBQUk7QUFDVEosUUFBQUEsU0FBUyxFQUFUQSxTQURTO0FBRVRELFFBQUFBLFFBQVEsRUFBUkEsUUFGUztBQUdURSxRQUFBQSxLQUFLLEVBQUxBO0FBSFMsU0FJTkUsSUFKTSxFQUFYO0FBTUQ7QUFyQkg7O0FBQUE7QUFBQSxFQUE0Q1QsU0FBNUM7O2dCQUFhRyxzQixlQUNRO0FBQ2pCO0FBQ0FFLEVBQUFBLFFBQVEsRUFBRU4sU0FBUyxDQUFDWSxJQUFWLENBQWVDLFVBRlI7QUFHakJOLEVBQUFBLFNBQVMsRUFBRVAsU0FBUyxDQUFDYyxNQUhKO0FBSWpCTCxFQUFBQSxJQUFJLEVBQUVULFNBQVMsQ0FBQ2UsSUFKQztBQUtqQjtBQUNBUCxFQUFBQSxLQUFLLEVBQUVSLFNBQVMsQ0FBQ2MsTUFBVixDQUFpQkQ7QUFOUCxDOztBQXVCckIsZUFBZVgsVUFBVSxDQUFDO0FBQUEsTUFBR00sS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZ0I7QUFBRUEsSUFBQUEsS0FBSyxFQUFMQTtBQUFGLEdBQWhCO0FBQUEsQ0FBRCxDQUFWLENBQXVDSixzQkFBdkMsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aFNlYXJjaCB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgRXJyb3JCb3VuZGFyeSB9IGZyb20gXCJAZWxhc3RpYy9yZWFjdC1zZWFyY2gtdWktdmlld3NcIjtcblxuZXhwb3J0IGNsYXNzIEVycm9yQm91bmRhcnlDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8vIFByb3BzXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZpZXc6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8vIFN0YXRlXG4gICAgZXJyb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGVycm9yLCB2aWV3LCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgVmlldyA9IHZpZXcgfHwgRXJyb3JCb3VuZGFyeTtcblxuICAgIHJldHVybiBWaWV3KHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZXJyb3IsXG4gICAgICAuLi5yZXN0XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNlYXJjaCgoeyBlcnJvciB9KSA9PiAoeyBlcnJvciB9KSkoRXJyb3JCb3VuZGFyeUNvbnRhaW5lcik7XG4iXX0=