const chapterData = {
  "chapter-01": {
    id: "chapter-01",
    title: "Từ nhỏ tôi đã tâm cơ hơn trà xanh — Chương 1",
    shortTitle: "Chương 1",
    duration: "12:50",
    source: "../projects/tu-nho-toi-da-tam-co-hon-tra-xanh/docs/chapter-01/chapter-01-clean.txt",
    sourceLabel: "docs/chapter-01/chapter-01-clean.txt",
    thumbnail: "../projects/tu-nho-toi-da-tam-co-hon-tra-xanh/thumbnail/chapter-01-thumbnail-v01.png",
    thumbnailLabel: "chapter-01-thumbnail-v01.png",
    suggestedTitle: "Từ Nhỏ Tôi Đã Tâm Cơ Hơn Trà Xanh",
    hook: "Đêm sinh nhật, 9999 đóa hồng được gửi đến quán bar. Một cuộc gọi bật loa ngoài khiến bốn cậu ấm nhận ra họ cùng bị lừa dối.",
    description: "TỪ NHỎ TÔI ĐÃ TÂM CƠ HƠN TRÀ XANH\n\nHứa Vi Vi từ nhỏ đã hiểu: muốn sống tốt thì phải biết tính toán.\n\nTừ một cô gái luôn tỏ ra ngoan ngoãn, Vi Vi từng bước trở thành “em gái nhỏ” duy nhất của nhóm F4 giàu có. Nhưng khi Tống Nhan Nhan xuất hiện, vị trí ấy bắt đầu bị đe dọa.\n\nĐêm sinh nhật trong quán bar, 9999 đóa hồng, một chiếc điện thoại bật loa ngoài và những ánh mắt cùng lúc đổi khác. Ai mới là người đang diễn? Ai mới là người bị dắt mũi?\n\nĐây là câu chuyện Từ Nhỏ Tôi Đã Tâm Cơ Hơn Trà Xanh, trình bày theo phong cách motion comic.\n\nNếu bạn thích những câu chuyện nữ chính tâm cơ và nhiều cú twist, hãy đăng ký kênh Tuấn Anh Audio để theo dõi các chương tiếp theo nhé!\n\n#TuanAnhAudio #TruyenAudio #TuNhoToiDaTamCoHonTraXanh",
    caption: "9999 đóa hồng, một cuộc gọi bật loa ngoài — và bốn cậu ấm cùng nhận ra mình đã bị lừa.",
    hashtags: "#TuanAnhAudio #TruyenAudio #TuNhoToiDaTamCoHonTraXanh",
    keywords: "Từ nhỏ tôi đã tâm cơ hơn trà xanh, Hứa Vi Vi, Tống Nhan Nhan, F4, 9999 đóa hồng, truyện ngôn tình, motion comic, truyện tranh chuyển động, nữ chính tâm cơ, cú lừa trong quán bar.",
    scenes: [
      "../projects/tu-nho-toi-da-tam-co-hon-tra-xanh/chapters/chapter-01/images/scene-hook-roses-v02.png",
      "../projects/tu-nho-toi-da-tam-co-hon-tra-xanh/chapters/chapter-01/images/scene-school-poor-allowance-v02.png",
      "../projects/tu-nho-toi-da-tam-co-hon-tra-xanh/chapters/chapter-01/images/scene-bar-nhan-greeting-v01.png",
      "../projects/tu-nho-toi-da-tam-co-hon-tra-xanh/chapters/chapter-01/images/scene-game-vivi-target-v01.png",
      "../projects/tu-nho-toi-da-tam-co-hon-tra-xanh/chapters/chapter-01/images/scene-final-stage-accusation-v01.png"
    ],
    fallback: [
      "Đêm sinh nhật, chín nghìn chín trăm chín mươi chín đóa hồng được gửi đến quán bar.",
      "Một cuộc gọi bật loa ngoài khiến bốn cậu ấm nhận ra họ cùng bị một cô gái lừa dối.",
      "Từ nhỏ, tôi đã hiểu một điều: muốn sống tốt thì phải biết tính toán.",
      "Hồi cấp ba, tiền tiêu vặt của tôi ít đến mức đáng thương. Vì vậy, tôi giả vờ nghèo khổ trước mặt cậu bạn cùng bàn giàu có.",
      "Cảnh Lê chẳng chút do dự, chia cho tôi một nửa tiền tiêu vặt.",
      "Nhưng rồi một cô gái xinh đẹp chuyển trường đến. Cô ấy thầm thích Cảnh Lê.",
      "Tôi sợ cậu ấy yêu đương rồi sẽ không chia tiền cho mình nữa. Thế là tôi dùng tuyệt chiêu quen thuộc nhất của trà xanh: nhận cậu ấy làm anh trai.",
      "Sau khi lên đại học, tôi tiếp tục phát huy bản lĩnh ấy. Chẳng bao lâu, tôi trở thành cô em gái nhỏ duy nhất của nhóm F4.",
      "Cho đến khi Tống Nhan Nhan xuất hiện.",
      "Tối đó, nhóm F4 rủ tôi đến một quán bar để ủng hộ người bạn mới. Tống Nhan Nhan là ca sĩ hát chính ở đó."
    ]
  },
  "chapter-02": { id: "chapter-02", shortTitle: "Chương 2", title: "Chương 2", available: false }
};

