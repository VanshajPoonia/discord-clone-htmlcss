//server data object
const server = [
  {
    name: "Codedamn",
    img: "./images/assets/serverimg/codedamn.webp",
    chanels: [
      {
        name: "Information Stuff",
        subchanels: [
          "📜丨𝗥𝘂𝗹𝗲𝘀",
          "👋丨𝗪𝗲𝗹𝗰𝗼𝗺𝗲",
          "👋丨𝗪𝗲𝗹𝗰𝗼𝗺𝗲",
          "🐞丨𝗕𝘂𝗴𝘀-𝗙𝗲𝗲𝗱𝗯𝗮𝗰𝗸",
          "⌛丨𝗖𝗼𝘂𝗿𝘀𝗲-𝗥𝗲𝗾𝘂𝗲𝘀𝘁",
          "🎫丨ticket-tool",
        ],
      },
      {
        name: "Discussions",
        subchanels: ["🙋丨𝗜𝗻𝘁𝗿𝗼𝗱𝘂𝗰𝘁𝗶𝗼𝗻𝘀", "💻丨𝗚𝗲𝗻𝗲𝗿𝗮𝗹"],
      },
      {
        name: "Pro Members",
        subchanels: ["Genral"],
      },
      {
        name: "Learning Paths Discussions",
        subchanels: ["🌐丨𝗪𝗲𝗯3", "📚丨𝗙𝘂𝗹𝗹𝗦𝘁𝗮𝗰𝗸", "🐍丨𝗣𝘆𝘁𝗵𝗼𝗻-𝗠𝗮𝘀𝘁𝗲𝗿𝘆"],
      },
      {
        name: "Events",
        subchanels: ["event-chat"],
      },
    ],
    members: [
      {
        role: "SENIOR MODERATORS-1",
        bots: 1,
      },
      {
        role: "MODERATORS-2",
        bots: 2,
      },
      {
        role: "CODEDAMN PRO-10",
        bots: 10,
      },
      {
        role: "ONLINE-2",
        bots: 2,
      },
    ],
  },
  {
    name: "Freecodecamp",
    img: "./images/assets/serverimg/freecodecamp.webp",
    chanels: [
      {
        name: "Information",
        subchanels: ["announcements", "contact-a-moderator"],
      },
      {
        name: "Discussion",
        subchanels: [
          "introduction",
          "software devlopment",
          "contributors",
          "100-days-of-code",
          "off-topic",
        ],
      },
      {
        name: "Archive",
        subchanels: [
          "positive energy",
          "project energy",
          "project-euler-100",
          "aws-certification",
        ],
      },
    ],
    members: [
      {
        role: "SENIOR MODERATORS-1",
        bots: 5,
      },
      {
        role: "MODERATORS-2",
        bots: 3,
      },

      {
        role: "ONLINE-2",
        bots: 28,
      },
    ],
  },
  {
    name: "Python",
    img: "./images/assets/serverimg/python.webp",
    chanels: [
      {
        name: "📜｜Information",
        subchanels: [
          "welcome",
          "rules",
          "code-of-conduct",
          "roles",
          "changelog",
        ],
      },
      {
        name: "📰｜News",
        subchanels: [
          "announcements",
          "python community",
          "python-events",
          "mailing lists",
          "reddit",
        ],
      },
      {
        name: "🐍｜Lobby",
        subchanels: ["python-general", "❔｜how-to-get-help"],
      },
      {
        name: "💬｜Discussion",
        subchanels: [
          "career-discussion",
          "internals-and-peps",
          "community-meta",
        ],
      },
    ],
    members: [
      {
        role: "SENIOR MODERATORS-1",
        bots: 2,
      },
      {
        role: "MODERATORS-2",
        bots: 3,
      },

      {
        role: "ONLINE-2",
        bots: 28,
      },
    ],
  },
  {
    name: "Tim",
    img: "./images/assets/serverimg/tim.webp",
    chanels: [
      {
        name: "📌 Information",
        subchanels: [
          "Welcomes",
          "Server rules",
          "info",
          "announcements",
          "uploads",
        ],
      },
      {
        name: "🖐 General",
        subchanels: ["genral", "questions", "minecraft", "random-chat"],
      },
      {
        name: "🔊 Voice Channels",
        subchanels: [
          "「🔊」General",
          "「🎵」 Music",
          "「🎬」 Code Streams",
          "「🦾」Architects",
          "「🔒」 Staff",
          "「💤」 AFK",
        ],
      },
    ],
    members: [
      {
        role: "SENIOR MODERATORS-1",
        bots: 9,
      },
      {
        role: "MODERATORS-2",
        bots: 12,
      },

      {
        role: "ONLINE-2",
        bots: 38,
      },
    ],
  },
];
const colors = [
  "#AD7EC2",
  "#41DA34",
  "#E49560",
  "#EA9D61",
  "#F1C40F",
  "#DB5734",
];
const active = [
  "",
  "playing visual studio code",
  "",
  "",
  "playing game",
  "",
  "",
  "learning html",
  "Listening music",
];

