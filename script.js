<!DOCTYPE html>
<html lang="ta">
<head>
<meta charset="utf-8">
<!-- <meta http-equiv="X-UA-Compatible" content="IE=edge"> -->
<meta name="viewport" content="width=670, user-scalable=no">
<title>Jummah chart</title>
<!--  login page loading style -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<!-- Check online or offline -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<!-- google fonts link -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<!-- font style Tiro -->
<link href="https://fonts.googleapis.com/css2?family=Tiro+Tamil:ital@1&display=swap" rel="stylesheet">

<!-- <link href="https://fonts.googleapis.com/css2?family=Coiny&display=swap" rel="stylesheet"> -->
<!-- <link rel="stylesheet" type="text/css" href="tntjthanjavur.css"> -->

<link href="https://fonts.googleapis.com/css2?family=Arima:wght@700&display=swap" rel="stylesheet">
<!-- style for whole page -->
	<link rel="stylesheet" type="text/css" href="loginpage.css">
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/firebase/7.14.1-0/firebase.js"></script>

   <!-- <meta name="viewport" content="width=device-width,initial-scale=1, user-scalable=no"> -->
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
        <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
	</head>

<body onoffline="offline()" ononline="online()">
	<noscript>You need to enable JavaScript to run this app.</noscript>
        <div class="responsive-bar">
        <div class="logo">
            <img src="tntjlogo.jpeg" alt="logo"/>
            </div>
            <div class="menu">
            <h4><i class="material-icons" style="font-size:48px;color:wheat;">menu</i></h4>
            </div>
        </div>
		<nav>
            <div class="logo">
            <img src="tntjlogo.jpeg" alt="logo"/>
            </div>
         <ul>
         	<hr>
            <li><a href="#head" >Home</a></li>
             <!-- <li><a href="#">About us</a></li> -->
       
             <li><a href="#dhayilistbutton" id="navpdf" style="display:none;" onclick="printing();">Print has pdf</a></li>
             <li id="dhayilistlink" style="display:none;"><a href="Dhayilist.html" >Dhayikal List</a></li>
             <li><a href="#" id="fb" onclick="feedback()">Contact Us</a></li><hr><br>
               <li style="font-weight:bolder;color: goldenrod;">  © Copyright 2022 TNTJ THANJAI SOUTH ® </li><br>
            </ul>

        </nav>
     
 
	<!-- loginpage -->
	<div class="container" id="form_container">
		<!-- success message -->
    <div id="success" >Login Successfully...  <i class="fa fa-spinner fa-spin"></i></div>
    <!-- failed ! message -->
		<div id="check" >Incorrect details ! <i class="fa fa-refresh fa-spin"></i></div>
		<!-- form starting -->
	<form class="login_form" id="form" name="form">
	<br>
  <label> User Name</label>
	<br>
	<br>
	<input type="text" name="uname" id="uname" placeholder="Enter UserName" maxlength="10" required autofocus>
	<div id="check_uname">Please enter a valid userName !</div>
	<br>
	<br>
	<br>
	<label >Password</label>
	<br>
	<br>
	<input type="password" name="password" id="password" placeholder="*******" maxlength="10" required>
	<br>
	<input type="checkbox" onclick="showpassword();" id="showpwd"><label id="showpwd">show password</label>
	<div id="check_pwd">Please Enter a valid password !</div>
	<br>
	<button type="submit" name="submit" id="submitbtn" onclick="validateloginpage()" >Login</button>
</form>
</div>
<script type="text/javascript" src="script.js">
	//login authentication and javascript content
</script>
<script type="text/javascript">
	$(window).on('scroll',function(){
            if($(window).scrollTop()){
                $('nav').addClass('black');
            }
            else{
                $('nav').removeClass('black');
            }
        })
  /*menu button onclick function*/         $(document).ready(function(){
                $('.menu h4').click(function(){
                    $("nav ul").toggleClass("active")
            })
            })
 
