var app = angular.module("nqcl", ['ui.router', 'restangular', 'smart-table',
  'chart.js', 'angularMoment', 'ui.bootstrap', 'ngSanitize', 'angular-md5'
]);
app.config(function(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost/nqcl');
  // RestangularProvider.setRequestSuffix('?format=json');
});
;app.controller(
	"indexCtrl", ['$scope', '$filter', '$timeout', '$state', 'Restangular',
		function(scope, filter, timeout, state, Restangular) {
			scope.links = [];
			loadLinks();

			function loadLinks() {
				var Links = Restangular.all('about?format=json');
				Links.getList().then(function(links) {
					scope.links = links;
				});
			}

			scope.loadContent = function loadContent(content) {
				scope.content = content
			}
		}
	]
);
;app.directive("header", function() {
	return {
		templateUrl: "app/partials/globals/header.html"
	}
});

// app.directive("carousel", function() {
//   return {
//     templateUrl: "app/partials/globals/carousel.html"
//   }
// });
app.directive('isActiveNav', ['$location', function($location) {
	return {
		restrict: 'A',
		link: function(scope, element) {
			scope.location = $location;
			scope.$watch('location.path()', function(currentPath) {

				if ('#' + currentPath == element[0].hash) {
					element.parent().addClass('active');
				} else {
					element.parent().removeClass('active');
				}
			});
		}
	};
}]);
;app.config(function($stateProvider, $urlRouterProvider) {
	//
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/");

	// Now set up the states
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/partials/home/index.html',
			controller: 'indexCtrl'
		});
});
;angular.module('templates-dist', ['../app/partials/globals/header.html', '../app/partials/home/index.html']);

angular.module("../app/partials/globals/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/partials/globals/header.html",
    "<nav id=\"main\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "      <ul>\n" +
    "        <li>\n" +
    "          <a is-active-nav ui-sref=\"home\">Home</a>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <a is-active-nav >Link</a>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <a is-active-nav >Link</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div><!-- /.navbar-collapse -->\n" +
    "  </div><!-- /.container-fluid -->\n" +
    "</nav>\n" +
    "");
}]);

angular.module("../app/partials/home/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/partials/home/index.html",
    "<div class=\"row\">\n" +
    "  <section class=\"content full\">\n" +
    "    <h1>Codeigniter Angular Seed</h1>\n" +
    "    <div class=\"description\">\n" +
    "      A lot can be said, and will probably be said...and that's my train of thought...detracted.\n" +
    "      <p>Real Content Pending...</p>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "</div>\n" +
    "");
}]);
