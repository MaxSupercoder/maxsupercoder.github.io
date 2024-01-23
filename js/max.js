var ii = 1;
			
		    //JavaScript is Fun
			window.onload = function()
			{
			    //codeScrolling();
			}
			
		    function codeScrolling()
			{
			    var i = -1;
			    var helloImMax;
			    var timeIt = setInterval(function() {
				    i++;
				    helloImMax = text[i];
					document.getElementById("codeBackdrop").innerHTML += helloImMax;
					if(i === text.length - 1)
					{
						i = -1;
					}
				}, 1);
				
				var timeIt = setInterval(function() {
				    document.getElementById("codeBackdrop").innerHTML = "";
				}, 33000);
				
			}
			
			
			
			function scrn(i, ii)
			{
			    var color = document.getElementById(i.id).style.color;
				if(color === "white")
				{
				    document.getElementById("homeButton").style.color = "white";
					document.getElementById("aboutWebsite").style.display = "none";
					document.getElementById("settingsTab").style.display = "none";
					document.getElementById("settingsButton").style.color = "white";
					document.getElementById("portfolioButton").style.color = "white";
					document.getElementById("contactButton").style.color = "white";
					document.getElementById("projectsButton").style.color = "white";
					document.getElementById("portfolio").style.display = "none";
					document.getElementById("creditsTab").style.display = "none";
					document.getElementById("creditsButton").style.color = "white";
					document.getElementById("projects").style.display = "none";
					document.getElementById("contactPage").style.display = "none";
					document.getElementById("aboutTabII").style.display = "none";
					document.getElementById("aboutTabIII").style.display = "none";
					document.getElementById("aboutTabIIb").style.display = "none";
					document.getElementById("homeButton").style.cursor = "pointer";
					document.getElementById("portfolioButton").style.cursor = "pointer";
					document.getElementById("projectsButton").style.cursor = "pointer";
					document.getElementById("creditsButton").style.cursor = "pointer";
					document.getElementById("settingsButton").style.cursor = "pointer";
					document.getElementById("contactButton").style.cursor = "pointer";
					//document.write(i);
                    document.getElementById(i.id).style.color = "gray";
					document.getElementById(ii).style.display = "block";
					document.getElementById("aboutWebsite").className = "aboutWebsite";
					j = 0;
					document.getElementById(i.id).style.cursor = "grabbing";
				}
			}
			
			function Background()
			{ 
			    const b = [
			        "https://alphagypsumboard.com/wp-content/uploads/2019/07/Background-website-01-1024x687.jpg",
			        "https://images.saymedia-content.com/.image/t_share/MTk0NTIwMDQ4MzU2ODI4Nzgy/how-to-create-cool-website-backgrounds-the-ultimate-guide.gif",
			        ""
				];
				
			    document.getElementById("codeBackdrop").src = b[ii];
				if(ii === 2)
				{
				    ii = 0;
				} else {
				    ii++;
				}
			};
			
			var j = 0;
			function cycleHome(b)
			{
				const tabs = ["aboutWebsite", "aboutTabII", "aboutTabIII"];
				cycleHomeAni(tabs[j]);
				
				if(b === 1){
					j--
					var a = 0;
				} else {
					var a = 2;
					j++
				}
				
				if(j >= 3)
				{
					j = 0;
				};
				cycleHomeAniW(tabs[j]);
				
				if(j === 1)
				{
					document.getElementById("aboutTabIIb").style.display = "block";
				} else {
					if(j === a){
					document.getElementById("aboutTabIIb").style.animationName = "btWbstAnimation";
					var timer = setInterval(function(){
						document.getElementById("aboutTabIIb").style.display = "none";
						document.getElementById("aboutTabIIb").style.animationName = "awawawa";
						clearInterval(timer);
					}, 2900);
					}
				};
			}
			
			function cycleHomeAni(x)
			{
				document.getElementById(x).className = "btWbst";
				var timer = setInterval(function(){
				   	document.getElementById(x).style.display = "none";
					clearInterval(timer);
				}, 2900);	
                				
			}
			
			function cycleHomeAniW(x)
			{
				document.getElementById(x).className = "b";	
				document.getElementById(x).style.display = "block";
			}	

            function pop() {
				document.getElementById("de").innerHTML = "Too Bad!";
            }			