</script>
<!-- table -->
<div id="offline"><i class="fa fa-warning"></i>  No Network Connection !</div>
<div id="online"><i class="fa fa-globe"></i>  Back Online !</div>
<div id="session">Your Session is About to end shortly !<i class="fa fa-spinner fa-spin"></i></div>
   <div id="content" class="print-container">
	 	
	<table lang="ta" align="center" id="table">
		<thead>
		<tr>
			<th colspan="4" ><img src="jummahheading.jpg" alt="தமிழ்நாடு தவ்ஹீத் ஜமாஅத் - தஞ்சை தெற்கு மாவட்டம் ஜும்ஆ தாயிக்களின் விபரம்." style="width:100%;height:135px;"></th>
		</tr>
		<tr>
			<th colspan="4" id="date"><strong> ஜும்மா தாயிக்களின் விபரம் </strong><input type="date"
        placeholder="dd-mm-yyyy" min="2023-05-01" max="2030-12-31" id="date_style" ></th>
		</tr>

	<tr id="head" >
			<th>S.NO</th>
			<th >கிளை/பொறுப்பாளர்</th>
			<th >நேரம்</th>
			<th >தாஃயி பெயர்/தொடர்புக்கு</th>
			
		</tr>
	</thead>
	<tbody>
			<tr>
			<td style="text-align: center;">1.</td>
			<td>ஆவணம் - 9566336108 </td>
			<td >12:30 - 01:00</td>
			<td id="kilai_1">
			  </td>
		</tr>
		<tr>
			<td style="text-align: center;">2.</td>
			<td>அதிரை 1 - 8124242449</td>
			<td>12:30 - 01:10</td>
			<td id="kilai_2"></td>
		</tr>
		<tr>
			<td style="text-align: center;">3.</td>
			<td>அதிரை 2 - 9629533887</td>
			<td>12:30 - 01:15</td>
			<td id="kilai_3"></td>
		</tr>
		<tr>
			<td style="text-align: center;">4.</td>
			<td>அம்மாபேட்டை - 9345054927</td>
			<td>12:45 - 01:15</td>
			<td id="kilai_4"></td>
		</tr>
		<tr>
			<td style="text-align: center;">5.</td>
			<td>அம்மாபேட்டை ரயிலடி 9487910796 </td>
			<td>12:45 - 01:15</td>
			<td id="kilai_5"></td>
		</tr>
		<tr>
			<td style="text-align: center;">6.</td>
			<td>ஈஸ்வரி நகர் - 9791904549 </td>
			<td>01:00 - 01:30</td>
			<td id="kilai_6"></td>
		</tr>

		<tr>
			<td style="text-align: center;">7.</td>
			<td> கண்டியூர் - 8270348485</td>
			<td>12:45 - 01:15</td>
			<td id="kilai_7"></td>
		</tr>
		
		<tr>
			<td style="text-align: center;">8.</td>
			<td>கருப்புர் - 9952862782 </td>
			<td>01:10 - 01:40</td>
			<td id="kilai_8"></td>
		</tr>
		
		<tr>
			<td style="text-align: center;">9.</td>
			<td>மதுக்கூர் - 9095632063 </td>
			<td>12:40 - 01:20</td>
			<td id="kilai_9"></td>
		</tr>
		
		<tr>
			<td style="text-align: center;">10.</td>
			<td>மல்லிப்பட்டினம் - 7530007456</td>
			<td>12:50 - 01:20</td>
			<td id="kilai_10"></td>
		</tr>
		
		<tr>
			<td style="text-align: center;">11.</td>
			<td>முகமது பந்தர் - 9952533238 </td>
			<td>01:00 - 01:30</td>
			<td id="kilai_11"></td>
		</tr>
		
		<tr>
			<td style="text-align: center;">12.</td>
			<td>முடச்சிக்காடு - 9600508045</td>
			<td>12:45 - 01:15</td>
			<td id="kilai_12"></td>
		</tr>
		
		<tr>
			<td style="text-align: center;">13.</td>
			<td>ஒரத்தநாடு - 7539991654</td>
			<td>01:00 - 01:30</td>
			<td id="kilai_13"></td>
		</tr>
		
		<tr>
			<td style="text-align: center;">14.</td>
			<td>பட்டுக்கோட்டை - 6382236258 </td>
			<td>12:45 - 01:20</td>
			<td id="kilai_14"></td>
		</tr>
		
		<tr>
			<td style="text-align: center;">15.</td>
			<td>புதுப்பட்டினம் - 7010606193</td>
			<td>12:40 - 01:10</td>
			<td id="kilai_15"></td>
		</tr>
		
		<tr>
			<td style="text-align: center;">16.</td>
			<td>RMS காலணி - 8754218549</td>
			<td>12:30 - 01:00</td>
			<td id="kilai_16"></td>
		</tr>
		
		<tr>
			<td style="text-align: center;">17.</td>
			<td>சேதுபாவா சத்திரம் - 9488584934 </td>
			<td>12:45 - 01:30</td>
			<td id="kilai_17"></td>
		</tr>
		
		<tr>
			<td style="text-align: center;">18.</td>
			<td>செந்தலை - 9688845638</td>
			<td>01:10 - 01:40</td>
       <td id="kilai_18"></td>
		</tr>
		
		<tr>
			<td style="text-align: center;">19.</td>
			<td>தஞ்சை மாநகரம் - 8870799975 </td>
			<td>12:30 - 01:00</td>
			<td id="kilai_19"></td>
		</tr>
		
		<tr>
			<td style="text-align: center;">20.</td>
			<td>திருக்காட்டுப்பள்ளி - 9952845689</td>
			<td>01:00 - 01:30</td>
			<td id="kilai_20"></td>
		</tr>
		
		<tr>
			<td style="text-align: center;">21.</td>
			<td>திருப்பந்துருத்தி - 9940946309 </td>
			<td>01:00 - 01:30</td>
			<td id="kilai_21"></td>
		</tr>
		
		<tr>
			<td style="text-align: center;">22.</td>
			<td>வல்லம் - 9080343595 </td>
			<td>01:00 - 01:30</td>
            <td id="kilai_22"></td>
		</tr>
		
		<tr>
			<td style="text-align: center;">23.</td>
			<td>பேராவூரணி - 9894887270</td>
			<td>12:55 - 01:30</td>
			<td id="kilai_23"></td>
		</tr>
		
		<tr>
			<td style="text-align: center;">24.</td>
			<td>பூதலூர் - 8778891017 </td>
			<td>01:30 - 02:00</td>
			<td id="kilai_24"></td>
		</tr>
		
		
		<tr>
			<th colspan="4" id="tntj" >தாஃயிக்கள் தொடர்பான தகவல்களுக்கு - 9944191505</th>
		</tr>
<tr>
   <th colspan="4" style="background-color: #312542;"><img src="jummah.jpg" alt="Jummah img" style="max-width:100%;height:auto;"></th>
 </tr>
</tbody>
	</table>
</div>
<!-- END OF THE TABLE -->
<!-- options template -->
<!-- jquery -->
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

<center>
	<button id="button" onclick="printing();">DOWNLOAD PDF!</button>
	<button id="dhayilistbutton" onclick="window.open('Dhayilist.html','_self');">DHAYIKAL LIST</button>
</center>
<br>
 <footer style="font-family: 'Tiro Tamil', serif;">
	<cite style="font-weight:bolder;">  ©️ Copyright 2022 TNTJ THANJAI SOUTH </cite>
	<!-- <a class="change" href="mailto:ithris615@yahoo.com" title="send your feedback" onclick="alert('Opening G-Mail or E-Mail...')"><em style="font-weight: bolder;">feed back?</em></a> -->
</footer> 
</body>
</html>
