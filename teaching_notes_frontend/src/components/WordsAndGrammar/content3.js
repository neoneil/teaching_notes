import React, { useState } from 'react';
import './WordsAndGrammar.scss'
const Content3 = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const info = `英语语法80%左右都是动词的语法，动词语法在句子中时 主要凸显它的时态和语态的变化，这个是重中之重，这里犯错误的话，阅读和写作应达不到6分！`
    const verbs = `动词(verb)是表示动作或状态的词。
a)表示动作：swim游泳push推
b)表示状态：have有be是

英语动词有时态、语态、语气等形式上的变化。
限定动词和非限定(谓语)动词

从是否被主语所限定来分，动词有限定动词(finite verb)和非限定动词(nonfinite verb)两大类。

1)限定动词 限定动词用作句子的谓语动词，并被主语所限定，有人称和数的变化。如：
He is an Uber driver. 他是一个优步司机。
Facts are more eloquent than words. 事实胜于雄辩。
We have three balls. 我们有三个球。
An apple falls by the force of gravitation. 地心吸力使苹果落地。
2)非限定动词 非限定动词有动词不定式、动名词和分词三种，在句子里都不能单独作谓语动词，故不被主语所限定，没有人称和数的变化。如：
I am pleased to meet you. 我很高兴与你相识。(动词不定式)
Smoking is harmful to the health. 吸烟对身体有害。(动名词)
I heard them singing the song。我听见他们唱那首歌。(分词)
Spoken words are often more powerful than writing. 语言往往比文字更有力。(分词)

从其含义来分，动词有实义动词 (notional verb)，连系动词 (link verb)，情态动词 (modal verb)和助动词 (auxiliary verb)四类。
1)实义动词 实义动词有完全的词义，并能独立作谓语动词。如：
The sun shone brightly this morning. 今天早晨阳光灿烂。
He likes to go for a long walk on Sundays. 他喜欢星期日出去作长距离散步。
We have a big TV set in the club. 我们俱乐部有台大电视机。
2)连系动词 连系动词在句中作谓语动词，后面跟表语。英语连系动词有be(是)，seem(似乎)，look(看来)，keep(保持)，become(变成)，get(变得)，grow(变得)，feel(感到)，turn(变得，变成) ，appear(显得)，remain(仍旧是)等。如：
It is never too late to mend.改过不嫌晚。
It was a close game.那场球赛比分很接近。
The children in this nursery look very healthy.这个幼儿园的孩子看起来都非常健康。
Keep quiet, please! 请安静!，
The computer seems all right. 这台电脑好像没有毛病。
Later he became a doctor. 他后来成为一名医生。
The problem remained unsolved until last year. 问题到去年才解决。

[注一]下面句子中的come和go也是连系动词。如：
The old man's dream has come true. 这位老人的梦想实现了。
Something has gone wrong with the Ute. 皮卡车出毛病了。

[注二]有些连系动词如seem, appear等后面常跟to be。如：
The new text seems to be easy, but actually it is rather difficult. 这篇新课文好像很容易，其实相当难。
She appears to be the girl's sister. 她似乎是那女孩的姐姐。

3)情态动词 情态动词有can (能)，may (可以，也许) ，must (必须)等及其过去式could，might等，表示能力、义务、必要、猜测等说话人的语气或情态。情态动词只能和主要动词一起构成谓语动词。

4)助动词 助动词有shall，will，have，be，should，would， do等。它们只能和主要动词一起构成各种时态、语态、语气等动词形式，以及否定和疑问等结构中的谓语动词。

及物动词和不及物动词
从是否需要宾语来分，实义动词又有及物动词和不及物动词两类。

1)及物动词 后面必须跟宾语意义才完整的实义动词，叫做及物动词(transitive verb)。如：
I believe that the committee will consider our suggestion. 我相信委员会将会考虑我们的建议。
"How long can I keep the book?" Harry asked. 哈里问："这本书我可以借多久?"
Crude oil contains many useful substances.原油含有许多有用的物质。

2)不及物动词 本身意义完整后面不须跟宾语的实义动词，叫做不及物动词(intransitive verb)。如：
Birds fly. 鸟会飞。
It happened in 2019. 这件事发生于2019年。
My watch stopped. 我的表停了。
She spoke at the meeting yesterday evening. 她在昨天晚上的会上发了言。
3)兼作及物动词和不及物动词 英语里有不少实义动词可以兼作及物动词和不及物动词。这样的动词又有两种不同的情况：
a) 兼作及物动词和不及物动词时，意义不变。试比较：
Shall I begin at once? 我可以立刻开始吗?(begin作不及物动词)
She began working as a librarian after she left school. 她毕业后当图书馆管理员。(began作及物动词)
When did they leave Chicago? 他们是什么时候离开芝加哥的？(leave 作及物动词)
They left last week. 他们是上周离开的。(left 作不及物动词)
b) 兼作及物动词和不及物动词时，有时意义不尽相同。如：
Wash your hands before meals. 饭前要洗手。
Does this cloth wash well? 这布经得起洗吗?  

4) 与汉语的比较 有时英语动词的及物和不及物的用法，与汉语的用法不一样，请注意下列两种情况：
a) 有的动词在英语里只能用作不及物动词，而汉语则可用作及物动词，如arrive到达，agree同意，listen听。英语里这些动词后面常接介词。如：
We arrived at the railway station at noon. 我们于中午到达火车站。(at不能省去)(比较：We reached the railway station at noon.)
Everybody listened to the lecture with great interest. 每个人都很有兴趣地听讲课。(to不可省去)(比较：We all heard the lecture.)
Do they agree to the plan? 他们同意这个计划吗?(to不可省去)
b) 有的动词在英语里能用作及物动词，而在汉语里则不能用作及物动词，如serve为…服务。
Chinese children are taught to serve the CCP wholeheartedly. 中国的孩子被灌输以全心全意为党服务。`;

  const PhrasalVerbs = `Phrasal Verbs意思
有时候，要单独理解phrasal verbs意思是很困难的。在查字典之前，先了解一下上下文是有帮助的。 

字面含义
有些动词短语可以直接按照字面意义去理解。例如：

She opened the door and looked outside.

She was walking across the street when she heard the sound of an explosion.

固定含义
动词短语也有比喻或习语的意思，这使他们很难理解。例如：

Can you put me up for tonight?

动词短语“put up”在这里并不是建造或者举起的意思。在这个句子里，它有习语或比喻意义。Put up的意思是让某人住在你的房子里。

不止一种含义
一些动词短语可能有不止一个意思。唯一的学习方法就是记住不同的意思。一旦你熟悉了不同的意思，你就能从短语动词使用的上下文中理解它的意思。例如：

Take off

Take off: to increase very sharply
Sales took off after the marketing promotion.

Take off: to remove something
It was so hot that I had to take off my shirt.

Take off: to not work for a period of time
Kate has taken a week off work.

英语动词短语的类型
我们来学习动词短语的五种类型，以及它们在英语句子中的作用。

Intransitive Phrasal Verbs：不及物动词短语
不及物动词短语没有直接宾语。（直接宾语受动词作用）例如：

I woke up at 8 AM.

You can come over to my house after school.

He’s going back to China next month.

Transitive Phrasal Verbs：及物动词短语
及物动词短语有直接宾语。例如（加线的词语是直接宾语）：

Fill out this application form and mail it in.（fill out: complete）

Check out that website – it’s really great!（check out: look at, go to）

Separable Phrasal Verbs：可分的动词短语
这种短语动词，其词可以分开以在句子中的不同位置使用。它的动词和介词可以分开。这样的短语动词既可以用于连接形式，也可以用于分离形式。

✔️I will pick up you from the school.

✔️I will pick you up from the school.

这里要注意，一些及物动词是可分开的，而有些是不可分开的。

Inseparable Phrasal Verbs：不可分的动词短语
这种短语动词，其单词无法分开使用。它的动词和介词不可以分开，必须放在一起使用。例如：

✔️ I’ll look after your cat while you’re on vacation.

❌ I’ll look your cat after while you’re on vacation.

这里注意，所有的不及物单词都是不可分开的。`
  

  const VerbPhrases = `Verb Phrases 动词短语
Verbs are words that demonstrate an action, such as sing, dance, smell, talk, and eat. When combined with linking verbs, such as is, must, will, and has, they form verb phrases. Verb phrases can consist of one to three linking verbs, and action verbs, and sometimes any complements (such as objects or direct objects).

She smells the pizza. (verb is smells)
She can smell the pizza. (verb phrase is can smell)
He appears on screen as an actor. (verb is appears)
He has appeared on screen as an actor. (verb phrase is has appeared)
I study Italian. (verb is study)
I will have been studying Italian for three years. (verb phrase is will have been studying)
Verb phrases form tenses besides present and past tense, including progressive tenses and perfect tenses. They also demonstrate the sentence’s mood, intention and other information.

Verb Phrase Examples
A verb phrase can be the predicate of the clause or sentence. It functions as the verb in a sentence, even when it has more than one word.

Following are some verb phrase examples where the verb phrase is the predicate of a sentence. In this case, the verb phrase consists of the main verb plus any auxiliary, or helping, verbs.

She was walking quickly to the mall.
He should wait before going swimming.
Those girls are trying very hard.
Ted might eat the cake.
You must go right now.
You can't eat that!
My mother is fixing us some dinner.
Words were spoken.
These cards may be worth hundreds of dollars!
The teacher is writing a report.
You have woken up everyone in the neighborhood.
Will you get me a marker?
Rhonda has been asking for help.
My little brother will blow out his candles.
Are they accusing me of a crime?
The team should shake hands with their opponents.
Dad has tried to change my tires before.`
  const changyongphrasalverbs = `200 common phrasal verbs, with
- meaning
- example sentence

add up to something
equal
Your purchases add up to $24.

ask around
ask many people the same question
I asked around but nobody has seen my wallet.

ask somebody out
invite on a date
Brian asked Judy out to dinner.

back something up
reverse
You'll have to back up your car so that I can get out.

back somebody up
support
My wife backed me up over my decision to quit my job.

blow up
explode
The racing car blew up after it crashed into the fence.

blow something up
add air
We have to blow 50 balloons up for the party.

break down
stop functioning (vehicle, machine)
Our car broke down at the side of the highway in the snowstorm.

break down
get upset
The woman broke down when the police told her that her son had died.

break something down
divide into smaller parts
Our teacher broke the final project down into three separate parts.

break in
force entry to a building
Somebody broke in last night and stole our stereo.

break into something
enter forcibly
The firemen had to break into the room to rescue the children.

break something in
wear something a few times so that it doesn't look/feel new
I need to break these shoes in before we run next week.

break in
interrupt
The TV station broke in to report the news of the president's death.

break up
end a relationship
My boyfriend and I broke up before I moved to America.

break up
start laughing (informal)
The kids just broke up as soon as the clown started talking.

break out
escape
The prisoners broke out of jail when the guards weren't looking.

break out in something
develop a skin condition
I broke out in a rash after our camping trip.

bring somebody down
make unhappy
This sad music is bringing me down.

bring somebody up
raise a child
My grandparents brought me up after my parents died.

bring something up
start talking about a subject
My mother walks out of the room when my father brings up sports.

bring something up
vomit
He drank so much that he brought his dinner up in the toilet.

1000 Phrasal Verbs in Context rated 5 out of 5
Lilia
“I love the way the examples explain the meaning of the Phrasal Verbs. Very understandable, and it is easy to use whenever you want.”
Lilia Octaviano, English learner, Philippines
1000 Phrasal Verbs in Context ebook
call around
phone many different places/people
We called around but we weren't able to find the car part we needed.

call somebody back
return a phone call
I called the company back but the offices were closed for the weekend.

call something off
cancel
Jason called the wedding off because he wasn't in love with his fiancé.

call on somebody
ask for an answer or opinion
The professor called on me for question 1.

call on somebody
visit somebody
We called on you last night but you weren't home.

call somebody up
phone
Give me your phone number and I will call you up when we are in town.

calm down
relax after being angry
You are still mad. You need to calm down before you drive the car.

not care for somebody/ something
not like (formal)
I don't care for his behaviour.

catch up
get to the same point as somebody else
You'll have to run faster than that if you want to catch up with Marty.

check in
arrive and register at a hotel or airport
We will get the hotel keys when we check in.

check out
leave a hotel
You have to check out of the hotel before 11:00 AM.

check somebody/ something out
look at carefully, investigate
The company checks out all new employees.

check out somebody/ something
look at (informal)
Check out the crazy hair on that guy!

cheer up
become happier
She cheered up when she heard the good news.

cheer somebody up
make happier
I brought you some flowers to cheer you up.

chip in
help
If everyone chips in we can get the kitchen painted by noon.

clean something up
tidy, clean
Please clean up your bedroom before you go outside.

come across something
find unexpectedly
I came across these old photos when I was tidying the closet.

come apart
separate
The top and bottom come apart if you pull hard enough.

come down with something
become sick
My nephew came down with chicken pox this weekend.

come forward
volunteer for a task or to give evidence
The woman came forward with her husband's finger prints.

come from some place
originate in
The art of origami comes from Asia.

count on somebody/ something
rely on
I am counting on you to make dinner while I am out.

cross something out
draw a line through
Please cross out your old address and write your new one.

cut back on something
consume less
My doctor wants me to cut back on sweets and fatty foods.

cut something down
make something fall to the ground
We had to cut the old tree in our yard down after the storm.

cut in
interrupt
Your father cut in while I was dancing with your uncle.

cut in
pull in too closely in front of another vehicle
The bus driver got angry when that car cut in.

cut in
start operating (of an engine or electrical device)
The air conditioner cuts in when the temperature gets to 22°C.

cut something off
remove with something sharp
The doctors cut off his leg because it was severely injured.

cut something off
stop providing
The phone company cut off our phone because we didn't pay the bill.

cut somebody off
take out of a will
My grandparents cut my father off when he remarried.

cut something out
remove part of something (usually with scissors and paper)
I cut this ad out of the newspaper.

do somebody/ something over
beat up, ransack (BrE, informal)
He's lucky to be alive. His shop was done over by a street gang.

do something over
do again (AmE)
My teacher wants me to do my essay over because she doesn't like my topic.

do away with something
discard
It's time to do away with all of these old tax records.

do something up
fasten, close
Do your coat up before you go outside. It's snowing!

dress up
wear nice clothing
It's a fancy restaurant so we have to dress up.

drop back
move back in a position/group
Andrea dropped back to third place when she fell off her bike.

drop in/ by/ over
come without an appointment
I might drop in/by/over for tea sometime this week.

drop somebody/ something off
take somebody/ something somewhere and leave them/it there
I have to drop my sister off at work before I come over.

drop out
quit a class, school etc
I dropped out of Science because it was too difficult.

eat out
eat at a restaurant
I don't feel like cooking tonight. Let's eat out.

end up
eventually reach/do/decide
We ended up renting a movie instead of going to the theatre.

fall apart
break into pieces
My new dress fell apart in the washing machine.

fall down
fall to the ground
The picture that you hung up last night fell down this morning.

fall out
separate from an interior
The money must have fallen out of my pocket.

fall out
(of hair, teeth) become loose and unattached
His hair started to fall out when he was only 35.

figure something out
understand, find the answer
I need to figure out how to fit the piano and the bookshelf in this room.

fill something in
to write information in blanks, as on a form (BrE)
Please fill in the form with your name, address, and phone number.

fill something out
to write information in blanks, as on a form (AmE)
The form must be filled out in capital letters.

fill something up
fill to the top
I always fill the water jug up when it is empty.

find out
discover
We don't know where he lives. How can we find out?

find something out
discover
We tried to keep the time of the party a secret, but Samantha found it out.

get something across/ over
communicate, make understandable
I tried to get my point across/over to the judge but she wouldn't listen.

get along/on
like each other
I was surprised how well my new girlfriend and my sister got along/on.

get around
have mobility
My grandfather can get around fine in his new wheelchair.

get away
go on a vacation
We worked so hard this year that we had to get away for a week.

get away with something
do without being noticed or punished
Jason always gets away with cheating in his maths tests.

get back
return
We got back from our vacation last week.

get something back
receive something you had before
Liz finally got her Science notes back from my roommate.

get back at somebody
retaliate, take revenge
My sister got back at me for stealing her shoes. She stole my favourite hat.

get back into something
become interested in something again
I finally got back into my novel and finished it.

get on something
step onto a vehicle
We're going to freeze out here if you don't let us get on the bus.

get over something
recover from an illness, loss, difficulty
I just got over the flu and now my sister has it.

get over something
overcome a problem
The company will have to close if it can't get over the new regulations.

get round to something
finally find time to do (AmE: get around to something)
I don't know when I am going to get round to writing the thank you cards.

get together
meet (usually for social reasons)
Let's get together for a BBQ this weekend.

get up
get out of bed
I got up early today to study for my exam.

get up
stand
You should get up and give the elderly man your seat.

give somebody away
reveal hidden information about somebody
His wife gave him away to the police.

give somebody away
take the bride to the altar
My father gave me away at my wedding.

give something away
ruin a secret
My little sister gave the surprise party away by accident.

give something away
give something to somebody for free
The library was giving away old books on Friday.

give something back
return a borrowed item
I have to give these skates back to Franz before his hockey game.

give in
reluctantly stop fighting or arguing
My boyfriend didn't want to go to the ballet, but he finally gave in.

give something out
give to many people (usually at no cost)
They were giving out free perfume samples at the department store.

give something up
quit a habit
I am giving up smoking as of January 1st.

give up
stop trying
My maths homework was too difficult so I gave up.

go after somebody
follow somebody
My brother tried to go after the thief in his car.

go after something
try to achieve something
I went after my dream and now I am a published writer.

go against somebody
compete, oppose
We are going against the best soccer team in the city tonight.

go ahead
start, proceed
Please go ahead and eat before the food gets cold.

go back
return to a place
I have to go back home and get my lunch.

go out
leave home to go on a social event
We're going out for dinner tonight.

go out with somebody
date
Jesse has been going out with Luke since they met last winter.

go over something
review
Please go over your answers before you submit your test.

go over
visit somebody nearby
I haven't seen Tina for a long time. I think I'll go over for an hour or two.

go without something
suffer lack or deprivation
When I was young, we went without winter boots.

grow apart
stop being friends over time
My best friend and I grew apart after she changed schools.

grow back
regrow
My roses grew back this summer.

grow into something
grow big enough to fit
This bike is too big for him now, but he should grow into it by next year.

grow out of something
get too big for
Elizabeth needs a new pair of shoes because she has grown out of her old ones.

grow up
become an adult
When Jack grows up he wants to be a fireman.

hand something down
give something used to somebody else
I handed my old comic books down to my little cousin.

hand something in
submit
I have to hand in my essay by Friday.

hand something out
to distribute to a group of people
We will hand out the invitations at the door.

hand something over
give (usually unwillingly)
The police asked the man to hand over his wallet and his weapons.

hang in
stay positive (informal)
Hang in there. I'm sure you'll find a job very soon.

hang on
wait a short time (informal)
Hang on while I grab my coat and shoes!

hang out
spend time relaxing (informal)
Instead of going to the party we are just going to hang out at my place.

hang up
end a phone call
He didn't say goodbye before he hung up.

hold somebody/ something back
prevent from doing/going
I had to hold my dog back because there was a cat in the park.

hold something back
hide an emotion
Jamie held back his tears at his grandfather's funeral.

hold on
wait a short time
Please hold on while I transfer you to the Sales Department.

hold onto somebody/ something
hold firmly using your hands or arms
Hold onto your hat because it's very windy outside.

hold somebody/ something up
rob
A man in a black mask held the bank up this morning.

keep on doing something
continue doing
Keep on stirring until the liquid comes to a boil.

keep something from somebody
not tell
We kept our relationship from our parents for two years.

keep somebody/ something out
stop from entering
Try to keep the wet dog out of the living room.

keep something up
continue at the same rate
If you keep those results up you will get into a great college.

let somebody down
fail to support or help, disappoint
I need you to be on time. Don't let me down this time.

let somebody in
allow to enter
Can you let the cat in before you go to school?

log in (or on)
sign in (to a website, database etc)
I can't log in to Facebook because I've forgotten my password.

log out (or off)
sign out (of a website, database etc)
If you don't log off somebody could get into your account.

look after somebody/ something
take care of
I have to look after my sick grandmother.

look down on somebody
think less of, consider inferior
Ever since we stole that chocolate bar your dad has looked down on me.

look for somebody/ something
try to find
I'm looking for a red dress for the wedding.

look forward to something
be excited about the future
I'm looking forward to the Christmas break.

look into something
investigate
We are going to look into the price of snowboards today.

look out
be careful, vigilant, and take notice
Look out! That car's going to hit you!

look out for somebody/ something
be especially vigilant for
Don't forget to look out for snakes on the hiking trail.

look something over
check, examine
Can you look over my essay for spelling mistakes?

look something up
search and find information in a reference book or database
We can look her phone number up on the Internet.

look up to somebody
have a lot of respect for
My little sister has always looked up to me.

make something up
invent, lie about something
Josie made up a story about why we were late.

make up
forgive each other
We were angry last night, but we made up at breakfast.

make somebody up
apply cosmetics to
My sisters made me up for my graduation party.

mix something up
confuse two or more things
I mixed up the twins' names again!

pass away
die
His uncle passed away last night after a long illness.

pass out
faint
It was so hot in the church that an elderly lady passed out.

pass something out
give the same thing to many people
The professor passed the textbooks out before class.

pass something up
decline (usually something good)
I passed up the job because I am afraid of change.

pay somebody back
return owed money
Thanks for buying my ticket. I'll pay you back on Friday.

pay for something
be punished for doing something bad
That bully will pay for being mean to my little brother.

pick something out
choose
I picked out three sweaters for you to try on.

point somebody/ something out
indicate with your finger
I'll point my boyfriend out when he runs by.

put something down
put what you are holding on a surface or floor
You can put the groceries down on the kitchen counter.

put somebody down
insult, make somebody feel stupid
The students put the substitute teacher down because his pants were too short.

put something off
postpone
We are putting off our trip until January because of the hurricane.

put something out
extinguish
The neighbours put the fire out before the firemen arrived.

put something together
assemble
I have to put the crib together before the baby arrives.

put up with somebody/ something
tolerate
I don't think I can put up with three small children in the car.

put something on
put clothing/ accessories on your body
Don't forget to put on your new earrings for the party.

run into somebody/ something
meet unexpectedly
I ran into an old school-friend at the mall.

run over somebody/ something
drive a vehicle over a person or thing
I accidentally ran over your bicycle in the driveway.

run over/ through something
rehearse, review
Let's run over/through these lines one more time before the show.

run away
leave unexpectedly, escape
The child ran away from home and has been missing for three days.

run out
have none left
We ran out of shampoo so I had to wash my hair with soap.

send something back
return (usually by mail)
My letter got sent back to me because I used the wrong stamp.

set something up
arrange, organize
Our boss set a meeting up with the president of the company.

set somebody up
trick, trap
The police set up the car thief by using a hidden camera.

shop around
compare prices
I want to shop around a little before I decide on these boots.

show off
act extra special for people watching (usually boastfully)
He always shows off on his skateboard

sleep over
stay somewhere for the night (informal)
You should sleep over tonight if the weather is too bad to drive home.

sort something out
organize, resolve a problem
We need to sort the bills out before the first of the month.

stick to something
continue doing something, limit yourself to one particular thing
You will lose weight if you stick to the diet.

switch something off
stop the energy flow, turn off
The light's too bright. Could you switch it off.

switch something on
start the energy flow, turn on
We heard the news as soon as we switched on the car radio.

take after somebody
resemble a family member
I take after my mother. We are both impatient.

take something apart
purposely break into pieces
He took the car brakes apart and found the problem.

take something back
return an item
I have to take our new TV back because it doesn't work.

take off
start to fly
My plane takes off in five minutes.

take something off
remove something (usually clothing)
Take off your socks and shoes and come in the lake!

take something out
remove from a place or thing
Can you take the garbage out to the street for me?

take somebody out
pay for somebody to go somewhere with you
My grandparents took us out for dinner and a movie.

tear something up
rip into pieces
I tore up my ex-boyfriend's letters and gave them back to him.

think back
remember (often + to, sometimes + on)
When I think back on my youth, I wish I had studied harder.

think something over
consider
I'll have to think this job offer over before I make my final decision.

throw something away
dispose of
We threw our old furniture away when we won the lottery.

turn something down
decrease the volume or strength (heat, light etc)
Please turn the TV down while the guests are here.

turn something down
refuse
I turned the job down because I don't want to move.

turn something off
stop the energy flow, switch off
Your mother wants you to turn the TV off and come for dinner.

turn something on
start the energy, switch on
It's too dark in here. Let's turn some lights on.

turn something up
increase the volume or strength (heat, light etc)
Can you turn the music up? This is my favourite song.

turn up
appear suddenly
Our cat turned up after we put posters up all over the neighbourhood.

try something on
sample clothing
I'm going to try these jeans on, but I don't think they will fit.

try something out
test
I am going to try this new brand of detergent out.

use something up
finish the supply
The kids used all of the toothpaste up so we need to buy some more.

wake up
stop sleeping
We have to wake up early for work on Monday.

warm somebody/ something up
increase the temperature
You can warm your feet up in front of the fireplace.

warm up
prepare body for exercise
I always warm up by doing sit-ups before I go for a run.

wear off
fade away
Most of my make-up wore off before I got to the party.

work out
exercise
I work out at the gym three times a week.

work out
be successful
Our plan worked out fine.

work something out
make a calculation
We have to work out the total cost before we buy the house.`
return (
  <div className="accordion-item">

    <p className="accordion-title red">{info}</p>
    <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
      <div>动词分类</div>
      <div>{isActive ? '-' : '+'}</div>
    </div>
    {isActive &&
      <div>

        <pre className="accordion-content">{verbs}</pre>
      </div>}
      <div className="accordion-title" onClick={() => setIsActive3(!isActive3)}>
      <div>短语动词</div>
      <div>{isActive3 ? '-' : '+'}</div>
    </div>
    {isActive3 &&
      <div>
        <pre className="accordion-content red bold">这个很重要</pre>
        <pre className="accordion-content">{PhrasalVerbs}</pre>
      </div>}
    <div className="accordion-title" onClick={() => setIsActive2(!isActive2)}>
      <div>动词短语</div>
      <div>{isActive2 ? '-' : '+'}</div>
    </div>
    {isActive2 &&
      <div>
        <pre className="accordion-content bold">{VerbPhrases}</pre>
      </div>}
      <div className="accordion-title" onClick={() => setIsActive4(!isActive4)}>
      <div>常用的短语动词</div>
      <div>{isActive4 ? '-' : '+'}</div>
    </div>
    {isActive4 &&
      <div>
        <pre className="accordion-content bold">{changyongphrasalverbs}</pre>
      </div>}
  </div>
);
};
export default Content3;