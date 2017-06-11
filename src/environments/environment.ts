// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
	apiKey:"AIzaSyBdSZj-qC0HLcq0FmbYl8nKacnhb5M8I7k",
	authDomain:"solarheater-81514.firebaseapp.com",
	databaseURL: "https://solarheater-81514.firebaseio.com/",
	projectId:"solarheater-81514",
	storageBucket:"solarheater-81514.appspot.com",
	messagingSenderId:"269071289027"
    }
}
