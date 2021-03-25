
function displayAnnouncement() {

	var teacherGrade ;
	var teacherGender ; 
	var teacherClub ; 
	var teacherDetails ; 
	
	var stuGrade ;
	var stuGender ;
	var stuClub ;

	teacherGrade = JSON.parse(localStorage.getItem("teacherGrKey"));
	teacherGender = JSON.parse(localStorage.getItem("teacherGenderKey"));
	teacherClub = JSON.parse(localStorage.getItem("teacherClubKey"));
	teacherDetails = JSON.parse(localStorage.getItem("teacherDetailsKey"));


	stuGrade = localStorage.getItem("studentGrKey")
	stuGender = localStorage.getItem("studentGenderKey")
	stuClub = localStorage.getItem("studentClubKey")


	var noResults = "Sorry, no announcements matched your criteria."
	
	var announcementTextHolder = "";




	for (var i = 0; i < teacherGender.length; i++) {

		if (teacherGrade[i] === stuGrade || teacherGrade[i] == "All" &&
		teacherGender[i] === stuGender || teacherGender[i] == "All" &&
		teacherClub[i] === stuClub || teacherClub[i] == "All") {

			announcementTextHolder += teacherDetails[i];
			

		} else {

			document.getElementById("htmlTAnnouncement").innerHTML = noResults
		}

	}

	document.getElementById("htmlTAnnouncement").innerHTML = announcementTextHolder;


}

// 			document.getElementById("htmlTGrade").innerHTML = teacherGrade
			// document.getElementById("htmlTGender").innerHTML = teacherGender
			// document.getElementById("htmlTClub").innerHTML = teacherClub



	







