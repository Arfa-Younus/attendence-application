var classtimeV, scheduleV, teacherNameV, sectionNameV, courseNameV, batchNumberV;

function readFom() {
  classtimeV = document.getElementById("classTimings").value;
  scheduleV = document.getElementById("schedule").value;
  teacherNameV = document.getElementById("teacherName").value;
  sectionNameV = document.getElementById("sectionName").value;
  sectionNameV = document.getElementById("courseName").value;
  sectionNameV = document.getElementById("batchNumber").value;
  console.log(classtimeV, scheduleV, sectionNameV, teacherNameV, courseNameV, batchNumberV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("teacher/" + classtimeV)
    .set({
      classTimingsNo: classtimeV,
      schedule: scheduleV,
      teacherName: teacherNameV,
      sectionName: sectionNameV,
      courseName: courseNameV,
      batchNumber: batchNumberV
    });
  alert("Data Inserted");
  document.getElementById("classTimings").value = "";
  document.getElementById("schedule").value = "";
  document.getElementById("teacherName").value = "";
  document.getElementById("sectionName").value = "";
  document.getElementById("courseName").value = "";
  document.getElementById("batchNumber").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("teacher/" + classtimeV)
    .on("value", function (snap) {
      document.getElementById("classTimings").value = snap.val().classTime;
      document.getElementById("schedule").value = snap.val().schedule;
      document.getElementById("teacherName").value = snap.val().teacherName;
      document.getElementById("sectionName").value = snap.val().sectionName;
      document.getElementById("courseName").value = snap.val().courseName;
      document.getElementById("batchNumber").value = snap.val().batchNumber;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("teacher/" + classtimeV)
    .update({
      //   classTime: classtimeV,
      schedule: scheduleV,
      teacherName: teacherNameV,
      sectionName: sectionNameV,
      courseName: courseNameV,
      batchNumber: batchNumberV
    });
  alert("Data Update");
  document.getElementById("classTimings").value = "";
  document.getElementById("schedule").value = "";
  document.getElementById("teacherName").value = "";
  document.getElementById("sectionName").value = "";
  document.getElementById("courseName").value = "";
  document.getElementById("batchNumber").value = "";
  
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("teacher/" + classtimeV)
    .remove();
  alert("Data Deleted");
  document.getElementById("classTimings").value = "";
  document.getElementById("schedule").value = "";
  document.getElementById("teacherName").value = "";
  document.getElementById("sectionName").value = "";
  document.getElementById("courseName").value = "";
  document.getElementById("batchNumber").value = "";
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

function submitData() {
    window.location.href = "admindashboard.html";
}

// ******************form validation*******************
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const fatherName = document.getElementById("fatherName").value.trim();
  const rollNumber = document.getElementById("rollNumber").value.trim();
  const contactNumber = document.getElementById("contactNumber").value.trim();
  const cnicNumber = document.getElementById("cnicNumber").value.trim();
  const picture = document.getElementById("picture").value;
  const courseName = document.getElementById("courseName").value;
  const assignedClass = document.getElementById("assignedClass").value;

  // Validate each field as needed (you can add more specific validation logic)
  if (name === "") {
    alert("Please enter a valid name.");
    return false;
  }

  if (fatherName === "") {
    alert("Please enter a valid father's name.");
    return false;
  }

  if (rollNumber === "") {
    alert("Please enter a valid roll number.");
    return false;
  }

  if (contactNumber === "" || !/^\d{10}$/.test(contactNumber)) {
    alert("Please enter a valid 10-digit contact number.");
    return false;
  }

  if (cnicNumber === "" || !/^\d{13}$/.test(cnicNumber)) {
    alert("Please enter a valid 13-digit CNIC number.");
    return false;
  }

  if (picture === "") {
    alert("Please select a picture.");
    return false;
  }

  if (courseName === "") {
    alert("Please select a course.");
    return false;
  }

  if (assignedClass === "") {
    alert("Please select an assigned class.");
    return false;
  }

  // If all fields are valid, the form will be submitted
  return true;
}

document.getElementById("submit").addEventListener("click", function (event) {
  if (!validateForm()) {
    event.preventDefault(); // Prevent the form from submitting if validation fails
  }
});
