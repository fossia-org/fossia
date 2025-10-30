---
title: 'Mounathin Kural (மௌனத்தின் குரல்): The Voice of Silence'
pubDate: 2025-07-07T04:00:00Z
description: "The backstory for the first project from the FOSSIA community, for improving accessibility for hard of speech and hearing population in India."
author: 'Keerthana Rajesh Kumar'
image: "/blog/cover/mounathin-kural.jpg"
tags: ['announcement', 'project', 'mounam', 'kural']
---

## FOSFEM: Start of a new journey

I kickstarted FOSFEM, a women-centric organization for bringing awareness to and empowering women to contribute to the Indian free software ecosystem, during March 2025 on International Women's Day. Girls who I have never met, men who I have never interacted with but believed in me and this cause, women who didn't have any relation to technology just came in together to support this cause and it was a very beautiful moment.

However, deep inside, I felt like a part was lacking attention in the free software ecosystem: accessibility. I tend to think about situations from an accessibility perspective, not because I am a saint, but out of sheer selfishness. There are days when I lose my vision and feel completely crippled enough to not even do basic work. I had to learn Braille out of sheer fear than curiosity, just to be able to read books, a favorite hobby of mine. So the pain of lack of accessibility hits especially hard on those days and I cringe internally whenever someone uses tons of \<span>, \<div> and non-semantic in their frontend and call out people who prioritize aesthetics than accessibility. Because I believe both can coexist with the right design patterns.

## Getting in touch with Mind Empowered

In less than a month, I was persistent on connecting to other people who are working for similar causes - accessibility, inclusivity, free software. It was a random message on FOSS United's public Telegram group about asking for a volunteer to teach free software tools to the NGO's volunteers. I signed up since my InkScape and GIMP skills were pretty decent (well, not GIMP.) I didn't know the NGO's name, their cause or motive. The thought of teaching free software tools was appealing and I needed a change from the monotonous college exams that were going on back then (yeah, I love to take on a lot of work.)

That's when I called up the founder of [Mind Empowered](https://mind-empowered.org) and I felt a ray of hope and a feeling that my questions will be answered, the questions on accessibility and inclusion in free software world. I signed up to do online sessions for the volunteers, I did mess up due to lack of rehearsal but the volunteers were patient (if you are reading this, thank you!)

I was curious to know more, why were they doing this? That's when it clicked: They wanted volunteers to learn free software tools to teach a cohort of deaf students under their initiative named "Ekatmata". I had 2 choices: to acknowledge completion of my session and move on, the other was to join their cause. How would I be able to choose the former if the founder's energy, passion and dedication was so infectious to hit like puberty while I was in Chennai and she at Kochi?

I asked her if I can be a part of the initiative and signed up for it, she's very supportive and encouraging, despite never meeting me. So were other volunteers, who made me feel welcome though I was from another state. That's when the meaning of community made sense, a group of people with no previous connections, working for the same cause and end goal. That's when she informed me about a session on inclusive communication and introduction to ISL. That piqued my interest.

## The problem lies with the data

I attended that session and loved it so much that my new obsession was sign language. I was practicing sign every day and watched the recording many times. But I wanted to learn new terms without having to attend a session every time. That started it all, my search for a comprehensive directory for ISL. To my disappointment, I realized there were basically no representations for technological terms or free software terminologies - something as simple as "open source" lacked definition.

That's when I asked myself, if I were a deaf person, I wouldn't be able to enter into technology, I should have forsaken the realm of free software, not because I am not capable, but the very fact that there's lack of information: an invisible barrier. That infuriated me. I imagined a community, who were and are robbed of the opportunity to learn something great just because of lack of information. Lack of information is cruelty in its best form in the age of digital era.

Lack of open resources for learning and accessing ISL also poses issues related to affordability of knowledge, accessibility by caretakers, educators, researcher, furthering research in areas such as text-to-sign translation. Other valuable research work will also have to be put into a halt due to this. Now, that's significant.

The question here wasn't a lack of platform. There were resources on YouTube and others provide paid content. But how many will be able to pay or hunt for specific YouTube videos? There's a lack of organized information. The problem here wasn't platform, it's lack of open data, a very crucial requirement to ensure progress and transformation. Open data ensures you can build services and platforms surrounding it.

