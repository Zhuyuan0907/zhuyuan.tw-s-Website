const engineers = [
  {
    name: "工程師姓名 01",
    tag: "gravatar slot",
    // 將下面的 REPLACE_WITH_MD5_HASH 替換成對應 email 的 MD5 hash
    gravatar: "https://www.gravatar.com/avatar/REPLACE_WITH_MD5_HASH?d=identicon&s=320",
  },
  {
    name: "工程師姓名 02",
    tag: "gravatar slot",
    gravatar: "https://www.gravatar.com/avatar/REPLACE_WITH_MD5_HASH?d=identicon&s=320",
  },
  {
    name: "工程師姓名 03",
    tag: "gravatar slot",
    gravatar: "https://www.gravatar.com/avatar/REPLACE_WITH_MD5_HASH?d=identicon&s=320",
  },
  {
    name: "工程師姓名 04",
    tag: "gravatar slot",
    gravatar: "https://www.gravatar.com/avatar/REPLACE_WITH_MD5_HASH?d=identicon&s=320",
  },
  {
    name: "工程師姓名 05",
    tag: "gravatar slot",
    gravatar: "https://www.gravatar.com/avatar/REPLACE_WITH_MD5_HASH?d=identicon&s=320",
  },
  {
    name: "工程師姓名 06",
    tag: "gravatar slot",
    gravatar: "https://www.gravatar.com/avatar/REPLACE_WITH_MD5_HASH?d=identicon&s=320",
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
