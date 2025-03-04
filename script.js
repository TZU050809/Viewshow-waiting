// 隨機電影冷知識
const movieFacts = [
    "🎥 影史上最長的電影是《Logistics》，長達 857 小時！",
    "🍿 爆米花在電影戲院普及始於 1920 年代。",
    "🎬 《阿凡達》是全球票房最高的電影之一。",
    "📽️ 第一部有聲電影是 1927 年的《爵士歌手》。",
    "🎞️ 奧斯卡金像獎最常被提名的演員是梅莉·史翠普。",
    "🎭 影史上最賣座的動畫電影是《冰雪奇緣 2》。"
];

document.getElementById("funFact").textContent =
    movieFacts[Math.floor(Math.random() * movieFacts.length)];