const state = { selected: "chapter-01", paragraphs: [] };
const $ = (selector) => document.querySelector(selector);

function renderPicker() {
  $("#chapterPicker").innerHTML = Object.values(chapterData).map((chapter) => `<button class="chapter-picker-item ${chapter.id === state.selected ? "selected" : ""} ${chapter.available === false ? "empty" : ""}" data-chapter="${chapter.id}"><span class="picker-number">${chapter.id.slice(-2)}</span><span><strong>${chapter.shortTitle}</strong><small>${chapter.available === false ? "Chưa có content" : `${chapter.duration} · Có thumbnail`}</small></span><span class="picker-state">${chapter.available === false ? "—" : "✓"}</span></button>`).join("");
  document.querySelectorAll("[data-chapter]").forEach((button) => button.addEventListener("click", () => selectChapter(button.dataset.chapter)));
}

function renderEmpty() {
  $("#readerContent").classList.add("is-hidden");
  $("#readerEmpty").classList.add("is-visible");
}

function renderContent(chapter, paragraphs) {
  state.paragraphs = paragraphs;
  $("#readerContent").classList.remove("is-hidden");
  $("#readerEmpty").classList.remove("is-visible");
  $("#contentTitle").textContent = chapter.title;
  $("#contentMeta").textContent = chapter.sourceLabel;
  $("#footerSource").textContent = chapter.sourceLabel.split("/").pop();
  $("#footerThumbnail").textContent = chapter.thumbnailLabel;
  $("#suggestedTitle").textContent = chapter.suggestedTitle;
  $("#shortHook").textContent = chapter.hook;
  $("#publishTitle").value = chapter.suggestedTitle;
  $("#publishHook").value = chapter.hook;
  $("#publishDescription").value = chapter.description;
  $("#publishCaption").value = chapter.caption;
  $("#publishHashtags").value = chapter.hashtags;
  $("#publishKeywords").value = chapter.keywords;
  $("#publishThumbnail").src = chapter.thumbnail;
  $("#publishThumbnailName").textContent = chapter.thumbnailLabel;
  $("#wordCount").textContent = `${paragraphs.join(" ").trim().split(/\s+/).filter(Boolean).length.toLocaleString("vi-VN")} từ`;
  $("#paragraphCount").textContent = paragraphs.length;
  $("#contentBody").innerHTML = paragraphs.map((paragraph, index) => `<p class="content-paragraph"><span>${String(index + 1).padStart(2, "0")}</span>${paragraph}</p>`).join("");
  $("#chapterThumbnail").src = chapter.thumbnail;
  $("#chapterThumbnail").alt = `Thumbnail ${chapter.title}`;
  $("#sceneStrip").innerHTML = chapter.scenes.map((src, index) => `<button class="scene-reference" data-image="${src}" aria-label="Mở ảnh cảnh ${index + 1}"><img src="${src}" alt="Ảnh cảnh ${index + 1}" /></button>`).join("");
  document.querySelectorAll(".scene-reference").forEach((button) => button.addEventListener("click", () => openLightbox(button.dataset.image)));
}

