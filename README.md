V 1.0.1

This work is intended to show the knowledge acquired during the last weeks in iwa's mini web project. This project consist in two parts: front end and back end of an application using Spring to develop an REST API and consume it in front end with chart libraries. This part is the back end.

/******/
/******/

	RUN BACKEND FIRST

/******/
/******/


INSTRUCTIONS

TO DEPLOY APP

Be sure you have installed spring client. To check this, run the following command inside a Terminal:

	spring --version

If it returns an error, follow the next steps:

	INSTRUCTION  - - - - - > COMMAND
	install sdkman - - - - > curl -s "https://get.sdkman.io" | bash
	add source - - - - - - > source "~/.sdkman/bin/sdkman-init.sh"
	install springboot - - > sdk install springboot
	run version  - - - - - > spring --version

Using console, run this command inside your folder ~/../theGuardian_FrontEnd
	
	spring run app.groovy

You will see the app running. If you changed the port when you deploy backend, be sure is the same inside app-config.js var URL.

-------------------------------

INFO

This front end was developed using Spring, Angular, ChartJS and Bootstrap.

This project has different parts, as described below:

	> ../app/app-config.js
	
		Here resides the main config: connections, dates and URL to connect server host.
		
	> ../app/app-controllers.js
	
		Here resides the consuming structure. Inside this file we can see the controllers and functions to recieve, request and show the info.
		
	> ../js/*
	
		Files used to load angular config and chartjs plugin.
		
	> ../index.html
	
		Final front that interacts with the user.

-------------------------------

BIBLIOGRAPY

	Spring manuals
	
	> Consuming RESTful web service: https://spring.io/guides/gs/consuming-rest/
	> Consuming RESTful web service with AngularJS: https://spring.io/guides/gs/consuming-rest-angularjs/
