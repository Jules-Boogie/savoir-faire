const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://savoire-faire:1234567e@ds125871.mlab.com:25871/heroku_gqmz6rkd");

const userSeed = [{
firstName: "Juliet",
secondName: "George",
username:"julesgeorge",
email:"juliet@gmail.com",
password: "1234567",
favorites:[""]
},

{

    firstName: "Reigner",
    lastName: "George",
    username:"raygeorge",
    password: "123456",
    favorites:[""]

},
{

    firstName: "Justina",
    lastName: "George",
    username:"jaygeorge",
    email:"justina@gmail.com",
    password: "1234567",
    favorites:[""],
    role:"admin"


}];
const productSeed = [
{
  Name:"Pleated floral dress",
  Price:"35.99",
  Image:["https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/41087034_85.jpg?ts=1551278025957&imwidth=100&imdensity=1","https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/41087034_85_B.jpg?ts=1550752430876&imwidth=100&imdensity=2","https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/41087034_85_D2.jpg?ts=1551278025957&imwidth=100&imdensity=2"],
  itemType:"clothing",
  Description:"Crossover design. Flowy fabric. Floral print. Short sleeve. Fitted waist. Pleated skirt. Inner lining. Side bow fastenings. Party collection.Side length 102.4 cm \n Back length 122.8 cm \n These measures have been calculated for a 4 size.",
  Care:"COMPOSITION:100% POLYESTER. LINING:100% POLYESTER MACHINE WASHING MAX 30°C / 85ºF SHORT SPIN DRY DO NOT BLEACH IRONING MAX 110°C / 230ºF DRY CLEANING MECHANICAL RESTRIC. PERCHLOROETHYLENE DO NOT TUMBLE DRY",
  Comments:["After one look at this planet any visitor from outer space would say “I WANT TO SEE THE MANAGER.”","Loving you Isn't the right thing to do How can I Ever change things that I feel? If I could Maybe I'd give you my world How can I When you won't take it from me?","Microsoft bought Skype for 8,5 billion!.. what a bunch of idiots! I downloaded it for free!"],
  Size:[4, 6, 8, 10, 12],
  Fans:["5ed3445eeb44432a2ca5a053","5ed3445eeb44432a2ca5a054"]

},
{
  Name:"Vichy check dress",
  Price:"22.99",
  Size:["4", "6", "8", "10", "12"],
  Image:["https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/43060884_99.jpg?ts=1546428834120&imwidth=100&imdensity=2","https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/43060884_99_D1.jpg?ts=1546428834120&imwidth=100&imdensity=2","https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/43060884_99_D2.jpg?ts=1546428834120&imwidth=100&imdensity=2"],
  itemType:"clothing",
  Description:"Flared design. Cotton fabric. Gingham check fabric. Embroidered details. Classic collar. Three quarter sleeve. Loops. Bow on the waist. Button fastening on the front section. Scalloped hem. Side length 54.0 cm Back length 76.5 cm",
  Care:"COMPOSITION:100% COTTON-MACHINE WASHING MAX 30°C / 85ºF SHORT SPIN DRY-DO NOT BLEACH-IRONING MAX 110°C / 230ºF-DO NOT DRY CLEAN -DO NOT TUMBLE DRY",
  Comments:["It's gonna take a lot to take me away from you There's nothing that a hundred men or more could ever do I bless the rains down in Africa Gonna take some time to do the things we never have.","People always told me be careful of what you do And dont go around breaking young girls' hearts And mother always told me be careful of who you love And be careful of what you do cause the lie becomes the truth.","If I roll once and you roll twice. What does that mean?"]
  

},
{
  Name:"Printed long dress",
  Price:"12.99",
  Size:["4", "6", "8", "10", "12"],
  Image:["https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/41077802_15.jpg?ts=1553778807631&imwidth=100&imdensity=1","https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/41077802_15_D1.jpg?ts=1553778807631&imwidth=100&imdensity=2","https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/41077802_15_D9.jpg?ts=1551692042663&imwidth=100&imdensity=2"],
  itemType:"clothing",
  Description:"Flowy fabric. Flared design. Long design. Thin straps. V-neck. Decorative bow. Print. Side slits.Side length 110.0 cm Back length 103.0 cm These measures have been calculated for a 4 size.",
  Care:"MACHINE WASHING MAX 30°C / 85ºF SHORT SPIN DRY",
  Comments:["Some people come into our lives and leave footprints on our hearts, while others come into our lives and make us wanna leave footprints on their face.","I never meant to cause you any sorrow. I never meant to cause you any pain. I only wanted to one time see you laughing. I only wanted to see you laughing in the purple rain.","I can drive 10 miles, walk 50 feet. Turn around and before I know it, I'd be back home. Or would I? I'm not sure but that's just how it is."]
  
},
{
  Name:"Leopard leather sandals",
  Price:45.99,
  Size:["4", "6", "8", "10", "12"],
  Image:["https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/43093726_99.jpg?ts=1543512881380&imwidth=100&imdensity=2","https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/43093726_99_D3.jpg?ts=1543570414611&imwidth=100&imdensity=2","https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/43093726_99_B.jpg?ts=1543570414611&imwidth=100&imdensity=1"],
  itemType:"shoes",
  Description:"00% Leather. Textured design. Leopard structure. Front slit. Ankle bracelet. Buckle and loop. 9.5 cm heel. Rounded toe.",
  Care:"Shoeupper: 100% bovine leather. Lining: 52% polyester,48% polyurethane. Insole: 53% goat leather,47% polyester. Sole: 100% thermoplastic. Fixing sole: 100% glued",
  Comments:["Look! In the sky. It's a bird, it's a plane. Or is it a hellicopter? No actually I think it is a bird. Or maybe I'm just seeing things. Who knows... After 10 shots of Whiskey things start to get a bit strange.","Sometimes I wonder if I really can. But then I think to myself, maybe I can't. But if I could, that would be good. Maybe it's all a lie?","Now this is the story all about how My life got flipped, turned upside down And I'd like to take a minute just sit right there I'll tell you how I became the prince of a town called Bel-air."]
},
{
  Name:"Snake-effect strap sandals",
  Price:35.99,
  Size:["4", "6", "8", "10", "12"],
  Image:["https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/43079702_12_D4.jpg?ts=1544460005213&imwidth=100&imdensity=2","https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/43079702_12.jpg?ts=1544460005213&imwidth=100&imdensity=2","https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/43045772_08.jpg?ts=1548351236245&imwidth=100&imdensity=1",],
  itemType:"shoes",
  Description:"100% Leather. Textured design. Leopard structure. Front slit. Ankle bracelet. Buckle and loop. 9.5 cm heel. Rounded toe.",
  Care:"Shoeupper: 100% bovine leather. Lining: 52% polyester,48% polyurethane. Insole: 53% goat leather,47% polyester. Sole: 100% thermoplastic. Fixing sole: 100% glued",
  Comments:["Why go to college? There's Google.","Sorry, I can't hangout. My uncle's cousin's sister in law's best friend's insurance agent's roommate's pet goldfish died. Maybe next time.","Yo wa gwan blud you rudeboy bludclart.","People always told me be careful of what you do And dont go around breaking young girls' hearts And mother always told me be careful of who you love And be careful of what you do cause the lie becomes the truth."]
},
{
  Name:"Snake-effect ankle boots",
  Price:45.99,
  Size:["4", "6", "8", "10", "12"],
  Image:["https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53020583_92_D2.jpg?ts=1553164702911&imwidth=100&imdensity=2","https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53020583_92_D3.jpg?ts=1553164702911&imwidth=100&imdensity=2","https://st.mngbcn.com/rcs/pics/static/T4/fotos/outfit/S20/43079702_12-99999999_01.jpg?ts=1543836819752&imwidth=100&imdensity=1","https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/43079702_12_D4.jpg?ts=1544460005213&imwidth=100&imdensity=1"],
  itemType:"shoes",
  Description:"Snakeskin effect. Straps design. Stiletto heel. 9 cm heel. Rounded toe. Ankle bracelet. Buckle.",
  Care:"SHOEUPPER:96% POLYURETHANE,4% ZINC. LINING:52% POLYESTER,48% POLYURETHANE. INSOLE:92% POLYURETHANE,8% POLYESTER. SOLE:100% THERMOPLASTIC",
  Comments:["Don't want to close my eyes I don't want to fall asleep Cause I'd miss you babe And I don't want to miss a thing Cause even when I dream of you The sweetest dream will never do I'd still miss you babe And I don't want to miss a thing.","A good lawyer knows the law; a clever one takes the judge to lunch.","I saw six men kicking and punching the mother-in-law. My neighbor said “Are you going to help?” I said, “No, Six should be enough.”"]
},
{
  Name:"Retro style sunglasses",
  Price:19.00,
  Size:["One Size"],
  Image:["https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/43030694_01_D5.jpg?ts=1547482474615&imwidth=100&imdensity=2","https://st.mngbcn.com/rcs/pics/static/T4/fotos/outfit/S20/43030694_01-99999999_01.jpg?ts=1543859013898&imwidth=100&imdensity=1","https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/43030694_01.jpg?ts=1553788030291&imwidth=100&imdensity=1"],
  itemType:"accessories",
  Description:"Acetate frame. Sidebars with metallic detail. 100% UV protection factor category 3(max. for regular use).",
  Care:"Frame: 70% polycarbonate,30% zinc. Glass: 100% polycarbonate",
  Comments:["Life is full of temporary situations, ultimately ending in a permanent solution.","If I could I would. Wether or not I should, I still would.","Please allow me to introduce myself I'm a man of wealth and taste I've been around for a long, long year Stole many a mans soul and faith And I was round when jesus christ Had his moment of doubt and pain."]
},
{
  Name:"Anim print crossbody belt bag",
  Price:19.99,
  Size:["4", "6", "8", "10", "12"],
  Image:["https://st.mngbcn.com/rcs/pics/static/T4/fotos/outfit/S20/43080591_70-99999999_01.jpg?ts=1554921220447&imwidth=100&imdensity=1","https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/43080591_70_D2.jpg?ts=1545917588393&imwidth=100&imdensity=1"],
  itemType:"accessories",
  Description:"Multiway. Mini size. Animal print. Front lapel. Dual compartment. Adjustable belt. Inner lining. Magnetic metallic fastening.21.0x12.0x5.0cm (LengthxHeightxWidth)",
  Care:"COMPOSITION:100% POLYURETHANE. LINING:100% POLYESTER '\n'NO WASHING '\n' DO NOT BLEACH '\n' DO NOT IRON '\n' DO NOT DRY CLEAN '\n' DO NOT TUMBLE DRY",
  Comments:["Love it", "Will buy Again", "Broken on first wear"]
},
{
  Name:"Ceramic earrings",
  Price:15.99,
  Size:["One Size"],
  Image:["https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/43003746_05_B.jpg?ts=1548333298179&imwidth=100&imdensity=1","https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/43003746_05_D9.jpg?ts=1555511980408&imwidth=100&imdensity=1","https://st.mngbcn.com/rcs/pics/static/T4/fotos/outfit/S20/43003746_05-99999999_01.jpg?ts=1550237639403&imwidth=100&imdensity=1"],
  itemType:"accessories",
  Description:"Combined pendants. Ceramic beads. Hook fastening.",
  care:"COMPOSITION:50% CERAMICS,30% BRASS,20% RESIN",
  Comments:["Love it", "Will buy Again", "Broken on first wear"]
},


];

db.Users.remove({})
  .then(() => db.Users.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


  db.Products.remove({})
  .then(() => db.Products.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
