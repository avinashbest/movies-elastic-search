"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SearchBoxContainer = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

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

var _2 = require("..");

var _types = require("../types");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var SearchBoxContainer = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(SearchBoxContainer, _Component);

  var _super = _createSuper(SearchBoxContainer);

  function SearchBoxContainer() {
    var _this;

    (0, _classCallCheck2.default)(this, SearchBoxContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isFocused: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleFocus", function () {
      _this.setState({
        isFocused: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleBlur", function () {
      _this.setState({
        isFocused: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "completeSuggestion", function (searchTerm) {
      var _this$props = _this.props,
          shouldClearFilters = _this$props.shouldClearFilters,
          setSearchTerm = _this$props.setSearchTerm;
      setSearchTerm(searchTerm, {
        shouldClearFilters: shouldClearFilters
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleSubmit", function (e) {
      var _this$props2 = _this.props,
          shouldClearFilters = _this$props2.shouldClearFilters,
          searchTerm = _this$props2.searchTerm,
          setSearchTerm = _this$props2.setSearchTerm;
      e.preventDefault();
      setSearchTerm(searchTerm, {
        shouldClearFilters: shouldClearFilters
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChange", function (value) {
      var _this$props3 = _this.props,
          autocompleteMinimumCharacters = _this$props3.autocompleteMinimumCharacters,
          autocompleteResults = _this$props3.autocompleteResults,
          autocompleteSuggestions = _this$props3.autocompleteSuggestions,
          shouldClearFilters = _this$props3.shouldClearFilters,
          searchAsYouType = _this$props3.searchAsYouType,
          setSearchTerm = _this$props3.setSearchTerm,
          debounceLength = _this$props3.debounceLength;

      var options = _objectSpread(_objectSpread({
        autocompleteMinimumCharacters: autocompleteMinimumCharacters
      }, (autocompleteResults || autocompleteSuggestions || searchAsYouType) && {
        debounce: debounceLength || 200
      }), {}, {
        shouldClearFilters: shouldClearFilters,
        refresh: !!searchAsYouType,
        autocompleteResults: !!autocompleteResults,
        autocompleteSuggestions: !!autocompleteSuggestions
      });

      setSearchTerm(value, options);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleNotifyAutocompleteSelected", function (selection) {
      var _this$props4 = _this.props,
          autocompleteResults = _this$props4.autocompleteResults,
          trackAutocompleteClickThrough = _this$props4.trackAutocompleteClickThrough; // Because suggestions don't count as clickthroughs, only
      // results

      if (autocompleteResults && autocompleteResults.shouldTrackClickThrough !== false && !selection.suggestion) {
        var _autocompleteResults$ = autocompleteResults.clickThroughTags,
            clickThroughTags = _autocompleteResults$ === void 0 ? [] : _autocompleteResults$;
        var id = selection.id.raw;
        trackAutocompleteClickThrough(id, clickThroughTags);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "defaultOnSelectAutocomplete", function (selection) {
      if (!selection) return;
      var autocompleteResults = _this.props.autocompleteResults;

      _this.handleNotifyAutocompleteSelected(selection);

      if (!selection.suggestion) {
        var url = selection[autocompleteResults.urlField] ? selection[autocompleteResults.urlField].raw : "";

        if (url) {
          var target = autocompleteResults.linkTarget || "_self";
          window.open(url, target);
        }
      } else {
        _this.completeSuggestion(selection.suggestion);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(SearchBoxContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var isFocused = this.state.isFocused;
      var _this$props5 = this.props,
          autocompleteMinimumCharacters = _this$props5.autocompleteMinimumCharacters,
          autocompleteResults = _this$props5.autocompleteResults,
          autocompleteSuggestions = _this$props5.autocompleteSuggestions,
          autocompletedResults = _this$props5.autocompletedResults,
          autocompletedSuggestions = _this$props5.autocompletedSuggestions,
          className = _this$props5.className,
          autocompleteView = _this$props5.autocompleteView,
          inputProps = _this$props5.inputProps,
          inputView = _this$props5.inputView,
          onSelectAutocomplete = _this$props5.onSelectAutocomplete,
          onSubmit = _this$props5.onSubmit,
          searchTerm = _this$props5.searchTerm,
          view = _this$props5.view,
          rest = (0, _objectWithoutProperties2.default)(_this$props5, ["autocompleteMinimumCharacters", "autocompleteResults", "autocompleteSuggestions", "autocompletedResults", "autocompletedSuggestions", "className", "autocompleteView", "inputProps", "inputView", "onSelectAutocomplete", "onSubmit", "searchTerm", "view"]);
      var View = view || _reactSearchUiViews.SearchBox;
      var useAutocomplete = (!!autocompleteResults || !!autocompleteSuggestions) && searchTerm.length >= autocompleteMinimumCharacters;
      var autocompletedSuggestionsCount = Object.entries(autocompletedSuggestions // eslint-disable-next-line no-unused-vars
      ).reduce(function (acc, _ref) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
            _ = _ref2[0],
            value = _ref2[1];

        return acc + value.length;
      }, 0);
      var allAutocompletedItemsCount = autocompletedSuggestionsCount + autocompletedResults.length;
      var handleOnSelectAutocomplete;

      if (onSelectAutocomplete) {
        handleOnSelectAutocomplete = function handleOnSelectAutocomplete(selection) {
          onSelectAutocomplete(selection, {
            notifyAutocompleteSelected: _this2.handleNotifyAutocompleteSelected,
            completeSuggestion: _this2.completeSuggestion,
            autocompleteResults: _this2.props.autocompleteResults
          }, _this2.defaultOnSelectAutocomplete);
        };
      }

      return View(_objectSpread({
        allAutocompletedItemsCount: allAutocompletedItemsCount,
        autocompleteView: autocompleteView,
        autocompleteResults: autocompleteResults,
        autocompleteSuggestions: autocompleteSuggestions,
        autocompletedResults: autocompletedResults,
        autocompletedSuggestions: autocompletedSuggestions,
        className: className,
        autocompletedSuggestionsCount: autocompletedSuggestionsCount,
        completeSuggestion: this.completeSuggestion,
        isFocused: isFocused,
        notifyAutocompleteSelected: this.handleNotifyAutocompleteSelected,
        onChange: function onChange(value) {
          return _this2.handleChange(value);
        },
        onSelectAutocomplete: handleOnSelectAutocomplete || this.defaultOnSelectAutocomplete,
        onSubmit: onSubmit ? function (e) {
          e.preventDefault();
          onSubmit(searchTerm);
        } : this.handleSubmit,
        useAutocomplete: useAutocomplete,
        value: searchTerm,
        inputProps: _objectSpread({
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        }, inputProps),
        inputView: inputView
      }, rest));
    }
  }]);
  return SearchBoxContainer;
}(_react.Component);

exports.SearchBoxContainer = SearchBoxContainer;
(0, _defineProperty2.default)(SearchBoxContainer, "propTypes", {
  // Props
  autocompleteMinimumCharacters: _propTypes.default.number,
  autocompleteResults: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    clickThroughTags: _propTypes.default.arrayOf(_propTypes.default.string),
    linkTarget: _propTypes.default.string,
    sectionTitle: _propTypes.default.string,
    shouldTrackClickThrough: _propTypes.default.bool,
    titleField: _propTypes.default.string.isRequired,
    urlField: _propTypes.default.string.isRequired
  })]),
  autocompleteSuggestions: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.exact({
    sectionTitle: _propTypes.default.string
  }), _propTypes.default.objectOf(_propTypes.default.exact({
    sectionTitle: _propTypes.default.string
  }))]),
  autocompleteView: _propTypes.default.func,
  className: _propTypes.default.string,
  shouldClearFilters: _propTypes.default.bool,
  debounceLength: _propTypes.default.number,
  inputProps: _propTypes.default.object,
  inputView: _propTypes.default.func,
  onSelectAutocomplete: _propTypes.default.func,
  onSubmit: _propTypes.default.func,
  searchAsYouType: _propTypes.default.bool,
  view: _propTypes.default.func,
  // State
  autocompletedResults: _propTypes.default.arrayOf(_types.Result).isRequired,
  autocompletedSuggestions: _propTypes.default.objectOf(_propTypes.default.arrayOf(_types.Suggestion)).isRequired,
  searchTerm: _propTypes.default.string.isRequired,
  // Actions
  setSearchTerm: _propTypes.default.func.isRequired,
  trackAutocompleteClickThrough: _propTypes.default.func.isRequired
});
(0, _defineProperty2.default)(SearchBoxContainer, "defaultProps", {
  autocompleteMinimumCharacters: 0,
  shouldClearFilters: true
});

var _default = (0, _2.withSearch)(function (_ref3) {
  var autocompletedResults = _ref3.autocompletedResults,
      autocompletedSuggestions = _ref3.autocompletedSuggestions,
      searchTerm = _ref3.searchTerm,
      setSearchTerm = _ref3.setSearchTerm,
      trackAutocompleteClickThrough = _ref3.trackAutocompleteClickThrough;
  return {
    autocompletedResults: autocompletedResults,
    autocompletedSuggestions: autocompletedSuggestions,
    searchTerm: searchTerm,
    setSearchTerm: setSearchTerm,
    trackAutocompleteClickThrough: trackAutocompleteClickThrough
  };
})(SearchBoxContainer);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250YWluZXJzL1NlYXJjaEJveC5qcyJdLCJuYW1lcyI6WyJTZWFyY2hCb3hDb250YWluZXIiLCJpc0ZvY3VzZWQiLCJzZXRTdGF0ZSIsInNlYXJjaFRlcm0iLCJwcm9wcyIsInNob3VsZENsZWFyRmlsdGVycyIsInNldFNlYXJjaFRlcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsImF1dG9jb21wbGV0ZU1pbmltdW1DaGFyYWN0ZXJzIiwiYXV0b2NvbXBsZXRlUmVzdWx0cyIsImF1dG9jb21wbGV0ZVN1Z2dlc3Rpb25zIiwic2VhcmNoQXNZb3VUeXBlIiwiZGVib3VuY2VMZW5ndGgiLCJvcHRpb25zIiwiZGVib3VuY2UiLCJyZWZyZXNoIiwic2VsZWN0aW9uIiwidHJhY2tBdXRvY29tcGxldGVDbGlja1Rocm91Z2giLCJzaG91bGRUcmFja0NsaWNrVGhyb3VnaCIsInN1Z2dlc3Rpb24iLCJjbGlja1Rocm91Z2hUYWdzIiwiaWQiLCJyYXciLCJoYW5kbGVOb3RpZnlBdXRvY29tcGxldGVTZWxlY3RlZCIsInVybCIsInVybEZpZWxkIiwidGFyZ2V0IiwibGlua1RhcmdldCIsIndpbmRvdyIsIm9wZW4iLCJjb21wbGV0ZVN1Z2dlc3Rpb24iLCJzdGF0ZSIsImF1dG9jb21wbGV0ZWRSZXN1bHRzIiwiYXV0b2NvbXBsZXRlZFN1Z2dlc3Rpb25zIiwiY2xhc3NOYW1lIiwiYXV0b2NvbXBsZXRlVmlldyIsImlucHV0UHJvcHMiLCJpbnB1dFZpZXciLCJvblNlbGVjdEF1dG9jb21wbGV0ZSIsIm9uU3VibWl0IiwidmlldyIsInJlc3QiLCJWaWV3IiwiU2VhcmNoQm94IiwidXNlQXV0b2NvbXBsZXRlIiwibGVuZ3RoIiwiYXV0b2NvbXBsZXRlZFN1Z2dlc3Rpb25zQ291bnQiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVkdWNlIiwiYWNjIiwiXyIsImFsbEF1dG9jb21wbGV0ZWRJdGVtc0NvdW50IiwiaGFuZGxlT25TZWxlY3RBdXRvY29tcGxldGUiLCJub3RpZnlBdXRvY29tcGxldGVTZWxlY3RlZCIsImRlZmF1bHRPblNlbGVjdEF1dG9jb21wbGV0ZSIsIm9uQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlU3VibWl0Iiwib25Gb2N1cyIsImhhbmRsZUZvY3VzIiwib25CbHVyIiwiaGFuZGxlQmx1ciIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm51bWJlciIsIm9uZU9mVHlwZSIsImJvb2wiLCJzaGFwZSIsImFycmF5T2YiLCJzdHJpbmciLCJzZWN0aW9uVGl0bGUiLCJ0aXRsZUZpZWxkIiwiaXNSZXF1aXJlZCIsImV4YWN0Iiwib2JqZWN0T2YiLCJmdW5jIiwib2JqZWN0IiwiUmVzdWx0IiwiU3VnZ2VzdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7SUFFYUEsa0I7Ozs7Ozs7Ozs7Ozs7Ozt3RkFtREg7QUFDTkMsTUFBQUEsU0FBUyxFQUFFO0FBREwsSzs4RkFJTSxZQUFNO0FBQ2xCLFlBQUtDLFFBQUwsQ0FBYztBQUNaRCxRQUFBQSxTQUFTLEVBQUU7QUFEQyxPQUFkO0FBR0QsSzs2RkFFWSxZQUFNO0FBQ2pCLFlBQUtDLFFBQUwsQ0FBYztBQUNaRCxRQUFBQSxTQUFTLEVBQUU7QUFEQyxPQUFkO0FBR0QsSztxR0FFb0IsVUFBQUUsVUFBVSxFQUFJO0FBQUEsd0JBQ2EsTUFBS0MsS0FEbEI7QUFBQSxVQUN6QkMsa0JBRHlCLGVBQ3pCQSxrQkFEeUI7QUFBQSxVQUNMQyxhQURLLGVBQ0xBLGFBREs7QUFFakNBLE1BQUFBLGFBQWEsQ0FBQ0gsVUFBRCxFQUFhO0FBQ3hCRSxRQUFBQSxrQkFBa0IsRUFBbEJBO0FBRHdCLE9BQWIsQ0FBYjtBQUdELEs7K0ZBRWMsVUFBQUUsQ0FBQyxFQUFJO0FBQUEseUJBQ3dDLE1BQUtILEtBRDdDO0FBQUEsVUFDVkMsa0JBRFUsZ0JBQ1ZBLGtCQURVO0FBQUEsVUFDVUYsVUFEVixnQkFDVUEs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SkYsU0FJRUEsYUFKRjtBQUFBLE1BS0VhLDZCQUxGLFNBS0VBLDZCQUxGO0FBQUEsU0FNTztBQUNMZSxJQUFBQSxvQkFBb0IsRUFBcEJBLG9CQURLO0FBRUxDLElBQUFBLHdCQUF3QixFQUF4QkEsd0JBRks7QUFHTGhDLElBQUFBLFVBQVUsRUFBVkEsVUFISztBQUlMRyxJQUFBQSxhQUFhLEVBQWJBLGFBSks7QUFLTGEsSUFBQUEsNkJBQTZCLEVBQTdCQTtBQUxLLEdBTlA7QUFBQSxDQURhLEVBY2JuQixrQkFkYSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTZWFyY2hCb3ggfSBmcm9tIFwiQGVsYXN0aWMvcmVhY3Qtc2VhcmNoLXVpLXZpZXdzXCI7XG5cbmltcG9ydCB7IHdpdGhTZWFyY2ggfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IFJlc3VsdCwgU3VnZ2VzdGlvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoQm94Q29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvLyBQcm9wc1xuICAgIGF1dG9jb21wbGV0ZU1pbmltdW1DaGFyYWN0ZXJzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGF1dG9jb21wbGV0ZVJlc3VsdHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBjbGlja1Rocm91Z2hUYWdzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICAgICAgbGlua1RhcmdldDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc2VjdGlvblRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBzaG91bGRUcmFja0NsaWNrVGhyb3VnaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHRpdGxlRmllbGQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgdXJsRmllbGQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgICAgfSlcbiAgICBdKSxcbiAgICBhdXRvY29tcGxldGVTdWdnZXN0aW9uczogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5leGFjdCh7XG4gICAgICAgIHNlY3Rpb25UaXRsZTogUHJvcFR5cGVzLnN0cmluZ1xuICAgICAgfSksXG4gICAgICBQcm9wVHlwZXMub2JqZWN0T2YoXG4gICAgICAgIFByb3BUeXBlcy5leGFjdCh7XG4gICAgICAgICAgc2VjdGlvblRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgXSksXG4gICAgYXV0b2NvbXBsZXRlVmlldzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNob3VsZENsZWFyRmlsdGVyczogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGVib3VuY2VMZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpbnB1dFZpZXc6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2VsZWN0QXV0b2NvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2VhcmNoQXNZb3VUeXBlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB2aWV3OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvLyBTdGF0ZVxuICAgIGF1dG9jb21wbGV0ZWRSZXN1bHRzOiBQcm9wVHlwZXMuYXJyYXlPZihSZXN1bHQpLmlzUmVxdWlyZWQsXG4gICAgYXV0b2NvbXBsZXRlZFN1Z2dlc3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLmFycmF5T2YoU3VnZ2VzdGlvbikpXG4gICAgICAuaXNSZXF1aXJlZCxcbiAgICBzZWFyY2hUZXJtOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgLy8gQWN0aW9uc1xuICAgIHNldFNlYXJjaFRlcm06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdHJhY2tBdXRvY29tcGxldGVDbGlja1Rocm91Z2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGF1dG9jb21wbGV0ZU1pbmltdW1DaGFyYWN0ZXJzOiAwLFxuICAgIHNob3VsZENsZWFyRmlsdGVyczogdHJ1ZVxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIGlzRm9jdXNlZDogZmFsc2VcbiAgfTtcblxuICBoYW5kbGVGb2N1cyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRm9jdXNlZDogdHJ1ZVxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUJsdXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0ZvY3VzZWQ6IGZhbHNlXG4gICAgfSk7XG4gIH07XG5cbiAgY29tcGxldGVTdWdnZXN0aW9uID0gc2VhcmNoVGVybSA9PiB7XG4gICAgY29uc3QgeyBzaG91bGRDbGVhckZpbHRlcnMsIHNldFNlYXJjaFRlcm0gfSA9IHRoaXMucHJvcHM7XG4gICAgc2V0U2VhcmNoVGVybShzZWFyY2hUZXJtLCB7XG4gICAgICBzaG91bGRDbGVhckZpbHRlcnNcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICBjb25zdCB7IHNob3VsZENsZWFyRmlsdGVycywgc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRTZWFyY2hUZXJtKHNlYXJjaFRlcm0sIHtcbiAgICAgIHNob3VsZENsZWFyRmlsdGVyc1xuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNoYW5nZSA9IHZhbHVlID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBhdXRvY29tcGxldGVNaW5pbXVtQ2hhcmFjdGVycyxcbiAgICAgIGF1dG9jb21wbGV0ZVJlc3VsdHMsXG4gICAgICBhdXRvY29tcGxldGVTdWdnZXN0aW9ucyxcbiAgICAgIHNob3VsZENsZWFyRmlsdGVycyxcbiAgICAgIHNlYXJjaEFzWW91VHlwZSxcbiAgICAgIHNldFNlYXJjaFRlcm0sXG4gICAgICBkZWJvdW5jZUxlbmd0aFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGF1dG9jb21wbGV0ZU1pbmltdW1DaGFyYWN0ZXJzLFxuICAgICAgLi4uKChhdXRvY29tcGxldGVSZXN1bHRzIHx8XG4gICAgICAgIGF1dG9jb21wbGV0ZVN1Z2dlc3Rpb25zIHx8XG4gICAgICAgIHNlYXJjaEFzWW91VHlwZSkgJiYge1xuICAgICAgICBkZWJvdW5jZTogZGVib3VuY2VMZW5ndGggfHwgMjAwXG4gICAgICB9KSxcbiAgICAgIHNob3VsZENsZWFyRmlsdGVycyxcbiAgICAgIHJlZnJlc2g6ICEhc2VhcmNoQXNZb3VUeXBlLFxuICAgICAgYXV0b2NvbXBsZXRlUmVzdWx0czogISFhdXRvY29tcGxldGVSZXN1bHRzLFxuICAgICAgYXV0b2NvbXBsZXRlU3VnZ2VzdGlvbnM6ICEhYXV0b2NvbXBsZXRlU3VnZ2VzdGlvbnNcbiAgICB9O1xuXG4gICAgc2V0U2VhcmNoVGVybSh2YWx1ZSwgb3B0aW9ucyk7XG4gIH07XG5cbiAgaGFuZGxlTm90aWZ5QXV0b2NvbXBsZXRlU2VsZWN0ZWQgPSBzZWxlY3Rpb24gPT4ge1xuICAgIGNvbnN0IHsgYXV0b2NvbXBsZXRlUmVzdWx0cywgdHJhY2tBdXRvY29tcGxldGVDbGlja1Rocm91Z2ggfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gQmVjYXVzZSBzdWdnZXN0aW9ucyBkb24ndCBjb3VudCBhcyBjbGlja3Rocm91Z2hzLCBvbmx5XG4gICAgLy8gcmVzdWx0c1xuICAgIGlmIChcbiAgICAgIGF1dG9jb21wbGV0ZVJlc3VsdHMgJiZcbiAgICAgIGF1dG9jb21wbGV0ZVJlc3VsdHMuc2hvdWxkVHJhY2tDbGlja1Rocm91Z2ggIT09IGZhbHNlICYmXG4gICAgICAhc2VsZWN0aW9uLnN1Z2dlc3Rpb25cbiAgICApIHtcbiAgICAgIGNvbnN0IHsgY2xpY2tUaHJvdWdoVGFncyA9IFtdIH0gPSBhdXRvY29tcGxldGVSZXN1bHRzO1xuICAgICAgY29uc3QgaWQgPSBzZWxlY3Rpb24uaWQucmF3O1xuICAgICAgdHJhY2tBdXRvY29tcGxldGVDbGlja1Rocm91Z2goaWQsIGNsaWNrVGhyb3VnaFRhZ3MpO1xuICAgIH1cbiAgfTtcblxuICBkZWZhdWx0T25TZWxlY3RBdXRvY29tcGxldGUgPSBzZWxlY3Rpb24gPT4ge1xuICAgIGlmICghc2VsZWN0aW9uKSByZXR1cm47XG5cbiAgICBjb25zdCB7IGF1dG9jb21wbGV0ZVJlc3VsdHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLmhhbmRsZU5vdGlmeUF1dG9jb21wbGV0ZVNlbGVjdGVkKHNlbGVjdGlvbik7XG4gICAgaWYgKCFzZWxlY3Rpb24uc3VnZ2VzdGlvbikge1xuICAgICAgY29uc3QgdXJsID0gc2VsZWN0aW9uW2F1dG9jb21wbGV0ZVJlc3VsdHMudXJsRmllbGRdXG4gICAgICAgID8gc2VsZWN0aW9uW2F1dG9jb21wbGV0ZVJlc3VsdHMudXJsRmllbGRdLnJhd1xuICAgICAgICA6IFwiXCI7XG4gICAgICBpZiAodXJsKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGF1dG9jb21wbGV0ZVJlc3VsdHMubGlua1RhcmdldCB8fCBcIl9zZWxmXCI7XG4gICAgICAgIHdpbmRvdy5vcGVuKHVybCwgdGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb21wbGV0ZVN1Z2dlc3Rpb24oc2VsZWN0aW9uLnN1Z2dlc3Rpb24pO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc0ZvY3VzZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgYXV0b2NvbXBsZXRlTWluaW11bUNoYXJhY3RlcnMsXG4gICAgICBhdXRvY29tcGxldGVSZXN1bHRzLFxuICAgICAgYXV0b2NvbXBsZXRlU3VnZ2VzdGlvbnMsXG4gICAgICBhdXRvY29tcGxldGVkUmVzdWx0cyxcbiAgICAgIGF1dG9jb21wbGV0ZWRTdWdnZXN0aW9ucyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGF1dG9jb21wbGV0ZVZpZXcsXG4gICAgICBpbnB1dFByb3BzLFxuICAgICAgaW5wdXRWaWV3LFxuICAgICAgb25TZWxlY3RBdXRvY29tcGxldGUsXG4gICAgICBvblN1Ym1pdCxcbiAgICAgIHNlYXJjaFRlcm0sXG4gICAgICB2aWV3LFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgVmlldyA9IHZpZXcgfHwgU2VhcmNoQm94O1xuICAgIGNvbnN0IHVzZUF1dG9jb21wbGV0ZSA9XG4gICAgICAoISFhdXRvY29tcGxldGVSZXN1bHRzIHx8ICEhYXV0b2NvbXBsZXRlU3VnZ2VzdGlvbnMpICYmXG4gICAgICBzZWFyY2hUZXJtLmxlbmd0aCA+PSBhdXRvY29tcGxldGVNaW5pbXVtQ2hhcmFjdGVycztcbiAgICBjb25zdCBhdXRvY29tcGxldGVkU3VnZ2VzdGlvbnNDb3VudCA9IE9iamVjdC5lbnRyaWVzKFxuICAgICAgYXV0b2NvbXBsZXRlZFN1Z2dlc3Rpb25zXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICApLnJlZHVjZSgoYWNjLCBbXywgdmFsdWVdKSA9PiBhY2MgKyB2YWx1ZS5sZW5ndGgsIDApO1xuICAgIGNvbnN0IGFsbEF1dG9jb21wbGV0ZWRJdGVtc0NvdW50ID1cbiAgICAgIGF1dG9jb21wbGV0ZWRTdWdnZXN0aW9uc0NvdW50ICsgYXV0b2NvbXBsZXRlZFJlc3VsdHMubGVuZ3RoO1xuXG4gICAgbGV0IGhhbmRsZU9uU2VsZWN0QXV0b2NvbXBsZXRlO1xuICAgIGlmIChvblNlbGVjdEF1dG9jb21wbGV0ZSkge1xuICAgICAgaGFuZGxlT25TZWxlY3RBdXRvY29tcGxldGUgPSBzZWxlY3Rpb24gPT4ge1xuICAgICAgICBvblNlbGVjdEF1dG9jb21wbGV0ZShcbiAgICAgICAgICBzZWxlY3Rpb24sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbm90aWZ5QXV0b2NvbXBsZXRlU2VsZWN0ZWQ6IHRoaXMuaGFuZGxlTm90aWZ5QXV0b2NvbXBsZXRlU2VsZWN0ZWQsXG4gICAgICAgICAgICBjb21wbGV0ZVN1Z2dlc3Rpb246IHRoaXMuY29tcGxldGVTdWdnZXN0aW9uLFxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlUmVzdWx0czogdGhpcy5wcm9wcy5hdXRvY29tcGxldGVSZXN1bHRzXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRPblNlbGVjdEF1dG9jb21wbGV0ZVxuICAgICAgICApO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gVmlldyh7XG4gICAgICBhbGxBdXRvY29tcGxldGVkSXRlbXNDb3VudDogYWxsQXV0b2NvbXBsZXRlZEl0ZW1zQ291bnQsXG4gICAgICBhdXRvY29tcGxldGVWaWV3LFxuICAgICAgYXV0b2NvbXBsZXRlUmVzdWx0czogYXV0b2NvbXBsZXRlUmVzdWx0cyxcbiAgICAgIGF1dG9jb21wbGV0ZVN1Z2dlc3Rpb25zOiBhdXRvY29tcGxldGVTdWdnZXN0aW9ucyxcbiAgICAgIGF1dG9jb21wbGV0ZWRSZXN1bHRzOiBhdXRvY29tcGxldGVkUmVzdWx0cyxcbiAgICAgIGF1dG9jb21wbGV0ZWRTdWdnZXN0aW9uczogYXV0b2NvbXBsZXRlZFN1Z2dlc3Rpb25zLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYXV0b2NvbXBsZXRlZFN1Z2dlc3Rpb25zQ291bnQ6IGF1dG9jb21wbGV0ZWRTdWdnZXN0aW9uc0NvdW50LFxuICAgICAgY29tcGxldGVTdWdnZXN0aW9uOiB0aGlzLmNvbXBsZXRlU3VnZ2VzdGlvbixcbiAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkLFxuICAgICAgbm90aWZ5QXV0b2NvbXBsZXRlU2VsZWN0ZWQ6IHRoaXMuaGFuZGxlTm90aWZ5QXV0b2NvbXBsZXRlU2VsZWN0ZWQsXG4gICAgICBvbkNoYW5nZTogdmFsdWUgPT4gdGhpcy5oYW5kbGVDaGFuZ2UodmFsdWUpLFxuICAgICAgb25TZWxlY3RBdXRvY29tcGxldGU6XG4gICAgICAgIGhhbmRsZU9uU2VsZWN0QXV0b2NvbXBsZXRlIHx8IHRoaXMuZGVmYXVsdE9uU2VsZWN0QXV0b2NvbXBsZXRlLFxuICAgICAgb25TdWJtaXQ6IG9uU3VibWl0XG4gICAgICAgID8gZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBvblN1Ym1pdChzZWFyY2hUZXJtKTtcbiAgICAgICAgICB9XG4gICAgICAgIDogdGhpcy5oYW5kbGVTdWJtaXQsXG4gICAgICB1c2VBdXRvY29tcGxldGU6IHVzZUF1dG9jb21wbGV0ZSxcbiAgICAgIHZhbHVlOiBzZWFyY2hUZXJtLFxuICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICBvbkZvY3VzOiB0aGlzLmhhbmRsZUZvY3VzLFxuICAgICAgICBvbkJsdXI6IHRoaXMuaGFuZGxlQmx1cixcbiAgICAgICAgLi4uaW5wdXRQcm9wc1xuICAgICAgfSxcbiAgICAgIGlucHV0VmlldyxcbiAgICAgIC4uLnJlc3RcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VhcmNoKFxuICAoe1xuICAgIGF1dG9jb21wbGV0ZWRSZXN1bHRzLFxuICAgIGF1dG9jb21wbGV0ZWRTdWdnZXN0aW9ucyxcbiAgICBzZWFyY2hUZXJtLFxuICAgIHNldFNlYXJjaFRlcm0sXG4gICAgdHJhY2tBdXRvY29tcGxldGVDbGlja1Rocm91Z2hcbiAgfSkgPT4gKHtcbiAgICBhdXRvY29tcGxldGVkUmVzdWx0cyxcbiAgICBhdXRvY29tcGxldGVkU3VnZ2VzdGlvbnMsXG4gICAgc2VhcmNoVGVybSxcbiAgICBzZXRTZWFyY2hUZXJtLFxuICAgIHRyYWNrQXV0b2NvbXBsZXRlQ2xpY2tUaHJvdWdoXG4gIH0pXG4pKFNlYXJjaEJveENvbnRhaW5lcik7XG4iXX0=