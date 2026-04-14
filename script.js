const engineerTiers = [
  {
    name: "總召集人",
    code: "tier-s",
    description: "曾是戰線前排，現在只剩 commit 傳說與戰損照片。",
    members: [
      {
        name: "柴柴",
        title: "Chief Collapse Officer",
        epitaph: "把 side project 做成主宇宙，最後連睡眠排程都被 force push。",
        downfall: "連續三週凌晨四點 merge，最後在 demo 前夕直接氣絕。",
        gravatar:
          "https://gravatar.com/avatar/cacb91a081291126489ba6b0e98662c698188ecce6391007b171461b21ef4241?s=512&d=https://sitcon.org/2022/imgs/deafult_avatar.jpg&r=g",
        stats: ["PR 破防次數 37", "咖啡因濃度 SSS", "最後上線時間 04:44"],
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
    ],
  },
  {
    name: "重度使用者",
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
    ],
  },
  {
    name: "",
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

const createEvidenceImage = (name, label, accent) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#07111f" />
          <stop offset="100%" stop-color="#170710" />
        </linearGradient>
      </defs>
      <rect width="800" height="520" fill="url(#bg)" rx="28" />
      <circle cx="668" cy="120" r="96" fill="${accent}" opacity="0.18" />
      <circle cx="112" cy="400" r="144" fill="${accent}" opacity="0.1" />
      <rect x="48" y="48" width="704" height="424" rx="22" fill="none" stroke="${accent}" stroke-opacity="0.5" />
      <text x="64" y="110" fill="#d8ff62" font-family="Arial, Noto Sans TC, sans-serif" font-size="28" letter-spacing="6">FALL PROOF</text>
      <text x="64" y="190" fill="#f6f7fb" font-family="Arial, Noto Sans TC, sans-serif" font-size="64" font-weight="700">${name}</text>
      <text x="64" y="250" fill="#85f7ff" font-family="Arial, Noto Sans TC, sans-serif" font-size="32">${label}</text>
      <text x="64" y="328" fill="#a8b0d0" font-family="Arial, Noto Sans TC, sans-serif" font-size="22">檔案已封存，足以證明其確實殞落。</text>
      <text x="64" y="388" fill="#ff5f87" font-family="Arial, Noto Sans TC, sans-serif" font-size="20">status // irreversible</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const engineerLookup = new Map();

engineerTiers.forEach((tier) => {
  tier.members.forEach((member, index) => {
    const id = `${tier.code}-${index}`;
    engineerLookup.set(id, {
      ...member,
      id,
      tierName: tier.name,
      evidence: [
        {
          title: "戰損快照",
          caption: "事故現場已被封存成第一手圖資。",
          image: createEvidenceImage(member.name, "戰損快照", "#85f7ff"),
        },
        {
          title: "最後 commit",
          caption: "紀錄顯示這次修改後，精神狀態急速下墜。",
          image: createEvidenceImage(member.name, "最後 commit", "#ff5f87"),
        },
        {
          title: "殞落認證",
          caption: "經由專案群眾與系統日誌共同認證。",
          image: createEvidenceImage(member.name, "殞落認證", "#d8ff62"),
        },
      ],
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
  <section class="evidence-section">
    <div class="evidence-heading">
      <p class="eyebrow">EVIDENCE ARCHIVE</p>
      <h4>殞落證據</h4>
    </div>
    <div class="evidence-grid">
      ${engineer.evidence
        .map(
          (item) => `
            <figure class="evidence-card">
              <img src="${item.image}" alt="${engineer.name} 的${item.title}" />
              <figcaption>
                <strong>${item.title}</strong>
                <p>${item.caption}</p>
              </figcaption>
            </figure>
          `
        )
        .join("")}
    </div>
  </section>
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
