In Jest, what are the differences between describe() and it() globals, and what are good uses for them?
	1. Describe :
		1. Create a block which can group together tests tests and keep them separate from others.
		2. Very usful for keeping the code oragnized and readable.
	2. it :
		1. this is the actual tests itself.
		2. Accepts a name, function that facilitates the test, and a timeout if applicatble.

What is the point of Test Driven Development? What do you think about this approach?
	1. TDD is the practice of writting tests for the appliction/code before writting any of the actual production code. 
	2. It generally follows a 2 period life cycle.
		1. Red: Write a test on behavior that is going to be implemented. This test should fail, aka, the "red."
		2. Green: After the test has been written with the accpeted behavior, write the solution in the code to make it pass.
	3. I personally like this approach as it forces one to think of the actuall implementation and functioning of the app itself. Granted it does take some getting use to but I believe it to be a valid development method that can increase productivity and decrease bugs. 

Mention three types of automated tests.
	1. Unit Testing: Test functions or methods in isolation. "Most amout of tests"
	2. Integration Testing: Units of software that are tested as a group and assure that they are working together properly. "Middle amount of tests"
	3. End-to-End Testing: Testing of the whole application. Simulates real user interations. "Lease amout of tests"
	
