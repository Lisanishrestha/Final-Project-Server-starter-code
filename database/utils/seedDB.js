/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		imageUrl: "https://nypost.com/wp-content/uploads/sites/2/2020/10/012420Starbucks7HS.jpg?quality=90&strip=all&w=1488",
		address: "695 Park Ave, New York, NY 10065",
		description: "This is a school in New York, New York."
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College", 
		imageUrl: "https://theticker.org/wp-content/uploads/2022/05/Queens-College-_-Queens-College-press-release.webp",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York."
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		imageUrl: "http://www.brooklyn.cuny.edu/web/com_socialImages/BrooklynCollegeLibrary_1200x628.jpg",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York."
	});
	
	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Joe",
        lastname: "Smith",
		email: "Joesmith@abc.com",
		imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePoVhTeaks5ESIWqL34k8BOO9Wh6UZdZECw&usqp=CAU",
	  	gpa: 0.0
	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Mary",
        lastname: "Johnson",
		email: "Maryjohnson@abc.com",
	  	imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePoVhTeaks5ESIWqL34k8BOO9Wh6UZdZECw&usqp=CAU",
	 	gpa: 0.0
	});

	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
}

// Export the database seeding function
module.exports = seedDB;