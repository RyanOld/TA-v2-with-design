[HTML CODE HERE BRO]

<?php
$username = $_POST['username'];
$password = $_POST['password'];

$con = mysqli_connect('localhost','root','','olshop2'); #NOTE : Ganti Argumen terakhir dengan nama database
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"olshop2");
$sql="SELECT * FROM users WHERE username = '".$username."' AND password = '".$password."';";
$result = mysqli_query($con,$sql);

if(!mysqli_fetch_array($result)) {
  die("Username/Password Anda Salah!");
}
else {
  echo "Selamat Datang!";
}
#echo "<table>
#<tr>
#<th>Firstname</th>
#<th>Lastname</th>
#<th>Age</th>
#<th>Hometown</th>
#<th>Job</th>
#</tr>";
#while($row = mysqli_fetch_array($result)) {
#  echo "<tr>";
#  echo "<td>" . $row['FirstName'] . "</td>";
#  echo "<td>" . $row['LastName'] . "</td>";
#  echo "<td>" . $row['Age'] . "</td>";
#  echo "<td>" . $row['Hometown'] . "</td>";
#  echo "<td>" . $row['Job'] . "</td>";
#  echo "</tr>";
#}
#echo "</table>";
mysqli_close($con);
?>
</body>
</html> 