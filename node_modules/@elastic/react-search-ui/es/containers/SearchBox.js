import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
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
import { SearchBox } from "@elastic/react-search-ui-views";
import { withSearch } from "..";
import { Result, Suggestion } from "../types";
export var SearchBoxContainer = /*#__PURE__*/function (_Component) {
  _inherits(SearchBoxContainer, _Component);

  var _super = _createSuper(SearchBoxContainer);

  function SearchBoxContainer() {
    var _this;

    _classCallCheck(this, SearchBoxContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFocused: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
      _this.setState({
        isFocused: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      _this.setState({
        isFocused: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "completeSuggestion", function (searchTerm) {
      var _this$props = _this.props,
          shouldClearFilters = _this$props.shouldClearFilters,
          setSearchTerm = _this$props.setSearchTerm;
      setSearchTerm(searchTerm, {
        shouldClearFilters: shouldClearFilters
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      var _this$props2 = _this.props,
          shouldClearFilters = _this$props2.shouldClearFilters,
          searchTerm = _this$props2.searchTerm,
          setSearchTerm = _this$props2.setSearchTerm;
      e.preventDefault();
      setSearchTerm(searchTerm, {
        shouldClearFilters: shouldClearFilters
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (value) {
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

    _defineProperty(_assertThisInitialized(_this), "handleNotifyAutocompleteSelected", function (selection) {
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

    _defineProperty(_assertThisInitialized(_this), "defaultOnSelectAutocomplete", function (selection) {
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

  _createClass(SearchBoxContainer, [{
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
          rest = _objectWithoutProperties(_this$props5, ["autocompleteMinimumCharacters", "autocompleteResults", "autocompleteSuggestions", "autocompletedResults", "autocompletedSuggestions", "className", "autocompleteView", "inputProps", "inputView", "onSelectAutocomplete", "onSubmit", "searchTerm", "view"]);

      var View = view || SearchBox;
      var useAutocomplete = (!!autocompleteResults || !!autocompleteSuggestions) && searchTerm.length >= autocompleteMinimumCharacters;
      var autocompletedSuggestionsCount = Object.entries(autocompletedSuggestions // eslint-disable-next-line no-unused-vars
      ).reduce(function (acc, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
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
}(Component);

_defineProperty(SearchBoxContainer, "propTypes", {
  // Props
  autocompleteMinimumCharacters: PropTypes.number,
  autocompleteResults: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
    clickThroughTags: PropTypes.arrayOf(PropTypes.string),
    linkTarget: PropTypes.string,
    sectionTitle: PropTypes.string,
    shouldTrackClickThrough: PropTypes.bool,
    titleField: PropTypes.string.isRequired,
    urlField: PropTypes.string.isRequired
  })]),
  autocompleteSuggestions: PropTypes.oneOfType([PropTypes.bool, PropTypes.exact({
    sectionTitle: PropTypes.string
  }), PropTypes.objectOf(PropTypes.exact({
    sectionTitle: PropTypes.string
  }))]),
  autocompleteView: PropTypes.func,
  className: PropTypes.string,
  shouldClearFilters: PropTypes.bool,
  debounceLength: PropTypes.number,
  inputProps: PropTypes.object,
  inputView: PropTypes.func,
  onSelectAutocomplete: PropTypes.func,
  onSubmit: PropTypes.func,
  searchAsYouType: PropTypes.bool,
  view: PropTypes.func,
  // State
  autocompletedResults: PropTypes.arrayOf(Result).isRequired,
  autocompletedSuggestions: PropTypes.objectOf(PropTypes.arrayOf(Suggestion)).isRequired,
  searchTerm: PropTypes.string.isRequired,
  // Actions
  setSearchTerm: PropTypes.func.isRequired,
  trackAutocompleteClickThrough: PropTypes.func.isRequired
});

_defineProperty(SearchBoxContainer, "defaultProps", {
  autocompleteMinimumCharacters: 0,
  shouldClearFilters: true
});

export default withSearch(function (_ref3) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250YWluZXJzL1NlYXJjaEJveC5qcyJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJDb21wb25lbnQiLCJTZWFyY2hCb3giLCJ3aXRoU2VhcmNoIiwiUmVzdWx0IiwiU3VnZ2VzdGlvbiIsIlNlYXJjaEJveENvbnRhaW5lciIsImlzRm9jdXNlZCIsInNldFN0YXRlIiwic2VhcmNoVGVybSIsInByb3BzIiwic2hvdWxkQ2xlYXJGaWx0ZXJzIiwic2V0U2VhcmNoVGVybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwiYXV0b2NvbXBsZXRlTWluaW11bUNoYXJhY3RlcnMiLCJhdXRvY29tcGxldGVSZXN1bHRzIiwiYXV0b2NvbXBsZXRlU3VnZ2VzdGlvbnMiLCJzZWFyY2hBc1lvdVR5cGUiLCJkZWJvdW5jZUxlbmd0aCIsIm9wdGlvbnMiLCJkZWJvdW5jZSIsInJlZnJlc2giLCJzZWxlY3Rpb24iLCJ0cmFja0F1dG9jb21wbGV0ZUNsaWNrVGhyb3VnaCIsInNob3VsZFRyYWNrQ2xpY2tUaHJvdWdoIiwic3VnZ2VzdGlvbiIsImNsaWNrVGhyb3VnaFRhZ3MiLCJpZCIsInJhdyIsImhhbmRsZU5vdGlmeUF1dG9jb21wbGV0ZVNlbGVjdGVkIiwidXJsIiwidXJsRmllbGQiLCJ0YXJnZXQiLCJsaW5rVGFyZ2V0Iiwid2luZG93Iiwib3BlbiIsImNvbXBsZXRlU3VnZ2VzdGlvbiIsInN0YXRlIiwiYXV0b2NvbXBsZXRlZFJlc3VsdHMiLCJhdXRvY29tcGxldGVkU3VnZ2VzdGlvbnMiLCJjbGFzc05hbWUiLCJhdXRvY29tcGxldGVWaWV3IiwiaW5wdXRQcm9wcyIsImlucHV0VmlldyIsIm9uU2VsZWN0QXV0b2NvbXBsZXRlIiwib25TdWJtaXQiLCJ2aWV3IiwicmVzdCIsIlZpZXciLCJ1c2VBdXRvY29tcGxldGUiLCJsZW5ndGgiLCJhdXRvY29tcGxldGVkU3VnZ2VzdGlvbnNDb3VudCIsIk9iamVjdCIsImVudHJpZXMiLCJyZWR1Y2UiLCJhY2MiLCJfIiwiYWxsQXV0b2NvbXBsZXRlZEl0ZW1zQ291bnQiLCJoYW5kbGVPblNlbGVjdEF1dG9jb21wbGV0ZSIsIm5vdGlmeUF1dG9jb21wbGV0ZVNlbGVjdGVkIiwiZGVmYXVsdE9uU2VsZWN0QXV0b2NvbXBsZXRlIiwib25DaGFuZ2UiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJvbkZvY3VzIiwiaGFuZGxlRm9jdXMiLCJvbkJsdXIiLCJoYW5kbGVCbHVyIiwibnVtYmVyIiwib25lT2ZUeXBlIiwiYm9vbCIsInNoYXBlIiwiYXJyYXlPZiIsInN0cmluZyIsInNlY3Rpb25UaXRsZSIsInRpdGxlRmllbGQiLCJpc1JlcXVpcmVkIiwiZXhhY3QiLCJvYmplY3RPZiIsImZ1bmMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLE9BQTFCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixnQ0FBMUI7QUFFQSxTQUFTQyxVQUFULFFBQTJCLElBQTNCO0FBQ0EsU0FBU0MsTUFBVCxFQUFpQkMsVUFBakIsUUFBbUMsVUFBbkM7QUFFQSxXQUFhQyxrQkFBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBLDREQW1EVTtBQUNOQyxNQUFBQSxTQUFTLEVBQUU7QUFETCxLQW5EVjs7QUFBQSxrRUF1RGdCLFlBQU07QUFDbEIsWUFBS0MsUUFBTCxDQUFjO0FBQ1pELFFBQUFBLFNBQVMsRUFBRTtBQURDLE9BQWQ7QUFHRCxLQTNESDs7QUFBQSxpRUE2RGUsWUFBTTtBQUNqQixZQUFLQyxRQUFMLENBQWM7QUFDWkQsUUFBQUEsU0FBUyxFQUFFO0FBREMsT0FBZDtBQUdELEtBakVIOztBQUFBLHlFQW1FdUIsVUFBQUUsVUFBVSxFQUFJO0FBQUEsd0JBQ2EsTUFBS0MsS0FEbEI7QUFBQSxVQUN6QkMsa0JBRHlCLGVBQ3pCQSxrQkFEeUI7QUFBQSxV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cUNqQnJDLEVBQUFBLHdCQUF3QixFQUFFekMsU0FBUyxDQUFDZ0YsUUFBVixDQUFtQmhGLFNBQVMsQ0FBQzBFLE9BQVYsQ0FBa0JyRSxVQUFsQixDQUFuQixFQUN2QnlFLFVBdENjO0FBdUNqQnJFLEVBQUFBLFVBQVUsRUFBRVQsU0FBUyxDQUFDMkUsTUFBVixDQUFpQkcsVUF2Q1o7QUF3Q2pCO0FBQ0FsRSxFQUFBQSxhQUFhLEVBQUVaLFNBQVMsQ0FBQ2lGLElBQVYsQ0FBZUgsVUF6Q2I7QUEwQ2pCckQsRUFBQUEsNkJBQTZCLEVBQUV6QixTQUFTLENBQUNpRixJQUFWLENBQWVIO0FBMUM3QixDOztnQkFEUnhFLGtCLGtCQThDVztBQUNwQlUsRUFBQUEsNkJBQTZCLEVBQUUsQ0FEWDtBQUVwQkwsRUFBQUEsa0JBQWtCLEVBQUU7QUFGQSxDOztBQWlMeEIsZUFBZVIsVUFBVSxDQUN2QjtBQUFBLE1BQ0VxQyxvQkFERixTQUNFQSxvQkFERjtBQUFBLE1BRUVDLHdCQUZGLFNBRUVBLHdCQUZGO0FBQUEsTUFHRWhDLFVBSEYsU0FHRUEsVUFIRjtBQUFBLE1BSUVHLGFBSkYsU0FJRUEsYUFKRjtBQUFBLE1BS0VhLDZCQUxGLFNBS0VBLDZCQUxGO0FBQUEsU0FNTztBQUNMZSxJQUFBQSxvQkFBb0IsRUFBcEJBLG9CQURLO0FBRUxDLElBQUFBLHdCQUF3QixFQUF4QkEsd0JBRks7QUFHTGhDLElBQUFBLFVBQVUsRUFBVkEsVUFISztBQUlMRyxJQUFBQSxhQUFhLEVBQWJBLGFBSks7QUFLTGEsSUFBQUEsNkJBQTZCLEVBQTdCQTtBQUxLLEdBTlA7QUFBQSxDQUR1QixDQUFWLENBY2JuQixrQkFkYSxDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTZWFyY2hCb3ggfSBmcm9tIFwiQGVsYXN0aWMvcmVhY3Qtc2VhcmNoLXVpLXZpZXdzXCI7XG5cbmltcG9ydCB7IHdpdGhTZWFyY2ggfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IFJlc3VsdCwgU3VnZ2VzdGlvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoQm94Q29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvLyBQcm9wc1xuICAgIGF1dG9jb21wbGV0ZU1pbmltdW1DaGFyYWN0ZXJzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGF1dG9jb21wbGV0ZVJlc3VsdHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBjbGlja1Rocm91Z2hUYWdzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICAgICAgbGlua1RhcmdldDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc2VjdGlvblRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBzaG91bGRUcmFja0NsaWNrVGhyb3VnaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHRpdGxlRmllbGQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgdXJsRmllbGQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgICAgfSlcbiAgICBdKSxcbiAgICBhdXRvY29tcGxldGVTdWdnZXN0aW9uczogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5leGFjdCh7XG4gICAgICAgIHNlY3Rpb25UaXRsZTogUHJvcFR5cGVzLnN0cmluZ1xuICAgICAgfSksXG4gICAgICBQcm9wVHlwZXMub2JqZWN0T2YoXG4gICAgICAgIFByb3BUeXBlcy5leGFjdCh7XG4gICAgICAgICAgc2VjdGlvblRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgXSksXG4gICAgYXV0b2NvbXBsZXRlVmlldzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNob3VsZENsZWFyRmlsdGVyczogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGVib3VuY2VMZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpbnB1dFZpZXc6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2VsZWN0QXV0b2NvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2VhcmNoQXNZb3VUeXBlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB2aWV3OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvLyBTdGF0ZVxuICAgIGF1dG9jb21wbGV0ZWRSZXN1bHRzOiBQcm9wVHlwZXMuYXJyYXlPZihSZXN1bHQpLmlzUmVxdWlyZWQsXG4gICAgYXV0b2NvbXBsZXRlZFN1Z2dlc3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLmFycmF5T2YoU3VnZ2VzdGlvbikpXG4gICAgICAuaXNSZXF1aXJlZCxcbiAgICBzZWFyY2hUZXJtOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgLy8gQWN0aW9uc1xuICAgIHNldFNlYXJjaFRlcm06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdHJhY2tBdXRvY29tcGxldGVDbGlja1Rocm91Z2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGF1dG9jb21wbGV0ZU1pbmltdW1DaGFyYWN0ZXJzOiAwLFxuICAgIHNob3VsZENsZWFyRmlsdGVyczogdHJ1ZVxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIGlzRm9jdXNlZDogZmFsc2VcbiAgfTtcblxuICBoYW5kbGVGb2N1cyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRm9jdXNlZDogdHJ1ZVxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUJsdXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0ZvY3VzZWQ6IGZhbHNlXG4gICAgfSk7XG4gIH07XG5cbiAgY29tcGxldGVTdWdnZXN0aW9uID0gc2VhcmNoVGVybSA9PiB7XG4gICAgY29uc3QgeyBzaG91bGRDbGVhckZpbHRlcnMsIHNldFNlYXJjaFRlcm0gfSA9IHRoaXMucHJvcHM7XG4gICAgc2V0U2VhcmNoVGVybShzZWFyY2hUZXJtLCB7XG4gICAgICBzaG91bGRDbGVhckZpbHRlcnNcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICBjb25zdCB7IHNob3VsZENsZWFyRmlsdGVycywgc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRTZWFyY2hUZXJtKHNlYXJjaFRlcm0sIHtcbiAgICAgIHNob3VsZENsZWFyRmlsdGVyc1xuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNoYW5nZSA9IHZhbHVlID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBhdXRvY29tcGxldGVNaW5pbXVtQ2hhcmFjdGVycyxcbiAgICAgIGF1dG9jb21wbGV0ZVJlc3VsdHMsXG4gICAgICBhdXRvY29tcGxldGVTdWdnZXN0aW9ucyxcbiAgICAgIHNob3VsZENsZWFyRmlsdGVycyxcbiAgICAgIHNlYXJjaEFzWW91VHlwZSxcbiAgICAgIHNldFNlYXJjaFRlcm0sXG4gICAgICBkZWJvdW5jZUxlbmd0aFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGF1dG9jb21wbGV0ZU1pbmltdW1DaGFyYWN0ZXJzLFxuICAgICAgLi4uKChhdXRvY29tcGxldGVSZXN1bHRzIHx8XG4gICAgICAgIGF1dG9jb21wbGV0ZVN1Z2dlc3Rpb25zIHx8XG4gICAgICAgIHNlYXJjaEFzWW91VHlwZSkgJiYge1xuICAgICAgICBkZWJvdW5jZTogZGVib3VuY2VMZW5ndGggfHwgMjAwXG4gICAgICB9KSxcbiAgICAgIHNob3VsZENsZWFyRmlsdGVycyxcbiAgICAgIHJlZnJlc2g6ICEhc2VhcmNoQXNZb3VUeXBlLFxuICAgICAgYXV0b2NvbXBsZXRlUmVzdWx0czogISFhdXRvY29tcGxldGVSZXN1bHRzLFxuICAgICAgYXV0b2NvbXBsZXRlU3VnZ2VzdGlvbnM6ICEhYXV0b2NvbXBsZXRlU3VnZ2VzdGlvbnNcbiAgICB9O1xuXG4gICAgc2V0U2VhcmNoVGVybSh2YWx1ZSwgb3B0aW9ucyk7XG4gIH07XG5cbiAgaGFuZGxlTm90aWZ5QXV0b2NvbXBsZXRlU2VsZWN0ZWQgPSBzZWxlY3Rpb24gPT4ge1xuICAgIGNvbnN0IHsgYXV0b2NvbXBsZXRlUmVzdWx0cywgdHJhY2tBdXRvY29tcGxldGVDbGlja1Rocm91Z2ggfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gQmVjYXVzZSBzdWdnZXN0aW9ucyBkb24ndCBjb3VudCBhcyBjbGlja3Rocm91Z2hzLCBvbmx5XG4gICAgLy8gcmVzdWx0c1xuICAgIGlmIChcbiAgICAgIGF1dG9jb21wbGV0ZVJlc3VsdHMgJiZcbiAgICAgIGF1dG9jb21wbGV0ZVJlc3VsdHMuc2hvdWxkVHJhY2tDbGlja1Rocm91Z2ggIT09IGZhbHNlICYmXG4gICAgICAhc2VsZWN0aW9uLnN1Z2dlc3Rpb25cbiAgICApIHtcbiAgICAgIGNvbnN0IHsgY2xpY2tUaHJvdWdoVGFncyA9IFtdIH0gPSBhdXRvY29tcGxldGVSZXN1bHRzO1xuICAgICAgY29uc3QgaWQgPSBzZWxlY3Rpb24uaWQucmF3O1xuICAgICAgdHJhY2tBdXRvY29tcGxldGVDbGlja1Rocm91Z2goaWQsIGNsaWNrVGhyb3VnaFRhZ3MpO1xuICAgIH1cbiAgfTtcblxuICBkZWZhdWx0T25TZWxlY3RBdXRvY29tcGxldGUgPSBzZWxlY3Rpb24gPT4ge1xuICAgIGlmICghc2VsZWN0aW9uKSByZXR1cm47XG5cbiAgICBjb25zdCB7IGF1dG9jb21wbGV0ZVJlc3VsdHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLmhhbmRsZU5vdGlmeUF1dG9jb21wbGV0ZVNlbGVjdGVkKHNlbGVjdGlvbik7XG4gICAgaWYgKCFzZWxlY3Rpb24uc3VnZ2VzdGlvbikge1xuICAgICAgY29uc3QgdXJsID0gc2VsZWN0aW9uW2F1dG9jb21wbGV0ZVJlc3VsdHMudXJsRmllbGRdXG4gICAgICAgID8gc2VsZWN0aW9uW2F1dG9jb21wbGV0ZVJlc3VsdHMudXJsRmllbGRdLnJhd1xuICAgICAgICA6IFwiXCI7XG4gICAgICBpZiAodXJsKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGF1dG9jb21wbGV0ZVJlc3VsdHMubGlua1RhcmdldCB8fCBcIl9zZWxmXCI7XG4gICAgICAgIHdpbmRvdy5vcGVuKHVybCwgdGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb21wbGV0ZVN1Z2dlc3Rpb24oc2VsZWN0aW9uLnN1Z2dlc3Rpb24pO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc0ZvY3VzZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgYXV0b2NvbXBsZXRlTWluaW11bUNoYXJhY3RlcnMsXG4gICAgICBhdXRvY29tcGxldGVSZXN1bHRzLFxuICAgICAgYXV0b2NvbXBsZXRlU3VnZ2VzdGlvbnMsXG4gICAgICBhdXRvY29tcGxldGVkUmVzdWx0cyxcbiAgICAgIGF1dG9jb21wbGV0ZWRTdWdnZXN0aW9ucyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGF1dG9jb21wbGV0ZVZpZXcsXG4gICAgICBpbnB1dFByb3BzLFxuICAgICAgaW5wdXRWaWV3LFxuICAgICAgb25TZWxlY3RBdXRvY29tcGxldGUsXG4gICAgICBvblN1Ym1pdCxcbiAgICAgIHNlYXJjaFRlcm0sXG4gICAgICB2aWV3LFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgVmlldyA9IHZpZXcgfHwgU2VhcmNoQm94O1xuICAgIGNvbnN0IHVzZUF1dG9jb21wbGV0ZSA9XG4gICAgICAoISFhdXRvY29tcGxldGVSZXN1bHRzIHx8ICEhYXV0b2NvbXBsZXRlU3VnZ2VzdGlvbnMpICYmXG4gICAgICBzZWFyY2hUZXJtLmxlbmd0aCA+PSBhdXRvY29tcGxldGVNaW5pbXVtQ2hhcmFjdGVycztcbiAgICBjb25zdCBhdXRvY29tcGxldGVkU3VnZ2VzdGlvbnNDb3VudCA9IE9iamVjdC5lbnRyaWVzKFxuICAgICAgYXV0b2NvbXBsZXRlZFN1Z2dlc3Rpb25zXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICApLnJlZHVjZSgoYWNjLCBbXywgdmFsdWVdKSA9PiBhY2MgKyB2YWx1ZS5sZW5ndGgsIDApO1xuICAgIGNvbnN0IGFsbEF1dG9jb21wbGV0ZWRJdGVtc0NvdW50ID1cbiAgICAgIGF1dG9jb21wbGV0ZWRTdWdnZXN0aW9uc0NvdW50ICsgYXV0b2NvbXBsZXRlZFJlc3VsdHMubGVuZ3RoO1xuXG4gICAgbGV0IGhhbmRsZU9uU2VsZWN0QXV0b2NvbXBsZXRlO1xuICAgIGlmIChvblNlbGVjdEF1dG9jb21wbGV0ZSkge1xuICAgICAgaGFuZGxlT25TZWxlY3RBdXRvY29tcGxldGUgPSBzZWxlY3Rpb24gPT4ge1xuICAgICAgICBvblNlbGVjdEF1dG9jb21wbGV0ZShcbiAgICAgICAgICBzZWxlY3Rpb24sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbm90aWZ5QXV0b2NvbXBsZXRlU2VsZWN0ZWQ6IHRoaXMuaGFuZGxlTm90aWZ5QXV0b2NvbXBsZXRlU2VsZWN0ZWQsXG4gICAgICAgICAgICBjb21wbGV0ZVN1Z2dlc3Rpb246IHRoaXMuY29tcGxldGVTdWdnZXN0aW9uLFxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlUmVzdWx0czogdGhpcy5wcm9wcy5hdXRvY29tcGxldGVSZXN1bHRzXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRPblNlbGVjdEF1dG9jb21wbGV0ZVxuICAgICAgICApO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gVmlldyh7XG4gICAgICBhbGxBdXRvY29tcGxldGVkSXRlbXNDb3VudDogYWxsQXV0b2NvbXBsZXRlZEl0ZW1zQ291bnQsXG4gICAgICBhdXRvY29tcGxldGVWaWV3LFxuICAgICAgYXV0b2NvbXBsZXRlUmVzdWx0czogYXV0b2NvbXBsZXRlUmVzdWx0cyxcbiAgICAgIGF1dG9jb21wbGV0ZVN1Z2dlc3Rpb25zOiBhdXRvY29tcGxldGVTdWdnZXN0aW9ucyxcbiAgICAgIGF1dG9jb21wbGV0ZWRSZXN1bHRzOiBhdXRvY29tcGxldGVkUmVzdWx0cyxcbiAgICAgIGF1dG9jb21wbGV0ZWRTdWdnZXN0aW9uczogYXV0b2NvbXBsZXRlZFN1Z2dlc3Rpb25zLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYXV0b2NvbXBsZXRlZFN1Z2dlc3Rpb25zQ291bnQ6IGF1dG9jb21wbGV0ZWRTdWdnZXN0aW9uc0NvdW50LFxuICAgICAgY29tcGxldGVTdWdnZXN0aW9uOiB0aGlzLmNvbXBsZXRlU3VnZ2VzdGlvbixcbiAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkLFxuICAgICAgbm90aWZ5QXV0b2NvbXBsZXRlU2VsZWN0ZWQ6IHRoaXMuaGFuZGxlTm90aWZ5QXV0b2NvbXBsZXRlU2VsZWN0ZWQsXG4gICAgICBvbkNoYW5nZTogdmFsdWUgPT4gdGhpcy5oYW5kbGVDaGFuZ2UodmFsdWUpLFxuICAgICAgb25TZWxlY3RBdXRvY29tcGxldGU6XG4gICAgICAgIGhhbmRsZU9uU2VsZWN0QXV0b2NvbXBsZXRlIHx8IHRoaXMuZGVmYXVsdE9uU2VsZWN0QXV0b2NvbXBsZXRlLFxuICAgICAgb25TdWJtaXQ6IG9uU3VibWl0XG4gICAgICAgID8gZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBvblN1Ym1pdChzZWFyY2hUZXJtKTtcbiAgICAgICAgICB9XG4gICAgICAgIDogdGhpcy5oYW5kbGVTdWJtaXQsXG4gICAgICB1c2VBdXRvY29tcGxldGU6IHVzZUF1dG9jb21wbGV0ZSxcbiAgICAgIHZhbHVlOiBzZWFyY2hUZXJtLFxuICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICBvbkZvY3VzOiB0aGlzLmhhbmRsZUZvY3VzLFxuICAgICAgICBvbkJsdXI6IHRoaXMuaGFuZGxlQmx1cixcbiAgICAgICAgLi4uaW5wdXRQcm9wc1xuICAgICAgfSxcbiAgICAgIGlucHV0VmlldyxcbiAgICAgIC4uLnJlc3RcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VhcmNoKFxuICAoe1xuICAgIGF1dG9jb21wbGV0ZWRSZXN1bHRzLFxuICAgIGF1dG9jb21wbGV0ZWRTdWdnZXN0aW9ucyxcbiAgICBzZWFyY2hUZXJtLFxuICAgIHNldFNlYXJjaFRlcm0sXG4gICAgdHJhY2tBdXRvY29tcGxldGVDbGlja1Rocm91Z2hcbiAgfSkgPT4gKHtcbiAgICBhdXRvY29tcGxldGVkUmVzdWx0cyxcbiAgICBhdXRvY29tcGxldGVkU3VnZ2VzdGlvbnMsXG4gICAgc2VhcmNoVGVybSxcbiAgICBzZXRTZWFyY2hUZXJtLFxuICAgIHRyYWNrQXV0b2NvbXBsZXRlQ2xpY2tUaHJvdWdoXG4gIH0pXG4pKFNlYXJjaEJveENvbnRhaW5lcik7XG4iXX0=