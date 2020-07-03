// JavaScript Document

//char population
var charBios = [{
	name: "Noah",
	fullname: "Noah Thomas",
	img: "content/hard_light/noah.jpg",
	bio: "Noah, our main character, is a pretty average guy. His life isn't too exciting, which you'll find out in his early vlog, and he's pretty overworked. A busy Computer Science major at his school, he's been stuck in a cycle of all work and no play."
	}, {
	name: "Athena",
	fullname: "Athena Janus",
	img: "content/hard_light/athena.jpg",
	bio: "Mark Zukerberg. Steve Jobs. Bill Gates. Elon Musk. When one hears these names, Athena Janus is often next on the list. These tech titans all have one thing in common: they have forever changed the world with their innovations. Athena knew she was going the change the world from a young age, despite her humble beginnings. The youngest of eight, Athena has the odds stacked againster. However, after getting a full ride to Stanford (and later dropping out to pursue her first business, Connect2Me), she made her mark. Now, 20 years later, she's back with her latest innovation: the Janus HOLO "
	}, {
	name: "Rose",
	fullname: "Rose LASTNAME",
	img: "content/hard_light/rose.png",
	bio: "Rose is an internet-renowned conspiracy theorist. Although she has been posting content for a while, her recent findings surrounding the Baker murders (which led the FBI to solve the case) made her rise to stardom. Her recent videos have been more lighthearted, but Noah and the saga of the Janus HOLO has recently caught her eye."	
	}, {
	name: "Violet",
	fullname: "Violet LASTNAME ",
	img: "content/hard_light/violet.png",
	bio: "Violet, a current Chemistry & Phiolosophy major on the pre-med track, has shown promise in field. After being accepted to the most prestegious college medical program, industry leaders are beginning to show interest in her prospects after college."	
	},];

var charHead = document.getElementById("modal-title");
var charBody = document.getElementById("modal-body");

function popCharModal(id){
	charHead.innerHTML =  charBios[id].name + "'s Character Bio";
	charBody.innerHTML = charBios[id].bio;
}

// Timeline population

//using large variable becasue I don't have time for creating DB

