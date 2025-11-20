
import { Topic, QuestionType, MCQ } from '../../types';

export const modB: MCQ[] = [
  // --- CPU Architecture & FDE Cycle ---
  {
    id: 'core_modB_001',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: 'CPU 中的 ALU (算術及邏輯運算單元) 的主要功能是甚麼？',
    options: ['控制數據流向', '儲存指令', '執行數學運算和邏輯比較', '解碼指令'],
    answerIndex: 2,
    explanation: 'ALU (Arithmetic Logic Unit) 負責所有算術 (如加減乘除) 和邏輯 (如 AND, OR, NOT) 運算。'
  },
  {
    id: 'core_modB_002',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '在 FDE 週期 (Fetch-Decode-Execute Cycle) 中，程序計數器 (Program Counter, PC) 的作用是？',
    options: ['儲存當前指令', '儲存運算結果', '儲存下一條將要執行指令的記憶體地址', '解碼指令'],
    answerIndex: 2,
    explanation: 'PC 用於追蹤程式執行的進度，時刻指向下一條指令的地址。'
  },
  {
    id: 'core_modB_003',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '哪一個暫存器 (Register) 負責儲存從記憶體讀取出來的指令或數據？',
    options: ['MAR (Memory Address Register)', 'MDR (Memory Data Register)', 'IR (Instruction Register)', 'PC (Program Counter)'],
    answerIndex: 1,
    explanation: 'MDR (有時稱為 MBR) 是一個緩衝區，暫存從記憶體傳送過來或準備寫入記憶體的數據。'
  },
  {
    id: 'core_modB_004',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '在提取 (Fetch) 階段，指令從 MDR 傳送到哪裡進行解碼？',
    options: ['ALU', 'Accumulator', 'IR (Instruction Register)', 'Hard Disk'],
    answerIndex: 2,
    explanation: '指令被提取後，會存入指令暫存器 (IR)，等待控制單元 (CU) 進行解碼。'
  },
  {
    id: 'core_modB_005',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '控制單元 (Control Unit, CU) 的主要職責不包括：',
    options: ['解碼指令', '發出控制信號協調硬件', '執行加法運算', '管理數據流'],
    answerIndex: 2,
    explanation: '執行加法運算是 ALU 的工作，CU 負責指揮和調度。'
  },
  {
    id: 'core_modB_006',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '累加器 (Accumulator, ACC) 通常用於儲存：',
    options: ['指令地址', 'ALU 運算的中間結果或最終結果', '作業系統核心', '鍵盤輸入'],
    answerIndex: 1,
    explanation: 'ACC 是 ALU 運算時的主要工作區，暫存計算結果。'
  },
  {
    id: 'core_modB_007',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '地址總線 (Address Bus) 的傳輸方向是：',
    options: ['單向 (由 CPU 傳向記憶體/IO)', '單向 (由記憶體傳向 CPU)', '雙向', '環狀'],
    answerIndex: 0,
    explanation: 'CPU 發出地址信號去尋址，因此是單向輸出的。數據總線 (Data Bus) 才是雙向的。'
  },
  {
    id: 'core_modB_008',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '若地址總線寬度為 32-bit，理論上 CPU 最多能直接存取多少記憶體？',
    options: ['2 GB', '4 GB', '8 GB', '16 GB'],
    answerIndex: 1,
    explanation: '2^32 bytes = 4,294,967,296 bytes = 4 GB。'
  },
  {
    id: 'core_modB_009',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '時鐘速度 (Clock Speed) 通常以甚麼單位量度？',
    options: ['MB', 'bps', 'Hz / GHz', 'dpi'],
    answerIndex: 2,
    explanation: '赫茲 (Hz) 代表每秒週期數，現代 CPU 通常為 GHz (十億赫茲)。'
  },
  {
    id: 'core_modB_010',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '甚麼是「字長 (Word Size)」？',
    options: ['字型的最大尺寸', 'CPU 在一次操作中能處理的二進制位元數 (如 32-bit, 64-bit)', '鍵盤按鍵數量', '記憶體總容量'],
    answerIndex: 1,
    explanation: '字長決定了 CPU 的運算精度和通用暫存器的大小。'
  },
  
  // --- Memory Hierarchy ---
  {
    id: 'core_modB_011',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '以下哪種記憶體的存取速度最快？',
    options: ['主記憶體 (RAM)', '硬碟 (HDD)', '暫存器 (Registers)', '快取記憶體 (Cache)'],
    answerIndex: 2,
    explanation: '記憶體階層速度：Registers > Cache > RAM > SSD > HDD。'
  },
  {
    id: 'core_modB_012',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '快取記憶體 (Cache Memory) 的主要作用是：',
    options: ['增加硬碟容量', '減少 CPU 等待從較慢的主記憶體讀取數據的時間', '永久儲存數據', '散熱'],
    answerIndex: 1,
    explanation: 'Cache 使用高速 SRAM，儲存 CPU 常用數據，以彌補 CPU 與 RAM 之間的速度差異。'
  },
  {
    id: 'core_modB_013',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: 'RAM 與 ROM 的主要區別是：',
    options: ['RAM 是唯讀的，ROM 可讀寫', 'RAM 是易失性 (Volatile)，ROM 是非易失性', 'ROM 容量通常比 RAM 大', 'RAM 用於儲存 BIOS'],
    answerIndex: 1,
    explanation: 'RAM 斷電後數據會消失 (Volatile)，ROM 斷電後數據保留 (Non-volatile)。'
  },
  {
    id: 'core_modB_014',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: 'BIOS (基本輸入輸出系統) 通常儲存在哪裡？',
    options: ['RAM', 'ROM / Flash Memory', '硬碟', 'CPU Cache'],
    answerIndex: 1,
    explanation: 'BIOS 是電腦開機時最先執行的韌體，必須儲存在非易失性記憶體中。'
  },
  {
    id: 'core_modB_015',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: 'DRAM (動態隨機存取記憶體) 需要不斷進行甚麼操作來保持數據？',
    options: ['加密', '壓縮', '刷新 (Refresh)', '格式化'],
    answerIndex: 2,
    explanation: 'DRAM 使用電容器儲存電荷，會隨時間洩漏，因此需要電路不斷刷新 (Refresh) 充電。'
  },
  {
    id: 'core_modB_016',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '以下哪項是輔助儲存器 (Secondary Storage)？',
    options: ['RAM', 'ROM', 'Cache', 'SSD (固態硬碟)'],
    answerIndex: 3,
    explanation: '輔助儲存器用於永久儲存大量數據，即使斷電也不會丟失。'
  },
  {
    id: 'core_modB_017',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '相比 HDD (機械硬碟)，SSD 的主要優點不包括：',
    options: ['讀寫速度更快', '抗震能力更強', '運作時無噪音', '價格更便宜 (每 GB 計算)'],
    answerIndex: 3,
    explanation: 'SSD 使用快閃記憶體，通常每 GB 成本比傳統磁性 HDD 高。'
  },
  {
    id: 'core_modB_018',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '藍光光碟 (Blu-ray) 使用甚麼技術讀取數據？',
    options: ['磁性讀寫', '藍色雷射光', '電子晶體', '打孔卡'],
    answerIndex: 1,
    explanation: '光學儲存裝置利用雷射光反射來讀取數據，藍光波長較短，能儲存更高密度數據。'
  },
  {
    id: 'core_modB_019',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '甚麼是「虛擬記憶體 (Virtual Memory)」？',
    options: ['一種雲端儲存', '利用部分硬碟空間模擬 RAM，以執行大型程式', '虛擬實境用的記憶體', 'RAM 的一部分'],
    answerIndex: 1,
    explanation: '當 RAM 不足時，OS 會將不常用的數據暫存到硬碟 (Swap file/Page file)，騰出 RAM 給當前程式。'
  },
  {
    id: 'core_modB_020',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: 'SD 卡和 USB 手指屬於哪類儲存技術？',
    options: ['磁性儲存', '光學儲存', '固態/快閃記憶體 (Flash Memory)', '雲端儲存'],
    answerIndex: 2,
    explanation: '它們使用 EEPROM/Flash 技術，無機械活動零件。'
  },

  // --- Operating System Functions ---
  {
    id: 'core_modB_021',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '作業系統 (OS) 的主要功能不包括：',
    options: ['管理記憶體', '管理檔案系統', '編寫應用程式', '提供用戶介面'],
    answerIndex: 2,
    explanation: '編寫程式是開發者的工作，OS 負責執行和管理程式。'
  },
  {
    id: 'core_modB_022',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '多工處理 (Multi-tasking) 允許作業系統：',
    options: ['同時連接多個互聯網', '在同一時間執行多個應用程式 (看似同時)', '使用多個顯示器', '允許多個用戶登入'],
    answerIndex: 1,
    explanation: '透過快速切換 CPU 時間片 (Time slicing)，讓用戶感覺多個程式同時運行。'
  },
  {
    id: 'core_modB_023',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '實時作業系統 (Real-time OS) 的關鍵特性是：',
    options: ['介面最漂亮', '必須在嚴格規定的時限內對輸入作出反應', '免費開源', '只支援單一用戶'],
    answerIndex: 1,
    explanation: '用於飛機控制、醫療儀器等，延遲可能導致災難性後果。'
  },
  {
    id: 'core_modB_024',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '驅動程式 (Driver) 的作用是：',
    options: ['駕駛電腦', '充當作業系統與硬件裝置之間的翻譯員/介面', '加速 CPU', '防止病毒'],
    answerIndex: 1,
    explanation: 'OS 無法預知所有硬件的指令細節，Driver 提供了標準介面來控制特定硬件。'
  },
  {
    id: 'core_modB_025',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '甚麼是 GUI？',
    options: ['General User Interface', 'Graphical User Interface (圖形用戶介面)', 'Good User Interaction', 'Game User Interface'],
    answerIndex: 1,
    explanation: 'GUI 使用圖示 (Icons)、視窗 (Windows) 和滑鼠指標，比命令行 (CLI) 更易用。'
  },
  {
    id: 'core_modB_026',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '在 CLI (命令行介面) 中，用戶如何操作電腦？',
    options: ['使用語音', '使用滑鼠點擊圖示', '輸入文字指令 (Commands)', '使用觸控屏'],
    answerIndex: 2,
    explanation: 'CLI (Command Line Interface) 依賴鍵盤輸入指令，如 "ls", "cd", "dir"。'
  },
  {
    id: 'core_modB_027',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '「隨插即用 (Plug and Play)」技術意味著：',
    options: ['裝置不需要電源', 'OS 能自動偵測並配置新連接的硬件資源', '電腦永遠不會壞', '不需要安裝作業系統'],
    answerIndex: 1,
    explanation: '系統自動分配 IRQ、DMA 等資源並嘗試載入驅動程式，簡化硬件安裝。'
  },
  {
    id: 'core_modB_028',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '檔案系統 (如 NTFS, FAT32) 的職責是：',
    options: ['管理硬碟上數據的儲存、組織和檢索方式', '顯示圖像', '播放聲音', '連接互聯網'],
    answerIndex: 0,
    explanation: '它定義了檔案如何命名、儲存路徑、目錄結構及權限管理。'
  },
  {
    id: 'core_modB_029',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '多用戶作業系統 (Multi-user OS) 必須具備甚麼功能？',
    options: ['更快的 CPU', '權限管理與數據隔離，防止用戶互相干擾', '更大的螢幕', '無線網絡'],
    answerIndex: 1,
    explanation: '例如 Unix/Linux/Windows Server，需確保 User A 不能隨意刪除 User B 的檔案。'
  },
  {
    id: 'core_modB_030',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '甚麼是「分頁 (Paging)」？',
    options: ['在瀏覽器打開新分頁', '虛擬記憶體管理技術，將記憶體分割成固定大小的區塊', '列印文件的分頁功能', '書籍排版'],
    answerIndex: 1,
    explanation: 'OS 將 RAM 和硬碟空間劃分為 Pages，以便在兩者之間交換數據 (Swapping)。'
  },

  // --- Utilities & Concepts ---
  {
    id: 'core_modB_031',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: 'Spooling (周邊裝置聯機操作) 最常用於哪種裝置？',
    options: ['鍵盤', '滑鼠', '印表機', '螢幕'],
    answerIndex: 2,
    explanation: '由於印表機速度遠慢於 CPU，Spooling 將列印工作暫存於硬碟緩衝區，讓 CPU 可繼續處理其他工作。'
  },
  {
    id: 'core_modB_032',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '「中斷 (Interrupt)」信號的作用是：',
    options: ['關閉電腦', '通知 CPU 暫停當前工作，轉去處理更緊急的事件', '刪除數據', '中斷互聯網連接'],
    answerIndex: 1,
    explanation: '例如鍵盤輸入或硬碟讀寫完成時，會發出 Interrupt 通知 CPU 處理。'
  },
  {
    id: 'core_modB_033',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '磁碟重組 (Defragmentation) 的目的是：',
    options: ['增加硬碟容量', '將分散的檔案片段重新排列在一起，提升讀取速度', '刪除病毒', '備份檔案'],
    answerIndex: 1,
    explanation: '檔案碎片化會增加磁頭移動時間，重組可優化讀取效能。SSD 通常不需要或不建議重組。'
  },
  {
    id: 'core_modB_034',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: 'POST (Power-On Self-Test) 發生在甚麼時候？',
    options: ['關機時', '電腦啟動時', '安裝軟件時', '上網時'],
    answerIndex: 1,
    explanation: '電腦通電後，BIOS 會立即執行 POST 檢查硬件 (如 RAM, 鍵盤) 是否正常。'
  },
  {
    id: 'core_modB_035',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '冷啟動 (Cold Boot) 與熱啟動 (Warm Boot) 的分別是：',
    options: ['冷啟動指在電源關閉狀態下開機；熱啟動指重啟電腦 (Restart)', '冷啟動是在冬天開機', '熱啟動會導致電腦過熱', '沒有分別'],
    answerIndex: 0,
    explanation: 'Cold boot 會完整執行 POST；Warm boot 通常跳過部分硬件檢查，速度較快。'
  },
  {
    id: 'core_modB_036',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '緩衝區 (Buffer) 的主要功能是：',
    options: ['永久儲存數據', '暫存數據以協調不同速度裝置之間的傳輸', '加密數據', '壓縮數據'],
    answerIndex: 1,
    explanation: '例如從互聯網下載影片 (慢) 到播放器 (快)，Buffer 可防止播放中斷。'
  },
  {
    id: 'core_modB_037',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '公用程式 (Utility Software) 的例子包括：',
    options: ['防毒軟件、備份工具、壓縮軟件', 'Microsoft Word, Excel', 'Windows, macOS', 'Facebook, Instagram'],
    answerIndex: 0,
    explanation: 'Utility 用於維護和優化電腦系統，Application 則用於完成特定工作 (如文書處理)。'
  },
  {
    id: 'core_modB_038',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '多處理器 (Multiprocessing) 系統是指：',
    options: ['有多個用戶', '有多個硬碟', '擁有兩個或以上 CPU (或核心) 協同工作', '有多個鍵盤'],
    answerIndex: 2,
    explanation: '多核心能真正同時執行多個線程 (Threads)，提升效能。'
  },
  {
    id: 'core_modB_039',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '韌體 (Firmware) 是：',
    options: ['柔軟的硬件', '嵌入在硬件中的軟件，提供低階控制功能', '防毒軟件的一種', '雲端服務'],
    answerIndex: 1,
    explanation: '如 BIOS 或路由器的控制程式，通常儲存在 ROM/Flash 中。'
  },
  {
    id: 'core_modB_040',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '分佈式處理 (Distributed Processing) 的優點是：',
    options: ['將運算工作分散到網絡上多部電腦執行，提升運算能力', '無需網絡也能工作', '比較省電', '不需要作業系統'],
    answerIndex: 0,
    explanation: '例如 BOINC 或區塊鏈，利用多部電腦的閒置資源解決複雜問題。'
  },
  {
    id: 'core_modB_041',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '以下哪種檔案系統常用於 USB 手指以確保跨平台兼容性 (Win/Mac)？',
    options: ['NTFS', 'APFS', 'ExFAT 或 FAT32', 'Ext4'],
    answerIndex: 2,
    explanation: 'FAT32/ExFAT 被 Windows 和 macOS 廣泛支援。NTFS 在 Mac 上通常唯讀。'
  },
  {
    id: 'core_modB_042',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '系統匯流排 (System Bus) 通常由哪三部分組成？',
    options: ['數據總線、地址總線、控制總線', '輸入總線、輸出總線、處理總線', 'RAM總線、ROM總線、CPU總線', '互聯網、內聯網、外聯網'],
    answerIndex: 0,
    explanation: 'Data Bus, Address Bus, Control Bus。'
  },
  {
    id: 'core_modB_043',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '在 CPU 規格中，"L1, L2, L3" 指的是甚麼？',
    options: ['不同等級的快取記憶體 (Cache)', '處理器長度', '電壓等級', '生產線編號'],
    answerIndex: 0,
    explanation: 'Level 1 最快最小，Level 3 最慢最大 (仍比 RAM 快)。'
  },
  {
    id: 'core_modB_044',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '完整的備份 (Full Backup) 與增量備份 (Incremental Backup) 的分別：',
    options: ['增量備份只備份自上次備份以來有更動的檔案，速度較快', '增量備份備份所有檔案', '完整備份不佔空間', '沒有分別'],
    answerIndex: 0,
    explanation: '增量備份節省空間和時間，但還原時需要最後一次 Full Backup 加所有 Incremental Backups。'
  },
  {
    id: 'core_modB_045',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '甚麼是「並行處理 (Parallel Processing)」？',
    options: ['同時使用多個處理器執行同一程式的不同部分', '排隊處理', '先入先出', '用兩部電腦上網'],
    answerIndex: 0,
    explanation: '將大問題拆解，同時運算以縮短時間。'
  },
  {
    id: 'core_modB_046',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '檔案壓縮軟件 (如 WinZip) 主要利用甚麼原理？',
    options: ['刪除檔案', '消除數據中的冗餘 (Redundancy)', '縮小字體', '更改副檔名'],
    answerIndex: 1,
    explanation: '例如將 "AAAAA" 記為 "5A"，減少儲存空間。'
  },
  {
    id: 'core_modB_047',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '在作業系統中，「排程器 (Scheduler)」負責：',
    options: ['安排 CPU 執行哪個進程 (Process)', '安排會議', '定時關機', '排列桌面圖示'],
    answerIndex: 0,
    explanation: '決定哪個程式獲得 CPU 資源，確保系統流暢。'
  },
  {
    id: 'core_modB_048',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: 'USB 介面的特點包括：',
    options: ['支援熱插拔 (Hot-swappable) 和供電', '只傳輸視頻', '不能供電', '速度比光纖快'],
    answerIndex: 0,
    explanation: 'Universal Serial Bus 支援在不關機下連接裝置，並提供電力 (5V)。'
  },
  {
    id: 'core_modB_049',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '磁盤格式化 (Formatting) 會做甚麼？',
    options: ['物理清潔磁盤', '建立新的檔案系統結構 (如磁軌/磁區)，通常會清除現有數據', '修復物理損壞', '增加容量'],
    answerIndex: 1,
    explanation: '準備磁碟以供 OS 使用，會建立根目錄和檔案分配表。'
  },
  {
    id: 'core_modB_050',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '開源作業系統 (Open Source OS) 的例子是：',
    options: ['Linux', 'Microsoft Windows', 'macOS', 'iOS'],
    answerIndex: 0,
    explanation: 'Linux 源代碼公開，允許自由修改和分發。其他均為專有軟件 (Proprietary)。'
  },

  // --- New 50 MCQs (Advanced Concepts) ---
  {
    id: 'core_modB_051',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '甚麼是「指令集 (Instruction Set)」？',
    options: ['CPU 能理解和執行的所有基本指令集合', '程式語言的語法', '作業系統的選單', '一組硬碟工具'],
    answerIndex: 0,
    explanation: '指令集架構 (ISA) 定義了 CPU 支援的指令，如 ADD, MOV, JMP 等。'
  },
  {
    id: 'core_modB_052',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '在 CPU 處理中，甚麼是「時鐘週期 (Clock Cycle)」？',
    options: ['顯示時間的週期', 'CPU 執行一個基本操作所需的最小時間單位', '電腦開機所需時間', '記憶體刷新的週期'],
    answerIndex: 1,
    explanation: 'CPU 的速度由時鐘頻率 (Hz) 決定，每個週期執行一步微操作。'
  },
  {
    id: 'core_modB_053',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '控制總線 (Control Bus) 的作用是：',
    options: ['傳輸數據', '傳輸記憶體地址', '傳輸控制信號 (如 Read/Write, Interrupt, Reset)', '提供電源'],
    answerIndex: 2,
    explanation: '協調 CPU 與其他組件的運作，指示當前傳輸的是數據還是地址，以及操作類型。'
  },
  {
    id: 'core_modB_054',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '如果程序計數器 (PC) 損壞，電腦會發生甚麼事？',
    options: ['無法連接互聯網', 'CPU 無法知道下一條要執行的指令，導致系統無法運作', '硬碟數據消失', '顯示器變黑'],
    answerIndex: 1,
    explanation: 'PC 是 FDE 循環的關鍵，沒有它 CPU 就失去了執行的方向。'
  },
  {
    id: 'core_modB_055',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: 'SRAM (靜態隨機存取記憶體) 通常比 DRAM 貴，因為：',
    options: ['SRAM 速度更快且不需要刷新，但電路密度較低 (每 bit 需更多電晶體)', 'SRAM 容量更大', 'SRAM 較難生產', 'SRAM 是非易失性的'],
    answerIndex: 0,
    explanation: 'SRAM 用於 Cache，DRAM 用於主記憶體。SRAM 結構複雜，成本高。'
  },
  {
    id: 'core_modB_056',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '甚麼是「抖動 (Thrashing)」？',
    options: ['硬碟發出的噪音', '由於 RAM 不足，OS 過度頻繁地在 RAM 和虛擬記憶體之間交換數據，導致系統極度緩慢', '螢幕閃爍', 'CPU 過熱'],
    answerIndex: 1,
    explanation: '當 Page Fault 發生得太頻繁，系統大部分時間花在 I/O 上，而非運算上。'
  },
  {
    id: 'core_modB_057',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '在硬碟中，「磁區 (Sector)」是：',
    options: ['硬碟的物理分割區', '資料儲存的最小物理單位 (通常 512 bytes 或 4KB)', '磁頭的名稱', '檔案的名稱'],
    answerIndex: 1,
    explanation: '硬碟由磁軌 (Track) 和磁區 (Sector) 組成。'
  },
  {
    id: 'core_modB_058',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: 'SSD 的「寫入壽命」限制是因為：',
    options: ['快閃記憶體單元在經過一定次數的抹寫後會失效', 'SSD 有機械磨損', '電池會耗盡', '控制器會過熱'],
    answerIndex: 0,
    explanation: 'Flash Memory 的浮柵電晶體有物理極限 (P/E cycles)。'
  },
  {
    id: 'core_modB_059',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '「磨損平衡 (Wear Leveling)」技術用於：',
    options: ['延長 HDD 壽命', '均勻分佈 SSD 的寫入操作，避免某些區塊過早損壞', '平衡 CPU 負載', '減少顯示器烙印'],
    answerIndex: 1,
    explanation: '確保 SSD 所有顆粒的使用頻率相若，延長整體壽命。'
  },
  {
    id: 'core_modB_060',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: 'RAID 1 (鏡像, Mirroring) 的主要好處是：',
    options: ['增加儲存容量', '提高讀寫速度', '提供數據冗餘，若其中一個硬碟損壞，數據仍安全', '減少成本'],
    answerIndex: 2,
    explanation: 'RAID 1 將數據同時寫入兩個硬碟，提供容錯能力。'
  },
  {
    id: 'core_modB_061',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '作業系統的「核心 (Kernel)」是指：',
    options: ['CPU 的中心', 'OS 的最底層核心程式，負責管理硬件資源和系統呼叫', '最重要的應用程式', '開機按鈕'],
    answerIndex: 1,
    explanation: 'Kernel 長駐記憶體，是 OS 與硬件溝通的橋樑。Shell 則是 Kernel 的外殼 (介面)。'
  },
  {
    id: 'core_modB_062',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '「批次處理 (Batch Processing)」的特點是：',
    options: ['用戶與系統即時互動', '收集一組工作後一次過處理，期間無需用戶干預', '用於飛機控制', '每次只處理一個檔案'],
    answerIndex: 1,
    explanation: '適合例行性、大量數據的處理，如電費單列印。'
  },
  {
    id: 'core_modB_063',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '當多個程序同時要求列印時，OS 會如何處理？',
    options: ['拒絕所有請求', '將列印工作放入列印佇列 (Print Queue / Spool)，依次執行', '隨機選擇一個', '讓印表機同時印在同一張紙上'],
    answerIndex: 1,
    explanation: '利用 Spooling 技術排隊。'
  },
  {
    id: 'core_modB_064',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '以下哪項會觸發「軟件中斷 (Software Interrupt)」？',
    options: ['按下鍵盤', '硬碟讀取完成', '程式發生除以零錯誤 (Divide by Zero)', '滑鼠移動'],
    answerIndex: 2,
    explanation: '硬件中斷由外部裝置觸發；軟件中斷 (或稱 Exception/Trap) 由程式內部的指令或錯誤觸發。'
  },
  {
    id: 'core_modB_065',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '中斷處理程序 (Interrupt Handler / ISR) 的作用是：',
    options: ['忽略中斷', '專門負責處理特定中斷事件的程式碼', '刪除中斷', '關閉 CPU'],
    answerIndex: 1,
    explanation: '當 CPU 收到中斷，會暫停當前工作，跳轉執行 ISR，完成後返回。'
  },
  {
    id: 'core_modB_066',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '在 OS 中，「死鎖 (Deadlock)」是指：',
    options: ['電腦壞了', '兩個或以上進程互相等待對方釋放資源，導致大家都無法繼續執行', '硬碟鎖死', '鍵盤沒反應'],
    answerIndex: 1,
    explanation: '像十字路口塞車，A 等 B 動，B 等 A 動，結果誰都動不了。'
  },
  {
    id: 'core_modB_067',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: 'CLI (命令行) 相比 GUI (圖形介面) 的一個優點是：',
    options: ['更容易學習', '看起來更現代', '可透過腳本 (Script) 自動化執行複雜任務，且佔用系統資源少', '支援滑鼠'],
    answerIndex: 2,
    explanation: '專業用戶偏好 CLI 的效率和自動化能力。'
  },
  {
    id: 'core_modB_068',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '甚麼是「根目錄 (Root Directory)」？',
    options: ['樹木的根', '檔案系統階層結構的最頂層 (如 Windows 的 C:\\, Linux 的 /)', '隱藏目錄', '用戶目錄'],
    answerIndex: 1,
    explanation: '所有檔案和文件夾的起點。'
  },
  {
    id: 'core_modB_069',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '副檔名 (Filename Extension, 如 .docx) 的主要作用是：',
    options: ['讓檔案名更長', '告訴作業系統該檔案的格式，以便關聯到正確的應用程式開啟', '加密檔案', '標示檔案大小'],
    answerIndex: 1,
    explanation: 'OS 根據副檔名決定用 Word 開啟 .docx，用 Player 開啟 .mp4。'
  },
  {
    id: 'core_modB_070',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '虛擬機器 (Virtual Machine) 允許：',
    options: ['在一部物理電腦上模擬出多部虛擬電腦，運行不同的作業系統', '玩虛擬遊戲', '加速互聯網', '增加物理 RAM'],
    answerIndex: 0,
    explanation: '常用於測試軟件、伺服器整合 (Server Consolidation)。'
  },
  {
    id: 'core_modB_071',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: 'CMOS 電池的功能是：',
    options: ['為 CPU 供電', '在電腦關機時為 CMOS 晶片供電，以保存 BIOS 設定和系統時間', '為硬碟供電', '作為備用電源'],
    answerIndex: 1,
    explanation: '若 CMOS 電池沒電，開機時系統時間會重置，BIOS 設定會遺失。'
  },
  {
    id: 'core_modB_072',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '以下哪項是輸入裝置？',
    options: ['繪圖機 (Plotter)', '掃描器 (Scanner)', '投影機', '揚聲器'],
    answerIndex: 1,
    explanation: '掃描器將實體影像輸入電腦。其他均為輸出裝置。'
  },
  {
    id: 'core_modB_073',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '觸控屏幕 (Touch Screen) 屬於：',
    options: ['輸入裝置', '輸出裝置', '既是輸入也是輸出裝置', '儲存裝置'],
    answerIndex: 2,
    explanation: '它同時顯示畫面 (Output) 並接收觸控指令 (Input)。'
  },
  {
    id: 'core_modB_074',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: 'OCR (光學字符識別) 軟件通常配合甚麼硬件使用？',
    options: ['印表機', '掃描器', '麥克風', '滑鼠'],
    answerIndex: 1,
    explanation: '掃描文件後，OCR 將圖像中的文字轉換為可編輯文本。'
  },
  {
    id: 'core_modB_075',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '若 CPU 的暫存器數量增加，通常會：',
    options: ['降低效能', '提升效能，因為減少了存取 Cache/RAM 的次數', '沒有影響', '令電腦變重'],
    answerIndex: 1,
    explanation: '暫存器最快。更多通用暫存器意味著 CPU 能就地處理更多數據。'
  },
  {
    id: 'core_modB_076',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '甚麼是「快取命中 (Cache Hit)」？',
    options: ['CPU 在快取中找到了所需的數據', 'CPU 打破了快取', '快取已滿', '快取損壞'],
    answerIndex: 0,
    explanation: 'Cache Hit 率越高，系統效能越好。若找不到 (Cache Miss)，就要去慢速的 RAM 找。'
  },
  {
    id: 'core_modB_077',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: 'RISC (精簡指令集運算) 與 CISC (複雜指令集運算) 的區別：',
    options: ['RISC 指令較簡單，執行速度快，注重效能優化 (如 ARM)；CISC 指令強大但複雜 (如 x86)', 'RISC 用於 PC，CISC 用於手機', 'RISC 比較貴', '沒有區別'],
    answerIndex: 0,
    explanation: 'RISC (Reduced Instruction Set Computing) vs CISC (Complex ...)。手機多用 RISC，PC 多用 CISC。'
  },
  {
    id: 'core_modB_078',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: 'GPU (圖形處理器) 相比 CPU，更擅長：',
    options: ['執行作業系統', '邏輯判斷', '並行處理大量簡單的浮點運算 (如圖像渲染、AI 運算)', '文件管理'],
    answerIndex: 2,
    explanation: 'GPU 擁有數千個核心，適合並行運算 (Parallel Computing)。'
  },
  {
    id: 'core_modB_079',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '雲端儲存 (Cloud Storage) 相比本地硬碟的缺點是：',
    options: ['容量太小', '需要互聯網連接，存取速度受頻寬限制，且有私隱風險', '不能備份', '只能存照片'],
    answerIndex: 1,
    explanation: '便利但依賴網絡，且數據存於第三方伺服器。'
  },
  {
    id: 'core_modB_080',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '「熱插拔 (Hot Swappable)」是指：',
    options: ['裝置發熱時自動彈出', '可以在電腦運作時插拔裝置而不需重新開機', '只能在熱天使用', '需要加熱才能拔出'],
    answerIndex: 1,
    explanation: 'USB, Thunderbolt, 伺服器硬碟通常支援此功能。'
  },
  {
    id: 'core_modB_081',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '在 Windows 中，捷徑 (Shortcut) 是：',
    options: ['檔案的副本', '指向原始檔案或程式的連結 (Link)，本身檔案很小', '病毒', '系統檔'],
    answerIndex: 1,
    explanation: '刪除捷徑不會刪除原始檔案。'
  },
  {
    id: 'core_modB_082',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: 'zip 檔案的主要好處是：',
    options: ['加密數據', '減少檔案大小以便傳輸和存檔，並將多個檔案打包成一個', '提高音質', '防止刪除'],
    answerIndex: 1,
    explanation: '壓縮 (Compression) 和歸檔 (Archiving)。'
  },
  {
    id: 'core_modB_083',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '甚麼是「權限 (Permission)」？',
    options: ['進入房間的權利', '作業系統控制誰可以讀取、寫入或執行特定檔案的機制', '上網速度', '電腦的保養期'],
    answerIndex: 1,
    explanation: '如 Read, Write, Execute 權限。'
  },
  {
    id: 'core_modB_084',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: 'EULA (終端用戶許可協議) 是：',
    options: ['電腦型號', '軟件安裝時用戶必須同意的法律合約', '一種病毒', '硬件規格'],
    answerIndex: 1,
    explanation: 'End-User License Agreement，規定了軟件的使用條款。'
  },
  {
    id: 'core_modB_085',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '開機順序 (Boot Sequence) 設定通常在哪裡更改？',
    options: ['Windows 控制台', 'BIOS / UEFI 設定', '螢幕設定', '滑鼠設定'],
    answerIndex: 1,
    explanation: '決定電腦優先從 Hard Disk, USB 還是 CD-ROM 啟動。'
  },
  {
    id: 'core_modB_086',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '系統還原 (System Restore) 的作用是：',
    options: ['重裝 Windows', '將系統設定和檔案回復到之前的某個時間點 (Restore Point)', '刪除所有資料', '修理硬件'],
    answerIndex: 1,
    explanation: '用於修復因安裝驅動或軟件導致的系統不穩定。'
  },
  {
    id: 'core_modB_087',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '「專用軟件 (Proprietary Software)」是指：',
    options: ['免費用軟件', '源代碼不公開，用戶需購買授權，受版權嚴格保護的軟件', '很多臭蟲的軟件', '政府軟件'],
    answerIndex: 1,
    explanation: '與 Open Source 相反，如 MS Office, Photoshop。'
  },
  {
    id: 'core_modB_088',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: 'Unicode 的主要目的是解決甚麼問題？',
    options: ['檔案太大', '不同語言字符編碼不兼容 (亂碼) 的問題', '網速太慢', '鍵盤不夠按鍵'],
    answerIndex: 1,
    explanation: '統一全球字符集，每個字符有唯一的代碼點。'
  },
  {
    id: 'core_modB_089',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '若電腦只有 4GB RAM 但運行需要 6GB RAM 的遊戲，會發生甚麼？',
    options: ['無法開啟', '系統會崩潰', '系統會使用虛擬記憶體 (Virtual Memory)，但速度會變慢', '電腦會爆炸'],
    answerIndex: 2,
    explanation: '使用硬碟作暫存 (Swapping)，導致效能下降。'
  },
  {
    id: 'core_modB_090',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '甚麼是「頻寬 (Bandwidth)」(在匯流排背景下)？',
    options: ['匯流排的長度', '匯流排在單位時間內能傳輸的最大數據量', '電線的顏色', 'CPU 的速度'],
    answerIndex: 1,
    explanation: 'Bus Bandwidth = Width (bits) x Frequency (Hz)。'
  },
  {
    id: 'core_modB_091',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: 'USB 3.0 相比 USB 2.0 的主要改進是：',
    options: ['插頭變圓了', '傳輸速度大幅提升 (5Gbps vs 480Mbps)', '變得更慢', '不支援舊裝置'],
    answerIndex: 1,
    explanation: '藍色接口通常代表 USB 3.0。'
  },
  {
    id: 'core_modB_092',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: 'QR Code 相比傳統條碼 (Barcode) 的優點：',
    options: ['是彩色的', '能儲存更多數據 (包括漢字、網址)，且可從任何角度掃描', '只能存數字', '必須用雷射掃描'],
    answerIndex: 1,
    explanation: '二維碼 (2D) 儲存密度遠高於一維條碼 (1D)。'
  },
  {
    id: 'core_modB_093',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: 'RFID (無線射頻識別) 的應用例子：',
    options: ['八達通卡', '鍵盤', '滑鼠', '顯示器'],
    answerIndex: 0,
    explanation: '利用無線電波進行非接觸式數據讀取。'
  },
  {
    id: 'core_modB_094',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: 'HDMI 介面傳輸甚麼訊號？',
    options: ['只有影像', '只有聲音', '高畫質數碼影像和聲音', '類比訊號'],
    answerIndex: 2,
    explanation: 'High-Definition Multimedia Interface。'
  },
  {
    id: 'core_modB_095',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '在儲存容量單位中，1 TB 等於：',
    options: ['1024 MB', '1024 GB', '1000 KB', '100 GB'],
    answerIndex: 1,
    explanation: 'K, M, G, T (2^10 倍增關係)。'
  },
  {
    id: 'core_modB_096',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '甚麼是「系統軟件 (System Software)」？',
    options: ['遊戲', '負責控制和維護電腦硬件運作的軟件 (如 OS, Drivers, Utilities)', '文書處理軟件', '瀏覽器'],
    answerIndex: 1,
    explanation: '區別於應用軟件 (Application Software)。'
  },
  {
    id: 'core_modB_097',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '若要保護硬碟資料不被他人讀取 (即使硬碟被偷)，應使用：',
    options: ['壓縮', '備份', '全碟加密 (Full Disk Encryption)', '隱藏檔案'],
    answerIndex: 2,
    explanation: '如 BitLocker，沒有金鑰無法讀取數據。'
  },
  {
    id: 'core_modB_098',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: 'UPS (不斷電系統) 的作用是：',
    options: ['加速電腦', '在停電時提供暫時電力，讓用戶有時間存檔關機', '提供無限電力', '防止上網斷線'],
    answerIndex: 1,
    explanation: 'Uninterruptible Power Supply。'
  },
  {
    id: 'core_modB_099',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '與編譯器 (Compiler) 相比，直譯器 (Interpreter) 的特點是：',
    options: ['執行速度較快', '產生獨立的可執行檔 (.exe)', '逐行翻譯並執行，除錯較容易，但整體執行較慢', '不需源代碼'],
    answerIndex: 2,
    explanation: 'Python 是 Interpreted，C++ 是 Compiled。'
  },
  {
    id: 'core_modB_100',
    type: QuestionType.MCQ,
    topic: Topic.COMPUTER_SYSTEM,
    question: '在 FDE 週期中，數據從 RAM 傳送到 CPU 是通過甚麼總線？',
    options: ['地址總線', '控制總線', '數據總線 (Data Bus)', '通用總線'],
    answerIndex: 2,
    explanation: 'Address Bus 傳地址，Control Bus 傳命令，Data Bus 傳實際內容。'
  }
];
