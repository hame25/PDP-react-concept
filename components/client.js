//import fetch from 'isomorphic-fetch';
//import 'whatwg-fetch';

/*fetch('http://localhost:1991/product')
	.then(function(response) {
		return response.json();
	}).then(function(product) {
		console.log(product);
});*/
import React from 'react';
import PDP from './PDP';

React.render(
  <PDP />,
   document.getElementById('content')
);
