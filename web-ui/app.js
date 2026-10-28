const scenes = [
  ["s00", 0, 8.6, "Hook mở đầu", "Cold open hook · mở bằng hoa hồng và cuộc gọi bí ẩn.", "narrator", ["red roses", "speakerphone", "group reveal"]],
  ["s01", 8.6, 62, "Nguồn gốc thời đi học", "Thiết lập chiến lược của Vi Vi từ những ngày đầu.", "narrator", ["classroom", "corridor", "panel reveal"]],
  ["s02", 62, 75.5, "Bước vào quán bar", "Giới thiệu không gian quán bar và mầm nghi ngờ.", "narrator", ["bar stage", "stage lights", "slow push"]],
  ["s03", 75.5, 104.5, "Lời chào của Nhân Nhân", "Trận chiến xã hội đầu tiên bắt đầu bằng một lời chào.", "tong-nhan-nhan", ["approach", "handshake", "speaker focus"]],
  ["s04", 104.5, 130, "Màn uống rượu", "Nhân Nhân cho thấy cô ấy không phải người dễ bị bắt nạt.", "giang-tu", ["bottle", "reaction strip", "spotlight"]],
  ["s05", 130, 207.5, "Trò chơi chai rượu", "Câu hỏi đầu tiên và màn phản đòn được đẩy nhịp.", "tong-nhan-nhan", ["bottle motion", "four men", "question"]],
  ["s06", 207.5, 251, "Nhóm chat và ảnh", "Nhân Nhân bắt đầu gây áp lực bằng những tin nhắn.", "narrator", ["phone chat", "photo stack", "message reveal"]],
  ["s07", 251, 263.8, "Vi Vi tính toán", "Quyết định tăng tốc kế hoạch catfish.", "narrator", ["eye glint", "mental overlay", "micro zoom"]],
  ["s08", 263.8, 295.6, "Bốn tài khoản giả", "Kế hoạch catfish được khởi động.", "narrator", ["airport", "fake account", "chat"]],
  ["s09", 295.6, 351.8, "Tin nhắn tán tỉnh", "Bốn hồ sơ giả khiến Nhân Nhân bắt đầu cam kết.", "narrator", ["four profiles", "romance", "gift reveal"]],
  ["s10", 351.8, 400.5, "Tiệc ở biệt thự", "Mầm nghi ngờ được gieo vào từng người.", "hu-vivi", ["villa party", "reaction", "speaker sequence"]],
  ["s11", 400.5, 429.7, "Lời mời trên xe", "Cái bẫy được đặt cho sinh nhật.", "hu-vivi", ["car interior", "invite", "dialogue"]],
  ["s12", 429.7, 473.8, "Hoa hồng lộ diện", "Màn phơi bày chính bắt đầu từ bó hoa đỏ.", "tong-nhan-nhan", ["red roses", "card", "panic"]],
  ["s13", 473.8, 503.5, "Bốn người đối chất", "Nhóm F4 tan vỡ trong cuộc đối chất.", "giang-tu", ["confront", "collar grab", "cake drop"]],
  ["s14", 503.5, 537.8, "Dư chấn và quà tặng", "Vi Vi thắng lợi về mặt vật chất.", "narrator", ["group chat", "luxury bag", "slow feed"]],
  ["s15", 537.8, 551.6, "Lời xin lỗi", "Mọi người được kéo về phía màn tiết lộ cuối.", "tong-nhan-nhan", ["apology", "bar door", "location"]],
  ["s16", 551.6, 605.5, "Video buộc tội", "Lời buộc tội công khai và hồi tưởng.", "tong-nhan-nhan", ["stage screen", "flashback", "accusation"]],
  ["s17", 605.5, 664, "Vi Vi phản công", "Bằng chứng được đổi khung nhìn.", "hu-vivi", ["work log", "old phone", "emotion"]],
  ["s18", 664, 686.9, "An ủi và sân bay", "Một cuộc chia tay ngắn trước bước nhảy thời gian.", "luc-canh-tham", ["comfort", "tears", "airport"]],
  ["s19", 686.9, 705.4, "Cuộc sống xa xỉ", "Montage chuyển sang hồi cuối.", "narrator", ["apartment", "money", "internship"]],
  ["s20", 705.4, 720.5, "Nhận ra trong phỏng vấn", "Cú cliffhanger: giọng nói quen thuộc xuất hiện.", "canh-le", ["interview", "recognition", "reveal"]],
  ["s21", 720.5, 738.2, "Trên xe đến nhà hàng", "Cảnh Lê giải thích những năm mất liên lạc.", "canh-le", ["city lights", "car parallax", "memory"]],
  ["s22", 738.2, 755.9, "Chỉ là anh trai thôi", "Nhịp cũ giữa hai người được khôi phục.", "canh-le", ["restaurant", "smile", "two shot"]],
  ["s23", 755.9, 770, "Nụ cười ẩn ý", "Punchline kết thúc bằng nụ cười tâm cơ của Vi Vi.", "narrator", ["eye glint", "caption", "slow focus"]]
].map(([id, start, end, title, purpose, speaker, tags]) => ({ id, start, end, title, purpose, speaker, tags, approved: false }));

