const quotes = ["'Don't give me that Quaker-in-a-titty-bar-look.' - Selina Meyer", 
"'Okay, yeah. That's a cherry on top of this whole turd cake.' - Selina Meyer",
"'I'm the Vice President of the United States, you stupid little f--ckers!'. - Selina Meyer",
"'Didn't those Founding F--kers ever hear of an odd number?!' - Selina Meyer",
"'Euro-phobic? What is that supposed to mean, I'm scared of subtitles?' - Selina Meyer",
"'Siri, why does God allow suffering?' - Mike McLintock",
"'Why do I have to tell people why I want to be president? I mean, I don't wanna hear about their jobs.' - Selina Meyer",
"'Tell her I'm canceling the lunch with Catherine that was supposed to prove there's nothing more important than Catherine because something more important than Catherine has come up.' - Selina Meyer",
"'Mint! It implies freshness, trust, traditional values.' - Jonah Ryan",
"'It's the worst use of scissors since my failed vasectomy' - Mike McLintock",
"'Get the government out of my f--king snatch.' - Selina Meyer",
"'I spewed out so much bulls--t, I'm gonna need a mint.' - Selina Meyer",
"'VP stands for 'very precious'' - Gary Walsh",
"'Beer makes me so gassy' - Selina Meyer",
"'What is that skirt? Is it a rug?' - Selina Meyer",
"''Cause I've met some people, ok? Real people. And a lot of them are fucking idiots.' - Selina Meyer",
"'If there is a dirty trick I cannot stand, it is honesty.' - Amy Brookheimer",
"'You are going to change America in a way that usually only war and flouride can.' - Kent Davison",
"'You know, they say all babies are cute, but whoever 'they' are should be stuck in a stroller and pushed into traffic.' - Amy Brookheimer",
"'We all know the White House would work so much better if there wasn't a President, but there is, so we work around that' - Ben Cafferty",
"'A suck-up isn't going to fix a f--k-up.' - Selina Meyer",
"'I'm the Vice President of the United States, you stupid little f--kers! These people should be begging me! That door should be half its height so that people can only approach me in my office on their goddamn, motherf--king knees!' - Selina Meyer"
]

function changeQuote() {
    var item =  quotes[Math.floor(Math.random()*quotes.length)];

    document.getElementById("quote").innerHTML = item;
}