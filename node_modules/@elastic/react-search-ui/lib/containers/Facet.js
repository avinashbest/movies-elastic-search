"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FacetContainer = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _reactSearchUiViews = require("@elastic/react-search-ui-views");

var _searchUi = require("@elastic/search-ui");

var _types = require("../types");

var _helpers = require("../helpers");

var _ = require("..");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var markSelectedFacetValuesFromFilters = _searchUi.helpers.markSelectedFacetValuesFromFilters;

var FacetContainer = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(FacetContainer, _Component);

  var _super = _createSuper(FacetContainer);

  function FacetContainer(_ref) {
    var _this;

    var _ref$show = _ref.show,
        show = _ref$show === void 0 ? 5 : _ref$show;
    (0, _classCallCheck2.default)(this, FacetContainer);
    _this = _super.call(this);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClickMore", function (totalOptions) {
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
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleFacetSearch", function (searchTerm) {
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

  (0, _createClass2.default)(FacetContainer, [{
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
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["addFilter", "className", "facets", "field", "filterType", "filters", "label", "removeFilter", "setFilter", "view", "isFilterable", "a11yNotify"]);
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
          return (0, _helpers.accentFold)(option.value).toLowerCase().includes((0, _helpers.accentFold)(searchTerm).toLowerCase());
        });
      }

      var View = view || _reactSearchUiViews.MultiCheckboxFacet;
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
}(_react.Component);

exports.FacetContainer = FacetContainer;
(0, _defineProperty2.default)(FacetContainer, "propTypes", {
  // Props
  className: _propTypes.default.string,
  field: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  filterType: _types.FilterType,
  show: _propTypes.default.number,
  view: _propTypes.default.func,
  isFilterable: _propTypes.default.bool,
  // State
  filters: _propTypes.default.arrayOf(_types.Filter).isRequired,
  facets: _propTypes.default.objectOf(_propTypes.default.arrayOf(_types.Facet)).isRequired,
  // Actions
  addFilter: _propTypes.default.func.isRequired,
  removeFilter: _propTypes.default.func.isRequired,
  setFilter: _propTypes.default.func.isRequired,
  a11yNotify: _propTypes.default.func.isRequired
});
(0, _defineProperty2.default)(FacetContainer, "defaultProps", {
  filterType: "all",
  isFilterable: false
});