var timelineElement = [
	{
		type: "video",
		day: 1,
		title: "Janus HOLO Teaser #1",
		media: "https://www.youtube.com/embed/rn8bw4nncbE",
		channel: "Janus Corp",
		description: "Janus HOLO. 7 Days.",
		notes: "This video was made to replicate many of the mysterious and overdramatic tech release videos that always seem to attract casual views and diehard fans alike. Theoretically, this would be one of many videos leading up the the ultimate premiere of the HOLO, building both hype and a pool of content for the Janus corporation. Because much of Noah's story is weighted heavily in the back, the Janus corp would have their own narrative filling up a lot of the first half of this timeline, ending at Rose's expose video. This way, the Janus corporation's channel could serve as an introductory stage to the rest of the content of the story.",
		script: "script"
	},	{
		type: "video",
		day: 4,
		title: "First YouTube Video!",
		media: "https://www.youtube.com/embed/kbYpHsGVDuo",
		channel: "Noah",
		description: "Hi everyone and welcome to my brand new YouTube Channel! This is something I've wanted to do for a long time, and I'm excited I've finally taken the plunge. Be sure to like and subscribe, because I have a lot more exciting content coming soon!",
		notes: "This is the audience's first interaction with Noah. At this point, he hasn't even heard of the Janus corporation. This video is a direct parallel to the last video uploaded on his channel. In terms of an expositional standpoint, I needed to think of something that would get all of his character traits across. I realized that this is a very easy idea to accomplish, as vloggers' content, especially early iterations, are filled with personal details poured out to their viewers. Furthermore, I wanted to ground this project in reality for the first few videos before other sci-fi elements are introduced. This character is 2/3 my real life, and 1/3 content built to explore personal conflicts and motivations necessary for the story.",
		script: "script"
	},	{
		type: "video",
		day: 7,
		title: "HOLO Release",
		media: "https://www.youtube.com/embed/MiJrZbAj6lM",
		channel: "Janus Corp",
		description: "Janus HOLO, releasing in 2021. Preorder at janus.com, and keep an eye on the Janus social media for your chance to win the first edition of the HOLO early.",
		notes: "This is the first of many videos to suffer from complications due to Coronavirus. I needed to figure out how to build at least some sort of persona for Athena, because all I had was an audio clip of her voice. Because her character was based on (and would be expanded upon in an actual application of this project) Elizabeth Holmes already, I decided I didn't have much choice other than to actually 'cast' Holmes as her character. Given the nature of the footage, the audio doesn't line up, clips repeat, and the 'clone' of her is not very appealing, but this, much like content in other videos, is meant to be used as a visual aid for the story happening in the voiceover.",
		script: "script"
	},	{
		type: "video",
		day: 7,
		title: "HOLO Release Reaction",
		media: "https://www.youtube.com/embed/NpsurIltd18",
		channel: "Noah",
		description: "Wow! The Janus Corporation has really changed history with their creation of the HOLO. Watch the video with me to see my reaction and hear my thoughts about it.",
		notes: "The main purpose of this video is to rehash the fine details of the HOLO - how it works, what its limited to, etc. By clearing up any doubts or confusion about the entity, the narrative can move forward without being bogged down by constant clarifications to the rules of the world. Furthermore, if other issues arise, Twitter can be used for instant band-aids",
		script: "script"
	},	{
		type: "video",
		day: 10,
		title: "Contest Announcement",
		media: "https://www.youtube.com/embed/ZFVHSJ-789M",
		channel: "Janus Corp",
		description: "Submit your videos to contest@januscorp.com for your chance to win. Winners announced in 2 weeks!",
		notes: "This entire idea of a contest came from a narrative issue. How can I ensure that Noah is the only person with this device? There were plenty of ways to go about this, but by using a contest, I could theoretically have a large set of dummy submissions from all over, increasing reach and visibility while also involving audience members in the narrative. If there were submissions, a video supercut of all of the submissions would also have been released, again a nod to the fans.",
		script: "script"
	},{
		type: "tweet",
		title: "Tweet",
		media:"tweets/Create.png"
	},	{
		type: "video",
		day: 15,
		title: "Day in the life #1",
		media: "https://www.youtube.com/embed/f8Ert0_CHF4",
		channel: "Noah",
		description: "Hey everyone and welcome back to my channel! I thought I would take you all along with me for a day in my life. After putting this all together, I'm realizing its not too exciting :/ But hey, that's life as a college stuent! Thanks for watching!",
		notes: "All three day in the life videos are used to show his life before/during/after the HOLO, and how it has changed him, for better or for worse. In this instance, it is showing a need for some way to break out of the unbalanced cycle of constant work and no play.",
		script: "script"
	},	{
		type: "video",
		day: 21,
		title: "Contest Entry",
		media: "https://www.youtube.com/embed/t83ftYEUW1c",
		channel: "Noah",
		description: "Hi Athena and the Janus Corporation! Here's my entry for the HOLO contest. Winning the HOLO would really change my life for the better!",
		notes: "Nothing too special in this video - mainly, there needs to be a way for Noah to actually win the contest as well as make a promise to the viewers that he will be posting content with his HOLO on his channel.",
		script: "script"
	},{
		type: "tweet",
		title: "Tweet",
		media:"tweets/winning1.png"
	},{
		type: "tweet",
		title: "Tweet",
		media:"tweets/winning2.png"
	},{
		type: "tweet",
		title: "Tweet",
		media:"tweets/winning3.png"
	},{
		type: "tweet",
		title: "Tweet",
		media:"tweets/UNBOX1.png"
	},{
		type: "tweet",
		title: "Tweet",
		media:"tweets/unbox2.png"
	},
		{
		type: "tweet",
		title: "Tweet",
		media:"tweets/unbox3.png"
	},
		{
		type: "tweet",
		title: "Tweet",
		media:"tweets/unbox4.png"
	},
		{
		type: "tweet",
		title: "Tweet",
		media:"tweets/unbox5.png"
	},	{
		type: "video",
		day: 25,
		title: "HOLO Unboxing and Setup",
		media: "https://www.youtube.com/embed/6zyzxQC_S34",
		channel: "Noah",
		description: "Today's the day! I got my HOLO in the mail and I'm excited to open and set it up with all of you!",
		notes: "This is a popular trend a lot of tech YouTubers participate in, so I figured this would be a good way to explain the intrcacies about the device. Read more about the Janus setup video in the next section.",
		script: "script"
	},	{
		type: "video",
		day: 25,
		title: "Janus HOLO Setup Video",
		media: "https://www.youtube.com/embed/nH-gGp98HEg",
		channel: "Janus Corp",
		description: "(this video will probably not explicitly posted, only referred to in Noah's video)",
		notes: "This is not at all how I envisioned this video, but I had to make due with the circumstances. In my ideal vision, this would have a similar energy to a pre-flight instruction video - fake emotions and very explicit movements meant to emphasize the right way to do things. There are also some very important narrative rules established in this video. Namely, how the HOLO actually works from a 'technological' standpoint and explicit instuctions for how things could go wrong in the future.",
		script: "script"
	},	
	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/meeting1.png"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/meeting2.png"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/meeting3.png"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/meeting4.png"
	},{
		type: "video",
		day: 26,
		title: "Meeting my HOLO",
		media: "https://www.youtube.com/embed/G4HOVd7M7hA",
		channel: "Noah",
		description: "Introducing my HOLO! Check out his creation and and my first impressions.",
		notes: "This is the 'it's alive!' moment in this narrative. The creation of the HOLO signifies a new era for Noah, the end of his old life - whether he knows it or not. This was originally planned to be a much longer video, also introducing his roomates (who would ultimately have a larger part in this narrative than appearing here and there and being mentioned briefly) and utilizing some well planned shots to establish a level of realism in the HOLO. With more time and a bigger team, this video would utilize a number of VFX shots playing with the opacity of the HOLO and showing it truly interact with Noah (such as passing the HOLO base between each other), giving the viewers a true sense of the HOLO taking up real space. This would also be the start of a number of tests exploring the HOLO's transformative and replication properties, demonstrating that it doesn't always have to keep one form. This is used in the next video as well, but there would be elements in this video that put that level of replication to the test, such a mimicing voice and personalities. In other tests, Noah's roomates would not be able to tell the difference between him or the HOLO",
		script: "script"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/random1.png"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/random2.png"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/random3.png"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/random4.png"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/random5.png"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/random6.png"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/random7.png"
	},	{
		type: "video",
		day: 27,
		title: "Pranking People with my HOLO!",
		media: "https://www.youtube.com/embed/BKFJC5JUNXQ",
		channel: "Noah",
		description: "I took my HOLO out around my college campus this weekend and pranked some random people who go to my school! It didn't really go as I expected though. . .",
		notes: "Ideally, this would be a much longer video with a lot more of these pranks - this is just a sample of a few of them. The VFX are not fully finished for these either. This video is, again, a very popular category of YouTube videos, would serve to demonstrate some of the good of the HOLO while also showing some of the potentially harmful features (in the last video, for example). Continuing a movie themed track, there is a prank inspired by <i>The Shining</i>, and theoretically, there would be more movie references as well.",
		script: "script"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/h1t1.png"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/h1t2.png"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/h1t3.png"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/h1t4.png"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/h1t5.png"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/h1t6.png"
	},	{
		type: "video",
		day: 28,
		title: "HOLO Highlight #1", //setup and meeting
		media: "https://www.youtube.com/embed/jlT1GWGughQ",
		channel: "Noah",
		description: "HOLO Highlight #1",
		notes: "My explaination in the video discusses most of what would be talked about here, but I wanted to use the highlights as an instance of canon temporal shifting. The idea of time and alternate perspectives has always intrested me, and I think the Highlights are a great example of that. More insight into this can be seen in the Research section, accessible on the Hard Light Landing page",
		script: "script"
	},	{
		type: "video",
		day: 28,
		title: "HOLO Highlight #2", //prank on randos
		media: "https://www.youtube.com/embed/6HNrRYI4534",
		channel: "Noah",
		description: "HOLO Highlight #2",
		notes: "The highlights are the complete POV of the HOLO as instances deemed important by its programming. As this view is from the HOLO, there would be all sorts of HUD data and other system information, which could be filled with clues and puzzles for the viewers.",
		script: "script"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/dayin2t1.png"
	},		{
		type: "tweet",
		title: "Tweet",
		media:"tweets/dayin2t2.png"
	},		{
		type: "tweet",
		title: "Tweet",
		media:"tweets/dayin2t3.png"
	},		{
		type: "tweet",
		title: "Tweet",
		media:"tweets/dayin2t4.png"
	},		{
		type: "tweet",
		title: "Tweet",
		media:"tweets/dayin2t5.png"
	},		{
		type: "tweet",
		title: "Tweet",
		media:"tweets/dayin2t6.png"
	},		{
		type: "tweet",
		title: "Tweet",
		media:"tweets/dayin2t7.png"
	},	{
		type: "video",
		day: 30,
		title: "Day in the Life with my HOLO",
		media: "https://www.youtube.com/embed/H1LhamAo-58",
		channel: "Noah",
		description: "Follow a day in my life on a mini road trip with my friends (don't worry! I'm not skipping school, my HOLO is there)",
		notes: "This is one of a theoretical set of multple videos demonstrating the positive impact of the HOLO on Noah's life. As explored before, the day in the life videos are really a way to check in on the progress of Noah's journey of self-discovery aided by the freedom of the HOLO.",
		script: "script"
	},	{
		type: "video",
		day: 30,
		title: "JANUS CORPORATION LEAK/SCANDAL!!!",
		media: "https://www.youtube.com/embed/JVKMFMNqUbY",
		channel: "Rose",
		description: "I've wanted to do this for a while and was too scared. But, I'm scared for Noah. He needs to know the truth. #SaveNoah2020",
		notes: "Although Rose only has one video here, I would definately expand on her character if this was a larger project. She should systematically uncover more and more truth about the Janus corporation and the HOLOS. I like to think as her story as an inverse of the Janus saga in the first half. While half of the project would be spent building them up, the second half would work to drag them back down, alarming the viewers about Noah's wellbeing.",
		script: "script"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/emergency1.png"
	},		{
		type: "tweet",
		title: "Tweet",
		media:"tweets/emergency2.png"
	},		{
		type: "tweet",
		title: "Tweet",
		media:"tweets/emergency3.png"
	},		{
		type: "tweet",
		title: "Tweet",
		media:"tweets/emergency4.png"
	},		{
		type: "tweet",
		title: "Tweet",
		media:"tweets/emergency5.png"
	},		{
		type: "tweet",
		title: "Tweet",
		media:"tweets/emergency6.png"
	},		{
		type: "tweet",
		title: "Tweet",
		media:"tweets/emergency7.png"
	},		{
		type: "tweet",
		title: "Tweet",
		media:"tweets/emergency8.png"
	},	{
		type: "video",
		day: 32,
		title: "emergency update.",
		media: "https://www.youtube.com/embed/nVgrbtKvPkg",
		channel: "Noah",
		description: "oh no",
		notes: "This is a tandem video to Rose's, as both of them hint at the downfall of the credibility of the Janus corporation. This version is stripped of a lot of its depth, but with more time and resources, I would work to make the party be a much larger and almost traumatic experience - like an evil funhouse of sorts. I wanted to think of it as a cat and mouse game with Noah and the HOLO. When Noah finally finds the HOLO, his worst fear comes to life. He is totally out of control of the HOLO and people's perception of him. The HOLO knows this, and begins totally using that to its advantage.",
		script: "script"
	},	{
		type: "video",
		day: 33,
		title: "HOLO Highlight #3", //glitch
		media: "https://www.youtube.com/embed/mgQHi12cq1I",
		channel: "Noah",
		description: "HOLO Highlight #3",
		notes: "This is the moment where the HOLO breaks, becomes self aware, and splits off from NOAH. Furthermore, after the party, Noah doesn't sync with the HOLO anymore. This glitch is supposed to be one of the trippiest moments of the project, and it symbolizes the HOLO's change in perception of itself and everyone else around it. I would love to make this much more of a journey, with the HOLO physically exploring the crevices of its mind, scared of what it finds. Also, a genral note - all of these highlight videos would have some kind of tagging system so viewrs knew exactly when they occured and would be able to piece the narrative back together.",
		script: "script"
	},	{
		type: "video",
		day: 33,
		title: "HOLO Highlight #4",//turning off TV
		media: "https://www.youtube.com/embed/B11NHvpyOGI",
		channel: "Noah",
		description: "HOLO Highlight #4",
		notes: "This would have been a direct connection between Noah and Rose, as a clip of her video would have been playing on TV. As explained in the video, I would love to have more instances of abnormal actions such as this that Noah is completely unaware of.",
		script: "script"
	},	{
		type: "video",
		day: 33,
		title: "HOLO Highlight #5", //House Party
		media: "https://www.youtube.com/embed/cuBoRv_0pA8",
		channel: "Noah",
		description: "HOLO Highlight #5",
		notes: "I still think I am not sold on the system overload model I have playing in the video, but I could not think of an interesting way to include the actions of this video in any other way with the given means (as this scene and the party were going to be shot at the start of the COVID issues.) My main goal for this video was to show the HOLO doing things Noah had never done before. Furthermore, these uncharacteristic actions would not necassarily be bad - Noah would take them as destroying his character, but it could also be seen as the people at the party by him going out of his comfort zone - if this scene was actually filmed, there would an empahsis on the gray area of its actions.",
		script: "script"
	},		{
		type: "tweet",
		title: "Tweet",
		media:"tweets/postH1.png"
	},		{
		type: "tweet",
		title: "Tweet",
		media:"tweets/postH2.png"
	},{
		type: "video",
		day: 40,
		title: "Post HOLO Update",
		media: "https://www.youtube.com/embed/B4AvZ_sZj8k",
		channel: "Noah",
		description: "Hey guys, sorry I've been gone for so long. I know I have a lot of explaining to do.",
		notes: "After a break (but not too long of a break to lose audience attention), I wanted Noah to break out of the HOLO mold. This would also completely explain the glitch, the party, and why Noah didn't realize anything sooner.",
		script: "script"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/dayin3t1.png"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/dayin3t2.png"
	},	{
		type: "video",
		day: 43,
		title: "A Real Day in the Life",
		media: "https://www.youtube.com/embed/080fUtMR6ng",
		channel: "Noah",
		description: "Follow me through another day in my life!",
		notes: "There would not be anything too special happening in most of this video - and that's the point of it. Noah reflects on his time and how this is different than his first day in the life video, and I would have liked to release multiple videos with a similar energy to this. This would give him a new sense of normalcy.",
		script: "script"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/getto1.png"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/getto2.png"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/getto3.png"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/getto4.png"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/getto5.png"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/getto6.png"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/getto7.png"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/getto8.png"
	},	{
		type: "tweet",
		title: "Tweet",
		media:"tweets/getto9.png"
	},		{
		type: "video",
		day: 46,
		title: "Getting to Know Each Other!",
		media: "https://www.youtube.com/embed/rep2iDSIa1I",
		channel: "Noah",
		description: "getting to know Violet!",
		notes: "The sense of normalcy created in the last video is completely destroyed in this video. Because Noah and 'Violet' technically share memories, she agrees with him on everything. This finally comes to Noah's attention when Violet completes his sentences, but its too late for him and she traps him.",
		script: "script"
	},	{
		type: "video",
		day: 47,
		title: "HOLO Highlight #6", //revived
		media: "https://www.youtube.com/embed/wKty2Khu5v8",
		channel: "Noah",
		description: "HOLO Highlight #6",
		notes: "This video would have had a little more buildup at the beginning, with the HOLO turning itself on and getting readjusted. After it does so, it would walk and glitch for a bit before it reached Violet's house. I also don't like the visuals of scanning and biodata acquired, so I would rework those to tell a similar message in a more cohesive fashion.",
		script: "script"
	},	{
		type: "video",
		day: 47,
		title: "HOLO Highlight #7", //plotting and meeting
		media: "https://www.youtube.com/embed/xBWScFMfZZE",
		channel: "Noah",
		description: "HOLO Highlight #7",
		notes: "Not too much that hasn't been said already - it really would be a visualization of the HOLO finding Noah and stalking him throughout the day until the time is right.",
		script: "script"
	},	{
		type: "video",
		day: 47,
		title: "HOLO Highlight #8", //Own side of getting to know
		media: "https://www.youtube.com/embed/YgULfGXZVYk",
		channel: "Noah",
		description: "HOLO Highlight #8",
		notes: "I wanted the simulation to be Noah 2.0 traveling though all sorts of genres of movies (preferably more than the 4 explored in this video) because the HOLO is obsessed with Noah - but just becasue it is obsessed and wants to take over his life, it still cares for him. As Violet says, everything in this world was build for him. However, because this is sort of in his head as well, he has some control - hence why he is back in his room observing himself and the shared memories he has with the HOLO. This is a final point of reflection, and then everything loops over again.",
		script: "script"
	},	{
		type: "video",
		day: 48,
		title: "Update Video",
		media: "https://www.youtube.com/embed/fR-HFjxTkFE",
		channel: "Noah",
		description: "all of this was fake.",
		notes: "I wanted a very meta 'ending' to this saga, becasue I couldn't figure out how to really make it end. An important part to this ending is that it is also makes room for all of my real-life actions to be a canon continuation - becasue this project literally uses my likelihood, my social media accounts and such would be linked as the main character's accounts. Therefore, whenever the real me posted a photo on Instagram, it would actually be the HOLO posting as me. ",
		script: "script"
	},	{
		type: "video",
		day: 50,
		title: "JANUS TAKEOVER?! SAVE NOAH!!",
		media: "https://www.youtube.com/embed/7OqaGq_Aco4",
		channel: "Rose",
		description: "#SaveNoah2020",
		notes: "I also wanted to find a good ending to Rose's saga as well. Continuing her line of conspiracy theories, I wanted to her to mysteriously get kidnapped, hence why her social media stops posting. With these two endings, the story never really ends, only this iteration of it comes to a close.",
		script: "script"
	},
]

