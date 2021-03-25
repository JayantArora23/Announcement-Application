
function displayAnnouncementNew() {
	
	var teacherGrade;
	var teacherGender;
	var teacherClub;
	var teacherDetails;

	var stuGrade;
	var stuGender;
	var stuClub;

	teacherGrade = localStorage.getItem("teacherGrKey");
	teacherGender = localStorage.getItem("teacherGenderKey");
	teacherClub = localStorage.getItem("teacherClubKey");
	teacherDetails = localStorage.getItem("teacherDetailsKey");

	stuGrade = localStorage.getItem("studentGrKey");
	stuGender = localStorage.getItem("studentGenderKey");
	stuClub = localStorage.getItem("studentClubKey");

	var newone = teacherGrade + teacherGender + teacherClub + teacherDetails + stuGrade + stuGender + stuClub ;

	if (teacherGender === stuGender) {

	document.getElementById("htmlTGrade").innerHTML = teacherDetails;

	} else {

	document.getElementById("htmlTGrade").innerHTML = "Sorry, no announcements matched";

	}
}

