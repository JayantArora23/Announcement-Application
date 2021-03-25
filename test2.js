	
	teacherGrade = JSON.parse(localStorage.getItem("teacherGrKey"));
	teacherGender = JSON.parse(localStorage.getItem("teacherGenderKey"));
	teacherClub = JSON.parse(localStorage.getItem("teacherClubKey"));
	teacherDetails = JSON.parse(localStorage.getItem("teacherDetailsKey"));

	var announcementTextHolder = "";
	announcementTextHolder += teacherDetails


	for (var i = 0; i < teacherGender.length; i++) {

		if (teacherGrade[i] === stuGrade || teacherGrade[i] == "All" &&
		teacherGender[i] === stuGender || teacherGender[i] == "All" &&
		teacherClub[i] === stuClub || teacherClub[i] == "All") {

			document.getElementById("htmlTGrade").innerHTML = teacherGrade
			document.getElementById("htmlTGender").innerHTML = teacherGender
			document.getElementById("htmlTClub").innerHTML = teacherClub
			

		} else {

			document.getElementById("htmlTAnnouncement").innerHTML = noResults
		}

	}

	document.getElementById("htmlTAnnouncement").innerHTML = announcementTextHolder;


	