//sidebar element selection
const serverdiv = document.querySelector(".sidebar__servers");

//adding servers to window
for (let i = 0; i < server.length; i++) {
  const div = document.createElement("div");
  div.classList.add("sidebar__servers__chanel");
  div.setAttribute("name", `${server[i].name}`);
  div.classList.add(`${server[i].name}`);
  div.innerHTML = ` <div class="sidebar__servers__chanel__pointer " name="${server[i].name}"></div>
                    <div class="sidebar__freind__serverdiv__info2" name="${server[i].name}">${server[i].name}</div>
                    <div class="sidebar__servers__chanel__imagediv" name="${server[i].name}">
                        <img src="${server[i].img}" alt="image" class="sidebar__servers__chanel__imagediv__img" name="${server[i].name}">
                    </div>`;

  serverdiv.appendChild(div);
}

//selecting header btns
//here are all btns
const onlinebtn = document.querySelector(".online");
const allbtn = document.querySelector(".all");
const pendingbtn = document.querySelector(".pending");
const blockedbtn = document.querySelector(".blocked");
const addbtn = document.querySelector(".green");

//playground selection
const playground = document.querySelector(".playground__main__left");

//when user click on online btn in freind section we have to change content
//online btn event listner
onlinebtn.addEventListener("click", () => {
  const playground = document.querySelector(".playground__main__left");
  playground.innerHTML = ` <img src="./images/assets/online.svg" alt="img" class="user__img">
                    <div class="user__text">No one's around to play with Wumpus.</div>`;
});

//pending btn eventlistner
pendingbtn.addEventListener("click", () => {
  const playground = document.querySelector(".playground__main__left");

  playground.innerHTML = ` <img src="./images/assets/pending.svg" alt="img" class="user__img">
                    <div class="user__text">There are no pending friend requests. Here's Wumpus for now.</div>`;
});

//bllocked btn listner
blockedbtn.addEventListener("click", () => {
  const playground = document.querySelector(".playground__main__left");
  playground.innerHTML = ` <img src="./images/assets/blocked.svg" alt="img" class="user__img">
                    <div class="user__text">You can't unblock the Wumpus.</div>`;
});

//all brn listner
allbtn.addEventListener("click", () => {
  const playground = document.querySelector(".playground__main__left");
  playground.innerHTML = ` <img src="./images/assets/all.svg" alt="img" class="user__img">
                    <div class="user__text">Wumpus is waiting on friends. You don’t have to though!</div>
                    <div class="user__btn">Add Friend</div>`;
});

//add btn listner
addbtn.addEventListener("click", () => {
  const playground = document.querySelector(".playground__main__left");
  playground.innerHTML = `<div class="addfrieind__upper">
    <div class="addfriend__title">ADD FRIEND</div>
    <div class="addfriend__body">You can add a friend with their Discord Tag. It's cAsE sEnSitIvE!</div>
    <div class="addfriend__inputbox">
        <input type="text" class="input__search" placeholder="Enter a Username#0000" onfocus="run()" onfocusout="stop()">
        <button class="addbtn">Send Friend Request</button>
    </div>
</div>
<div class="addfrieind__footer">
    <img src="./images/assets/add.svg" alt="img" class="user__img">
    <div class="user__text">Wumpus is waiting on friends. You don’t have to though!</div>
</div>`;
});

//it will add border of neon color to freind search input
function run() {
  const box = document.querySelector(".addfriend__inputbox");
  box.style.borderColor = "#00b0f4";
}
//it will remove border of neon color to freind search input
function stop() {
  const box = document.querySelector(".addfriend__inputbox");
  box.style.borderColor = "#222428";
}

//topbar of sidebar where we display server name
const topbar = document.querySelector(".extsidebar__topbar");

//middle div of sidebar
const mainbar = document.querySelector(".extsidebar__mainbar");

