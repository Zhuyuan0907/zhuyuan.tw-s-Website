const engineerTiers = [
  {
    name: "總召集人",
    code: "tier-s",
    description: "曾是戰線前排，現在只剩 commit 傳說與戰損照片。",
    members: [
      {
        name: "Ricky Lu",
        title: "Token Bankruptcy Commander",
        epitaph: "在 feature 還沒收尾前先把 token 用到負數，從淘寶幻夢一路跌進戒斷地獄。",
        downfall:
          "先是怒吼『幹，用完了，用到變負的』，接著發現還有三個 feature 沒搞定；被淘寶模型坑了 100 人民幣後，嘴上說再買是狗，下一秒又開始追問號池跟 token，最終在反覆戒斷與求補給之間正式隕落。",
        gravatar:
          "https://gravatar.com/avatar/9a4d30231b7e098d33360390c317ed497641f389d797b198d84071de6728bd63?s=512&d=https://sitcon.org/2022/imgs/deafult_avatar.jpg&r=g",
        stats: ["Token 餘額 -∞", "未完成 feature 3", "淘寶受害金額 100R"],
      },
    ],
  },
  {
    name: "重度Token消耗者",
    code: "tier-a",
    description: "作戰能力穩定，但在長期消耗下仍舊逃不過宿命。",
    members: [
      {
        name: "鯨魚",
        title: "Infra Tide Caller",
        epitaph: "每次修監控都像在召喚深海災厄。",
        downfall: "警報多到失去感覺，最後與監控面板融為一體。",
        gravatar:
          "https://gravatar.com/avatar/190cb3efdc528ba6d3879559d3650bf5f8f555a7f2fbbd7f4e62e0662124bfdc?s=512&d=https://sitcon.org/2022/imgs/deafult_avatar.jpg&r=g",
        stats: ["PagerDuty 連響 19 次", "深夜修復成功率 94%", "靈魂剩餘 6%"],
      },
      {
        name: "Nelson",
        title: "Backend Exorcist",
        epitaph: "把奇怪需求鎮壓成 API，最後自己也被 schema 吞沒。",
        downfall: "為了讓 legacy 正常講話，和資料庫對望到天亮。",
        gravatar:
          "https://gravatar.com/avatar/014f25869988e740766b2247d49013b50118675df2d0918f9f4f86e565732a3b?s=512&d=https://sitcon.org/2022/imgs/deafult_avatar.jpg&r=g",
        stats: ["Migration 次數 52", "Log 錯誤行數破萬", "Rollback 心率持續飆升"],
      },
            {
        name: "康喔",
        title: "Frontend Doombringer",
        epitaph: "動畫永遠比需求先到位，然後人先倒。",
        downfall: "試圖在一晚內補完所有互動細節，最後跟 CSS 一起蒸發。",
        gravatar:
          "https://gravatar.com/avatar/08b25778f9a9ca3f2591b4e859be426dbd075608d763daf4fdd244d48eb26f13?s=512&d=https://sitcon.org/2022/imgs/deafult_avatar.jpg&r=g",
        stats: ["Hover 特效 128 個", "最後呼吸伴隨 keyframes", "Bug 回報已讀不回 12 小時"],
      },
            {
        name: "柴柴",
        title: "Chief Collapse Officer",
        epitaph: "把 side project 做成主宇宙，最後連睡眠排程都被 force push。",
        downfall: "連續三週凌晨四點 merge，最後在 demo 前夕直接氣絕。",
        gravatar:
          "https://gravatar.com/avatar/cacb91a081291126489ba6b0e98662c698188ecce6391007b171461b21ef4241?s=512&d=https://sitcon.org/2022/imgs/deafult_avatar.jpg&r=g",
        stats: ["PR 破防次數 37", "咖啡因濃度 SSS", "最後上線時間 04:44"],
      }
    ],
  },
  {
    name: "輕度克勞德使用者",
    code: "tier-b",
    description: "還來不及逃，已經被專案召喚進殞落名冊。",
    members: [
      {
        name: "Kevinowo",
        title: "Junior Chaos Handler",
        epitaph: "原本只是幫忙看一下，最後整個人被拖進去。",
        downfall: "接手一個小 issue 後，發現自己在修整條產品線。",
        gravatar:
          "https://gravatar.com/avatar/131cf4dbacc120ab9ce94caea81cb4d835a6efca71b12e2c64452746affba7ba?s=512&d=https://sitcon.org/2022/imgs/deafult_avatar.jpg&r=g",
        stats: ["第一週就 hotfix", "需求理解度 12%", "被 cue 次數無法統計"],
      },
    ],
  },
];

const grid = document.querySelector("#engineer-grid");
const modal = document.querySelector("#engineer-modal");
const modalBody = document.querySelector("#engineer-modal-body");

const engineerLookup = new Map();

engineerTiers.forEach((tier) => {
  tier.members.forEach((member, index) => {
    const id = `${tier.code}-${index}`;
    engineerLookup.set(id, {
      ...member,
      id,
      tierName: tier.name,
    });
  });
});

const renderTier = (tier) => `
  <section class="tier-card ${tier.code}">
    <div class="tier-header">
      <div>
        <p class="tier-label">${tier.code.toUpperCase()}</p>
        <h3>${tier.name}</h3>
      </div>
      <p class="tier-description">${tier.description}</p>
    </div>
    <div class="tier-members">
      ${tier.members
        .map((member, index) => {
          const id = `${tier.code}-${index}`;
          return `
            <article class="engineer-card">
              <button type="button" class="engineer-trigger" data-engineer-id="${id}">
                <div class="avatar-wrap">
                  <img src="${member.gravatar}" alt="${member.name} 的頭像" />
                </div>
                <p class="engineer-name">${member.name}</p>
                <p class="engineer-rank">${member.title}</p>
                <p class="engineer-tag">${member.epitaph}</p>
              </button>
            </article>
          `;
        })
        .join("")}
    </div>
  </section>
`;

const renderModal = (engineer) => `
  <div class="modal-hero">
    <div class="modal-avatar">
      <img src="${engineer.gravatar}" alt="${engineer.name} 的頭像" />
    </div>
    <div class="modal-copy">
      <p class="modal-tier">${engineer.tierName}</p>
      <h3 id="engineer-modal-name">${engineer.name}</h3>
      <p class="modal-title">${engineer.title}</p>
      <p class="modal-downfall">${engineer.downfall}</p>
      <div class="modal-stats">
        ${engineer.stats.map((stat) => `<span>${stat}</span>`).join("")}
      </div>
    </div>
  </div>
`;

grid.innerHTML = engineerTiers.map(renderTier).join("");

const closeModal = () => {
  modal.setAttribute("aria-hidden", "true");
  modalBody.innerHTML = "";
  document.body.classList.remove("modal-open");
};

const openModal = (engineerId) => {
  const engineer = engineerLookup.get(engineerId);

  if (!engineer) {
    return;
  }

  modalBody.innerHTML = renderModal(engineer);
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
};

grid.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-engineer-id]");

  if (!trigger) {
    return;
  }

  openModal(trigger.dataset.engineerId);
});

modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
    closeModal();
  }
});
