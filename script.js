const engineers = [
  {
    name: "柴柴",
    tag: "fallen engineer",
    gravatar:
      "https://gravatar.com/avatar/cacb91a081291126489ba6b0e98662c698188ecce6391007b171461b21ef4241?s=512&d=https://sitcon.org/2022/imgs/deafult_avatar.jpg&r=g",
  },
  {
    name: "康喔",
    tag: "fallen engineer",
    gravatar:
      "https://gravatar.com/avatar/08b25778f9a9ca3f2591b4e859be426dbd075608d763daf4fdd244d48eb26f13?s=512&d=https://sitcon.org/2022/imgs/deafult_avatar.jpg&r=g",
  },
  {
    name: "鯨魚",
    tag: "fallen engineer",
    gravatar:
      "https://gravatar.com/avatar/190cb3efdc528ba6d3879559d3650bf5f8f555a7f2fbbd7f4e62e0662124bfdc?s=512&d=https://sitcon.org/2022/imgs/deafult_avatar.jpg&r=g",
  },
  {
    name: "Nelson",
    tag: "fallen engineer",
    gravatar:
      "https://gravatar.com/avatar/014f25869988e740766b2247d49013b50118675df2d0918f9f4f86e565732a3b?s=512&d=https://sitcon.org/2022/imgs/deafult_avatar.jpg&r=g",
  },
  {
    name: "Kevinowo",
    tag: "fallen engineer",
    gravatar:
      "https://gravatar.com/avatar/131cf4dbacc120ab9ce94caea81cb4d835a6efca71b12e2c64452746affba7ba?s=512&d=https://sitcon.org/2022/imgs/deafult_avatar.jpg&r=g",
  },
];

const grid = document.querySelector("#engineer-grid");

grid.innerHTML = engineers
  .map(
    (engineer) => `
      <article class="engineer-card">
        <div class="avatar-wrap">
          <img src="${engineer.gravatar}" alt="${engineer.name} 的頭像" />
        </div>
        <p class="engineer-name">${engineer.name}</p>
        <p class="engineer-tag">${engineer.tag}</p>
      </article>
    `
  )
  .join("");