//<iframe width="560" height="315" src=" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
var timelineBody = document.getElementById("timelineBody");

var tweetcount = 1;
function createTimeline(){
	for(var i = 0; i<timelineElement.length; i++){
		console.log(i);
		var video = false;
		var content;
		var title;
		if(timelineElement[i].type == "video") video=true;
		if (video){
			title = timelineElement[i].title;
		} else{
			title = timelineElement[i].title +" #" + tweetcount;
			tweetcount++;
		}
		//if (i>=1) var offset = (document.getElementById("tl_entry"+(i-1)).clientHeight)*(-40/100) Tabling offset for now - destroys structure of right side style="margin-top:'+offset+'px; margin-bottom:'+offset+'px
		
		if(i % 2 == 0){ 
			content = '<div class="tl_entry" id="tl_entry'+i+'"><div class="tl_left"><div class="l_head">';
			if (video) content +='<div class="arrow-right"></div>';
			content+='<div class="tlHe-l">'+title+'</div></div>';
		} else {
			content = '<div class="tl_entry" id="tl_entry'+i+'"><div class="tl_right" ><div class="r_head">';
			if(video) content+='<div class="arrow-left"></div><div class="tlHe-r">'
			else content += '<div class="nopad">';
			content += title+'</div></div>';
		}
		if(video){
			content+= '<div class="tlvid"><iframe width="560" height="315" src='+ timelineElement[i].media+' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="storyText">'+"<p><b>"+timelineElement[i].channel + "'s YouTube Channel</b></p><p><b>Posting Day: </b>"+timelineElement[i].day +"<p><b>Video Description: </b>"+timelineElement[i].description + "</p><p><b>Creator Notes: </b>"+timelineElement[i].notes + "</p>"+'</div></div></div>'; //<div class="btn-wrapper"><button class="btn btn-dark btn-rt">View Script</button></div>
		} else{
			
			content+= '<div class="tlvid"><img src='+timelineElement[i].media+'></div></div></div>';
		}
		timelineBody.innerHTML+=content;
	}
}

window.onload = createTimeline();
//window popup
/**
$(function() {
  // CLOSE AND REMOVE ON ESC
  $(document).on('keyup',function(e) {
    if (e.keyCode == 27) {
      $('.popOverlay').remove();
    }
  });
  
  // CLOSE AND REMOVE ON CLICK
  $('body').on('click','.popOverlay, .close', function() {
    $('.popOverlay').remove();
  });
  
  // SO PLAYING WITH THE VIDEO CONTROLS DOES NOT
  // CLOSE THE POPUP
  $('body').on('click','.videoBox', function(e) {
    e.stopPropagation();
  });
}); **/ 
