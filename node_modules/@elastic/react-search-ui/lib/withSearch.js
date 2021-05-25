"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withSearch;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _SearchContext = _interopRequireDefault(require("./SearchContext"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function buildContextForProps(context) {
  return _objectSpread(_objectSpread({}, context.driver.getState()), context.driver.getActions());
}
/* For a given object execute mapContextToProps to pluck out the relevant
properties */


function giveMeJustWhatINeeded(stateOrContext, mapContextToProps, props) {
  var mapContextToPropsToUse = props.mapContextToProps || mapContextToProps;
  return mapContextToPropsToUse(stateOrContext, props) || {};
}
/**
 * This is a Higher Order Component that wraps a component and injects state and actions from Search UI, effectively
 * "connecting" it to Search UI.
 *
 * Components using `withSearch` will be "Pure" components.
 * It is important to understand the implications of using a PureComponent, as described here:
 * https://reactjs.org/docs/optimizing-performance.html#examples
 *
 * @param Function mapContextToProps A function that accepts the context and allows you to pick the values to be passed as props
 * into the component. This allows you to "select" which values from the context to use.
 * @param Function Component
 */


function withSearch(mapContextToProps) {
  if (!mapContextToProps) {
    throw "withSearch requires a function to be provided which returns an object with at least one value.";
  }

  return function (Component) {
    var WithSearch = /*#__PURE__*/function (_React$PureComponent) {
      (0, _inherits2.default)(WithSearch, _React$PureComponent);

      var _super = _createSuper(WithSearch);

      function WithSearch(props, context) {
        var _this;

        (0, _classCallCheck2.default)(this, WithSearch);
        _this = _super.call(this);
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "subscription", function (state) {
          if (_this.unmounted) return;

          _this.setState(function (prevState) {
            return giveMeJustWhatINeeded(_objectSpread(_objectSpread({}, prevState), state), mapContextToProps, _this.props);
          });
        });
        _this.state = _objectSpread({}, giveMeJustWhatINeeded(buildContextForProps(context), // eslint-disable-next-line react/prop-types
        mapContextToProps, props)); // Note that we subscribe to changes at the component level, rather than
        // at the top level Provider, so that we are re-rendering the entire
        // subtree when state changes in the Provider.

        context.driver.subscribeToStateChanges(_this.subscription);
        return _this;
      }

      (0, _createClass2.default)(WithSearch, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.unmounted = true;
          this.context.driver.unsubscribeToStateChanges(this.subscription);
        }
      }, {
        key: "render",
        value: function render() {
          // eslint-disable-next-line react/prop-types
          var rest = (0, _extends2.default)({}, this.props);
          return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, this.state, rest));
        }
      }]);
      return WithSearch;
    }(_react.default.PureComponent);

    WithSearch.contextType = _SearchContext.default;
    return WithSearch;
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aXRoU2VhcmNoLmpzIl0sIm5hbWVzIjpbImJ1aWxkQ29udGV4dEZvclByb3BzIiwiY29udGV4dCIsImRyaXZlciIsImdldFN0YXRlIiwiZ2V0QWN0aW9ucyIsImdpdmVNZUp1c3RXaGF0SU5lZWRlZCIsInN0YXRlT3JDb250ZXh0IiwibWFwQ29udGV4dFRvUHJvcHMiLCJwcm9wcyIsIm1hcENvbnRleHRUb1Byb3BzVG9Vc2UiLCJ3aXRoU2VhcmNoIiwiQ29tcG9uZW50IiwiV2l0aFNlYXJjaCIsInN0YXRlIiwidW5tb3VudGVkIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJzdWJzY3JpYmVUb1N0YXRlQ2hhbmdlcyIsInN1YnNjcmlwdGlvbiIsInVuc3Vic2NyaWJlVG9TdGF0ZUNoYW5nZXMiLCJyZXN0IiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiY29udGV4dFR5cGUiLCJTZWFyY2hDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxvQkFBVCxDQUE4QkMsT0FBOUIsRUFBdUM7QUFDckMseUNBQ0tBLE9BQU8sQ0FBQ0MsTUFBUixDQUFlQyxRQUFmLEVBREwsR0FFS0YsT0FBTyxDQUFDQyxNQUFSLENBQWVFLFVBQWYsRUFGTDtBQUlEO0FBRUQ7QUFDQTs7O0FBQ0EsU0FBU0MscUJBQVQsQ0FBK0JDLGNBQS9CLEVBQStDQyxpQkFBL0MsRUFBa0VDLEtBQWxFLEVBQXlFO0FBQ3ZFLE1BQU1DLHNCQUFzQixHQUFHRCxLQUFLLENBQUNELGlCQUFOLElBQTJCQSxpQkFBMUQ7QUFDQSxTQUFPRSxzQkFBc0IsQ0FBQ0gsY0FBRCxFQUFpQkUsS0FBakIsQ0FBdEIsSUFBaUQsRUFBeEQ7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ2UsU0FBU0UsVUFBVCxDQUFvQkgsaUJBQXBCLEVBQXVDO0FBQ3BELE1BQUksQ0FBQ0EsaUJBQUwsRUFBd0I7QUFDdEIsVUFBTSxnR0FBTjtBQUNEOztBQUVELFNBQU8sVUFBU0ksU0FBVCxFQUFvQjtBQUFBLFFBQ25CQyxVQURtQjtBQUFBOztBQUFBOztBQUV2QiwwQkFBWUosS0FBWixFQUFtQlAsT0FBbkIsRUFBNEI7QUFBQTs7QUFBQTtBQUMxQjtBQUQwQixtR0FzQmIsVUFBQVksS0FBSyxFQUFJO0FBQ3RCLGNBQUksTUFBS0MsU0FBVCxFQUFvQjs7QUFDcEIsZ0JBQUtDLFFBQUwsQ0FBYyxVQUFBQyxTQUFTO0FBQUEsbUJBQ3JCWCxxQkFBcUIsaUNBSWRXLFNBSmMsR0FLZEgsS0FMYyxHQU9uQk4saUJBUG1CLEVBUW5CLE1BQUtDLEtBUmMsQ0FEQTtBQUFBLFdBQXZCO0FBWUQsU0FwQzJCO0FBRTFCLGNBQUtLLEtBQUwscUJBQ0tSLHFCQUFxQixDQUN0Qkwsb0JBQW9CLENBQUNDLE9BQUQsQ0FERSxFQUV0QjtBQUNBTSxRQUFBQSxpQkFIc0IsRUFJdEJDLEtBSnNCLENBRDFCLEVBRjBCLENBVzFCO0FBQ0E7QUFDQTs7QUFDQVAsUUFBQUEsT0FBTyxDQUFDQyxNQUFSLENBQWVlLHVCQUFmLENBQXVDLE1BQUtDLFlBQTVDO0FBZDBCO0FBZTNCOztBQWpCc0I7QUFBQTtBQUFBLGVBbUJ2QixnQ0FBdUI7QUFDckIsZUFBS0osU0FBTCxHQUFpQixJQUFqQjtBQUNBLGVBQUtiLE9BQUwsQ0FBYUMsTUFBYixDQUFvQmlCLHlCQUFwQixDQUE4QyxLQUFLRCxZQUFuRDtBQUNEO0FBdEJzQjtBQUFBO0FBQUEsZUF3Q3ZCLGtCQUFTO0FBQ1A7QUFETyxjQUVJRSxJQUZKLDhCQUVhLEtBQUtaLEtBRmxCO0FBSVAsOEJBQU8sNkJBQUMsU0FBRCw2QkFBZSxLQUFLSyxLQUFwQixFQUErQk8sSUFBL0IsRUFBUDtBQUNEO0FBN0NzQjtBQUFBO0FBQUEsTUFDQUMsZUFBTUMsYUFETjs7QUFnRHpCVixJQUFBQSxVQUFVLENBQUNXLFdBQVgsR0FBeUJDLHNCQUF6QjtBQUNBLFdBQU9aLFVBQVA7QUFDRCxHQWxERDtBQW1ERCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFNlYXJjaENvbnRleHQgZnJvbSBcIi4vU2VhcmNoQ29udGV4dFwiO1xuXG5mdW5jdGlvbiBidWlsZENvbnRleHRGb3JQcm9wcyhjb250ZXh0KSB7XG4gIHJldHVybiB7XG4gICAgLi4uY29udGV4dC5kcml2ZXIuZ2V0U3RhdGUoKSxcbiAgICAuLi5jb250ZXh0LmRyaXZlci5nZXRBY3Rpb25zKClcbiAgfTtcbn1cblxuLyogRm9yIGEgZ2l2ZW4gb2JqZWN0IGV4ZWN1dGUgbWFwQ29udGV4dFRvUHJvcHMgdG8gcGx1Y2sgb3V0IHRoZSByZWxldmFudFxucHJvcGVydGllcyAqL1xuZnVuY3Rpb24gZ2l2ZU1lSnVzdFdoYXRJTmVlZGVkKHN0YXRlT3JDb250ZXh0LCBtYXBDb250ZXh0VG9Qcm9wcywgcHJvcHMpIHtcbiAgY29uc3QgbWFwQ29udGV4dFRvUHJvcHNUb1VzZSA9IHByb3BzLm1hcENvbnRleHRUb1Byb3BzIHx8IG1hcENvbnRleHRUb1Byb3BzO1xuICByZXR1cm4gbWFwQ29udGV4dFRvUHJvcHNUb1VzZShzdGF0ZU9yQ29udGV4dCwgcHJvcHMpIHx8IHt9O1xufVxuXG4vKipcbiAqIFRoaXMgaXMgYSBIaWdoZXIgT3JkZXIgQ29tcG9uZW50IHRoYXQgd3JhcHMgYSBjb21wb25lbnQgYW5kIGluamVjdHMgc3RhdGUgYW5kIGFjdGlvbnMgZnJvbSBTZWFyY2ggVUksIGVmZmVjdGl2ZWx5XG4gKiBcImNvbm5lY3RpbmdcIiBpdCB0byBTZWFyY2ggVUkuXG4gKlxuICogQ29tcG9uZW50cyB1c2luZyBgd2l0aFNlYXJjaGAgd2lsbCBiZSBcIlB1cmVcIiBjb21wb25lbnRzLlxuICogSXQgaXMgaW1wb3J0YW50IHRvIHVuZGVyc3RhbmQgdGhlIGltcGxpY2F0aW9ucyBvZiB1c2luZyBhIFB1cmVDb21wb25lbnQsIGFzIGRlc2NyaWJlZCBoZXJlOlxuICogaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL29wdGltaXppbmctcGVyZm9ybWFuY2UuaHRtbCNleGFtcGxlc1xuICpcbiAqIEBwYXJhbSBGdW5jdGlvbiBtYXBDb250ZXh0VG9Qcm9wcyBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyB0aGUgY29udGV4dCBhbmQgYWxsb3dzIHlvdSB0byBwaWNrIHRoZSB2YWx1ZXMgdG8gYmUgcGFzc2VkIGFzIHByb3BzXG4gKiBpbnRvIHRoZSBjb21wb25lbnQuIFRoaXMgYWxsb3dzIHlvdSB0byBcInNlbGVjdFwiIHdoaWNoIHZhbHVlcyBmcm9tIHRoZSBjb250ZXh0IHRvIHVzZS5cbiAqIEBwYXJhbSBGdW5jdGlvbiBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFNlYXJjaChtYXBDb250ZXh0VG9Qcm9wcykge1xuICBpZiAoIW1hcENvbnRleHRUb1Byb3BzKSB7XG4gICAgdGhyb3cgXCJ3aXRoU2VhcmNoIHJlcXVpcmVzIGEgZnVuY3Rpb24gdG8gYmUgcHJvdmlkZWQgd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgd2l0aCBhdCBsZWFzdCBvbmUgdmFsdWUuXCI7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oQ29tcG9uZW50KSB7XG4gICAgY2xhc3MgV2l0aFNlYXJjaCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICAgICAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAuLi5naXZlTWVKdXN0V2hhdElOZWVkZWQoXG4gICAgICAgICAgICBidWlsZENvbnRleHRGb3JQcm9wcyhjb250ZXh0KSxcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG4gICAgICAgICAgICBtYXBDb250ZXh0VG9Qcm9wcyxcbiAgICAgICAgICAgIHByb3BzXG4gICAgICAgICAgKVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIE5vdGUgdGhhdCB3ZSBzdWJzY3JpYmUgdG8gY2hhbmdlcyBhdCB0aGUgY29tcG9uZW50IGxldmVsLCByYXRoZXIgdGhhblxuICAgICAgICAvLyBhdCB0aGUgdG9wIGxldmVsIFByb3ZpZGVyLCBzbyB0aGF0IHdlIGFyZSByZS1yZW5kZXJpbmcgdGhlIGVudGlyZVxuICAgICAgICAvLyBzdWJ0cmVlIHdoZW4gc3RhdGUgY2hhbmdlcyBpbiB0aGUgUHJvdmlkZXIuXG4gICAgICAgIGNvbnRleHQuZHJpdmVyLnN1YnNjcmliZVRvU3RhdGVDaGFuZ2VzKHRoaXMuc3Vic2NyaXB0aW9uKTtcbiAgICAgIH1cblxuICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMudW5tb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyaXZlci51bnN1YnNjcmliZVRvU3RhdGVDaGFuZ2VzKHRoaXMuc3Vic2NyaXB0aW9uKTtcbiAgICAgIH1cblxuICAgICAgc3Vic2NyaXB0aW9uID0gc3RhdGUgPT4ge1xuICAgICAgICBpZiAodGhpcy51bm1vdW50ZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT5cbiAgICAgICAgICBnaXZlTWVKdXN0V2hhdElOZWVkZWQoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC8vIFdlIHBhc3MgcHJldlN0YXRlIGhlcmUgaW5zdGVhZCBvZiBqdXN0IHN0YXRlIHNvIHRoYXQgYWN0aW9ucyBhcmVcbiAgICAgICAgICAgICAgLy8gcGVyc2lzdGVkIGFzIHdlbGwsIHdoaWNoIGFyZSBub3QgcGFzc2VkIGluIHRoZSBzdWJzY3JpcHRpb24gcGFyYW1cbiAgICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgICAuLi5zdGF0ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1hcENvbnRleHRUb1Byb3BzLFxuICAgICAgICAgICAgdGhpcy5wcm9wc1xuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH07XG5cbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcbiAgICAgICAgY29uc3QgeyAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi50aGlzLnN0YXRlfSB7Li4ucmVzdH0gLz47XG4gICAgICB9XG4gICAgfVxuXG4gICAgV2l0aFNlYXJjaC5jb250ZXh0VHlwZSA9IFNlYXJjaENvbnRleHQ7XG4gICAgcmV0dXJuIFdpdGhTZWFyY2g7XG4gIH07XG59XG4iXX0=