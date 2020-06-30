// JavaScript Document

var content= [["Hard Light: A Senior Thesis Project Exploring Transmedia Through Practical Application","sample text", "content/hard_light/gifBg.gif", "thesisLanding.html"],["HELP! The Higher Education Learning Program <br> <i>Computer Science Capstone </i>", "HELP!", "content/help/splash.png", "https://github.com/n0ahth0mas/biomechanics-help#readme"],["The Uncanny Celebrity: Exploring the Implications of Virtual Influencers on Instagram", "This project, created for my Online Communication course, explores the, , , ", "content/digital_influencers/img.jpeg", "influencer.html"],["Movie Night: Flutter Application <br> <i>Flutter Project </i>", "Flutter","content/movienight/splash.jpg","https://github.com/n0ahth0mas/movie_night#readme" ],["HomeCook <br> <i>Android Application</i>", "HomeCook", "content/homecook/splash.jpg", "https://github.com/n0ahth0mas/HomeCook#readme"], ["Noah Thomas Video Portfolio","Video Portfolio", "content/reel.jpg", "videoPortfolio.html"]] ;
var portfolio = document.getElementById("portfolioGrid");

function populatePage(sample){
	for(var i=0; i<sample.length; i++){
		portfolio.innerHTML += '<div class="col-lg-6"><a class="portfolio-item" href="'+ sample[i][3]+'"><span class="caption"><span class="filled caption-content"><p class="mb-0 centered desc">' + sample[i][0] +'</p> </span></span><img class="portImgs" src="'+ sample[i][2]+ '" alt=""></a></div>';
	}
}

window.onload = populatePage(content
						);