//freind section oprning btn selector
const friend = document.querySelector(".sidebar__freind__serverdiv");

//selctor for playground header friend
const headerfriend = document.querySelector(".playground__header");

//selector for playground header server
const headerserver = document.querySelector(".playground__header__server");

//here is selector for playground
const playgroundmain = document.querySelector(".playground__main");

//event listner it will trigered when we click on freind btn
friend.addEventListener("click", () => {
  //it will load freind content at topbar
  topbar.innerHTML = ` <button class="extsidebar__topbar__btn">
                Find or start a conversation
            </button>`;

  //it will load freind content at middle div of sidebar
  mainbar.innerHTML = `<div class="extsidebar__mainbar__freind">
                    <button class="extsidebar__mainbar__freind__btn1">
                        <svg class="extsidebar__mainbar__freind__btn1__icon" aria-hidden="false" width="16" height="16"
                            viewBox="0 0 24 24">
                            <g fill="none" fill-rule="evenodd">
                                <path fill=#ffffff fill-rule="nonzero"
                                    d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                                    transform="translate(2 4)"></path>
                                <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z">
                                </path>
                            </g>
                        </svg>
                        <div class="extsidebar__mainbar__freind__btn1__text">Freinds</div>
                    </button>
                    <button class="extsidebar__mainbar__freind__btn2">
                        <svg class="extsidebar__mainbar__freind__btn1__icon" aria-hidden="false" width="24" height="24"
                            viewBox="0 0 24 24">
                            <path fill=#8E9297
                                d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z">
                            </path>
                        </svg>
                        <div class="extsidebar__mainbar__freind__btn1__text2">Nitro</div>
                    </button>
                    <div class="extsidebar__mainbar__freind__dirmsg">
                        <div class="extsidebar__mainbar__freind__dirmsg__text">DIRECT MESSAGES</div>
                        <svg x="0" y="0" class="extsidebar__mainbar__freind__dirmsg__icon" aria-hidden="false" width="24" height="24"
                            viewBox="0 0 18 18">
                            <polygon fill-rule="nonzero" fill="white"
                                points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"></polygon>
                        </svg>
                    </div>
                    <div class="other__profile">
                
                        <div class="extsidebar__footerbar__profile__display">
                            <div class="extsidebar__footerbar__profile__left__icon">
                                <img src="./images/assets/serverimg/bot.webp" alt="img"
                                    class="extsidebar__footerbar__profile__left__icon__img">
                
                                <div class="extsidebar__footerbar__profile__left__icon__online"></div>
                            </div>
                            <div class="extsidebar__footerbar__profile__left__text marginleft">
                                <div class="extsidebar__footerbar__profile__left__namedisplay">Vanshaj Poonia</div>
                                <div class="extsidebar__footerbar__profile__left__activedisplsy">learning Angular</div>
                            </div>
                        </div>
                
                    </div>
                </div>`;
  //to toggle between view of freind and server
  headerfriend.style.display = "flex";
  headerserver.style.display = "none";

  //to change content of playground
  playgroundmain.innerHTML = ` <div class="playground__main__left">
                <img src="./images/assets/online.svg" alt="img" class="user__img">
                <div class="user__text">No one's around to play with Wumpus</div>
            </div>
            <div class="playground__main__right">
                <div class="playground__main__right__header">Active Now</div>
                <div class="playground__main__right__content">
                    <div class="playground__main__right__content__title">It's quiet for now...</div>
                    <div class="playground__main__right__content__body">When a friend starts an activity—like playing a game or
                        hanging out on voice—we’ll show it here!</div>
                </div>
            </div>`;
});

//here we are going to add event listners to all server so when user click on server btn
//we can load related content to that server

for (let i = 0; i < server.length; i++) {
  const serverbtn = document.querySelector(`.${server[i].name}`);
  serverbtn.addEventListener("click", runme);
}

//when we cllick on server btn this function will trigered

