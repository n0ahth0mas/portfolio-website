// JavaScript Document

var sample= [["title1", "caption 1"],["title2", "caption 2"],["title3", "caption 3"],["title4", "caption 4"],["title5", "caption 5"]] ;
var portfolio = document.getElementById("portfolioGrid");

var title = "TITLE"
var caption = "this is a really cool caption!"

var block = '<div class="col-lg-6"><a class="portfolio-item" href="#"><span class="caption"><span class="caption-content"><h2>${title}</h2><p class="mb-0">${caption}</p> </span></span><img class="img-fluid" src="img/portfolio-1.jpg" alt=""></a></div>';

function populatePage(sample){
	for(var i=0; i<sample.length; i++){
		portfolio.innerHTML += '<div class="col-lg-6"><a class="portfolio-item" href="#"><span class="caption"><span class="caption-content"><h2>' + sample[i][0] + '</h2><p class="mb-0">' + sample[i][1] +'</p> </span></span><img class="img-fluid" src="img/portfolio-1.jpg" alt=""></a></div>';
	}
}

window.onload = populatePage(sample);