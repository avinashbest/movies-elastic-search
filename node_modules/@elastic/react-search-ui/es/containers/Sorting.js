import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import PropTypes from "prop-types";
import { Component } from "react";
import { withSearch } from "..";
import { Sorting } from "@elastic/react-search-ui-views";
import { SortOption } from "../types";

function findSortOption(sortOptions, sortString) {
  var _sortString$split = sortString.split("|||"),
      _sortString$split2 = _slicedToArray(_sortString$split, 2),
      value = _sortString$split2[0],
      direction = _sortString$split2[1];

  return sortOptions.find(function (option) {
    return option.value === value && option.direction === direction;
  });
}

function formatValue(sortField, sortDirection) {
  return "".concat(sortField, "|||").concat(sortDirection);
}

function formatSelectOption(sortOption) {
  return {
    label: sortOption.name,
    value: formatValue(sortOption.value, sortOption.direction)
  };
}

export var SortingContainer = /*#__PURE__*/function (_Component) {
  _inherits(SortingContainer, _Component);

  var _super = _createSuper(SortingContainer);

  function SortingContainer() {
    _classCallCheck(this, SortingContainer);

    return _super.apply(this, arguments);
  }

  _createClass(SortingContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          label = _this$props.label,
          setSort = _this$props.setSort,
          sortDirection = _this$props.sortDirection,
          sortField = _this$props.sortField,
          sortOptions = _this$props.sortOptions,
          view = _this$props.view,
          rest = _objectWithoutProperties(_this$props, ["className", "label", "setSort", "sortDirection", "sortField", "sortOptions", "view"]);

      var View = view || Sorting;
      return View(_objectSpread({
        className: className,
        label: label,
        onChange: function onChange(o) {
          var sortOption = findSortOption(sortOptions, o);
          setSort(sortOption.value, sortOption.direction);
        },
        options: sortOptions.map(formatSelectOption),
        value: formatValue(sortField, sortDirection)
      }, rest));
    }
  }]);

  return SortingContainer;
}(Component);

_defineProperty(SortingContainer, "propTypes", {
  // Props
  className: PropTypes.string,
  label: PropTypes.string,
  sortOptions: PropTypes.arrayOf(SortOption).isRequired,
  view: PropTypes.func,
  // State
  sortDirection: PropTypes.oneOf(["asc", "desc", ""]).isRequired,
  sortField: PropTypes.string.isRequired,
  // Actions
  setSort: PropTypes.func.isRequired
});

