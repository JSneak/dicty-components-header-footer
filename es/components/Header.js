import React from "react";
import logo from "../images/logo.png";
import Link from "../styles/Link";
import { headerStyles as styles } from "../styles/headerStyles";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ExpandedSearch from "./ExpandedSearch";
import NormalSearch from "./NormalSearch";

// set base URL for homepage
var Home = "/";

/**
 * The `Header` component that will be displayed
 * on top of the navigation bar in every React web application of [dictyBase](http://dictybase.org).
 */

var Header = function Header(_ref) {
  var classes = _ref.classes,
      _ref$home = _ref.home,
      home = _ref$home === undefined ? Home : _ref$home,
      children = _ref.children,
      items = _ref.items;

  var _React$useState = React.useState(false),
      isExpanded = _React$useState[0],
      setIsExpanded = _React$useState[1];

  return React.createElement(
    Grid,
    { container: true, className: classes.root },
    React.createElement(
      Grid,
      { item: true, xs: 12, md: 3, lg: 4, className: classes.logoContainer },
      React.createElement(
        Grid,
        { container: true, alignItems: "flex-start" },
        React.createElement(
          Grid,
          { item: true, xs: 12, className: classes.left },
          React.createElement(
            Link,
            { href: home },
            React.createElement("img", { src: logo, alt: "dictyBase logo", className: classes.image })
          ),
          React.createElement(
            "div",
            { className: classes.dcr },
            React.createElement(
              "em",
              null,
              "Dicty Community Resource"
            )
          )
        )
      )
    ),
    React.createElement(
      Grid,
      { item: true, xs: 12, md: 5, lg: 4, className: classes.searchContainer },
      isExpanded ? React.createElement(ExpandedSearch, { isExpanded: isExpanded }) : React.createElement(NormalSearch, { isExpanded: isExpanded, setIsExpanded: setIsExpanded })
    ),
    React.createElement(
      Grid,
      { item: true, xs: 12, md: 4, className: classes.linkContainer },
      children(items)
    )
  );
};

export default withStyles(styles)(Header);