function runme(e) {
  //following code is to know which server btn is pressed
  let name = e.target.getAttribute("name");
  let j = server.find((el) => el.name == name);

  //it will load server content at topbar
  topbar.innerHTML = `<div class="server__topbar">
    <div class="server__topbar__name">${j.name}</div>

    <svg  width="24" height="24" viewBox="0 0 24 24" class="server__topbar__svg">
        <path fill=#D5D6D7 fill-rule="evenodd" clip-rule="evenodd"
            d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
    </svg>
</div>
`;

  //it will load server content at topbar
  //create div and class name to it
  const serverdiv = document.createElement("div");
  serverdiv.classList.add("server__chanels");

  //inset no of members and peak menbers data into serverdiv

  serverdiv.innerHTML += `<div class="no__members">
  <svg width="24" height="24" class="lock" viewBox="0 0 24 24"><path fill=rgb(114,118,125) d="M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z" aria-hidden="true"></path></svg>
  Members:5291
  </div>`;
  serverdiv.innerHTML += `<div class="no__members">
  <svg width="24" height="24" class="lock" viewBox="0 0 24 24"><path fill=rgb(114,118,125) d="M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z" aria-hidden="true"></path></svg>
  Peak online:255
  </div>`;

  //get all chanels data
  const chanelinfo = j.chanels;
  for (let n = 0; n < chanelinfo.length; n++) {
    serverdiv.innerHTML += `<div class="chanel__name">
        <svg width="24" height="24" viewBox="0 0 24 24" class="server__chanel__svg">
            <path fill=#829297 fill-rule="evenodd" clip-rule="evenodd"
                d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
        </svg>
        ${chanelinfo[n].name}
    </div>`;
    for (let k = 0; k < chanelinfo[n].subchanels.length; k++) {
      serverdiv.innerHTML += `<div class="chanel__div">
        <div class="chanel__desc">
            <div class="desc__left">
                <svg width="24" height="24" viewBox="0 0 24 24" class="desc__left__icon">
                    <path fill=#72767D fill-rule="evenodd" clip-rule="evenodd"
                        d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z">
                    </path>
                </svg>
                ${chanelinfo[n].subchanels[k]}
            </div>

            <svg class="left__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">
                <path fill=#B9BBBE d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
                <path fill=#B9BBBE
                    d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z">
                </path>
                <path fill=#B9BBBE
                    d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z">
                </path>
            </svg>


        </div>
        
    </div>`;
    }

    //playground main content
    playgroundmain.innerHTML = `<div class="playground__main__chat">
    <div class="chat">
        <div class="chat__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" class="chat__svg__svg" x="0" y="0" aria-hidden="true">
                <path fill=#FFFFFF fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z">
                </path>
            </svg>
        </div>
        <div class="chat__msg">Welcome to #discord-clone!</div>
        <div class="chat__msg__p">This is the start of the #discord-clone channel.</div>
    </div>
    <div class="playground__main__chat__inputbox">
        <svg class="chat__addbtn" width="24" height="24" viewBox="0 0 24 24">
            <path fill=#B9BBBE
                d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z">
            </path>
        </svg>
        <input type="text" class="chat__input" placeholder="Message ">
        <div class="svg__div">
            <svg class="chat__svg" width="24" height="24" aria-hidden="false" viewBox="0 0 24 24">
                <path fill=#B9BBBE fill-rule="evenodd" clip-rule="evenodd"
                    d="M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z">
                </path>
            </svg>
            <svg width="24" height="24" class="chat__svg" aria-hidden="false" viewBox="0 0 24 24">
                <path fill=#B9BBBE
                    d="M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM9.76445 11.448V15.48C8.90045 16.044 7.88045 16.356 6.74045 16.356C4.11245 16.356 2.66045 14.628 2.66045 12.072C2.66045 9.504 4.23245 7.764 6.78845 7.764C7.80845 7.764 8.66045 8.004 9.32045 8.376L9.04445 10.164C8.42045 9.768 7.68845 9.456 6.83645 9.456C5.40845 9.456 4.71245 10.512 4.71245 12.06C4.71245 13.62 5.43245 14.712 6.86045 14.712C7.31645 14.712 7.64045 14.616 7.97645 14.448V12.972H6.42845V11.448H9.76445ZM11.5481 7.92H13.6001V16.2H11.5481V7.92ZM20.4724 7.92V9.636H17.5564V11.328H19.8604V13.044H17.5564V16.2H15.5164V7.92H20.4724Z">
                </path>
            </svg>
            <svg width="24" height="24" class="chat__svg special__svg" aria-hidden="false" viewBox="0 0 20 20">
                <path fill=#B9BBBE class="" fill-rule="evenodd" clip-rule="evenodd"
                    d="M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM11.9998 12.2201C11.9998 13.3245 11.1046 14.2198 10.0002 14.2198C8.8958 14.2198 8.00052 13.3245 8.00052 12.2201H6.66742C6.66742 14.0607 8.15955 15.5529 10.0002 15.5529C11.8408 15.5529 13.3329 14.0607 13.3329 12.2201H11.9998ZM4.44559 13.331C4.44559 13.9446 3.94821 14.442 3.33467 14.442C2.72112 14.442 2.22375 13.9446 2.22375 13.331C2.22375 12.7175 2.72112 12.2201 3.33467 12.2201C3.94821 12.2201 4.44559 12.7175 4.44559 13.331ZM16.6657 14.442C17.2793 14.442 17.7766 13.9446 17.7766 13.331C17.7766 12.7175 17.2793 12.2201 16.6657 12.2201C16.0522 12.2201 15.5548 12.7175 15.5548 13.331C15.5548 13.9446 16.0522 14.442 16.6657 14.442Z">
                </path>
                <path fill=#B9BBBE class="hidden-334jci" fill-rule="evenodd" clip-rule="evenodd"
                    d="M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM12 13H11.2H8.8H8C8 14.1046 8.89543 15 10 15C11.1046 15 12 14.1046 12 13ZM17.7766 13.331C17.7766 13.9446 17.2793 14.442 16.6657 14.442C16.0522 14.442 15.5548 13.9446 15.5548 13.331C15.5548 12.7175 16.0522 12.2201 16.6657 12.2201C17.2793 12.2201 17.7766 12.7175 17.7766 13.331ZM2 12.2361L2.53532 11L5.62492 12.7835C5.79161 12.8797 5.79161 13.1203 5.62492 13.2165L2.53532 15L2 13.7639L3.32339 13L2 12.2361Z">
                </path>
            </svg>
            <svg aria-hidden="false" viewBox="0 0 24 24" class="chat__svg">
                <path fill=#B9BBBE fill-rule="evenodd" clip-rule="evenodd"
                    d="M12.2512 2.00309C12.1677 2.00104 12.084 2 12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 11.916 21.999 11.8323 21.9969 11.7488C21.3586 11.9128 20.6895 12 20 12C15.5817 12 12 8.41828 12 4C12 3.31052 12.0872 2.6414 12.2512 2.00309ZM10 8C10 6.896 9.104 6 8 6C6.896 6 6 6.896 6 8C6 9.105 6.896 10 8 10C9.104 10 10 9.105 10 8ZM12 19C15.14 19 18 16.617 18 14V13H6V14C6 16.617 8.86 19 12 19Z">
                </path>
                <path d="M21 3V0H19V3H16V5H19V8H21V5H24V3H21Z" fill=#B9BBBE></path>
            </svg>
        </div>

    </div>
</div>`;

    const membersdiv = document.createElement("div");
    membersdiv.classList.add("playground__main__friends");

    for (let m = 0; m < j.members.length; m++) {
      const role = document.createElement("div");
      role.classList.add("role");
      role.innerHTML += `<div class="role__name">${j.members[m].role}</div>`;
      const randomcolor = randomnumbers(5, 1);

      for (let b = 0; b < j.members[m].bots; b++) {
        const randomnum = randomnumbers(5, 1);
        const activemsg = randomnumbers(8, 1);
        role.innerHTML += ` <div class="member">
            <div class=" membersdiv">
                <div class="extsidebar__footerbar__profile__left__icon">
                    <img src="./images/assets/discord/bot${randomnum}.png" alt="img"
                        class="extsidebar__footerbar__profile__left__icon__img">
                    <div class="extsidebar__footerbar__profile__left__icon__online"></div>
                </div>
                <div class="extsidebar__footerbar__profile__left__text">
                    <div class="members__name" style="color:${colors[randomcolor]}">bot${randomnum}</div>
                    <div class="members__action">${active[activemsg]}</div>
                </div>
            </div>

        </div>`;
      }

      membersdiv.innerHTML += role.outerHTML;
    }
    playgroundmain.innerHTML += membersdiv.outerHTML;
  }

  //after looping through data load this html to middle div of serverdiv
  mainbar.innerHTML = serverdiv.outerHTML;

  //playground header controller
  headerfriend.style.display = "none";
  headerserver.style.display = "flex";
}

function randomnumbers(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function inputi() {
  const inputbox = document.querySelector(".topbar__input");
  inputbox.style.width = "240px";
}
function inputd() {
  const inputbox = document.querySelector(".topbar__input");
  inputbox.style.width = "140px";
}
