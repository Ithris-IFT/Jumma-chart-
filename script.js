.opt{
    text-align:center;
}
::placeholder{
	 font-family: 'Tiro Tamil', serif;
    color:#196578;
    font-weight:bolder;
}
		
		 body{
       
			-webkit-print-color-adjust: exact !important;
			background: white !important;
			align-items: center;
			justify-content: center;

                       /* min-width:960px;*/
                         
       
		}

         .container{
			position: absolute;
			margin: 350px 270px 100px;
			width: 485px;
			height: 600px;
      background: #171713;
			border-radius: 20px;
			display:block;
			box-shadow: 0 0 30px 20px blue;
                       
		}
         
		.login_form{

			padding: 60px 60px;
		}
		label{
			font-size: 30px;
			margin: 5px 0;
	    color: #84e3b0;
			font-weight: bold;
			font-family: 'Tiro Tamil', serif;
			
		}
		.login_form input{
			font-family: 'Tiro Tamil', serif;
			font-weight: bolder;
			height: 50px;
			width: 350px;
			padding: 0 5px;
			font-size: 18px;
			outline: none;
			border: 2px solid  #2F96EF;
			box-shadow: 0 0 5px 5px yellow;
			border-radius: 10px;
		}
		.login_form input:focus{
			/*border: 4px solid #2F96EF;*/
			box-shadow: 0 0 5px 5px seagreen;
		}
		
		#submitbtn{
				box-shadow: 0 0 5px 5px #1666f0;
				margin: 45px 0 30px 0;
				height: 60px;
				width: 200px;
				font-size: 40px;
				color: black;
				outline: none;
				font-weight: bold;
				cursor: pointer;
				/*padding: 10px 5px 20px 5px;*/
				font-family: 'Tiro Tamil', serif;
				background: yellow;
				border-radius: 25px;
				border: 2px solid black;

		}
     
        .login_form #check_uname,
       .login_form #check_pwd{
       	margin-top: 5px;
       	width: 345px;
       	font-size: 18px;
       	color: red;
       	background: rgba(255, 0, 0, 0.1);
       	text-align: center;
       	padding: 5px 8px;
       	border-radius: 7px;
       	border: 1px solid #EF9A9A;
       	display: none;

       }
       #check,#session,#offline{
       	font-family: 'Tiro Tamil', serif;
       	display: none;
       	box-shadow: 0 0 2px 2px red;
       	margin-top: 5px;
       	width: auto;
       	font-size: 18px;
       	color: white;
       	font-weight: bold;
       	padding: 10px 8px;
       	background: red;
       	text-align: center;
       	border-radius: 10px;
       	border: 2px solid #Ef9A9A;
       }
#success,#online{
	    font-family: 'Tiro Tamil', serif;
       	display: none;
       	box-shadow: 0 0 2px 2px #37eb23;
       	margin-top: 5px;
       	width: auto;
       	font-size: 18px;
       	color: white;
       	font-weight: bold;
       	padding: 10px 8px;
       	background:#29f013 ;
       	text-align: center;
       	border-radius: 10px;
       	border: 2px solid #1e7d14;
       }
#button{
	font-family: 'Arima', cursive;
  background-color: #4CAF50;
  border: 2px solid black;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  margin: 10px 20px;
  border-radius: 20px;
}
#button:hover{
    background-color:red;
    color:white;
    border: 2px solid black;
    }
    #date{
			font-family: 'Arima', cursive;
			background-color: black;
			color: white;
			font-weight: bolder;
			font-size: 20px;
			text-align: center;
		}
		 #date_style{
			font-family: 'Tiro Tamil', serif;
			background-color: white;
                        text-align:center;
			color: black;
			font-weight: bolder;
			font-size: 20px;
			cursor: pointer;
			border-radius: 10px;
			border: 3px solid red;
		}
		#date_style:focus{
			border: 4px solid blue;
		}

#showpwd{
		height: 20px;
		width: 20px;
		font-size: 20px;
		outline: none;
		box-shadow: none;
		font-weight: normal;
		cursor: pointer;

}
@keyframes shake {
  0% { margin-left: 0rem; }
  25% { margin-left: 0.5rem; }
  75% { margin-left: -0.5rem; }
  100% { margin-left: 0rem; }
  
}


/*hide the content*/

#content,#button{
  
  display: none;
 }
		table{
			font-family: 'Tiro Tamil', serif;
			border-collapse: collapse;
		    font-weight: bolder;
                          background-color:white;
			margin: 10px 50px 100px 50px;		
		}
		
		td,th{
            font-family: 'Tiro Tamil', serif;
            font-weight: bolder;
			border: 2px solid black;
			text-align: left;
			font-weight: bolder;
			font-size: 100%;

		}
		#head{
			font-family: 'Tiro Tamil', serif;
			background-color: green;
			color: white;
			font-weight: 60;
			font-size: 25px;
		}
		#tntj{
			font-family: 'Arima', cursive;
			background-color: black;
			color: white;
			font-weight: bolder;
			font-size: 25px;
			text-align: center;
			padding: 20px 15px 1px;
		}
		img{
			border-radius: 20px;
		}
		select{
			border: 1px solid white;
			background-color: white;
			text-align: left;
			padding:5px;
			font-weight: bolder;
			font-size: 90%;
			-webkit-appearance: none;
			cursor: pointer;
			font-family: 'Tiro Tamil', serif;
		}
		select:hover{
			background-color: #ff1212;
			border-radius: 15px;
			border: 2px dashed black;
			}
/*#names,#name,input{
			border: 1px solid white;
			background-color: white;
			text-align: left;
			width: 400px;
			padding:4px;
			font-weight: bolder;
			font-size: 90%;
		-webkit-appearance: none;
			cursor: pointer;
			font-family: 'Tiro Tamil', serif;
		}*/

		body{
			-webkit-print-color-adjust: exact !important;
		}
		@media print{
			 
			@page{
				size: a3;
			}
		table{
			font-family: 'Tiro Tamil', serif !important;
			border-collapse: collapse !important;	
			/*font-weight: bolder !important;*/
			margin: 90px 60px 90px !important;
      background-color: white !important;
		}
		
		td,th{
			font-family: 'Tiro Tamil', serif !important;
			border: 2px solid black;
			text-align: left;
			/*font-weight: bolder;*/
			font-size: 110% !important;

		}
		
		#head {
			font-family: 'Tiro Tamil', serif !important;
			padding: 10px !important;
			margin: 3px 2px;
			font-weight: bolder !important;
			font-size: 20px !important;
      width:auto !important;
            
		}
 

		#tntj{
		    font-family: 'Arima', cursive !important;
			font-weight: bolder !important;
			font-size: 30px !important;
			text-align: center !important;
			padding: 20px !important;
		}
		#date_style{
			font-family: 'Tiro Tamil', serif;
			background-color: black !important;
			color: white !important;
			text-align: center !important;
			font-weight: bolder;
			font-size: 30px !important;
			border: 2px solid black !important;
		}
    #date{
			font-family: 'Arima', cursive;
			background-color: black;
			color: white;
			font-weight: bolder;
			font-size: 30px !important;
			text-align: center !important;
      margin-top: 0;
		}

			button,form,footer,#session,#online,#offline{
				display: none !important;
			}
                .container{
                       display: none !important;
                            }
#date_style{
-webkit-appearance: none !important;
}
		}
