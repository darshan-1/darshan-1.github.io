function registration()
	{

		var name= document.getElementById("t1").value;
		var email= document.getElementById("t2").value;
		var uname= document.getElementById("t3").value;
		var pwd= document.getElementById("t4").value;			
		var cpwd= document.getElementById("t5").value;
		
        //email id expression code
		var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(name=='')
		{     error_reg_nameempty.innerHTML = "Please enter your name";
			
		}
		 
		else if(!letters.test(name))
		{
			error_reg_nametest.innerHTML = "only alphabet characters";
		}
		else if(email=='')
		{
			error_reg_mailempty.innerHTML = "Please Enter User-Email";
			
		}
		else if (!filter.test(email))
		{
			error_reg_mailinvalid.innerHTML = "Please enter valid email";
		}
		else if(uname=='')
		{
			error_reg_unameempty.innerHTML = "Username Field can not be empty";
		}
		else if(!letters.test(uname))
		{
			error_reg_unameinvalid.innerHTML = "only alphabet characters";
			
		}
		else if(pwd=='')
		{
			error_reg_pwdempty.innerHTML = "Please enter Password";
			
		}
		else if(cpwd=='')
		{
			error_reg_cpwdempty.innerHTML = "Please re-enter Password in Confirm Password";
		}
		else if(!pwd_expression.test(pwd))
		{
			error_reg_pwdinvalid.innerHTML ="Upper case, Lower case, Special character and Numeric letter are required in Password filed";
		}
		else if(pwd != cpwd)
		{ error_reg_cppwd.innerHTML = "Password does not Matched";
		
		}
		else if(document.getElementById("t5").value.length < 6)
		{  error_reg_pwdminlength.innerHTML = "Password minimum length is 6";
			
		}
		else if(document.getElementById("t5").value.length > 12)
		{ error_reg_pwdmaxlength.innerHTML = "Password max length is 12";
			
		}
		else
		{				                            
               alert('Thank You for Login & You will soon be Redirected to GreenHunch Website');
			   
			   window.location = "index.html"; 
		}
	}
	function clearFunc()
	{
		document.getElementById("t1").value="";
		document.getElementById("t2").value="";
		document.getElementById("t3").value="";
		document.getElementById("t4").value="";
		document.getElementById("t5").value="";
	}