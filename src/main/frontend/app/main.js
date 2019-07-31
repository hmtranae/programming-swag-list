import React from "react";
import ReactDom from "react-dom";

import ProductIndexContainer from './containers/ProductIndexContainer';
import ProductShowContainer from './containers/ProductShowContainer';
import ProductForm from './containers/ProductForm';
import ReviewForm from './containers/ReviewForm';
import Welcome from './components/Welcome';

const pageMap = {
  "product-index": ProductIndexContainer,
  "product-show": ProductShowContainer,
  "product-form": ProductForm,
  "review-form": ReviewForm,
  "welcome-page": Welcome
}

for (const domId in pageMap) {
  if (document.getElementById(domId)) {
    const Component = pageMap[domId]
    ReactDom.render(<Component />, document.getElementById(domId))
  }
}