## The dilemma continues

Questions and doubts kept me awake: How am I going to get data? How will the data be made clean? How to build a system that aids this? They were technological. As days passed, the questions became more philosophical: How would the future of the deaf community be if this existed? Why does the world need this? Needless to say, that was the point when I got a full-time internship, so my thoughts were more intrusive to the point where I wanted answers for this.

That's when I got the idea for the name of the platform, the engine (can be thought of voice) that powers silence (silent communication). The duality of the meaning behind the platform amazed me and I was brimming with joy of a kid who's got a candy. May 26 was the day when I christened the platform as Kural (குரல், meaning voice) and Mounam (மௌனம், meaning silence). Kural, being the underlying engine silently powering the platform of silence (Mounam), which gives voice and power to the ones who needs it.

I decided to go with the flow and fly to Kochi, with the hope I will get answers to my questions while volunteering for Starlet Hackathon. I wanted to build this before I reached Kochi to show this to Mind Empowered, but balancing multiple commitments was taking its toll and I reached Kochi in the state of a clueless person.

The few days when I came to Kochi, I didn't open my mouth about Mounam since the idea back then was a different one, it's that of a multi-lingual sign language directory. However, we decided to do justice to ISL with Maya ma'am's advice. I agreed with her take that ISL has less resources than ASL or BSL and we need to dedicate to one thing for better execution.

## Designing Mounam

Mounam is just one node of sign language's directory. A directory is comprehensive, like say Wikipedia, where content in multiple languages are present creating a web of knowledge. Thus Kural has to be the software that powers multiple platforms like Mounam, but for others like ASL, BSL, FSL, etc. Kural should be the bridge connecting knowledge. This is surprisingly possible when you're running on decentralized manner by using something known as webring which links to relevant or random websites that's in the ring, enabling discovery. This way, niche signs can be hosted by communities without centralization, thus aiding posterity of data.

Furthermore, this platform has to accelerate development of research regarding sign language and technological development pertaining to accessibility. So Kural should be a platform for providing open data was another realization.

Last point but most important, was the accessibility and performance of Mounam. It should be incredibly lightweight and fully accessible, Which means aggressive hunting for accessible component frameworks and using Alpine.js than say React or Next. We decided to program the server in Go, since I was learning it at that time and seemed to meet my requirements. 

I got on a call with Maya ma'am, Sreela ma'am and Nakshatra to discuss about Mounam. The meet was what I needed to gt up and running with Kural. Sreela ma'am never fails to deliver great ideas and buckets of inspirations, one of hers being a gamified application for learning ISL, promoting it as a language more than some "sign" or special thing a normal person wouldn't need. Nakshatra worked with me despite coming to know about the idea a minute before, thanks to a spontaneous decision of Maya ma'am.

Out of all, the one who really helped the idea live was Asna, who thought of this platform to be of value to millions and was thinking of this as a product since day 1 without a single line of code into existence. 

## The realization: We aren't inclusive communicators

Then one day, I decided to step into the meeting room out of Maya ma'am's suggestions and I interacted with my mentees, who were learning Figma, Canva and frontend at that time as a part of Ekatmata. Once I left the room, I felt a tinge of pain and hatred towards myself and the world: Was I always non-inclusive in communication, they are all welcoming in their communication, but why are we complicating communication and inclusion for them? What mistake did they even do to be robbed of opportunities like this? Why abled people are being exclusivists to people who have no malice? I vented this out to my close ones and decided to channel this anger into building Kural. 

## Everything's coming together

Their support and my parent's happiness upon knowing that I was working on these things made me work harder. Long hours into building Kural and mentoring the team and see them be happy on building something that's been launched into real world was enough reasons to do this. They deserved justice and recognition. The fact that I just won first prize in the Microsoft Innovation Challenge was more than enough for others at college (especially, the higher ups) to recognize me and the work that's being done, I was desperate for that attention to redirect it to the ones who need that recognition, the project and organization behind this.

But if I am going to build this, where would I go for data was my thought. Fortunately, we had the consent of the parents of the deaf students. We ended up shooting 70+ words in less than 3 hours, all thanks to my mentees. I felt overwhelmed by joy and relief.

