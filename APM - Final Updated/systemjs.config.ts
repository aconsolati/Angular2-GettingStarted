/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map:any = {
  'app':                        'app',
  '@angular':                   'node_modules/@angular',
  'rxjs':                       'node_modules/rxjs',
  '@angular2-material':         'node_modules/@angular2-material'
};

/** User packages configuration. */
const packages:any = {
  'app':    { main: 'main.js',  defaultExtension: 'js' },
  'rxjs':   { defaultExtension: 'js' }
};

const materialPkgs:string[] = [
  'core',
  'toolbar',
  'icon',
  'button',
  'sidenav',
  'list',
  'card',
  'input',
];

materialPkgs.forEach((pkg) => {
  packages[`@angular2-material/${pkg}`] = {main: `${pkg}.js`};
});

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const packageNames:string[] = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/forms',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router'
];

packageNames.forEach((packageName:string) => {
  packages[packageName] = { main: 'index', defaultExtension: 'js' };
});

/** Type declaration for ambient System. */
declare var System:any;

// Apply the CLI SystemJS configuration.
System.config({
  map: map,
  packages: packages
});

// Apply the user's configuration.
System.config({map, packages});