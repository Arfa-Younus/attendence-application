var nameV, fatherNameV, rollNumberV, contactNumberV, cnicNumberV, pictureV, courseNameV, assignedClassV;

function readFom() {
  nameV = document.getElementById("name").value;
  fatherNameV = document.getElementById("fatherName").value;
  rollNumberV = document.getElementById("rollNumber").value;
  contactNumberV = document.getElementById("contactNumber").value;
  contactNumberV = document.getElementById("cnicNumber").value;
  contactNumberV = document.getElementById("picture").value;
  contactNumberV = document.getElementById("courseName").value;
  contactNumberV = document.getElementById("assignedClass").value;
  console.log(nameV, fatherNameV, contactNumberV, rollNumberV, cnicNumberV, pictureV, courseNameV, assignedClassV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("teacher/" + nameV)
    .set({
      nameNo: nameV,
      fatherName: fatherNameV,
      rollNumber: rollNumberV,
      contactNumber: contactNumberV,
      cnicNumber: cnicNumberV,
      picture: pictureV,
      courseName: courseNameV, 
      assignedClass: assignedClassV
    });
  alert("Data Inserted");
  document.getElementById("name").value = "";
  document.getElementById("fatherName").value = "";
  document.getElementById("rollNumber").value = "";
  document.getElementById("contactNumber").value = "";
  document.getElementById("cnicNumber").value = "";
  document.getElementById("picture").value = "";
  document.getElementById("courseName").value = "";
  document.getElementById("assignedClass").value = "";

};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("teacher/" + nameV)
    .on("value", function (snap) {
      document.getElementById("name").value = snap.val().name;
      document.getElementById("fatherName").value = snap.val().fatherName;
      document.getElementById("rollNumber").value = snap.val().rollNumber;
      document.getElementById("contactNumber").value = snap.val().contactNumber;
      document.getElementById("cnicNumber").value = snap.val().cnicNumber;
      document.getElementById("picture").value = snap.val().picture;
      document.getElementById("courseName").value = snap.val().courseName;
      document.getElementById("assignedClass").value = snap.val().assignedClass;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("teacher/" + nameV)
    .update({
      //   name: nameV,
      fatherName: fatherNameV,
      rollNumber: rollNumberV,
      contactNumber: contactNumberV,
      cnicNumber: cnicNumberV,
      picture: pictureV
    });
  alert("Data Update");
  document.getElementById("name").value = "";
  document.getElementById("fatherName").value = "";
  document.getElementById("rollNumber").value = "";
  document.getElementById("contactNumber").value = "";
  document.getElementById("cnicNumber").value = "";
  document.getElementById("picture").value = "";
  document.getElementById("courseName").value = "";
  document.getElementById("assignedClass").value = "";
  
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("teacher/" + nameV)
    .remove();
  alert("Data Deleted");
  document.getElementById("name").value = "";
  document.getElementById("fatherName").value = "";
  document.getElementById("rollNumber").value = "";
  document.getElementById("contactNumber").value = "";
  document.getElementById("cnicNumber").value = "";
  document.getElementById("picture").value = "";
  document.getElementById("courseName").value = "";
  document.getElementById("assignedClass").value = "";
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

function submitData() {
    window.location.href = "admindashboard.html";
}