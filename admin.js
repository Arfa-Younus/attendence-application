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