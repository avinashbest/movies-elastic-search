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
import { PagingInfo } from "@elastic/react-search-ui-views";
export var PagingInfoContainer = /*#__PURE__*/function (_Component) {
  _inherits(PagingInfoContainer, _Component);

  var _super = _createSuper(PagingInfoContainer);

  function PagingInfoContainer() {
    _classCallCheck(this, PagingInfoContainer);

    return _super.apply(this, arguments);
  }

  _createClass(PagingInfoContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          pagingStart = _this$props.pagingStart,
          pagingEnd = _this$props.pagingEnd,
          resultSearchTerm = _this$props.resultSearchTerm,
          totalResults = _this$props.totalResults,
          view = _this$props.view,
          rest = _objectWithoutProperties(_this$props, ["className", "pagingStart", "pagingEnd", "resultSearchTerm", "totalResults", "view"]);

      var View = view || PagingInfo;
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
}(Component);

_defineProperty(PagingInfoContainer, "propTypes", {
  // Props
  className: PropTypes.string,
  view: PropTypes.func,
  // State
  pagingStart: PropTypes.number.isRequired,
  pagingEnd: PropTypes.number.isRequired,
  resultSearchTerm: PropTypes.string.isRequired,
  totalResults: PropTypes.number.isRequired
});

export default withSearch(function (_ref) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250YWluZXJzL1BhZ2luZ0luZm8uanMiXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwiQ29tcG9uZW50Iiwid2l0aFNlYXJjaCIsIlBhZ2luZ0luZm8iLCJQYWdpbmdJbmZvQ29udGFpbmVyIiwicHJvcHMiLCJjbGFzc05hbWUiLCJwYWdpbmdTdGFydCIsInBhZ2luZ0VuZCIsInJlc3VsdFNlYXJjaFRlcm0iLCJ0b3RhbFJlc3VsdHMiLCJ2aWV3IiwicmVzdCIsIlZpZXciLCJzZWFyY2hUZXJtIiwic3RhcnQiLCJlbmQiLCJzdHJpbmciLCJmdW5jIiwibnVtYmVyIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLE9BQTFCO0FBQ0EsU0FBU0MsVUFBVCxRQUEyQixJQUEzQjtBQUNBLFNBQVNDLFVBQVQsUUFBMkIsZ0NBQTNCO0FBRUEsV0FBYUMsbUJBQWI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFdBWUUsa0JBQVM7QUFBQSx3QkFTSCxLQUFLQyxLQVRGO0FBQUEsVUFFTEMsU0FGSyxlQUVMQSxTQUZLO0FBQUEsVUFHTEMsV0FISyxlQUdMQSxXQUhLO0FBQUEsVUFJTEMsU0FKSyxlQUlMQSxTQUpLO0FBQUEsVUFLTEMsZ0JBTEssZUFLTEEsZ0JBTEs7QUFBQSxVQU1MQyxZQU5LLGVBTUxBLFlBTks7QUFBQSxVQU9MQyxJQVBLLGVBT0xBLElBUEs7QUFBQSxVQVFGQyxJQVJFOztBQVdQLFVBQU1DLElBQUksR0FBR0YsSUFBSSxJQUFJUixVQUFyQjtBQUVBLGFBQU9VLElBQUk7QUFDVFAsUUFBQUEsU0FBUyxFQUFUQSxTQURTO0FBRVRRLFFBQUFBLFVBQVUsRUFBRUwsZ0JBRkg7QUFHVE0sUUFBQUEsS0FBSyxFQUFFUixXQUhFO0FBSVRTLFFBQUFBLEdBQUcsRUFBRVIsU0FKSTtBQUtURSxRQUFBQSxZQUFZLEVBQUVBO0FBTEwsU0FNTkUsSUFOTSxFQUFYO0FBUUQ7QUFqQ0g7O0FBQUE7QUFBQSxFQUF5Q1gsU0FBekM7O2dCQUFhRyxtQixlQUNRO0FBQ2pCO0FBQ0FFLEVBQUFBLFNBQVMsRUFBRU4sU0FBUyxDQUFDaUIsTUFGSjtBQUdqQk4sRUFBQUEsSUFBSSxFQUFFWCxTQUFTLENBQUNrQixJQUhDO0FBSWpCO0FBQ0FYLEVBQUFBLFdBQVcsRUFBRVAsU0FBUyxDQUFDbUIsTUFBVixDQUFpQkMsVUFMYjtBQU1qQlosRUFBQUEsU0FBUyxFQUFFUixTQUFTLENBQUNtQixNQUFWLENBQWlCQyxVQU5YO0FBT2pCWCxFQUFBQSxnQkFBZ0IsRUFBRVQsU0FBUyxDQUFDaUIsTUFBVixDQUFpQkcsVUFQbEI7QUFRakJWLEVBQUFBLFlBQVksRUFBRVYsU0FBUyxDQUFDbUIsTUFBVixDQUFpQkM7QUFSZCxDOztBQW1DckIsZUFBZWxCLFVBQVUsQ0FDdkI7QUFBQSxNQUFHSyxXQUFILFFBQUdBLFdBQUg7QUFBQSxNQUFnQkMsU0FBaEIsUUFBZ0JBLFNBQWhCO0FBQUEsTUFBMkJDLGdCQUEzQixRQUEyQkEsZ0JBQTNCO0FBQUEsTUFBNkNDLFlBQTdDLFFBQTZDQSxZQUE3QztBQUFBLFNBQWlFO0FBQy9ESCxJQUFBQSxXQUFXLEVBQVhBLFdBRCtEO0FBRS9EQyxJQUFBQSxTQUFTLEVBQVRBLFNBRitEO0FBRy9EQyxJQUFBQSxnQkFBZ0IsRUFBaEJBLGdCQUgrRDtBQUkvREMsSUFBQUEsWUFBWSxFQUFaQTtBQUorRCxHQUFqRTtBQUFBLENBRHVCLENBQVYsQ0FPYk4sbUJBUGEsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aFNlYXJjaCB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgUGFnaW5nSW5mbyB9IGZyb20gXCJAZWxhc3RpYy9yZWFjdC1zZWFyY2gtdWktdmlld3NcIjtcblxuZXhwb3J0IGNsYXNzIFBhZ2luZ0luZm9Db250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8vIFByb3BzXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZpZXc6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8vIFN0YXRlXG4gICAgcGFnaW5nU3RhcnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBwYWdpbmdFbmQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICByZXN1bHRTZWFyY2hUZXJtOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdG90YWxSZXN1bHRzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgcGFnaW5nU3RhcnQsXG4gICAgICBwYWdpbmdFbmQsXG4gICAgICByZXN1bHRTZWFyY2hUZXJtLFxuICAgICAgdG90YWxSZXN1bHRzLFxuICAgICAgdmlldyxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IFZpZXcgPSB2aWV3IHx8IFBhZ2luZ0luZm87XG5cbiAgICByZXR1cm4gVmlldyh7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzZWFyY2hUZXJtOiByZXN1bHRTZWFyY2hUZXJtLFxuICAgICAgc3RhcnQ6IHBhZ2luZ1N0YXJ0LFxuICAgICAgZW5kOiBwYWdpbmdFbmQsXG4gICAgICB0b3RhbFJlc3VsdHM6IHRvdGFsUmVzdWx0cyxcbiAgICAgIC4uLnJlc3RcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VhcmNoKFxuICAoeyBwYWdpbmdTdGFydCwgcGFnaW5nRW5kLCByZXN1bHRTZWFyY2hUZXJtLCB0b3RhbFJlc3VsdHMgfSkgPT4gKHtcbiAgICBwYWdpbmdTdGFydCxcbiAgICBwYWdpbmdFbmQsXG4gICAgcmVzdWx0U2VhcmNoVGVybSxcbiAgICB0b3RhbFJlc3VsdHNcbiAgfSlcbikoUGFnaW5nSW5mb0NvbnRhaW5lcik7XG4iXX0=