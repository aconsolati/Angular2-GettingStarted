/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'app': 'app',
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs',
    '@angular2-material': 'node_modules/@angular2-material'
};
/** User packages configuration. */
var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
};
var materialPkgs = [
    'core',
    'toolbar',
    'icon',
    'button',
    'sidenav',
    'list',
    'card',
    'input',
];
materialPkgs.forEach(function (pkg) {
    packages[("@angular2-material/" + pkg)] = { main: pkg + ".js" };
});
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/forms',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router'
];
packageNames.forEach(function (packageName) {
    packages[packageName] = { main: 'index', defaultExtension: 'js' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: map,
    packages: packages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=systemjs.config.js.map