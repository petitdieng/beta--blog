// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"

// then, add these lines in app/javascript/application.js
import jquery from 'jquery'
// these lines add jQuery and $ to global variables so you can use $()
window.jQuery = jquery
window.$ = jquery

import "@fortawesome/fontawesome-free/js/all";