var _default = (0, _.withSearch)(function (_ref3) {
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

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250YWluZXJzL0ZhY2V0LmpzIl0sIm5hbWVzIjpbIm1hcmtTZWxlY3RlZEZhY2V0VmFsdWVzRnJvbUZpbHRlcnMiLCJoZWxwZXJzIiwiRmFjZXRDb250YWluZXIiLCJzaG93IiwidG90YWxPcHRpb25zIiwic2V0U3RhdGUiLCJtb3JlIiwidmlzaWJsZU9wdGlvbnNDb3VudCIsInNob3dpbmdBbGwiLCJwcm9wcyIsImExMXlOb3RpZnkiLCJzZWFyY2hUZXJtIiwic3RhdGUiLCJhZGRGaWx0ZXIiLCJjbGFzc05hbWUiLCJmYWNldHMiLCJmaWVsZCIsImZpbHRlclR5cGUiLCJmaWx0ZXJzIiwibGFiZWwiLCJyZW1vdmVGaWx0ZXIiLCJzZXRGaWx0ZXIiLCJ2aWV3IiwiaXNGaWx0ZXJhYmxlIiwicmVzdCIsImZhY2V0c0ZvckZpZWxkIiwiZmFjZXQiLCJmYWNldFZhbHVlcyIsImRhdGEiLCJzZWxlY3RlZFZhbHVlcyIsImZpbHRlciIsImZ2Iiwic2VsZWN0ZWQiLCJtYXAiLCJ2YWx1ZSIsImxlbmd0aCIsInRyaW0iLCJvcHRpb24iLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiVmlldyIsIk11bHRpQ2hlY2tib3hGYWNldCIsIm9uTW9yZUNsaWNrIiwiaGFuZGxlQ2xpY2tNb3JlIiwiYmluZCIsIm9uUmVtb3ZlIiwib25DaGFuZ2UiLCJvblNlbGVjdCIsIm9wdGlvbnMiLCJzbGljZSIsInNob3dNb3JlIiwidmFsdWVzIiwic2hvd1NlYXJjaCIsIm9uU2VhcmNoIiwiaGFuZGxlRmFjZXRTZWFyY2giLCJzZWFyY2hQbGFjZWhvbGRlciIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJGaWx0ZXJUeXBlIiwibnVtYmVyIiwiZnVuYyIsImJvb2wiLCJhcnJheU9mIiwiRmlsdGVyIiwib2JqZWN0T2YiLCJGYWNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztB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QSxNQUFaO0FBQUEsTUFBb0JGLFNBQXBCLFNBQW9CQSxTQUFwQjtBQUFBLE1BQStCTyxZQUEvQixTQUErQkEsWUFBL0I7QUFBQSxNQUE2Q0MsU0FBN0MsU0FBNkNBLFNBQTdDO0FBQUEsTUFBd0RYLFVBQXhELFNBQXdEQSxVQUF4RDtBQUFBLFNBQTBFO0FBQ3hFUSxJQUFBQSxPQUFPLEVBQVBBLE9BRHdFO0FBRXhFSCxJQUFBQSxNQUFNLEVBQU5BLE1BRndFO0FBR3hFRixJQUFBQSxTQUFTLEVBQVRBLFNBSHdFO0FBSXhFTyxJQUFBQSxZQUFZLEVBQVpBLFlBSndFO0FBS3hFQyxJQUFBQSxTQUFTLEVBQVRBLFNBTHdFO0FBTXhFWCxJQUFBQSxVQUFVLEVBQVZBO0FBTndFLEdBQTFFO0FBQUEsQ0FEYSxFQVNiUixjQVRhLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE11bHRpQ2hlY2tib3hGYWNldCB9IGZyb20gXCJAZWxhc3RpYy9yZWFjdC1zZWFyY2gtdWktdmlld3NcIjtcbmltcG9ydCB7IGhlbHBlcnMgfSBmcm9tIFwiQGVsYXN0aWMvc2VhcmNoLXVpXCI7XG5cbmltcG9ydCB7IEZhY2V0LCBGaWx0ZXIsIEZpbHRlclR5cGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGFjY2VudEZvbGQgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xuaW1wb3J0IHsgd2l0aFNlYXJjaCB9IGZyb20gXCIuLlwiO1xuXG5jb25zdCB7IG1hcmtTZWxlY3RlZEZhY2V0VmFsdWVzRnJvbUZpbHRlcnMgfSA9IGhlbHBlcnM7XG5cbmV4cG9ydCBjbGFzcyBGYWNldENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLy8gUHJvcHNcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmllbGQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGZpbHRlclR5cGU6IEZpbHRlclR5cGUsXG4gICAgc2hvdzogUHJvcFR5cGVzLm51bWJlcixcbiAgICB2aWV3OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpc0ZpbHRlcmFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8vIFN0YXRlXG4gICAgZmlsdGVyczogUHJvcFR5cGVzLmFycmF5T2YoRmlsdGVyKS5pc1JlcXVpcmVkLFxuICAgIGZhY2V0czogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5hcnJheU9mKEZhY2V0KSkuaXNSZXF1aXJlZCxcbiAgICAvLyBBY3Rpb25zXG4gICAgYWRkRmlsdGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHJlbW92ZUZpbHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzZXRGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgYTExeU5vdGlmeTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZmlsdGVyVHlwZTogXCJhbGxcIixcbiAgICBpc0ZpbHRlcmFibGU6IGZhbHNlXG4gIH07XG5cbiAgY29uc3RydWN0b3IoeyBzaG93ID0gNSB9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW9yZTogc2hvdyxcbiAgICAgIHNlYXJjaFRlcm06IFwiXCJcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlQ2xpY2tNb3JlID0gdG90YWxPcHRpb25zID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKCh7IG1vcmUgfSkgPT4ge1xuICAgICAgbGV0IHZpc2libGVPcHRpb25zQ291bnQgPSBtb3JlICsgMTA7XG4gICAgICBjb25zdCBzaG93aW5nQWxsID0gdmlzaWJsZU9wdGlvbnNDb3VudCA+PSB0b3RhbE9wdGlvbnM7XG4gICAgICBpZiAoc2hvd2luZ0FsbCkgdmlzaWJsZU9wdGlvbnNDb3VudCA9IHRvdGFsT3B0aW9ucztcblxuICAgICAgdGhpcy5wcm9wcy5hMTF5Tm90aWZ5KFwibW9yZUZpbHRlcnNcIiwgeyB2aXNpYmxlT3B0aW9uc0NvdW50LCBzaG93aW5nQWxsIH0pO1xuXG4gICAgICByZXR1cm4geyBtb3JlOiB2aXNpYmxlT3B0aW9uc0NvdW50IH07XG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlRmFjZXRTZWFyY2ggPSBzZWFyY2hUZXJtID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVGVybSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtb3JlLCBzZWFyY2hUZXJtIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIGFkZEZpbHRlcixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGZhY2V0cyxcbiAgICAgIGZpZWxkLFxuICAgICAgZmlsdGVyVHlwZSxcbiAgICAgIGZpbHRlcnMsXG4gICAgICBsYWJlbCxcbiAgICAgIHJlbW92ZUZpbHRlcixcbiAgICAgIHNldEZpbHRlcixcbiAgICAgIHZpZXcsXG4gICAgICBpc0ZpbHRlcmFibGUsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIGExMXlOb3RpZnksXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZmFjZXRzRm9yRmllbGQgPSBmYWNldHNbZmllbGRdO1xuXG4gICAgaWYgKCFmYWNldHNGb3JGaWVsZCkgcmV0dXJuIG51bGw7XG5cbiAgICAvLyBCeSB1c2luZyBgWzBdYCwgd2UgYXJlIGN1cnJlbnRseSBhc3N1bWluZyBvbmx5IDEgZmFjZXQgcGVyIGZpZWxkLiBUaGlzIHdpbGwgbGlrZWx5IGJlIGVuZm9yY2VkXG4gICAgLy8gaW4gZnV0dXJlIHZlcnNpb24sIHNvIGluc3RlYWQgb2YgYW4gYXJyYXksIHRoZXJlIHdpbGwgb25seSBiZSBvbmUgZmFjZXQgYWxsb3dlZCBwZXIgZmllbGQuXG4gICAgY29uc3QgZmFjZXQgPSBmYWNldHNGb3JGaWVsZFswXTtcblxuICAgIGxldCBmYWNldFZhbHVlcyA9IG1hcmtTZWxlY3RlZEZhY2V0VmFsdWVzRnJvbUZpbHRlcnMoXG4gICAgICBmYWNldCxcbiAgICAgIGZpbHRlcnMsXG4gICAgICBmaWVsZCxcbiAgICAgIGZpbHRlclR5cGVcbiAgICApLmRhdGE7XG5cbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlcyA9IGZhY2V0VmFsdWVzXG4gICAgICAuZmlsdGVyKGZ2ID0+IGZ2LnNlbGVjdGVkKVxuICAgICAgLm1hcChmdiA9PiBmdi52YWx1ZSk7XG5cbiAgICBpZiAoIWZhY2V0VmFsdWVzLmxlbmd0aCAmJiAhc2VsZWN0ZWRWYWx1ZXMubGVuZ3RoKSByZXR1cm4gbnVsbDtcblxuICAgIGlmIChzZWFyY2hUZXJtLnRyaW0oKSkge1xuICAgICAgZmFjZXRWYWx1ZXMgPSBmYWNldFZhbHVlcy5maWx0ZXIob3B0aW9uID0+XG4gICAgICAgIGFjY2VudEZvbGQob3B0aW9uLnZhbHVlKVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgLmluY2x1ZGVzKGFjY2VudEZvbGQoc2VhcmNoVGVybSkudG9Mb3dlckNhc2UoKSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgVmlldyA9IHZpZXcgfHwgTXVsdGlDaGVja2JveEZhY2V0O1xuXG4gICAgcmV0dXJuIFZpZXcoe1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgb25Nb3JlQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2tNb3JlLmJpbmQodGhpcywgZmFjZXRWYWx1ZXMubGVuZ3RoKSxcbiAgICAgIG9uUmVtb3ZlOiB2YWx1ZSA9PiB7XG4gICAgICAgIHJlbW92ZUZpbHRlcihmaWVsZCwgdmFsdWUsIGZpbHRlclR5cGUpO1xuICAgICAgfSxcbiAgICAgIG9uQ2hhbmdlOiB2YWx1ZSA9PiB7XG4gICAgICAgIHNldEZpbHRlcihmaWVsZCwgdmFsdWUsIGZpbHRlclR5cGUpO1xuICAgICAgfSxcbiAgICAgIG9uU2VsZWN0OiB2YWx1ZSA9PiB7XG4gICAgICAgIGFkZEZpbHRlcihmaWVsZCwgdmFsdWUsIGZpbHRlclR5cGUpO1xuICAgICAgfSxcbiAgICAgIG9wdGlvbnM6IGZhY2V0VmFsdWVzLnNsaWNlKDAsIG1vcmUpLFxuICAgICAgc2hvd01vcmU6IGZhY2V0VmFsdWVzLmxlbmd0aCA+IG1vcmUsXG4gICAgICB2YWx1ZXM6IHNlbGVjdGVkVmFsdWVzLFxuICAgICAgc2hvd1NlYXJjaDogaXNGaWx0ZXJhYmxlLFxuICAgICAgb25TZWFyY2g6IHZhbHVlID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVGYWNldFNlYXJjaCh2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgc2VhcmNoUGxhY2Vob2xkZXI6IGBGaWx0ZXIgJHtmaWVsZH1gLFxuICAgICAgLi4ucmVzdFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTZWFyY2goXG4gICh7IGZpbHRlcnMsIGZhY2V0cywgYWRkRmlsdGVyLCByZW1vdmVGaWx0ZXIsIHNldEZpbHRlciwgYTExeU5vdGlmeSB9KSA9PiAoe1xuICAgIGZpbHRlcnMsXG4gICAgZmFjZXRzLFxuICAgIGFkZEZpbHRlcixcbiAgICByZW1vdmVGaWx0ZXIsXG4gICAgc2V0RmlsdGVyLFxuICAgIGExMXlOb3RpZnlcbiAgfSlcbikoRmFjZXRDb250YWluZXIpO1xuIl19