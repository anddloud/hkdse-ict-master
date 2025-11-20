
import { Topic, QuestionType, MCQ } from '../../types';

export const modC: MCQ[] = [
  {
    id: 'core_modC_001',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '以下哪項是 DHCP 伺服器的主要功能？',
    options: ['將域名轉換為 IP 地址', '自動分配 IP 地址給網絡上的裝置', '過濾網絡封包', '儲存網頁快取'],
    answerIndex: 1,
    explanation: 'DHCP (Dynamic Host Configuration Protocol) 負責自動分配 IP 地址、子網掩碼 (Subnet Mask) 和網關 (Gateway) 給客戶端。'
  },
  {
    id: 'core_modC_002',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: 'DNS 的全寫是甚麼，及其功能？',
    options: ['Dynamic Network System, 管理網絡動態', 'Domain Name System, 將域名轉換為 IP 地址', 'Data Name Service, 儲存數據名稱', 'Digital Network Service, 提供數碼網絡'],
    answerIndex: 1,
    explanation: 'DNS (Domain Name System) 就像電話簿，將人類易記的域名 (如 google.com) 翻譯成電腦通訊用的 IP 地址。'
  },
  {
    id: 'core_modC_003',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: 'TCP 與 UDP 的主要區別在於：',
    options: ['TCP 是不可靠的，UDP 是可靠的', 'TCP 是連接導向 (Connection-oriented) 且保證數據準確傳輸，UDP 則否', 'TCP 用於直播，UDP 用於電郵', 'UDP 比 TCP 慢'],
    answerIndex: 1,
    explanation: 'TCP 提供可靠傳輸 (錯誤檢查、重傳、排序)，適合網頁/電郵；UDP 速度快但不保證可靠，適合實時應用如直播/VoIP。'
  },
  {
    id: 'core_modC_004',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '以下哪個 IP 地址是屬於私有 IP 地址 (Private IP) 範圍？',
    options: ['8.8.8.8', '192.168.1.1', '172.32.1.1', '202.45.10.1'],
    answerIndex: 1,
    explanation: '常見私有 IP 範圍包括 192.168.x.x, 10.x.x.x 和 172.16.x.x - 172.31.x.x。8.8.8.8 是 Google DNS (Public)。'
  },
  {
    id: 'core_modC_005',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '交換器 (Switch) 與路由器 (Router) 的主要分別是：',
    options: ['Switch 使用 IP 地址，Router 使用 MAC 地址', 'Switch 連接不同網絡，Router 連接同一網絡', 'Switch 使用 MAC 地址傳送數據至特定端口，Router 使用 IP 地址進行路徑選擇', '沒有分別'],
    answerIndex: 2,
    explanation: 'Switch 運作於 Layer 2 (Data Link)，依賴 MAC 地址在同一網絡內分流；Router 運作於 Layer 3 (Network)，依賴 IP 連接不同網絡 (LAN-WAN)。'
  },
  {
    id: 'core_modC_006',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: 'HTTPS 協議使用哪個端口 (Port)？',
    options: ['80', '21', '443', '25'],
    answerIndex: 2,
    explanation: 'HTTP 是 80，HTTPS (Secure) 是 443，FTP 是 21，SMTP 是 25。'
  },
  {
    id: 'core_modC_007',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '網址嫁接 (Pharming) 攻擊的原理是：',
    options: ['發送假電郵騙取密碼', '安裝鍵盤側錄程式', '透過修改 DNS 或 Hosts 文件，將用戶導向至假冒網站', '加密用戶檔案勒索贖金'],
    answerIndex: 2,
    explanation: 'Pharming 與 Phishing 不同，它在技術層面 (DNS/DNS Cache) 動手腳，即使用戶輸入正確網址也會被轉移。'
  },
  {
    id: 'core_modC_008',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '發送電子郵件通常使用甚麼協定？',
    options: ['POP3', 'IMAP', 'SMTP', 'HTTP'],
    answerIndex: 2,
    explanation: 'SMTP (Simple Mail Transfer Protocol) 用於發送 (Push) 郵件；POP3/IMAP 用於接收 (Pull)。'
  },
  {
    id: 'core_modC_009',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: 'MAC 地址 (Media Access Control Address) 的長度是多少？',
    options: ['32-bit', '48-bit', '64-bit', '128-bit'],
    answerIndex: 1,
    explanation: 'MAC 地址是 48-bit (6 bytes)，通常以 12 個十六進制數字表示 (如 00:1A:2B:3C:4D:5E)。'
  },
  {
    id: 'core_modC_010',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: 'IPv6 的地址長度是 IPv4 的多少倍？',
    options: ['2倍', '4倍', '8倍', '16倍'],
    answerIndex: 1,
    explanation: 'IPv4 是 32-bit，IPv6 是 128-bit。128 / 32 = 4 倍。'
  },
  {
    id: 'core_modC_011',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '以下哪項不是雲端運算 (Cloud Computing) 的服務模式？',
    options: ['IaaS (Infrastructure as a Service)', 'PaaS (Platform as a Service)', 'SaaS (Software as a Service)', 'HaaS (Hardware as a Service)'],
    answerIndex: 3,
    explanation: '標準的三層模式是 IaaS, PaaS, SaaS。HaaS 較少用作標準術語 (雖有此概念)。'
  },
  {
    id: 'core_modC_012',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: 'DDoS (分散式阻斷服務攻擊) 的主要目的是：',
    options: ['竊取用戶密碼', '利用大量流量癱瘓伺服器，使其無法提供服務', '修改網站內容', '感染病毒'],
    answerIndex: 1,
    explanation: 'Distributed Denial of Service 利用殭屍網絡 (Botnet) 發送海量請求，耗盡目標頻寬或資源。'
  },
  {
    id: 'core_modC_013',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: 'Cookie 在瀏覽網頁時的主要作用是：',
    options: ['加速網速', '儲存用戶的瀏覽狀態或偏好設定 (如登入狀態)', '防止病毒', '播放影片'],
    answerIndex: 1,
    explanation: 'HTTP 是無狀態 (Stateless) 的，Cookie 讓伺服器能識別回訪的用戶。'
  },
  {
    id: 'core_modC_014',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '以下哪種無線加密標準最安全？',
    options: ['WEP', 'WPA', 'WPA2', 'WPA3'],
    answerIndex: 3,
    explanation: 'WPA3 是最新的 Wi-Fi 安全標準，比 WPA2 更難破解。WEP 已被淘汰。'
  },
  {
    id: 'core_modC_015',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: 'FTP 代表甚麼？',
    options: ['File Transfer Protocol', 'Fast Text Protocol', 'File Testing Program', 'Folder Transfer Process'],
    answerIndex: 0,
    explanation: 'FTP 用於在網絡上傳輸檔案，通常涉及上載 (Upload) 和下載 (Download)。'
  },
  {
    id: 'core_modC_016',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '什麼是「頻寬 (Bandwidth)」？',
    options: ['網絡傳輸的速度 (m/s)', '網絡通道在單位時間內能傳輸的最大數據量 (bps)', '網絡線的粗幼', '無線信號的範圍'],
    answerIndex: 1,
    explanation: '頻寬就像水管的粗幼，決定了數據流動的容量。'
  },
  {
    id: 'core_modC_017',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '在 URL "http://www.example.com/index.html" 中，"http" 是：',
    options: ['域名 (Domain Name)', '通訊協定 (Protocol)', '路徑 (Path)', '檔案名'],
    answerIndex: 1,
    explanation: 'URL 結構：Protocol://Domain/Path。'
  },
  {
    id: 'core_modC_018',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: 'IMAP 與 POP3 的主要分別是：',
    options: ['IMAP 只能發送郵件', 'POP3 支援雙向同步，IMAP 不支援', 'IMAP 將郵件保留在伺服器並同步狀態，POP3 通常下載後刪除', '沒有分別'],
    answerIndex: 2,
    explanation: 'IMAP 適合多裝置登入 (手機+電腦)，因為郵件狀態 (已讀/刪除) 會同步。'
  },
  {
    id: 'core_modC_019',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: 'VPN (虛擬私人網絡) 的主要用途是：',
    options: ['加速互聯網', '在公共網絡上建立加密通道，保障數據傳輸安全及私隱', '無需付費上網', '自動下載檔案'],
    answerIndex: 1,
    explanation: 'VPN 使用隧道技術 (Tunneling) 和加密，隱藏用戶真實 IP 並保護數據。'
  },
  {
    id: 'core_modC_020',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '網絡釣魚 (Phishing) 通常透過甚麼方式進行？',
    options: ['暴力破解密碼', '發送偽冒電郵，誘使用戶點擊連結並輸入個人資料', '攔截 Wi-Fi 訊號', '入侵數據庫'],
    answerIndex: 1,
    explanation: 'Phishing 是一種社會工程學 (Social Engineering) 攻擊，依賴用戶的疏忽。'
  },
  {
    id: 'core_modC_021',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: 'Modem (數據機) 的功能是：',
    options: ['儲存數據', '進行調變 (Modulation) 與解調 (Demodulation)，轉換數碼與模擬訊號', '列印文件', '播放音樂'],
    answerIndex: 1,
    explanation: 'Modulator-Demodulator。用於將電腦的數碼訊號轉換為電話線/光纖的模擬訊號 (反之亦然)。'
  },
  {
    id: 'core_modC_022',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '關於串流 (Streaming) 播放影片，甚麼是「緩衝 (Buffer)」？',
    options: ['影片的畫質', '預先下載並暫存一部分數據，以防止網絡波動導致播放中斷', '影片的版權保護', '伺服器的硬碟'],
    answerIndex: 1,
    explanation: 'Buffer 就像水缸，先蓄水再流出，確保持續播放。'
  },
  {
    id: 'core_modC_023',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: 'Proxy Server (代理伺服器) 的功能不包括：',
    options: ['隱藏用戶真實 IP', '快取 (Caching) 常用網頁以加速瀏覽', '內容過濾 (Content Filtering)', '分配 IP 地址'],
    answerIndex: 3,
    explanation: '分配 IP 是 DHCP 的工作。Proxy 主要作中介、快取和過濾。'
  },
  {
    id: 'core_modC_024',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '防火牆 (Firewall) 的主要作用是：',
    options: ['殺毒', '根據預設規則監控和控制進出網絡的流量', '加強 Wi-Fi 訊號', '備份數據'],
    answerIndex: 1,
    explanation: '防火牆可以是硬件或軟件，通過 Packet Filtering 阻擋未經授權的存取。'
  },
  {
    id: 'core_modC_025',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '在 P2P (Peer-to-Peer) 網絡中：',
    options: ['所有電腦既是客戶端也是伺服器', '有一部中央超級電腦控制所有數據', '只能下載不能上載', '安全性最高'],
    answerIndex: 0,
    explanation: 'P2P 網絡去中心化，資源由所有節點共享 (如 BitTorrent)。'
  },
  {
    id: 'core_modC_026',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '以下哪項是物聯網 (IoT) 的例子？',
    options: ['用 Word 打字', '智能雪櫃偵測庫存並自動下單', '使用 USB 手指', '安裝 Windows'],
    answerIndex: 1,
    explanation: 'IoT 指日常物品透過網絡互連和交換數據。'
  },
  {
    id: 'core_modC_027',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '搜尋引擎 (Search Engine) 如何建立其資料庫？',
    options: ['人手輸入', '使用網絡爬蟲 (Web Crawler / Spider) 自動瀏覽並索引網頁', '隨機猜測', '由政府提供'],
    answerIndex: 1,
    explanation: '爬蟲程式會不斷跟隨連結 (Links) 抓取網頁內容進行索引 (Indexing)。'
  },
  {
    id: 'core_modC_028',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: 'ISP 是甚麼？',
    options: ['Internet Service Provider (互聯網服務供應商)', 'Internal System Protocol', 'International Security Police', 'Intelligent Signal Processor'],
    answerIndex: 0,
    explanation: '提供上網服務的公司，如 Netvigator, HKBN。'
  },
  {
    id: 'core_modC_029',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: 'NIC (網絡介面卡) 的功能是：',
    options: ['顯示圖像', '處理聲音', '讓電腦連接到網絡的硬件介面', '儲存密碼'],
    answerIndex: 2,
    explanation: 'Network Interface Card，提供物理連接 (RJ45) 和 MAC 地址。'
  },
  {
    id: 'core_modC_030',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '甚麼是「非對稱式加密 (Asymmetric Encryption)」(如 SSL/TLS 使用)？',
    options: ['加密和解密使用同一個密碼', '加密用公鑰 (Public Key)，解密用私鑰 (Private Key)', '不需要密碼', '只有黑客使用'],
    answerIndex: 1,
    explanation: '公鑰公開給所有人加密，只有擁有私鑰的人才能解密，安全性較對稱式高。'
  },
  {
    id: 'core_modC_031',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: 'HTML 文件的主要功能是：',
    options: ['定義網頁的結構和內容', '定義網頁的樣式 (顏色/字體)', '執行複雜運算', '管理數據庫'],
    answerIndex: 0,
    explanation: 'HTML (HyperText Markup Language) 定義結構；CSS 定義樣式；JavaScript 定義行為。'
  },
  {
    id: 'core_modC_032',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '在網址 "google.com" 中，".com" 稱為：',
    options: ['頂級域名 (Top Level Domain, TLD)', '子域名', '主機名', '協議'],
    answerIndex: 0,
    explanation: '.com, .org, .hk 都是 TLD。'
  },
  {
    id: 'core_modC_033',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '鍵盤側錄程式 (Keylogger) 屬於哪類惡意軟件？',
    options: ['勒索軟件', '間諜軟件 (Spyware)', '廣告軟件', '蠕蟲'],
    answerIndex: 1,
    explanation: '它暗中記錄用戶的按鍵輸入 (包括密碼)，屬於收集資訊的間諜軟件。'
  },
  {
    id: 'core_modC_034',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '網關 (Gateway) 的作用是：',
    options: ['連接兩個協定 (Protocol) 或架構不同的網絡', '加速上網', '儲存網頁', '掃描病毒'],
    answerIndex: 0,
    explanation: 'Gateway 像翻譯員，連接不同體系的網絡 (如連接 LAN 到 Internet)。'
  },
  {
    id: 'core_modC_035',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '封包交換 (Packet Switching) 技術是指：',
    options: ['獨佔一條線路進行通訊', '將數據分割成小包 (Packets)，獨立經不同路徑傳輸，在目的地重組', '用人手交換數據', '只用於電話網絡'],
    answerIndex: 1,
    explanation: '互聯網的基礎。相比電路交換 (Circuit Switching)，它更有效地利用頻寬。'
  },
  {
    id: 'core_modC_036',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: 'NAT (Network Address Translation) 的主要用途是：',
    options: ['將私有 IP 地址轉換為公共 IP 地址，解決 IPv4 地址不足問題', '加速 DNS 查詢', '加密數據', '分配 MAC 地址'],
    answerIndex: 0,
    explanation: 'NAT 允許多部裝置共用一個 Public IP 上網。'
  },
  {
    id: 'core_modC_037',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '什麼是「寬頻 (Broadband)」？',
    options: ['很寬的電線', '高速、常時連線 (Always-on) 的互聯網連接技術', '只能傳輸文字', '無線網絡'],
    answerIndex: 1,
    explanation: '相對於舊式的撥號上網 (Dial-up)，寬頻提供高頻寬和持續連接。'
  },
  {
    id: 'core_modC_038',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '如果想在家中設定 Wi-Fi，通常需要甚麼裝置？',
    options: ['只用 Switch', '無線路由器 (Wireless Router) / Access Point', 'Repeater', 'Firewall'],
    answerIndex: 1,
    explanation: 'Wireless Router 結合了 Router, Switch 和 Access Point 的功能。'
  },
  {
    id: 'core_modC_039',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '內聯網 (Intranet) 是指：',
    options: ['全球互聯的網絡', '一個組織內部的私有網絡，使用互聯網技術但只限內部存取', '連接不同公司的網絡', '暗網'],
    answerIndex: 1,
    explanation: 'Intranet 是私有的 (Private)；Internet 是全球的 (Public)。'
  },
  {
    id: 'core_modC_040',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '在瀏覽器中，「無痕模式 (Incognito Mode)」不會儲存：',
    options: ['下載的檔案', '瀏覽記錄、Cookie 和快取', '我的最愛 (Bookmarks)', '你的 IP 地址 (對網站而言)'],
    answerIndex: 1,
    explanation: '無痕模式只是不記錄本地歷史，網站和 ISP 仍然看得到你的 IP 和活動。'
  },
  {
    id: 'core_modC_041',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '殭屍網絡 (Botnet) 是由什麼組成的？',
    options: ['強大的伺服器', '大量受惡意軟件感染並受黑客控制的電腦', '人工智能機械人', '過期的電腦'],
    answerIndex: 1,
    explanation: 'Botnet 常用於發動 DDoS 攻擊或發送垃圾郵件。'
  },
  {
    id: 'core_modC_042',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '網絡通訊中的「全雙工 (Full Duplex)」例子是：',
    options: ['對講機 (Walkie-Talkie)', '電視廣播', '電話通話', '紅綠燈'],
    answerIndex: 2,
    explanation: '全雙工允許雙方同時發送和接收 (電話)；半雙工需輪流 (對講機)；單工只單向 (電視)。'
  },
  {
    id: 'core_modC_043',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '數碼證書 (Digital Certificate) 的主要作用是：',
    options: ['證明網站或用戶的身份，並提供公鑰進行加密通訊', '作為登入密碼', '加速下載', '防止垃圾郵件'],
    answerIndex: 0,
    explanation: '由認證機構 (CA) 簽發，用於 HTTPS 網站驗證身份。'
  },
  {
    id: 'core_modC_044',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '以下哪項會導致數據傳輸中的「碰撞 (Collision)」？',
    options: ['兩部裝置同時在同一條共享通道上發送數據', '硬碟損壞', 'IP 地址衝突', '下載速度太慢'],
    answerIndex: 0,
    explanation: '在使用集線器 (Hub) 或共享介質的網絡中常見。Switch 能有效減少碰撞。'
  },
  {
    id: 'core_modC_045',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: 'Web 2.0 的特徵是：',
    options: ['靜態網頁', '用戶生成內容 (UGC) 和互動性 (如社交媒體、Blog)', '語義網', '虛擬實境'],
    answerIndex: 1,
    explanation: 'Web 1.0 是單向閱讀；Web 2.0 強調互動和分享。'
  },
  {
    id: 'core_modC_046',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '垃圾郵件過濾器 (Spam Filter) 通常根據什麼攔截郵件？',
    options: ['發件人 IP 黑名單、郵件內容關鍵字、可疑連結', '郵件長度', '發送時間', '是否有附件'],
    answerIndex: 0,
    explanation: '綜合多種因素判斷。'
  },
  {
    id: 'core_modC_047',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '為何視訊會議 (Video Conferencing) 偏好使用 UDP 而非 TCP？',
    options: ['UDP 畫質更好', 'UDP 延遲 (Latency) 較低，即使掉失少量封包也不會造成嚴重停頓', 'TCP 不支援視訊', 'UDP 比較安全'],
    answerIndex: 1,
    explanation: '實時通訊最怕延遲 (Lag)。TCP 的重傳機制會導致畫面凍結，UDP 寧願掉幀也要保持流暢。'
  },
  {
    id: 'core_modC_048',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: 'MIME (Multipurpose Internet Mail Extensions) 的作用是：',
    options: ['加密郵件', '讓電子郵件支援非 ASCII 字符、圖片、影音等附件', '加快郵件傳送', '過濾垃圾郵件'],
    answerIndex: 1,
    explanation: '最初的 Email 只能傳純文字。MIME 擴展了格式支援。'
  },
  {
    id: 'core_modC_049',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: 'SSL/TLS 加密是在 OSI 模型的哪一層運作？',
    options: ['實體層 (Physical)', '傳輸層 (Transport) / 應用層 (Application) 之間', '網絡層 (Network)', '數據鏈路層 (Data Link)'],
    answerIndex: 1,
    explanation: '通常被視為在 Transport Layer 之上或 Session/Presentation Layer，為 Application 提供安全通道。'
  },
  {
    id: 'core_modC_050',
    type: QuestionType.MCQ,
    topic: Topic.INTERNET,
    question: '以下哪項是外聯網 (Extranet) 的例子？',
    options: ['公司內部員工使用的請假系統', '公司開放給供應商登入查看庫存的系統', 'Google 搜尋引擎', '家用 Wi-Fi'],
    answerIndex: 1,
    explanation: 'Extranet 是 Intranet 的延伸，授權給特定的外部用戶 (如合作夥伴) 存取部分內部資源。'
  }
];
