"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SortingContainer = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _ = require("..");

var _reactSearchUiViews = require("@elastic/react-search-ui-views");

var _types = require("../types");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function findSortOption(sortOptions, sortString) {
  var _sortString$split = sortString.split("|||"),
      _sortString$split2 = (0, _slicedToArray2.default)(_sortString$split, 2),
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

var SortingContainer = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(SortingContainer, _Component);

  var _super = _createSuper(SortingContainer);

  function SortingContainer() {
    (0, _classCallCheck2.default)(this, SortingContainer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(SortingContainer, [{
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
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["className", "label", "setSort", "sortDirection", "sortField", "sortOptions", "view"]);
      var View = view || _reactSearchUiViews.Sorting;
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
}(_react.Component);

exports.SortingContainer = SortingContainer;
(0, _defineProperty2.default)(SortingContainer, "propTypes", {
  // Props
  className: _propTypes.default.string,
  label: _propTypes.default.string,
  sortOptions: _propTypes.default.arrayOf(_types.SortOption).isRequired,
  view: _propTypes.default.func,
  // State
  sortDirection: _propTypes.default.oneOf(["asc", "desc", ""]).isRequired,
  sortField: _propTypes.default.string.isRequired,
  // Actions
  setSort: _propTypes.default.func.isRequired
});

var _default = (0, _.withSearch)(function (_ref) {
  var sortDirection = _ref.sortDirection,
      sortField = _ref.sortField,
      setSort = _ref.setSort;
  return {
    sortDirection: sortDirection,
    sortField: sortField,
    setSort: setSort
  };
})(SortingContainer);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250YWluZXJzL1NvcnRpbmcuanMiXSwibmFtZXMiOlsiZmluZFNvcnRPcHRpb24iLCJzb3J0T3B0aW9ucyIsInNvcnRTdHJpbmciLCJzcGxpdCIsInZhbHVlIiwiZGlyZWN0aW9uIiwiZmluZCIsIm9wdGlvbiIsImZvcm1hdFZhbHVlIiwic29ydEZpZWxkIiwic29ydERpcmVjdGlvbiIsImZvcm1hdFNlbGVjdE9wdGlvbiIsInNvcnRPcHRpb24iLCJsYWJlbCIsIm5hbWUiLCJTb3J0aW5nQ29udGFpbmVyIiwicHJvcHMiLCJjbGFzc05hbWUiLCJzZXRTb3J0IiwidmlldyIsInJlc3QiLCJWaWV3IiwiU29ydGluZyIsIm9uQ2hhbmdlIiwibyIsIm9wdGlvbnMiLCJtYXAiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheU9mIiwiU29ydE9wdGlvbiIsImlzUmVxdWlyZWQiLCJmdW5jIiwib25lT2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLFdBQXhCLEVBQXFDQyxVQUFyQyxFQUFpRDtBQUFBLDBCQUNwQkEsVUFBVSxDQUFDQyxLQUFYLENBQWlCLEtBQWpCLENBRG9CO0FBQUE7QUFBQSxNQUN4Q0MsS0FEd0M7QUFBQSxNQUNqQ0MsU0FEaUM7O0FBRS9DLFNBQU9KLFdBQVcsQ0FBQ0ssSUFBWixDQUNMLFVBQUFDLE1BQU07QUFBQSxXQUFJQSxNQUFNLENBQUNILEtBQVAsS0FBaUJBLEtBQWpCLElBQTBCRyxNQUFNLENBQUNGLFNBQVAsS0FBcUJBLFNBQW5EO0FBQUEsR0FERCxDQUFQO0FBR0Q7O0FBRUQsU0FBU0csV0FBVCxDQUFxQkMsU0FBckIsRUFBZ0NDLGFBQWhDLEVBQStDO0FBQzdDLG1CQUFVRCxTQUFWLGdCQUF5QkMsYUFBekI7QUFDRDs7QUFFRCxTQUFTQyxrQkFBVCxDQUE0QkMsVUFBNUIsRUFBd0M7QUFDdEMsU0FBTztBQUNMQyxJQUFBQSxLQUFLLEVBQUVELFVBQVUsQ0FBQ0UsSUFEYjtBQUVMVixJQUFBQSxLQUFLLEVBQUVJLFdBQVcsQ0FBQ0ksVUFBVSxDQUFDUixLQUFaLEVBQW1CUSxVQUFVLENBQUNQLFNBQTlCO0FBRmIsR0FBUDtBQUlEOztJQUNZVSxnQjs7Ozs7Ozs7Ozs7O1dBY1gsa0JBQVM7QUFBQSx3QkFVSCxLQUFLQyxLQVZGO0FBQUEsVUFFTEMsU0FGSyxlQUVMQSxTQUZLO0FBQUEsVUFHTEosS0FISyxlQUdMQSxLQUhLO0FBQUEsVUFJTEssT0FKSyxlQUlMQSxPQUpLO0FBQUEsVUFLTFIsYUFMSyxlQUtMQSxhQUxLO0FBQUEsVUFNTEQsU0FOSyxlQU1MQSxTQU5LO0FBQUEsVUFPTFIsV0FQSyxlQU9MQSxXQVBLO0FBQUEsVUFRTGtCLElBUkssZUFRTEEsSUFSSztBQUFBLFVBU0ZDLElBVEU7QUFZUCxVQUFNQyxJQUFJLEdBQUdGLElBQUksSUFBSUcsMkJBQXJCO0FBRUEsYUFBT0QsSUFBSTtBQUNUSixRQUFBQSxTQUFTLEVBQVRBLFNBRFM7QUFFVEosUUFBQUEsS0FBSyxFQUFMQSxLQUZTO0FBR1RVLFFBQUFBLFFBQVEsRUFBRSxrQkFBQUMsQ0FBQyxFQUFJO0FBQ2IsY0FBTVosVUFBVSxHQUFHWixjQUFjLENBQUNDLFdBQUQsRUFBY3VCLENBQWQsQ0FBakM7QUFDQU4sVUFBQUEsT0FBTyxDQUFDTixVQUFVLENBQUNSLEtBQVosRUFBbUJRLFVBQVUsQ0FBQ1AsU0FBOUIsQ0FBUDtBQUNELFNBTlE7QUFPVG9CLFFBQUFBLE9BQU8sRUFBRXhCLFdBQVcsQ0FBQ3lCLEdBQVosQ0FBZ0JmLGtCQUFoQixDQVBBO0FBUVRQLFFBQUFBLEtBQUssRUFBRUksV0FBVyxDQUFDQyxTQUFELEVBQVlDLGFBQVo7QUFSVCxTQVNOVSxJQVRNLEVBQVg7QUFXRDs7O0VBdkNtQ08sZ0I7Ozs4QkFBekJaLGdCLGVBQ1E7QUFDakI7QUFDQUUsRUFBQUEsU0FBUyxFQUFFVyxtQkFBVUMsTUFGSjtBQUdqQmhCLEVBQUFBLEtBQUssRUFBRWUsbUJBQVVDLE1BSEE7QUFJakI1QixFQUFBQSxXQUFXLEVBQUUyQixtQkFBVUUsT0FBVixDQUFrQkMsaUJBQWxCLEVBQThCQyxVQUoxQjtBQUtqQmIsRUFBQUEsSUFBSSxFQUFFUyxtQkFBVUssSUFMQztBQU1qQjtBQUNBdkIsRUFBQUEsYUFBYSxFQUFFa0IsbUJBQVVNLEtBQVYsQ0FBZ0IsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixFQUFoQixDQUFoQixFQUFxQ0YsVUFQbkM7QUFRakJ2QixFQUFBQSxTQUFTLEVBQUVtQixtQkFBVUMsTUFBVixDQUFpQkcsVUFSWDtBQVNqQjtBQUNBZCxFQUFBQSxPQUFPLEVBQUVVLG1CQUFVSyxJQUFWLENBQWVEO0FBVlAsQzs7ZUF5Q04sa0JBQVc7QUFBQSxNQUFHdEIsYUFBSCxRQUFHQSxhQUFIO0FBQUEsTUFBa0JELFNBQWxCLFFBQWtCQSxTQUFsQjtBQUFBLE1BQTZCUyxPQUE3QixRQUE2QkEsT0FBN0I7QUFBQSxTQUE0QztBQUNwRVIsSUFBQUEsYUFBYSxFQUFiQSxhQURvRTtBQUVwRUQsSUFBQUEsU0FBUyxFQUFUQSxTQUZvRTtBQUdwRVMsSUFBQUEsT0FBTyxFQUFQQTtBQUhvRSxHQUE1QztBQUFBLENBQVgsRUFJWEgsZ0JBSlcsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aFNlYXJjaCB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgU29ydGluZyB9IGZyb20gXCJAZWxhc3RpYy9yZWFjdC1zZWFyY2gtdWktdmlld3NcIjtcblxuaW1wb3J0IHsgU29ydE9wdGlvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5mdW5jdGlvbiBmaW5kU29ydE9wdGlvbihzb3J0T3B0aW9ucywgc29ydFN0cmluZykge1xuICBjb25zdCBbdmFsdWUsIGRpcmVjdGlvbl0gPSBzb3J0U3RyaW5nLnNwbGl0KFwifHx8XCIpO1xuICByZXR1cm4gc29ydE9wdGlvbnMuZmluZChcbiAgICBvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSB2YWx1ZSAmJiBvcHRpb24uZGlyZWN0aW9uID09PSBkaXJlY3Rpb25cbiAgKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoc29ydEZpZWxkLCBzb3J0RGlyZWN0aW9uKSB7XG4gIHJldHVybiBgJHtzb3J0RmllbGR9fHx8JHtzb3J0RGlyZWN0aW9ufWA7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFNlbGVjdE9wdGlvbihzb3J0T3B0aW9uKSB7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6IHNvcnRPcHRpb24ubmFtZSxcbiAgICB2YWx1ZTogZm9ybWF0VmFsdWUoc29ydE9wdGlvbi52YWx1ZSwgc29ydE9wdGlvbi5kaXJlY3Rpb24pXG4gIH07XG59XG5leHBvcnQgY2xhc3MgU29ydGluZ0NvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLy8gUHJvcHNcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc29ydE9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFNvcnRPcHRpb24pLmlzUmVxdWlyZWQsXG4gICAgdmlldzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLy8gU3RhdGVcbiAgICBzb3J0RGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoW1wiYXNjXCIsIFwiZGVzY1wiLCBcIlwiXSkuaXNSZXF1aXJlZCxcbiAgICBzb3J0RmllbGQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAvLyBBY3Rpb25zXG4gICAgc2V0U29ydDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBsYWJlbCxcbiAgICAgIHNldFNvcnQsXG4gICAgICBzb3J0RGlyZWN0aW9uLFxuICAgICAgc29ydEZpZWxkLFxuICAgICAgc29ydE9wdGlvbnMsXG4gICAgICB2aWV3LFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgVmlldyA9IHZpZXcgfHwgU29ydGluZztcblxuICAgIHJldHVybiBWaWV3KHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGxhYmVsLFxuICAgICAgb25DaGFuZ2U6IG8gPT4ge1xuICAgICAgICBjb25zdCBzb3J0T3B0aW9uID0gZmluZFNvcnRPcHRpb24oc29ydE9wdGlvbnMsIG8pO1xuICAgICAgICBzZXRTb3J0KHNvcnRPcHRpb24udmFsdWUsIHNvcnRPcHRpb24uZGlyZWN0aW9uKTtcbiAgICAgIH0sXG4gICAgICBvcHRpb25zOiBzb3J0T3B0aW9ucy5tYXAoZm9ybWF0U2VsZWN0T3B0aW9uKSxcbiAgICAgIHZhbHVlOiBmb3JtYXRWYWx1ZShzb3J0RmllbGQsIHNvcnREaXJlY3Rpb24pLFxuICAgICAgLi4ucmVzdFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTZWFyY2goKHsgc29ydERpcmVjdGlvbiwgc29ydEZpZWxkLCBzZXRTb3J0IH0pID0+ICh7XG4gIHNvcnREaXJlY3Rpb24sXG4gIHNvcnRGaWVsZCxcbiAgc2V0U29ydFxufSkpKFNvcnRpbmdDb250YWluZXIpO1xuIl19