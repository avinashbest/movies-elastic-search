import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
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
import { MultiCheckboxFacet } from "@elastic/react-search-ui-views";
import { helpers } from "@elastic/search-ui";
import { Facet, Filter, FilterType } from "../types";
import { accentFold } from "../helpers";
import { withSearch } from "..";
var markSelectedFacetValuesFromFilters = helpers.markSelectedFacetValuesFromFilters;
export var FacetContainer = /*#__PURE__*/function (_Component) {
  _inherits(FacetContainer, _Component);

  var _super = _createSuper(FacetContainer);

  function FacetContainer(_ref) {
    var _this;

    var _ref$show = _ref.show,
        show = _ref$show === void 0 ? 5 : _ref$show;

    _classCallCheck(this, FacetContainer);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "handleClickMore", function (totalOptions) {
      _this.setState(function (_ref2) {
        var more = _ref2.more;
        var visibleOptionsCount = more + 10;
        var showingAll = visibleOptionsCount >= totalOptions;
        if (showingAll) visibleOptionsCount = totalOptions;

        _this.props.a11yNotify("moreFilters", {
          visibleOptionsCount: visibleOptionsCount,
          showingAll: showingAll
        });

        return {
          more: visibleOptionsCount
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFacetSearch", function (searchTerm) {
      _this.setState({
        searchTerm: searchTerm
      });
    });

    _this.state = {
      more: show,
      searchTerm: ""
    };
    return _this;
  }

  _createClass(FacetContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          more = _this$state.more,
          searchTerm = _this$state.searchTerm;

      var _this$props = this.props,
          addFilter = _this$props.addFilter,
          className = _this$props.className,
          facets = _this$props.facets,
          field = _this$props.field,
          filterType = _this$props.filterType,
          filters = _this$props.filters,
          label = _this$props.label,
          removeFilter = _this$props.removeFilter,
          setFilter = _this$props.setFilter,
          view = _this$props.view,
          isFilterable = _this$props.isFilterable,
          a11yNotify = _this$props.a11yNotify,
          rest = _objectWithoutProperties(_this$props, ["addFilter", "className", "facets", "field", "filterType", "filters", "label", "removeFilter", "setFilter", "view", "isFilterable", "a11yNotify"]);

      var facetsForField = facets[field];
      if (!facetsForField) return null; // By using `[0]`, we are currently assuming only 1 facet per field. This will likely be enforced
      // in future version, so instead of an array, there will only be one facet allowed per field.

      var facet = facetsForField[0];
      var facetValues = markSelectedFacetValuesFromFilters(facet, filters, field, filterType).data;
      var selectedValues = facetValues.filter(function (fv) {
        return fv.selected;
      }).map(function (fv) {
        return fv.value;
      });
      if (!facetValues.length && !selectedValues.length) return null;

      if (searchTerm.trim()) {
        facetValues = facetValues.filter(function (option) {
          return accentFold(option.value).toLowerCase().includes(accentFold(searchTerm).toLowerCase());
        });
      }

      var View = view || MultiCheckboxFacet;
      return View(_objectSpread({
        className: className,
        label: label,
        onMoreClick: this.handleClickMore.bind(this, facetValues.length),
        onRemove: function onRemove(value) {
          removeFilter(field, value, filterType);
        },
        onChange: function onChange(value) {
          setFilter(field, value, filterType);
        },
        onSelect: function onSelect(value) {
          addFilter(field, value, filterType);
        },
        options: facetValues.slice(0, more),
        showMore: facetValues.length > more,
        values: selectedValues,
        showSearch: isFilterable,
        onSearch: function onSearch(value) {
          _this2.handleFacetSearch(value);
        },
        searchPlaceholder: "Filter ".concat(field)
      }, rest));
    }
  }]);

  return FacetContainer;
}(Component);

_defineProperty(FacetContainer, "propTypes", {
  // Props
  className: PropTypes.string,
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  filterType: FilterType,
  show: PropTypes.number,
  view: PropTypes.func,
  isFilterable: PropTypes.bool,
  // State
  filters: PropTypes.arrayOf(Filter).isRequired,
  facets: PropTypes.objectOf(PropTypes.arrayOf(Facet)).isRequired,
  // Actions
  addFilter: PropTypes.func.isRequired,
  removeFilter: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  a11yNotify: PropTypes.func.isRequired
});

_defineProperty(FacetContainer, "defaultProps", {
  filterType: "all",
  isFilterable: false
});

