import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from "react";
import SearchContext from "./SearchContext";

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


export default function withSearch(mapContextToProps) {
  if (!mapContextToProps) {
    throw "withSearch requires a function to be provided which returns an object with at least one value.";
  }

  return function (Component) {
    var WithSearch = /*#__PURE__*/function (_React$PureComponent) {
      _inherits(WithSearch, _React$PureComponent);

      var _super = _createSuper(WithSearch);

      function WithSearch(props, context) {
        var _this;

        _classCallCheck(this, WithSearch);

        _this = _super.call(this);

        _defineProperty(_assertThisInitialized(_this), "subscription", function (state) {
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

      _createClass(WithSearch, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.unmounted = true;
          this.context.driver.unsubscribeToStateChanges(this.subscription);
        }
      }, {
        key: "render",
        value: function render() {
          // eslint-disable-next-line react/prop-types
          var rest = _extends({}, this.props);

          return /*#__PURE__*/React.createElement(Component, _extends({}, this.state, rest));
        }
      }]);

      return WithSearch;
    }(React.PureComponent);

    WithSearch.contextType = SearchContext;
    return WithSearch;
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aXRoU2VhcmNoLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiU2VhcmNoQ29udGV4dCIsImJ1aWxkQ29udGV4dEZvclByb3BzIiwiY29udGV4dCIsImRyaXZlciIsImdldFN0YXRlIiwiZ2V0QWN0aW9ucyIsImdpdmVNZUp1c3RXaGF0SU5lZWRlZCIsInN0YXRlT3JDb250ZXh0IiwibWFwQ29udGV4dFRvUHJvcHMiLCJwcm9wcyIsIm1hcENvbnRleHRUb1Byb3BzVG9Vc2UiLCJ3aXRoU2VhcmNoIiwiQ29tcG9uZW50IiwiV2l0aFNlYXJjaCIsInN0YXRlIiwidW5tb3VudGVkIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJzdWJzY3JpYmVUb1N0YXRlQ2hhbmdlcyIsInN1YnNjcmlwdGlvbiIsInVuc3Vic2NyaWJlVG9TdGF0ZUNoYW5nZXMiLCJyZXN0IiwiUHVyZUNvbXBvbmVudCIsImNvbnRleHRUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFFQSxPQUFPQyxhQUFQLE1BQTBCLGlCQUExQjs7QUFFQSxTQUFTQyxvQkFBVCxDQUE4QkMsT0FBOUIsRUFBdUM7QUFDckMseUNBQ0tBLE9BQU8sQ0FBQ0MsTUFBUixDQUFlQyxRQUFmLEVBREwsR0FFS0YsT0FBTyxDQUFDQyxNQUFSLENBQWVFLFVBQWYsRUFGTDtBQUlEO0FBRUQ7QUFDQTs7O0FBQ0EsU0FBU0MscUJBQVQsQ0FBK0JDLGNBQS9CLEVBQStDQyxpQkFBL0MsRUFBa0VDLEtBQWxFLEVBQXlFO0FBQ3ZFLE1BQU1DLHNCQUFzQixHQUFHRCxLQUFLLENBQUNELGlCQUFOLElBQTJCQSxpQkFBMUQ7QUFDQSxTQUFPRSxzQkFBc0IsQ0FBQ0gsY0FBRCxFQUFpQkUsS0FBakIsQ0FBdEIsSUFBaUQsRUFBeEQ7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsZUFBZSxTQUFTRSxVQUFULENBQW9CSCxpQkFBcEIsRUFBdUM7QUFDcEQsTUFBSSxDQUFDQSxpQkFBTCxFQUF3QjtBQUN0QixVQUFNLGdHQUFOO0FBQ0Q7O0FBRUQsU0FBTyxVQUFTSSxTQUFULEVBQW9CO0FBQUEsUUFDbkJDLFVBRG1CO0FBQUE7O0FBQUE7O0FBRXZCLDBCQUFZSixLQUFaLEVBQW1CUCxPQUFuQixFQUE0QjtBQUFBOztBQUFBOztBQUMxQjs7QUFEMEIsdUVBc0JiLFVBQUFZLEtBQUssRUFBSTtBQUN0QixjQUFJLE1BQUtDLFNBQVQsRUFBb0I7O0FBQ3BCLGdCQUFLQyxRQUFMLENBQWMsVUFBQUMsU0FBUztBQUFBLG1CQUNyQlgscUJBQXFCLGlDQUlkVyxTQUpjLEdBS2RILEtBTGMsR0FPbkJOLGlCQVBtQixFQVFuQixNQUFLQyxLQVJjLENBREE7QUFBQSxXQUF2QjtBQVlELFNBcEMyQjs7QUFFMUIsY0FBS0ssS0FBTCxxQkFDS1IscUJBQXFCLENBQ3RCTCxvQkFBb0IsQ0FBQ0MsT0FBRCxDQURFLEVBRXRCO0FBQ0FNLFFBQUFBLGlCQUhzQixFQUl0QkMsS0FKc0IsQ0FEMUIsRUFGMEIsQ0FXMUI7QUFDQTtBQUNBOztBQUNBUCxRQUFBQSxPQUFPLENBQUNDLE1BQVIsQ0FBZWUsdUJBQWYsQ0FBdUMsTUFBS0MsWUFBNUM7QUFkMEI7QUFlM0I7O0FBakJzQjtBQUFBO0FBQUEsZUFtQnZCLGdDQUF1QjtBQUNyQixlQUFLSixTQUFMLEdBQWlCLElBQWpCO0FBQ0EsZUFBS2IsT0FBTCxDQUFhQyxNQUFiLENBQW9CaUIseUJBQXBCLENBQThDLEtBQUtELFlBQW5EO0FBQ0Q7QUF0QnNCO0FBQUE7QUFBQSxlQXdDdkIsa0JBQVM7QUFDUDtBQURPLGNBRUlFLElBRkosZ0JBRWEsS0FBS1osS0FGbEI7O0FBSVAsOEJBQU8sb0JBQUMsU0FBRCxlQUFlLEtBQUtLLEtBQXBCLEVBQStCTyxJQUEvQixFQUFQO0FBQ0Q7QUE3Q3NCOztBQUFBO0FBQUEsTUFDQXRCLEtBQUssQ0FBQ3VCLGFBRE47O0FBZ0R6QlQsSUFBQUEsVUFBVSxDQUFDVSxXQUFYLEdBQXlCdkIsYUFBekI7QUFDQSxXQUFPYSxVQUFQO0FBQ0QsR0FsREQ7QUFtREQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBTZWFyY2hDb250ZXh0IGZyb20gXCIuL1NlYXJjaENvbnRleHRcIjtcblxuZnVuY3Rpb24gYnVpbGRDb250ZXh0Rm9yUHJvcHMoY29udGV4dCkge1xuICByZXR1cm4ge1xuICAgIC4uLmNvbnRleHQuZHJpdmVyLmdldFN0YXRlKCksXG4gICAgLi4uY29udGV4dC5kcml2ZXIuZ2V0QWN0aW9ucygpXG4gIH07XG59XG5cbi8qIEZvciBhIGdpdmVuIG9iamVjdCBleGVjdXRlIG1hcENvbnRleHRUb1Byb3BzIHRvIHBsdWNrIG91dCB0aGUgcmVsZXZhbnRcbnByb3BlcnRpZXMgKi9cbmZ1bmN0aW9uIGdpdmVNZUp1c3RXaGF0SU5lZWRlZChzdGF0ZU9yQ29udGV4dCwgbWFwQ29udGV4dFRvUHJvcHMsIHByb3BzKSB7XG4gIGNvbnN0IG1hcENvbnRleHRUb1Byb3BzVG9Vc2UgPSBwcm9wcy5tYXBDb250ZXh0VG9Qcm9wcyB8fCBtYXBDb250ZXh0VG9Qcm9wcztcbiAgcmV0dXJuIG1hcENvbnRleHRUb1Byb3BzVG9Vc2Uoc3RhdGVPckNvbnRleHQsIHByb3BzKSB8fCB7fTtcbn1cblxuLyoqXG4gKiBUaGlzIGlzIGEgSGlnaGVyIE9yZGVyIENvbXBvbmVudCB0aGF0IHdyYXBzIGEgY29tcG9uZW50IGFuZCBpbmplY3RzIHN0YXRlIGFuZCBhY3Rpb25zIGZyb20gU2VhcmNoIFVJLCBlZmZlY3RpdmVseVxuICogXCJjb25uZWN0aW5nXCIgaXQgdG8gU2VhcmNoIFVJLlxuICpcbiAqIENvbXBvbmVudHMgdXNpbmcgYHdpdGhTZWFyY2hgIHdpbGwgYmUgXCJQdXJlXCIgY29tcG9uZW50cy5cbiAqIEl0IGlzIGltcG9ydGFudCB0byB1bmRlcnN0YW5kIHRoZSBpbXBsaWNhdGlvbnMgb2YgdXNpbmcgYSBQdXJlQ29tcG9uZW50LCBhcyBkZXNjcmliZWQgaGVyZTpcbiAqIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9vcHRpbWl6aW5nLXBlcmZvcm1hbmNlLmh0bWwjZXhhbXBsZXNcbiAqXG4gKiBAcGFyYW0gRnVuY3Rpb24gbWFwQ29udGV4dFRvUHJvcHMgQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgdGhlIGNvbnRleHQgYW5kIGFsbG93cyB5b3UgdG8gcGljayB0aGUgdmFsdWVzIHRvIGJlIHBhc3NlZCBhcyBwcm9wc1xuICogaW50byB0aGUgY29tcG9uZW50LiBUaGlzIGFsbG93cyB5b3UgdG8gXCJzZWxlY3RcIiB3aGljaCB2YWx1ZXMgZnJvbSB0aGUgY29udGV4dCB0byB1c2UuXG4gKiBAcGFyYW0gRnVuY3Rpb24gQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhTZWFyY2gobWFwQ29udGV4dFRvUHJvcHMpIHtcbiAgaWYgKCFtYXBDb250ZXh0VG9Qcm9wcykge1xuICAgIHRocm93IFwid2l0aFNlYXJjaCByZXF1aXJlcyBhIGZ1bmN0aW9uIHRvIGJlIHByb3ZpZGVkIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IHdpdGggYXQgbGVhc3Qgb25lIHZhbHVlLlwiO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKENvbXBvbmVudCkge1xuICAgIGNsYXNzIFdpdGhTZWFyY2ggZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgICAgIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgLi4uZ2l2ZU1lSnVzdFdoYXRJTmVlZGVkKFxuICAgICAgICAgICAgYnVpbGRDb250ZXh0Rm9yUHJvcHMoY29udGV4dCksXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgICAgICAgICAgbWFwQ29udGV4dFRvUHJvcHMsXG4gICAgICAgICAgICBwcm9wc1xuICAgICAgICAgIClcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBOb3RlIHRoYXQgd2Ugc3Vic2NyaWJlIHRvIGNoYW5nZXMgYXQgdGhlIGNvbXBvbmVudCBsZXZlbCwgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gYXQgdGhlIHRvcCBsZXZlbCBQcm92aWRlciwgc28gdGhhdCB3ZSBhcmUgcmUtcmVuZGVyaW5nIHRoZSBlbnRpcmVcbiAgICAgICAgLy8gc3VidHJlZSB3aGVuIHN0YXRlIGNoYW5nZXMgaW4gdGhlIFByb3ZpZGVyLlxuICAgICAgICBjb250ZXh0LmRyaXZlci5zdWJzY3JpYmVUb1N0YXRlQ2hhbmdlcyh0aGlzLnN1YnNjcmlwdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnVubW91bnRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcml2ZXIudW5zdWJzY3JpYmVUb1N0YXRlQ2hhbmdlcyh0aGlzLnN1YnNjcmlwdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHN1YnNjcmlwdGlvbiA9IHN0YXRlID0+IHtcbiAgICAgICAgaWYgKHRoaXMudW5tb3VudGVkKSByZXR1cm47XG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+XG4gICAgICAgICAgZ2l2ZU1lSnVzdFdoYXRJTmVlZGVkKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvLyBXZSBwYXNzIHByZXZTdGF0ZSBoZXJlIGluc3RlYWQgb2YganVzdCBzdGF0ZSBzbyB0aGF0IGFjdGlvbnMgYXJlXG4gICAgICAgICAgICAgIC8vIHBlcnNpc3RlZCBhcyB3ZWxsLCB3aGljaCBhcmUgbm90IHBhc3NlZCBpbiB0aGUgc3Vic2NyaXB0aW9uIHBhcmFtXG4gICAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgICAgLi4uc3RhdGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXBDb250ZXh0VG9Qcm9wcyxcbiAgICAgICAgICAgIHRoaXMucHJvcHNcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9O1xuXG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG4gICAgICAgIGNvbnN0IHsgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gPENvbXBvbmVudCB7Li4udGhpcy5zdGF0ZX0gey4uLnJlc3R9IC8+O1xuICAgICAgfVxuICAgIH1cblxuICAgIFdpdGhTZWFyY2guY29udGV4dFR5cGUgPSBTZWFyY2hDb250ZXh0O1xuICAgIHJldHVybiBXaXRoU2VhcmNoO1xuICB9O1xufVxuIl19