async function loadContent(chapter) {
  $("#contentBody").innerHTML = `<div class="loading-state">Đang đọc ${chapter.sourceLabel}…</div>`;
  try {
    const response = await fetch(chapter.source);
    if (!response.ok) throw new Error("content unavailable");
    const text = await response.text();
    const paragraphs = text.split(/\r?\n\s*\r?\n/).map((paragraph) => paragraph.trim()).filter(Boolean);
    renderContent(chapter, paragraphs.length ? paragraphs : chapter.fallback);
    $("#contentStatus").innerHTML = "<i></i> Đã đọc từ file local";
  } catch {
    renderContent(chapter, chapter.fallback);
    $("#contentStatus").innerHTML = "<i class=\"fallback-dot\"></i> Bản xem nhanh · file local chưa được mount";
  }
}

function selectChapter(id) {
  state.selected = id;
  renderPicker();
  const chapter = chapterData[id];
  if (chapter.available === false) { renderEmpty(); return; }
  loadContent(chapter);
}

function openLightbox(src) {
  const lightbox = document.createElement("div");
  lightbox.className = "image-lightbox";
  lightbox.innerHTML = `<button aria-label="Đóng">×</button><img src="${src}" alt="Ảnh cảnh phóng to" />`;
  lightbox.addEventListener("click", (event) => { if (event.target === lightbox || event.target.tagName === "BUTTON") lightbox.remove(); });
  document.body.appendChild(lightbox);
}

$("#fontButton").addEventListener("click", () => $("#contentBody").classList.toggle("large-type"));
$("#useThumbnailButton").addEventListener("click", (event) => { event.currentTarget.textContent = "✓ Đã chọn làm thumbnail"; event.currentTarget.classList.add("is-selected"); });
$("#previewThumbnailButton").addEventListener("click", () => openLightbox($("#chapterThumbnail").src));
$("#openSourceButton").addEventListener("click", () => { const chapter = chapterData[state.selected]; if (chapter.source) window.open(chapter.source, "_blank"); });
async function copyValue(targetId, button) {
  const value = document.getElementById(targetId).value;
  try { await navigator.clipboard.writeText(value); } catch { const field = document.getElementById(targetId); field.focus(); field.select(); document.execCommand("copy"); }
  const original = button.textContent;
  button.textContent = "Đã copy";
  button.classList.add("copied");
  setTimeout(() => { button.textContent = original; button.classList.remove("copied"); }, 1400);
}
document.querySelectorAll("[data-copy-target]").forEach((button) => button.addEventListener("click", () => copyValue(button.dataset.copyTarget, button)));
function publishPackText() {
  return ["TIÊU ĐỀ", $("#publishTitle").value, "", "HOOK NGẮN", $("#publishHook").value, "", "MÔ TẢ VIDEO", $("#publishDescription").value, "", "CAPTION", $("#publishCaption").value, "", "HASHTAG", $("#publishHashtags").value, "", "TỪ KHÓA SEO", $("#publishKeywords").value].join("\n");
}
async function copyPublishPack(button, label) {
  try { await navigator.clipboard.writeText(publishPackText()); } catch { /* Clipboard may be unavailable on file://; field-level copy still works. */ }
  button.textContent = label;
  setTimeout(() => { button.textContent = button.id === "copyAllButton" ? "⧉ Copy toàn bộ" : "⧉ Copy content pack"; }, 1400);
}
$("#copyAllButton").addEventListener("click", (event) => copyPublishPack(event.currentTarget, "✓ Đã copy toàn bộ"));
$("#copyPublishPack").addEventListener("click", (event) => copyPublishPack(event.currentTarget, "✓ Content pack đã copy"));
$("#copyThumbnailPath").addEventListener("click", async (event) => { try { await navigator.clipboard.writeText($("#publishThumbnail").src); } catch {} event.currentTarget.textContent = "Đã copy path"; setTimeout(() => { event.currentTarget.textContent = "Copy path"; }, 1400); });

renderPicker();
selectChapter(state.selected);