export default withSearch(function (_ref3) {
  var filters = _ref3.filters,
      facets = _ref3.facets,
      addFilter = _ref3.addFilter,
      removeFilter = _ref3.removeFilter,
      setFilter = _ref3.setFilter,
      a11yNotify = _ref3.a11yNotify;
  return {
    filters: filters,
    facets: facets,
    addFilter: addFilter,
    removeFilter: removeFilter,
    setFilter: setFilter,
    a11yNotify: a11yNotify
  };
})(FacetContainer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250YWluZXJzL0ZhY2V0LmpzIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIkNvbXBvbmVudCIsIk11bHRpQ2hlY2tib3hGYWNldCIsImhlbHBlcnMiLCJGYWNldCIsIkZpbHRlciIsIkZpbHRlclR5cGUiLCJhY2NlbnRGb2xkIiwid2l0aFNlYXJjaCIsIm1hcmtTZWxlY3RlZEZhY2V0VmFsdWVzRnJvbUZpbHRlcnMiLCJGYWNldENvbnRhaW5lciIsInNob3ciLCJ0b3RhbE9wdGlvbnMiLCJzZXRTdGF0ZSIsIm1vcmUiLCJ2aXNpYmxlT3B0aW9uc0NvdW50Iiwic2hvd2luZ0FsbCIsInByb3BzIiwiYTExeU5vdGlmeSIsInNlYXJjaFRlcm0iLCJzdGF0ZSIsImFkZEZpbHRlciIsImNsYXNzTmFtZSIsImZhY2V0cyIsImZpZWxkIiwiZmlsdGVyVHlwZSIsImZpbHRlcnMiLCJsYWJlbCIsInJlbW92ZUZpbHRlciIsInNldEZpbHRlciIsInZpZXciLCJpc0ZpbHRlcmFibGUiLCJyZXN0IiwiZmFjZXRzRm9yRmllbGQiLCJmYWNldCIsImZhY2V0VmFsdWVzIiwiZGF0YSIsInNlbGVjdGVkVmFsdWVzIiwiZmlsdGVyIiwiZnYiLCJzZWxlY3RlZCIsIm1hcCIsInZhbHVlIiwibGVuZ3RoIiwidHJpbSIsIm9wdGlvbiIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJWaWV3Iiwib25Nb3JlQ2xpY2siLCJoYW5kbGVDbGlja01vcmUiLCJiaW5kIiwib25SZW1vdmUiLCJvbkNoYW5nZSIsIm9uU2VsZWN0Iiwib3B0aW9ucyIsInNsaWNlIiwic2hvd01vcmUiLCJ2YWx1ZXMiLCJzaG93U2VhcmNoIiwib25TZWFyY2giLCJoYW5kbGVGYWNldFNlYXJjaCIsInNlYXJjaFBsYWNlaG9sZGVyIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImZ1bmMiLCJib29sIiwiYXJyYXlPZiIsIm9iamVjdE9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7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QixTQUFTLENBQUNrRSxJQUFWLENBQWVGLFVBYlQ7QUFjakJwQyxFQUFBQSxZQUFZLEVBQUU1QixTQUFTLENBQUNrRSxJQUFWLENBQWVGLFVBZFo7QUFlakJuQyxFQUFBQSxTQUFTLEVBQUU3QixTQUFTLENBQUNrRSxJQUFWLENBQWVGLFVBZlQ7QUFnQmpCOUMsRUFBQUEsVUFBVSxFQUFFbEIsU0FBUyxDQUFDa0UsSUFBVixDQUFlRjtBQWhCVixDOztnQkFEUnRELGMsa0JBb0JXO0FBQ3BCZSxFQUFBQSxVQUFVLEVBQUUsS0FEUTtBQUVwQk0sRUFBQUEsWUFBWSxFQUFFO0FBRk0sQzs7QUF3R3hCLGVBQWV2QixVQUFVLENBQ3ZCO0FBQUEsTUFBR2tCLE9BQUgsU0FBR0EsT0FBSDtBQUFBLE1BQVlILE1BQVosU0FBWUEsTUFBWjtBQUFBLE1BQW9CRixTQUFwQixTQUFvQkEsU0FBcEI7QUFBQSxNQUErQk8sWUFBL0IsU0FBK0JBLFlBQS9CO0FBQUEsTUFBNkNDLFNBQTdDLFNBQTZDQSxTQUE3QztBQUFBLE1BQXdEWCxVQUF4RCxTQUF3REEsVUFBeEQ7QUFBQSxTQUEwRTtBQUN4RVEsSUFBQUEsT0FBTyxFQUFQQSxPQUR3RTtBQUV4RUgsSUFBQUEsTUFBTSxFQUFOQSxNQUZ3RTtBQUd4RUYsSUFBQUEsU0FBUyxFQUFUQSxTQUh3RTtBQUl4RU8sSUFBQUEsWUFBWSxFQUFaQSxZQUp3RTtBQUt4RUMsSUFBQUEsU0FBUyxFQUFUQSxTQUx3RTtBQU14RVgsSUFBQUEsVUFBVSxFQUFWQTtBQU53RSxHQUExRTtBQUFBLENBRHVCLENBQVYsQ0FTYlIsY0FUYSxDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNdWx0aUNoZWNrYm94RmFjZXQgfSBmcm9tIFwiQGVsYXN0aWMvcmVhY3Qtc2VhcmNoLXVpLXZpZXdzXCI7XG5pbXBvcnQgeyBoZWxwZXJzIH0gZnJvbSBcIkBlbGFzdGljL3NlYXJjaC11aVwiO1xuXG5pbXBvcnQgeyBGYWNldCwgRmlsdGVyLCBGaWx0ZXJUeXBlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBhY2NlbnRGb2xkIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcbmltcG9ydCB7IHdpdGhTZWFyY2ggfSBmcm9tIFwiLi5cIjtcblxuY29uc3QgeyBtYXJrU2VsZWN0ZWRGYWNldFZhbHVlc0Zyb21GaWx0ZXJzIH0gPSBoZWxwZXJzO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8vIFByb3BzXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBmaWx0ZXJUeXBlOiBGaWx0ZXJUeXBlLFxuICAgIHNob3c6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdmlldzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaXNGaWx0ZXJhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvLyBTdGF0ZVxuICAgIGZpbHRlcnM6IFByb3BUeXBlcy5hcnJheU9mKEZpbHRlcikuaXNSZXF1aXJlZCxcbiAgICBmYWNldHM6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuYXJyYXlPZihGYWNldCkpLmlzUmVxdWlyZWQsXG4gICAgLy8gQWN0aW9uc1xuICAgIGFkZEZpbHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICByZW1vdmVGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2V0RmlsdGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGExMXlOb3RpZnk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGZpbHRlclR5cGU6IFwiYWxsXCIsXG4gICAgaXNGaWx0ZXJhYmxlOiBmYWxzZVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHsgc2hvdyA9IDUgfSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vcmU6IHNob3csXG4gICAgICBzZWFyY2hUZXJtOiBcIlwiXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrTW9yZSA9IHRvdGFsT3B0aW9ucyA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSgoeyBtb3JlIH0pID0+IHtcbiAgICAgIGxldCB2aXNpYmxlT3B0aW9uc0NvdW50ID0gbW9yZSArIDEwO1xuICAgICAgY29uc3Qgc2hvd2luZ0FsbCA9IHZpc2libGVPcHRpb25zQ291bnQgPj0gdG90YWxPcHRpb25zO1xuICAgICAgaWYgKHNob3dpbmdBbGwpIHZpc2libGVPcHRpb25zQ291bnQgPSB0b3RhbE9wdGlvbnM7XG5cbiAgICAgIHRoaXMucHJvcHMuYTExeU5vdGlmeShcIm1vcmVGaWx0ZXJzXCIsIHsgdmlzaWJsZU9wdGlvbnNDb3VudCwgc2hvd2luZ0FsbCB9KTtcblxuICAgICAgcmV0dXJuIHsgbW9yZTogdmlzaWJsZU9wdGlvbnNDb3VudCB9O1xuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUZhY2V0U2VhcmNoID0gc2VhcmNoVGVybSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFRlcm0gfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbW9yZSwgc2VhcmNoVGVybSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7XG4gICAgICBhZGRGaWx0ZXIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBmYWNldHMsXG4gICAgICBmaWVsZCxcbiAgICAgIGZpbHRlclR5cGUsXG4gICAgICBmaWx0ZXJzLFxuICAgICAgbGFiZWwsXG4gICAgICByZW1vdmVGaWx0ZXIsXG4gICAgICBzZXRGaWx0ZXIsXG4gICAgICB2aWV3LFxuICAgICAgaXNGaWx0ZXJhYmxlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICBhMTF5Tm90aWZ5LFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGZhY2V0c0ZvckZpZWxkID0gZmFjZXRzW2ZpZWxkXTtcblxuICAgIGlmICghZmFjZXRzRm9yRmllbGQpIHJldHVybiBudWxsO1xuXG4gICAgLy8gQnkgdXNpbmcgYFswXWAsIHdlIGFyZSBjdXJyZW50bHkgYXNzdW1pbmcgb25seSAxIGZhY2V0IHBlciBmaWVsZC4gVGhpcyB3aWxsIGxpa2VseSBiZSBlbmZvcmNlZFxuICAgIC8vIGluIGZ1dHVyZSB2ZXJzaW9uLCBzbyBpbnN0ZWFkIG9mIGFuIGFycmF5LCB0aGVyZSB3aWxsIG9ubHkgYmUgb25lIGZhY2V0IGFsbG93ZWQgcGVyIGZpZWxkLlxuICAgIGNvbnN0IGZhY2V0ID0gZmFjZXRzRm9yRmllbGRbMF07XG5cbiAgICBsZXQgZmFjZXRWYWx1ZXMgPSBtYXJrU2VsZWN0ZWRGYWNldFZhbHVlc0Zyb21GaWx0ZXJzKFxuICAgICAgZmFjZXQsXG4gICAgICBmaWx0ZXJzLFxuICAgICAgZmllbGQsXG4gICAgICBmaWx0ZXJUeXBlXG4gICAgKS5kYXRhO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXMgPSBmYWNldFZhbHVlc1xuICAgICAgLmZpbHRlcihmdiA9PiBmdi5zZWxlY3RlZClcbiAgICAgIC5tYXAoZnYgPT4gZnYudmFsdWUpO1xuXG4gICAgaWYgKCFmYWNldFZhbHVlcy5sZW5ndGggJiYgIXNlbGVjdGVkVmFsdWVzLmxlbmd0aCkgcmV0dXJuIG51bGw7XG5cbiAgICBpZiAoc2VhcmNoVGVybS50cmltKCkpIHtcbiAgICAgIGZhY2V0VmFsdWVzID0gZmFjZXRWYWx1ZXMuZmlsdGVyKG9wdGlvbiA9PlxuICAgICAgICBhY2NlbnRGb2xkKG9wdGlvbi52YWx1ZSlcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIC5pbmNsdWRlcyhhY2NlbnRGb2xkKHNlYXJjaFRlcm0pLnRvTG93ZXJDYXNlKCkpXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IFZpZXcgPSB2aWV3IHx8IE11bHRpQ2hlY2tib3hGYWNldDtcblxuICAgIHJldHVybiBWaWV3KHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgIG9uTW9yZUNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrTW9yZS5iaW5kKHRoaXMsIGZhY2V0VmFsdWVzLmxlbmd0aCksXG4gICAgICBvblJlbW92ZTogdmFsdWUgPT4ge1xuICAgICAgICByZW1vdmVGaWx0ZXIoZmllbGQsIHZhbHVlLCBmaWx0ZXJUeXBlKTtcbiAgICAgIH0sXG4gICAgICBvbkNoYW5nZTogdmFsdWUgPT4ge1xuICAgICAgICBzZXRGaWx0ZXIoZmllbGQsIHZhbHVlLCBmaWx0ZXJUeXBlKTtcbiAgICAgIH0sXG4gICAgICBvblNlbGVjdDogdmFsdWUgPT4ge1xuICAgICAgICBhZGRGaWx0ZXIoZmllbGQsIHZhbHVlLCBmaWx0ZXJUeXBlKTtcbiAgICAgIH0sXG4gICAgICBvcHRpb25zOiBmYWNldFZhbHVlcy5zbGljZSgwLCBtb3JlKSxcbiAgICAgIHNob3dNb3JlOiBmYWNldFZhbHVlcy5sZW5ndGggPiBtb3JlLFxuICAgICAgdmFsdWVzOiBzZWxlY3RlZFZhbHVlcyxcbiAgICAgIHNob3dTZWFyY2g6IGlzRmlsdGVyYWJsZSxcbiAgICAgIG9uU2VhcmNoOiB2YWx1ZSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlRmFjZXRTZWFyY2godmFsdWUpO1xuICAgICAgfSxcbiAgICAgIHNlYXJjaFBsYWNlaG9sZGVyOiBgRmlsdGVyICR7ZmllbGR9YCxcbiAgICAgIC4uLnJlc3RcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VhcmNoKFxuICAoeyBmaWx0ZXJzLCBmYWNldHMsIGFkZEZpbHRlciwgcmVtb3ZlRmlsdGVyLCBzZXRGaWx0ZXIsIGExMXlOb3RpZnkgfSkgPT4gKHtcbiAgICBmaWx0ZXJzLFxuICAgIGZhY2V0cyxcbiAgICBhZGRGaWx0ZXIsXG4gICAgcmVtb3ZlRmlsdGVyLFxuICAgIHNldEZpbHRlcixcbiAgICBhMTF5Tm90aWZ5XG4gIH0pXG4pKEZhY2V0Q29udGFpbmVyKTtcbiJdfQ==