export default withSearch(function (_ref) {
  var sortDirection = _ref.sortDirection,
      sortField = _ref.sortField,
      setSort = _ref.setSort;
  return {
    sortDirection: sortDirection,
    sortField: sortField,
    setSort: setSort
  };
})(SortingContainer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250YWluZXJzL1NvcnRpbmcuanMiXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwiQ29tcG9uZW50Iiwid2l0aFNlYXJjaCIsIlNvcnRpbmciLCJTb3J0T3B0aW9uIiwiZmluZFNvcnRPcHRpb24iLCJzb3J0T3B0aW9ucyIsInNvcnRTdHJpbmciLCJzcGxpdCIsInZhbHVlIiwiZGlyZWN0aW9uIiwiZmluZCIsIm9wdGlvbiIsImZvcm1hdFZhbHVlIiwic29ydEZpZWxkIiwic29ydERpcmVjdGlvbiIsImZvcm1hdFNlbGVjdE9wdGlvbiIsInNvcnRPcHRpb24iLCJsYWJlbCIsIm5hbWUiLCJTb3J0aW5nQ29udGFpbmVyIiwicHJvcHMiLCJjbGFzc05hbWUiLCJzZXRTb3J0IiwidmlldyIsInJlc3QiLCJWaWV3Iiwib25DaGFuZ2UiLCJvIiwib3B0aW9ucyIsIm1hcCIsInN0cmluZyIsImFycmF5T2YiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIm9uZU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLE9BQTFCO0FBQ0EsU0FBU0MsVUFBVCxRQUEyQixJQUEzQjtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsZ0NBQXhCO0FBRUEsU0FBU0MsVUFBVCxRQUEyQixVQUEzQjs7QUFFQSxTQUFTQyxjQUFULENBQXdCQyxXQUF4QixFQUFxQ0MsVUFBckMsRUFBaUQ7QUFBQSwwQkFDcEJBLFVBQVUsQ0FBQ0MsS0FBWCxDQUFpQixLQUFqQixDQURvQjtBQUFBO0FBQUEsTUFDeENDLEtBRHdDO0FBQUEsTUFDakNDLFNBRGlDOztBQUUvQyxTQUFPSixXQUFXLENBQUNLLElBQVosQ0FDTCxVQUFBQyxNQUFNO0FBQUEsV0FBSUEsTUFBTSxDQUFDSCxLQUFQLEtBQWlCQSxLQUFqQixJQUEwQkcsTUFBTSxDQUFDRixTQUFQLEtBQXFCQSxTQUFuRDtBQUFBLEdBREQsQ0FBUDtBQUdEOztBQUVELFNBQVNHLFdBQVQsQ0FBcUJDLFNBQXJCLEVBQWdDQyxhQUFoQyxFQUErQztBQUM3QyxtQkFBVUQsU0FBVixnQkFBeUJDLGFBQXpCO0FBQ0Q7O0FBRUQsU0FBU0Msa0JBQVQsQ0FBNEJDLFVBQTVCLEVBQXdDO0FBQ3RDLFNBQU87QUFDTEMsSUFBQUEsS0FBSyxFQUFFRCxVQUFVLENBQUNFLElBRGI7QUFFTFYsSUFBQUEsS0FBSyxFQUFFSSxXQUFXLENBQUNJLFVBQVUsQ0FBQ1IsS0FBWixFQUFtQlEsVUFBVSxDQUFDUCxTQUE5QjtBQUZiLEdBQVA7QUFJRDs7QUFDRCxXQUFhVSxnQkFBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsV0FjRSxrQkFBUztBQUFBLHdCQVVILEtBQUtDLEtBVkY7QUFBQSxVQUVMQyxTQUZLLGVBRUxBLFNBRks7QUFBQSxVQUdMSixLQUhLLGVBR0xBLEtBSEs7QUFBQSxVQUlMSyxPQUpLLGVBSUxBLE9BSks7QUFBQSxVQUtMUixhQUxLLGVBS0xBLGFBTEs7QUFBQSxVQU1MRCxTQU5LLGVBTUxBLFNBTks7QUFBQSxVQU9MUixXQVBLLGVBT0xBLFdBUEs7QUFBQSxVQVFMa0IsSUFSSyxlQVFMQSxJQVJLO0FBQUEsVUFTRkMsSUFURTs7QUFZUCxVQUFNQyxJQUFJLEdBQUdGLElBQUksSUFBSXJCLE9BQXJCO0FBRUEsYUFBT3VCLElBQUk7QUFDVEosUUFBQUEsU0FBUyxFQUFUQSxTQURTO0FBRVRKLFFBQUFBLEtBQUssRUFBTEEsS0FGUztBQUdUUyxRQUFBQSxRQUFRLEVBQUUsa0JBQUFDLENBQUMsRUFBSTtBQUNiLGNBQU1YLFVBQVUsR0FBR1osY0FBYyxDQUFDQyxXQUFELEVBQWNzQixDQUFkLENBQWpDO0FBQ0FMLFVBQUFBLE9BQU8sQ0FBQ04sVUFBVSxDQUFDUixLQUFaLEVBQW1CUSxVQUFVLENBQUNQLFNBQTlCLENBQVA7QUFDRCxTQU5RO0FBT1RtQixRQUFBQSxPQUFPLEVBQUV2QixXQUFXLENBQUN3QixHQUFaLENBQWdCZCxrQkFBaEIsQ0FQQTtBQVFUUCxRQUFBQSxLQUFLLEVBQUVJLFdBQVcsQ0FBQ0MsU0FBRCxFQUFZQyxhQUFaO0FBUlQsU0FTTlUsSUFUTSxFQUFYO0FBV0Q7QUF2Q0g7O0FBQUE7QUFBQSxFQUFzQ3hCLFNBQXRDOztnQkFBYW1CLGdCLGVBQ1E7QUFDakI7QUFDQUUsRUFBQUEsU0FBUyxFQUFFdEIsU0FBUyxDQUFDK0IsTUFGSjtBQUdqQmIsRUFBQUEsS0FBSyxFQUFFbEIsU0FBUyxDQUFDK0IsTUFIQTtBQUlqQnpCLEVBQUFBLFdBQVcsRUFBRU4sU0FBUyxDQUFDZ0MsT0FBVixDQUFrQjVCLFVBQWxCLEVBQThCNkIsVUFKMUI7QUFLakJULEVBQUFBLElBQUksRUFBRXhCLFNBQVMsQ0FBQ2tDLElBTEM7QUFNakI7QUFDQW5CLEVBQUFBLGFBQWEsRUFBRWYsU0FBUyxDQUFDbUMsS0FBVixDQUFnQixDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLEVBQWhCLENBQWhCLEVBQXFDRixVQVBuQztBQVFqQm5CLEVBQUFBLFNBQVMsRUFBRWQsU0FBUyxDQUFDK0IsTUFBVixDQUFpQkUsVUFSWDtBQVNqQjtBQUNBVixFQUFBQSxPQUFPLEVBQUV2QixTQUFTLENBQUNrQyxJQUFWLENBQWVEO0FBVlAsQzs7QUF5Q3JCLGVBQWUvQixVQUFVLENBQUM7QUFBQSxNQUFHYSxhQUFILFFBQUdBLGFBQUg7QUFBQSxNQUFrQkQsU0FBbEIsUUFBa0JBLFNBQWxCO0FBQUEsTUFBNkJTLE9BQTdCLFFBQTZCQSxPQUE3QjtBQUFBLFNBQTRDO0FBQ3BFUixJQUFBQSxhQUFhLEVBQWJBLGFBRG9FO0FBRXBFRCxJQUFBQSxTQUFTLEVBQVRBLFNBRm9FO0FBR3BFUyxJQUFBQSxPQUFPLEVBQVBBO0FBSG9FLEdBQTVDO0FBQUEsQ0FBRCxDQUFWLENBSVhILGdCQUpXLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHdpdGhTZWFyY2ggfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IFNvcnRpbmcgfSBmcm9tIFwiQGVsYXN0aWMvcmVhY3Qtc2VhcmNoLXVpLXZpZXdzXCI7XG5cbmltcG9ydCB7IFNvcnRPcHRpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZnVuY3Rpb24gZmluZFNvcnRPcHRpb24oc29ydE9wdGlvbnMsIHNvcnRTdHJpbmcpIHtcbiAgY29uc3QgW3ZhbHVlLCBkaXJlY3Rpb25dID0gc29ydFN0cmluZy5zcGxpdChcInx8fFwiKTtcbiAgcmV0dXJuIHNvcnRPcHRpb25zLmZpbmQoXG4gICAgb3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gdmFsdWUgJiYgb3B0aW9uLmRpcmVjdGlvbiA9PT0gZGlyZWN0aW9uXG4gICk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKHNvcnRGaWVsZCwgc29ydERpcmVjdGlvbikge1xuICByZXR1cm4gYCR7c29ydEZpZWxkfXx8fCR7c29ydERpcmVjdGlvbn1gO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRTZWxlY3RPcHRpb24oc29ydE9wdGlvbikge1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiBzb3J0T3B0aW9uLm5hbWUsXG4gICAgdmFsdWU6IGZvcm1hdFZhbHVlKHNvcnRPcHRpb24udmFsdWUsIHNvcnRPcHRpb24uZGlyZWN0aW9uKVxuICB9O1xufVxuZXhwb3J0IGNsYXNzIFNvcnRpbmdDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8vIFByb3BzXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNvcnRPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihTb3J0T3B0aW9uKS5pc1JlcXVpcmVkLFxuICAgIHZpZXc6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8vIFN0YXRlXG4gICAgc29ydERpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcImFzY1wiLCBcImRlc2NcIiwgXCJcIl0pLmlzUmVxdWlyZWQsXG4gICAgc29ydEZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgLy8gQWN0aW9uc1xuICAgIHNldFNvcnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgbGFiZWwsXG4gICAgICBzZXRTb3J0LFxuICAgICAgc29ydERpcmVjdGlvbixcbiAgICAgIHNvcnRGaWVsZCxcbiAgICAgIHNvcnRPcHRpb25zLFxuICAgICAgdmlldyxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IFZpZXcgPSB2aWV3IHx8IFNvcnRpbmc7XG5cbiAgICByZXR1cm4gVmlldyh7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBsYWJlbCxcbiAgICAgIG9uQ2hhbmdlOiBvID0+IHtcbiAgICAgICAgY29uc3Qgc29ydE9wdGlvbiA9IGZpbmRTb3J0T3B0aW9uKHNvcnRPcHRpb25zLCBvKTtcbiAgICAgICAgc2V0U29ydChzb3J0T3B0aW9uLnZhbHVlLCBzb3J0T3B0aW9uLmRpcmVjdGlvbik7XG4gICAgICB9LFxuICAgICAgb3B0aW9uczogc29ydE9wdGlvbnMubWFwKGZvcm1hdFNlbGVjdE9wdGlvbiksXG4gICAgICB2YWx1ZTogZm9ybWF0VmFsdWUoc29ydEZpZWxkLCBzb3J0RGlyZWN0aW9uKSxcbiAgICAgIC4uLnJlc3RcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VhcmNoKCh7IHNvcnREaXJlY3Rpb24sIHNvcnRGaWVsZCwgc2V0U29ydCB9KSA9PiAoe1xuICBzb3J0RGlyZWN0aW9uLFxuICBzb3J0RmllbGQsXG4gIHNldFNvcnRcbn0pKShTb3J0aW5nQ29udGFpbmVyKTtcbiJdfQ==