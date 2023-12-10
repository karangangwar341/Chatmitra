const conversation=[
    {
        
    }
]

	document.getElementById("home").addEventListener("click", function scroll() {
	  document.getElementById("homediv").scrollIntoView({ behavior: "smooth" });
	});
	document.getElementById("notices").addEventListener("click", function scroll() {
	  document.getElementById("noticediv").scrollIntoView({ behavior: "smooth" });
	});
	document.getElementById("sign in1").addEventListener("click", function navigateToPage() {
        window.location.href = "login.html";
       });
       document.getElementById("chatpage").addEventListener("click", function navigateToPage() {
        window.location.href = "chat.html";
       });
       document.getElementById("icon1").addEventListener("click", function navigateToPage() {
        window.location.href = "home.html";
       });
       document.getElementById("signinf").addEventListener("click", function navigateToPage() {
        window.location.href = "home.html";
       });


       document.getElementById("sign up1").addEventListener("click", function navigateToPage() {
        window.location.href = "signup.html";
       });
    
 document.getElementById("toggle").addEventListener("click", function() {
  const login = document.getElementById("login section");
  const signup = document.getElementById("signup section");
  const toggle = document.getElementById("toggle");

  if (login.classList.contains("hidden")) {
    login.classList.remove("hidden");
    signup.classList.add("hidden");
    toggle.textContent = "Switch to Login";
  } else {
    login.classList.add("hidden");
    signup.classList.remove("hidden");
    toggle.textContent = "Switch to Signup";
  }
 });
 