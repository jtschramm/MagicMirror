/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "Imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},



// Calendars
		{
			module: "calendar",
			header: "Calendar",
			position: "top_left",
			config: {
				calendars: [
					{ // Holidays
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/en.usa%23holiday%40group.v.calendar.google.com/public/basic.ics"
					},
         			{ // Justin
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "stethoscope",
						url: "https://calendar.google.com/calendar/ical/jtschramm%40gmail.com/public/basic.ics"
					},
					{ // Kenzie
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "pills",
						url: "https://calendar.google.com/calendar/ical/juu5bnfkh43q2tottonj183joo%40group.calendar.google.com/public/basic.ics"
					},
					{ // Family
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "home",
						url: "https://calendar.google.com/calendar/ical/gtu9htadn9hji9hm1h6lhl6no8%40group.calendar.google.com/public/basic.ics"
					},
					{ // Birthdays
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "cake-candles",
						url: "https://calendar.google.com/calendar/ical/eb6eegef903rr28qkk6fh2hm8s%40group.calendar.google.com/public/basic.ics"
					},
				]
			}
		},



// Sheets Data
		{
			module: "MMM-GoogleSheets",
			header: "Peleton Seat Settings",
			position: "top_left",
			config: {
				url: "https://script.google.com/macros/s/AKfycbyfceLbaDfXfI2i0EsQiEuRHfDJiE7ybVfdcsH51XhLdZNNw4n_Icht9Qa8MoX0_VgH/exec",
				sheet: "Sheet1",
				range: "B3:D5",
				cellStyle: "flat"
			}
		},
		{
			module: "MMM-GoogleSheets",
			header: "Weightlifting",
			position: "top_left",
			config: {
				url: "https://script.google.com/macros/s/AKfycbyfceLbaDfXfI2i0EsQiEuRHfDJiE7ybVfdcsH51XhLdZNNw4n_Icht9Qa8MoX0_VgH/exec",
				sheet: "Sheet1",
				range: "B8:D17",
				cellStyle: "flat"
			}
		},
		{
			module: "MMM-GoogleSheets",
			header: "Justin's Schedule",
			position: "top_left",
			config: {
				url: "https://script.google.com/macros/s/AKfycbyfceLbaDfXfI2i0EsQiEuRHfDJiE7ybVfdcsH51XhLdZNNw4n_Icht9Qa8MoX0_VgH/exec",
				sheet: "Sheet1",
				range: "B21:C27",
				cellStyle: "flat"
			}
		},
// POEM
		{
			module: "MMM-GoogleSheets",
			header: "Daily Poem",
			position: "bottom_bar",
			config: {
				url: "https://script.google.com/macros/s/AKfycbyGNXj7Hpj5VmtWHEAQxJWMl3BrJd6Z3bZKbVSeMumLXQiC3LssHtEvy98ac9dkPF0/exec",
				sheet: "Sheet1",
				range: "A4:B11",
				cellStyle: "flat"
			}
		},



		
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 41.235432,
				lon: -95.993835
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 41.235432,
				lon: -95.993835
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