const state = { selected: 0, currentTime: 0, filter: "all", playing: false };
const $ = (selector) => document.querySelector(selector);
const formatTime = (seconds, precise = false) => {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds - minutes * 60;
  return precise ? `${String(minutes).padStart(2, "0")}:${rest.toFixed(1).padStart(4, "0")}` : `${String(minutes).padStart(2, "0")}:${String(Math.floor(rest)).padStart(2, "0")}`;
};
const selectedScene = () => scenes[state.selected];

function renderRuler() {
  const ruler = $("#timelineRuler");
  ruler.innerHTML = Array.from({ length: 7 }, (_, index) => `<span style="left:${index * 16.666}%">${formatTime(index * (770 / 6))}</span>`).join("");
}

function renderTimeline() {
  $("#timelineTrack").innerHTML = scenes.map((scene, index) => `<button class="scene-block ${index === state.selected ? "selected" : ""} ${scene.approved ? "approved" : ""}" style="flex:${scene.end - scene.start} 1 0" data-index="${index}" title="${scene.title}"><span class="scene-block-id">${scene.id.toUpperCase()}</span><span class="scene-block-title">${scene.title}</span></button>`).join("");
  $("#timelineTrack").querySelectorAll(".scene-block").forEach((block) => block.addEventListener("click", () => selectScene(Number(block.dataset.index))));
}

function renderSceneList() {
  $("#sceneList").innerHTML = scenes.map((scene, index) => `<button class="scene-list-item ${index === state.selected ? "selected" : ""} ${scene.approved ? "approved" : ""} ${state.filter !== "all" && (state.filter === "approved") !== scene.approved ? "hidden" : ""}" data-index="${index}"><span class="scene-list-thumb"></span><span class="scene-list-copy"><strong>${scene.id.toUpperCase()} · ${scene.title}</strong><small>${formatTime(scene.start)} — ${formatTime(scene.end)} · ${formatTime(scene.end - scene.start, true).slice(3)}s</small></span><span class="scene-list-status">✓</span></button>`).join("");
  $("#sceneList").querySelectorAll(".scene-list-item").forEach((item) => item.addEventListener("click", () => selectScene(Number(item.dataset.index))));
}

function updateCounts() {
  $("#allCount").textContent = scenes.length;
  $("#approvedCount").textContent = scenes.filter((scene) => scene.approved).length;
  $("#pendingCount").textContent = scenes.filter((scene) => !scene.approved).length;
}