I started working on guides after reaching home for them to build the frontend and design accessible themes. One of our dreams is to ensure this is built by them, with them and for them. And it did happen! They signed for it (by), developed it (with) and are using it (for). Everything turned out beautiful.

## The magical reinforcement that came out of nowhere

Just 2 days before the hackathon, when I was intensively trying to build Mounam, I didn't go outside to focus on work. So I ordered some food on Zomato, and decided to get on a call with Maya ma'am and my family, silently anticipating a poor delivery due to previous experience the day before. 

The call with Maya ma'am confirmed it all: The session for inclusive communication will be done by the girls and interpreted by the interpreter we have invited for the hackathon. Everything's falling into places, I was brimming with tears of joy.

However, when I opened Zomato, there were 7 messages after I hanged a call with family, curious, I opened it to see if there were any other delivery issues this time. 

What I found felt like synchronicity with the universe: On the top of the screen, it's mentioned they have special requirements and the delivery person pinged me to chat over call since they are deaf. I felt upset that I didn't note this earlier and went earlier to collect order so that they don't face any unease. When they delivered, I signed "thank you" (I generally say thanks to everyone regardless and this is not favoritism) and the smile on their face meant it all, I wondered, if someone ever signed a "thank you" for them. Would people sign if they knew? How much happiness is a person robbed of since others don't know their language? How would this person feel if they knew we are building this? Will be they be happy, overjoyed or relieved?

After eating, I continued editing videos taken for signs and programming the backend, while my mind was an endless sea of thoughts consuming me.

## We got a mascot!

The day before Starlet, I went to Maya ma'am's home to help with packing mementos and swags for pre-hackathon organization at the venue. That's when she handed me a doll and told me to have Mounam. Then she gave Kural. I was overjoyed, looking at the usual trio pack.

<img src="/blog/cover/mounathin-kural.jpg" 
    alt="The trio pack, with 2 dolls, representing Mounam and Kural" 
    style="max-height: 400px; width: 100%; height: auto; display: block; margin: 0 auto;"/>

The orange one represented the Yang (visible) and blue Yin (invisible), that matched Mounam and Kural respectively. A funny coincidence with a Uber cab that had the same dolls seemed as if the universe was signalling me to use it as a mascot already and work on Mounam.

<img src="/blog/images/mounathin-kural/mounam-kural-in-uber.jpg" 
    alt="The trio pack, with a giant doll in middle in the Uber we took" 
    style="max-height: 400px; width: 100%; height: auto; display: block; margin: 0 auto;"/>

## The re-affirmation

Initially, I had the idea of blue one to be Mounam and orange one to be Kural, yet with the interpretation of my mentees during the hackathon, I decided to go with their interpretation, since it made sense.

Furthermore, there's a sense of re-affirmation during the entire duration of the hackathon, that the girls were doing absolutely great. The more I interacted with them, the more I realized on how much we as a society have created barriers for people who never did anything wrong and how their talents were being overshadowed by the general public.

The joy they got while working on the project was enough for me to brighten up and be less gloomy despite being sleep-deprived and helped with the melancholic mood at the beach at night (the silence at beach hits hard), for I had no idea of why I was staring at the beach and the sky. Maybe, I was looking for a symbol of hope -- a small ray of hope to pull off this project and make India inclusive.

## Heading back to my roots

I am writing this as I reflect on my trip with Mind Empowered and packing my bags to Chennai, thinking of reuniting with my loved ones while also being assured this is a start to reunite the underrepresented into our society.

It's 3 AM and I am thinking this trip was the best decision of my life while in a cold shower. It started a quest for justice that profoundly changes functioning of society at a fundamental level. The spotlight of victory on winning the hackathon, I decided, was to be redirected to serve the needed justice to Mounam. Yes, I am beyond crazy for attention, because the world has to see and know what's happened in the past one month -- a team working relentlessly with one purpose -- to give voice and spotlight to ones who truly need it.

So here, I am, a non-inclusive communicator trying to build this with others, with the hopes for a dawn for the ones who were robbed of dreams just because they weren't able to speak or hear.

Justice served, I believe! Or not yet, more to go. This is just the beginning.
