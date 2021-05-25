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
import { ResultsPerPage } from "@elastic/react-search-ui-views";
export var ResultsPerPageContainer = /*#__PURE__*/function (_Component) {
  _inherits(ResultsPerPageContainer, _Component);

  var _super = _createSuper(ResultsPerPageContainer);

  function ResultsPerPageContainer() {
    _classCallCheck(this, ResultsPerPageContainer);

    return _super.apply(this, arguments);
  }

  _createClass(ResultsPerPageContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          resultsPerPage = _this$props.resultsPerPage,
          setResultsPerPage = _this$props.setResultsPerPage,
          view = _this$props.view,
          options = _this$props.options,
          rest = _objectWithoutProperties(_this$props, ["className", "resultsPerPage", "setResultsPerPage", "view", "options"]);

      var View = view || ResultsPerPage;
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
}(Component);

_defineProperty(ResultsPerPageContainer, "propTypes", {
  // Props
  className: PropTypes.string,
  view: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.number),
  // State
  resultsPerPage: PropTypes.number.isRequired,
  // Actions
  setResultsPerPage: PropTypes.func.isRequired
});

_defineProperty(ResultsPerPageContainer, "defaultProps", {
  options: [20, 40, 60]
});

export default withSearch(function (_ref) {
  var resultsPerPage = _ref.resultsPerPage,
      setResultsPerPage = _ref.setResultsPerPage;
  return {
    resultsPerPage: resultsPerPage,
    setResultsPerPage: setResultsPerPage
  };
})(ResultsPerPageContainer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250YWluZXJzL1Jlc3VsdHNQZXJQYWdlLmpzIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIkNvbXBvbmVudCIsIndpdGhTZWFyY2giLCJSZXN1bHRzUGVyUGFnZSIsIlJlc3VsdHNQZXJQYWdlQ29udGFpbmVyIiwicHJvcHMiLCJjbGFzc05hbWUiLCJyZXN1bHRzUGVyUGFnZSIsInNldFJlc3VsdHNQZXJQYWdlIiwidmlldyIsIm9wdGlvbnMiLCJyZXN0IiwiVmlldyIsIm9uQ2hhbmdlIiwidmFsdWUiLCJzdHJpbmciLCJmdW5jIiwiYXJyYXlPZiIsIm51bWJlciIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixPQUExQjtBQUNBLFNBQVNDLFVBQVQsUUFBMkIsSUFBM0I7QUFDQSxTQUFTQyxjQUFULFFBQStCLGdDQUEvQjtBQUVBLFdBQWFDLHVCQUFiO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxXQWdCRSxrQkFBUztBQUFBLHdCQVFILEtBQUtDLEtBUkY7QUFBQSxVQUVMQyxTQUZLLGVBRUxBLFNBRks7QUFBQSxVQUdMQyxjQUhLLGVBR0xBLGNBSEs7QUFBQSxVQUlMQyxpQkFKSyxlQUlMQSxpQkFKSztBQUFBLFVBS0xDLElBTEssZUFLTEEsSUFMSztBQUFBLFVBTUxDLE9BTkssZUFNTEEsT0FOSztBQUFBLFVBT0ZDLElBUEU7O0FBVVAsVUFBTUMsSUFBSSxHQUFHSCxJQUFJLElBQUlOLGNBQXJCO0FBRUEsYUFBT1MsSUFBSTtBQUNUTixRQUFBQSxTQUFTLEVBQVRBLFNBRFM7QUFFVE8sUUFBQUEsUUFBUSxFQUFFLGtCQUFBQyxLQUFLLEVBQUk7QUFDakJOLFVBQUFBLGlCQUFpQixDQUFDTSxLQUFELENBQWpCO0FBQ0QsU0FKUTtBQUtUSixRQUFBQSxPQUFPLEVBQVBBLE9BTFM7QUFNVEksUUFBQUEsS0FBSyxFQUFFUDtBQU5FLFNBT05JLElBUE0sRUFBWDtBQVNEO0FBckNIOztBQUFBO0FBQUEsRUFBNkNWLFNBQTdDOztnQkFBYUcsdUIsZUFDUTtBQUNqQjtBQUNBRSxFQUFBQSxTQUFTLEVBQUVOLFNBQVMsQ0FBQ2UsTUFGSjtBQUdqQk4sRUFBQUEsSUFBSSxFQUFFVCxTQUFTLENBQUNnQixJQUhDO0FBSWpCTixFQUFBQSxPQUFPLEVBQUVWLFNBQVMsQ0FBQ2lCLE9BQVYsQ0FBa0JqQixTQUFTLENBQUNrQixNQUE1QixDQUpRO0FBS2pCO0FBQ0FYLEVBQUFBLGNBQWMsRUFBRVAsU0FBUyxDQUFDa0IsTUFBVixDQUFpQkMsVUFOaEI7QUFPakI7QUFDQVgsRUFBQUEsaUJBQWlCLEVBQUVSLFNBQVMsQ0FBQ2dCLElBQVYsQ0FBZUc7QUFSakIsQzs7Z0JBRFJmLHVCLGtCQVlXO0FBQ3BCTSxFQUFBQSxPQUFPLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQ7QUFEVyxDOztBQTRCeEIsZUFBZVIsVUFBVSxDQUFDO0FBQUEsTUFBR0ssY0FBSCxRQUFHQSxjQUFIO0FBQUEsTUFBbUJDLGlCQUFuQixRQUFtQkEsaUJBQW5CO0FBQUEsU0FBNEM7QUFDcEVELElBQUFBLGNBQWMsRUFBZEEsY0FEb0U7QUFFcEVDLElBQUFBLGlCQUFpQixFQUFqQkE7QUFGb0UsR0FBNUM7QUFBQSxDQUFELENBQVYsQ0FHWEosdUJBSFcsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aFNlYXJjaCB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgUmVzdWx0c1BlclBhZ2UgfSBmcm9tIFwiQGVsYXN0aWMvcmVhY3Qtc2VhcmNoLXVpLXZpZXdzXCI7XG5cbmV4cG9ydCBjbGFzcyBSZXN1bHRzUGVyUGFnZUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLy8gUHJvcHNcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmlldzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG4gICAgLy8gU3RhdGVcbiAgICByZXN1bHRzUGVyUGFnZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIC8vIEFjdGlvbnNcbiAgICBzZXRSZXN1bHRzUGVyUGFnZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb3B0aW9uczogWzIwLCA0MCwgNjBdXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHJlc3VsdHNQZXJQYWdlLFxuICAgICAgc2V0UmVzdWx0c1BlclBhZ2UsXG4gICAgICB2aWV3LFxuICAgICAgb3B0aW9ucyxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IFZpZXcgPSB2aWV3IHx8IFJlc3VsdHNQZXJQYWdlO1xuXG4gICAgcmV0dXJuIFZpZXcoe1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgb25DaGFuZ2U6IHZhbHVlID0+IHtcbiAgICAgICAgc2V0UmVzdWx0c1BlclBhZ2UodmFsdWUpO1xuICAgICAgfSxcbiAgICAgIG9wdGlvbnMsXG4gICAgICB2YWx1ZTogcmVzdWx0c1BlclBhZ2UsXG4gICAgICAuLi5yZXN0XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNlYXJjaCgoeyByZXN1bHRzUGVyUGFnZSwgc2V0UmVzdWx0c1BlclBhZ2UgfSkgPT4gKHtcbiAgcmVzdWx0c1BlclBhZ2UsXG4gIHNldFJlc3VsdHNQZXJQYWdlXG59KSkoUmVzdWx0c1BlclBhZ2VDb250YWluZXIpO1xuIl19