function renderInspector() {
  const scene = selectedScene();
  const sceneCode = scene.id.slice(1).toUpperCase();
  $("#inspectorTitle").textContent = `${scene.id.toUpperCase()} · ${scene.title}`;
  $("#inspectorStatus").textContent = scene.approved ? "ĐÃ DUYỆT" : "CHỜ DUYỆT";
  $("#inspectorStatus").className = `approval-badge ${scene.approved ? "approved" : "pending"}`;
  $("#thumbSceneCode").textContent = sceneCode;
  $("#inspectorRange").textContent = `${formatTime(scene.start)} — ${formatTime(scene.end, true)}`;
  $("#inspectorDuration").textContent = `${(scene.end - scene.start).toFixed(1)}s`;
  $("#inspectorPurpose").textContent = scene.purpose;
  $("#inspectorSpeaker").textContent = scene.speaker === "narrator" ? "Narrator" : scene.speaker.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
  $("#inspectorTags").innerHTML = scene.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  $("#approveSceneButton").textContent = scene.approved ? "↺ Bỏ duyệt cảnh này" : "✓ Duyệt cảnh này";
  $("#previewSceneLabel").textContent = `${scene.id.toUpperCase()} · ${scene.title.toUpperCase()}`;
  $("#sceneChipNumber").textContent = scene.id.toUpperCase();
  $("#sceneChipPurpose").textContent = scene.purpose.split("·")[0].trim().toUpperCase();
}

function renderPlayhead() {
  const percent = Math.max(0, Math.min(100, (state.currentTime / 770) * 100));
  $("#playhead").style.left = `${percent}%`;
  $("#progressInput").value = state.currentTime;
  $("#currentTime").textContent = formatTime(state.currentTime);
}

function selectScene(index) {
  state.selected = index;
  state.currentTime = scenes[index].start;
  const video = $("#previewVideo");
  if (Number.isFinite(video.duration)) video.currentTime = state.currentTime;
  renderTimeline(); renderSceneList(); renderInspector(); renderPlayhead();
}

function setPlaying(playing) {
  state.playing = playing;
  const video = $("#previewVideo");
  if (playing) video.play().catch(() => {}); else video.pause();
  $("#playButton").textContent = playing ? "Ⅱ" : "▶";
  $("#videoCenterMark").classList.toggle("playing", playing);
}

renderRuler(); renderTimeline(); renderSceneList(); renderInspector(); updateCounts(); renderPlayhead();

$("#progressInput").addEventListener("input", (event) => {
  state.currentTime = Number(event.target.value);
  const video = $("#previewVideo");
  if (Number.isFinite(video.duration)) video.currentTime = state.currentTime;
  const nextIndex = scenes.findIndex((scene) => state.currentTime >= scene.start && state.currentTime < scene.end);
  if (nextIndex >= 0 && nextIndex !== state.selected) { state.selected = nextIndex; renderTimeline(); renderSceneList(); renderInspector(); }
  renderPlayhead();
});
$("#previewVideo").addEventListener("timeupdate", (event) => { state.currentTime = event.target.currentTime; renderPlayhead(); });
$("#previewVideo").addEventListener("play", () => setPlaying(true));
$("#previewVideo").addEventListener("pause", () => setPlaying(false));
$("#playButton").addEventListener("click", () => setPlaying(!state.playing));
$("#videoCenterMark").addEventListener("click", () => setPlaying(!state.playing));
$("#approveSceneButton").addEventListener("click", () => { selectedScene().approved = !selectedScene().approved; renderTimeline(); renderSceneList(); renderInspector(); updateCounts(); });
$("#approveAllButton").addEventListener("click", () => { scenes.forEach((scene) => { scene.approved = true; }); renderTimeline(); renderSceneList(); renderInspector(); updateCounts(); });
$("#resetButton").addEventListener("click", () => { scenes.forEach((scene) => { scene.approved = false; }); state.filter = "all"; document.querySelectorAll("[data-filter]").forEach((button) => button.classList.toggle("active", button.dataset.filter === "all")); renderTimeline(); renderSceneList(); renderInspector(); updateCounts(); });
document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => { state.filter = button.dataset.filter; document.querySelectorAll("[data-filter]").forEach((tab) => tab.classList.toggle("active", tab === button)); renderSceneList(); }));
$("#commentButton").addEventListener("click", (event) => { event.currentTarget.textContent = "✓ Ghi chú đã mở ở panel cảnh"; });
