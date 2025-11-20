
import { Topic, QuestionType, MCQ } from '../../types';

export const modE: MCQ[] = [
  // --- Intellectual Property (17 Qs) ---
  {
    id: 'core_modE_001',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '根據香港《版權條例》，作品的版權何時自動生效？',
    options: ['作品創作完成並以物質形式固定時 (如寫在紙上或存入電腦)', '向政府知識產權署註冊後', '作品公開發表或出版後', '在作品上加上 © 符號後'],
    answerIndex: 0,
    explanation: '香港實行自動版權賦予制度。一旦作品完成並固定在物質形式上，即受法律保護，無須註冊。'
  },
  {
    id: 'core_modE_002',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '甚麼是「共享軟件 (Shareware)」的主要特徵？',
    options: ['費用全免，但沒有源代碼', '開放源代碼供人修改', '「先試後買」，用戶可在試用期內免費使用，之後需付費註冊', '版權已過期，任何人皆可使用'],
    answerIndex: 2,
    explanation: 'Shareware 鼓勵用戶試用，試用期過後若繼續使用則必須付費。'
  },
  {
    id: 'core_modE_003',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '「免費軟件 (Freeware)」與「開源軟件 (Open Source)」的主要分別是？',
    options: ['Freeware 需付費，Open Source 免費', 'Freeware 通常不提供源代碼 (Source Code)，Open Source 必須提供', 'Freeware 沒有版權，Open Source 有版權', '沒有分別'],
    answerIndex: 1,
    explanation: 'Freeware 雖然免費使用，但通常是專有軟件 (Proprietary)，不公開源代碼；Open Source 則允許用戶查看、修改和分發源代碼。'
  },
  {
    id: 'core_modE_004',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: 'Creative Commons (共享創意) 授權條款中，符號 "NC" 代表甚麼？',
    options: ['姓名標示 (Attribution)', '非商業性使用 (Non-Commercial)', '禁止改作 (No Derivatives)', '相同方式分享 (Share Alike)'],
    answerIndex: 1,
    explanation: 'NC (Non-Commercial) 表示使用者不得將該作品用於商業目的。'
  },
  {
    id: 'core_modE_005',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '購買一套正版電腦遊戲軟件，通常意味著你購買了甚麼？',
    options: ['軟件的所有權 (Ownership)', '軟件的版權 (Copyright)', '軟件的使用授權 (License)', '軟件的源代碼'],
    answerIndex: 2,
    explanation: '用戶購買的是 EULA (終端用戶許可協議) 下的使用權，而非版權或擁有權。'
  },
  {
    id: 'core_modE_006',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '以下哪項行為構成侵犯版權？',
    options: ['購買正版 CD 並借給朋友聽', '將正版軟件安裝在超過授權數量的電腦上', '在二手店出售正版書籍', '為了評論目的而引用作品的一小部分 (Fair Dealing)'],
    answerIndex: 1,
    explanation: '違反軟件授權協議 (如單機授權裝多機) 屬侵權行為。'
  },
  {
    id: 'core_modE_007',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '公共領域 (Public Domain) 的軟件是指：',
    options: ['政府開發的軟件', '版權已過期或作者放棄版權的軟件，任何人可自由使用', '必須在公共場所使用的軟件', '只有公眾人物可用的軟件'],
    answerIndex: 1,
    explanation: 'Public Domain 不受版權限制，可以隨意複製、修改或用於商業用途。'
  },
  {
    id: 'core_modE_008',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: 'BT (BitTorrent) 下載涉及版權風險，主要是因為：',
    options: ['下載速度太快', '在下載的同時，用戶的電腦也在協助分發 (上載) 檔案給其他人', 'BT 軟件本身是非法的', 'ISP 會封鎖 BT'],
    answerIndex: 1,
    explanation: 'BT 協議的特性是用戶同時是下載者和上載者。未經授權分發 (上載) 版權作品是嚴重的侵權行為。'
  },
  {
    id: 'core_modE_009',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '「二次創作」若要符合「公平處理 (Fair Dealing)」原則，通常不包括以下哪種目的？',
    options: ['戲仿 (Parody)', '諷刺 (Satire)', '純粹為了節省購買原著的成本', '評論或報導時事'],
    answerIndex: 2,
    explanation: '若使用目的是為了替代原著市場 (令原作者損失收入)，通常不被視為公平處理。'
  },
  {
    id: 'core_modE_010',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '軟件盜版 (Software Piracy) 對社會的負面影響不包括：',
    options: ['軟件開發商收入減少，缺乏資金研發新功能', '軟件價格可能因此上升', '增加電腦感染病毒的風險', '減少電子廢物'],
    answerIndex: 3,
    explanation: '盜版與電子廢物無直接因果關係，反而可能因缺乏支援導致系統不穩定。'
  },
  {
    id: 'core_modE_011',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: 'DRM (數碼版權管理) 技術的主要目的是：',
    options: ['加速下載', '控制數碼內容的使用權限，防止未經授權的複製或存取', '提高畫質', '收集用戶私隱'],
    answerIndex: 1,
    explanation: 'DRM (Digital Rights Management) 通過加密等技術限制內容只能在特定裝置或時間內播放。'
  },
  {
    id: 'core_modE_012',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: 'Creative Commons 中 "ND" (No Derivatives) 指：',
    options: ['禁止商業使用', '必須標示作者', '禁止對作品進行修改或改作', '必須以相同方式分享'],
    answerIndex: 2,
    explanation: 'ND 表示只能原樣分享，不能進行翻譯、混音或修改。'
  },
  {
    id: 'core_modE_013',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '在學校為了教學用途複印版權作品，通常受甚麼條款保障？',
    options: ['公平處理 (Fair Dealing) 豁免', '完全豁免權', '政府採購協議', '教師特權'],
    answerIndex: 0,
    explanation: '香港版權條例為教育機構提供特定的公平處理豁免，容許在合理範圍內複製。'
  },
  {
    id: 'core_modE_014',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '抄襲 (Plagiarism) 與 侵犯版權 (Copyright Infringement) 的分別是：',
    options: ['抄襲是道德問題 (竊取意念)，侵權是法律問題 (未經授權複製)', '抄襲是法律問題，侵權是道德問題', '兩者完全相同', '抄襲只適用於文字，侵權只適用於軟件'],
    answerIndex: 0,
    explanation: '即使作品已過版權期，照抄而不註明出處仍屬抄襲 (學術不誠實)，但不構成侵犯版權。'
  },
  {
    id: 'core_modE_015',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '銷售聲稱可免費觀看收費電視頻道的「非法機頂盒」，主要觸犯了版權條例中的哪項？',
    options: ['規避科技措施 (Circumvention of technological measures)', '抄襲', '公平處理', '二次創作'],
    answerIndex: 0,
    explanation: '這些裝置通常破解了內容供應商的加密保護 (科技措施)，屬違法行為。'
  },
  {
    id: 'core_modE_016',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: 'EULA (End-User License Agreement) 通常在何時展示？',
    options: ['購買電腦時', '安裝或首次運行軟件時', '卸載軟件時', '電腦中毒時'],
    answerIndex: 1,
    explanation: '安裝過程中的「我同意」按鈕即代表接受 EULA 合約。'
  },
  {
    id: 'core_modE_017',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '以下哪種軟件授權允許用戶將修改後的版本重新發佈並收費？',
    options: ['Freeware', '部分 Open Source 授權 (如 MIT, Apache)', 'Public Domain', '以上皆是'],
    answerIndex: 1,
    explanation: '許多開源協議 (如 GPL, MIT) 允許商業化，前提是遵守特定的條款 (如保留版權聲明)。'
  },

  // --- Privacy & 6 DPP (17 Qs) ---
  {
    id: 'core_modE_018',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '根據《個人資料 (私隱) 條例》，「個人資料」必須具備甚麼特徵？',
    options: ['必須是電子數據', '必須與一名在世人士有關，且能確定該人身份', '必須是機密的', '必須由政府發出'],
    answerIndex: 1,
    explanation: '定義包括：與在世個人有關、可識辨身份、以可查閱/處理的形式存在。'
  },
  {
    id: 'core_modE_019',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '保障資料原則第 1 原則 (收集原則) 規定：',
    options: ['收集資料必須合法、公平，且不超乎適度', '收集資料必須免費', '收集後必須公開', '必須收集盡可能多的資料'],
    answerIndex: 0,
    explanation: '收集目的必須明確，且只收集所需的「最少」資料 (Adequate but not excessive)。'
  },
  {
    id: 'core_modE_020',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '在收集個人資料時，資料使用者必須向當事人提供「收集個人資料聲明 (PICS)」。這屬於哪項原則的要求？',
    options: ['第 1 原則 - 收集', '第 3 原則 - 使用', '第 4 原則 - 保安', '第 6 原則 - 查閱'],
    answerIndex: 0,
    explanation: '告知當事人資料用途、轉移對象及查閱權利，是收集過程的一部分。'
  },
  {
    id: 'core_modE_021',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '保障資料原則第 2 原則 (準確及保留) 要求：',
    options: ['資料必須永久保存', '資料若不再需要用於原定目的，應予以刪除', '資料必須公開給公眾核實', '資料不能修改'],
    answerIndex: 1,
    explanation: '資料不能保留超過所需的時間 (Data Retention)，且必須採取合理步驟確保準確。'
  },
  {
    id: 'core_modE_022',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '若公司想將客戶資料用於「直接促銷 (Direct Marketing)」，必須先：',
    options: ['通知警方', '獲得客戶的訂明同意 (Prescribed Consent)', '在報紙刊登廣告', '支付費用給客戶'],
    answerIndex: 1,
    explanation: '這屬於第 3 原則 (使用原則) 的範疇，改變用途須獲當事人同意。'
  },
  {
    id: 'core_modE_023',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '保障資料原則第 4 原則 (保安原則) 針對甚麼風險？',
    options: ['資料遺失、未獲授權的查閱或披露', '資料不準確', '資料收集過多', '用戶忘記密碼'],
    answerIndex: 0,
    explanation: '資料使用者須採取切實可行的保安措施 (如加密、防火牆) 保護資料。'
  },
  {
    id: 'core_modE_024',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '保障資料原則第 5 原則 (公開原則) 要求資料使用者：',
    options: ['公開所有客戶名單', '制定並公開其私隱政策及實務', '公開公司財務狀況', '公開員工薪酬'],
    answerIndex: 1,
    explanation: 'Openness 確保公眾知道該機構持有甚麼類型的資料及其處理政策。'
  },
  {
    id: 'core_modE_025',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '根據第 6 原則 (查閱及改正)，資料當事人有權：',
    options: ['要求刪除所有資料', '查閱及要求改正其個人資料', '要求賠償', '要求更換資料處理員'],
    answerIndex: 1,
    explanation: '當事人可提出「查閱資料要求 (Data Access Request)」，機構須在 40 日內回覆。'
  },
  {
    id: 'core_modE_026',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '在處理「查閱資料要求」時，資料使用者可以：',
    options: ['拒絕任何要求', '收取過高的費用以阻嚇申請', '收取不超乎適度的費用 (Reasonable fee)', '將資料公開給所有人'],
    answerIndex: 2,
    explanation: '機構可收取合理費用以彌補行政成本，但不能過高。'
  },
  {
    id: 'core_modE_027',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '甚麼是「資料核對程序 (Data Matching Procedure)」？',
    options: ['比較兩組收集自不同目的之個人資料，以採取對當事人不利的行動', '備份資料', '檢查資料是否有錯字', '排序資料'],
    answerIndex: 0,
    explanation: '例如政府核對稅務和福利數據。這需要私隱專員的事先同意，因涉及第 3 原則。'
  },
  {
    id: 'core_modE_028',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '使用 USB 手指儲存含有個人資料的檔案，最有效的保安措施是：',
    options: ['將檔案設為「唯讀」', '將檔案隱藏', '對檔案或 USB 進行加密 (Encryption)', '貼上「機密」標籤'],
    answerIndex: 2,
    explanation: '加密確保即使 USB 遺失，資料也無法被未授權人士讀取 (第 4 原則)。'
  },
  {
    id: 'core_modE_029',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '若網站使用 Cookies 追蹤用戶瀏覽習慣作廣告用途，根據私隱條例，網站應該：',
    options: ['隱瞞此事', '在私隱政策中清楚說明並提供「拒絕 (Opt-out)」選項', '強制用戶接受', '只追蹤海外用戶'],
    answerIndex: 1,
    explanation: '這涉及第 1 原則 (公平收集) 和第 5 原則 (公開政策)。'
  },
  {
    id: 'core_modE_030',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '生物辨識資料 (如指紋、人臉) 被視為敏感資料，因為：',
    options: ['它們很難收集', '它們是獨一無二且不可改變的，一旦洩漏後果嚴重', '它們檔案很大', '它們很昂貴'],
    answerIndex: 1,
    explanation: '密碼洩漏可更改，指紋洩漏無法更改，因此收集時須更加審慎。'
  },
  {
    id: 'core_modE_031',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '「選擇退出 (Opt-out)」機制的含義是：',
    options: ['用戶預設不同意，需主動行動才同意', '用戶預設被視為同意，需主動行動表示反對', '用戶無法選擇', '用戶退出系統'],
    answerIndex: 1,
    explanation: 'Direct Marketing 常提供 Opt-out 選項；較嚴格的標準是 Opt-in (預設不同意)。'
  },
  {
    id: 'core_modE_032',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '負責監管香港個人資料私隱條例執行的機構是：',
    options: ['香港警務處', '個人資料私隱專員公署 (PCPD)', '消費者委員會', '資訊科技總監辦公室'],
    answerIndex: 1,
    explanation: 'Privacy Commissioner for Personal Data。'
  },
  {
    id: 'core_modE_033',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '公司在棄置舊電腦前，為符合第 4 原則，應該：',
    options: ['只需刪除檔案 (Delete)', '格式化 (Format) 硬碟一次', '使用專用軟件徹底抹除數據 (Wipe) 或物理破壞硬碟', '將電腦捐贈'],
    answerIndex: 2,
    explanation: '單純 Delete 或 Format 仍可透過軟件復原數據，必須徹底銷毀。'
  },
  {
    id: 'core_modE_034',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '在未經同意下將某人的照片上載至社交媒體並標籤其名字，可能違反哪項原則？',
    options: ['第 2 原則', '第 3 原則 (使用資料作新目的)', '第 4 原則', '第 6 原則'],
    answerIndex: 1,
    explanation: '若照片原本是私人用途，公開發佈屬於「改變用途」，需獲同意。'
  },

  // --- Equity, Health & Others (16 Qs) ---
  {
    id: 'core_modE_035',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '「數碼鴻溝 (Digital Divide)」是指社會上不同群體在甚麼方面的差異？',
    options: ['購買電腦的數量', '存取及使用資訊科技的機會和能力', '上網速度的快慢', '打字速度'],
    answerIndex: 1,
    explanation: '這導致「資訊富人」與「資訊窮人」的出現，加劇社會不平等。'
  },
  {
    id: 'core_modE_036',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '以下哪項是導致數碼鴻溝的主要因素？',
    options: ['經濟能力、教育水平、年齡', '身高、體重', '喜好', '電腦品牌'],
    answerIndex: 0,
    explanation: '低收入、低學歷及長者通常較難接觸或掌握新科技。'
  },
  {
    id: 'core_modE_037',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '人體工學 (Ergonomics) 的主要目標是：',
    options: ['設計更便宜的家具', '設計符合人體自然形態的設備，以減少疲勞和受傷', '設計更美觀的產品', '提高電腦運算速度'],
    answerIndex: 1,
    explanation: '透過改善工作環境 (如椅子高度、螢幕距離) 保護健康。'
  },
  {
    id: 'core_modE_038',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: 'RSI (重複性勞損) 的常見成因是：',
    options: ['長時間以不良姿勢重複同一動作 (如打字、按滑鼠)', '電腦病毒', '螢幕輻射', '噪音'],
    answerIndex: 0,
    explanation: 'Repetitive Strain Injury 常影響手腕、手指和頸背。'
  },
  {
    id: 'core_modE_039',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '使用電腦時，顯示屏的頂部應該：',
    options: ['高於視線水平', '與視線水平大致相同或略低', '遠低於視線', '隨意擺放'],
    answerIndex: 1,
    explanation: '這樣可讓頸部保持自然直立，視線微微向下，減少頸部壓力和眼乾。'
  },
  {
    id: 'core_modE_040',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '為預防電腦視覺綜合症 (CVS)，建議遵循「20-20-20 法則」，即是：',
    options: ['每 20 分鐘，看 20 呎遠的東西 20 秒', '每 20 小時休息 20 分鐘', '每 20 分鐘眨眼 20 次', '螢幕距離 20 吋'],
    answerIndex: 0,
    explanation: '這有助放鬆眼部肌肉，減少眼疲勞。'
  },
  {
    id: 'core_modE_041',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '網絡成癮 (Internet Addiction) 的症狀通常不包括：',
    options: ['對上網失去控制，影響日常生活', '停止上網時出現焦慮或易怒 (戒斷症狀)', '視力變好', '向家人隱瞞上網時間'],
    answerIndex: 2,
    explanation: '網絡成癮通常會損害視力和健康。'
  },
  {
    id: 'core_modE_042',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '電子廢物 (E-waste) 對環境的主要危害是：',
    options: ['佔用太多空間', '含有有毒重金屬 (如鉛、水銀)，若處理不當會污染土壤和水源', '會發生爆炸', '浪費電力'],
    answerIndex: 1,
    explanation: '因此電子產品應回收而非直接棄置於堆填區。'
  },
  {
    id: 'core_modE_043',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '「綠色運算 (Green Computing)」的措施包括：',
    options: ['使用虛擬化技術減少伺服器數量', '啟用電腦的省電模式', '無紙化辦公', '以上皆是'],
    answerIndex: 3,
    explanation: '旨在減少科技使用對環境的影響。'
  },
  {
    id: 'core_modE_044',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '網絡欺凌 (Cyberbullying) 的特點是：',
    options: ['只發生在校園內', '匿名性高、傳播速度快、影響範圍廣且難以完全刪除', '很容易追蹤兇手', '對受害者沒有實質傷害'],
    answerIndex: 1,
    explanation: '數碼足跡難以消除，令受害者承受長期壓力。'
  },
  {
    id: 'core_modE_045',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '在家工作 (Telecommuting) 對社會的正面影響是：',
    options: ['增加交通擠塞', '減少通勤時間和交通碳排放，有助工作與生活平衡', '增加辦公室租金', '減少互聯網使用'],
    answerIndex: 1,
    explanation: '利用 ICT 技術遙距工作。'
  },
  {
    id: 'core_modE_046',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '為了縮窄數碼鴻溝，政府可以採取甚麼措施？',
    options: ['提高上網費用', '在圖書館等公共場所提供免費電腦和上網服務', '只發展高科技產業', '停止互聯網服務'],
    answerIndex: 1,
    explanation: '提供公共存取點 (Public Access) 和培訓是常見的解決方案。'
  },
  {
    id: 'core_modE_047',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '網絡禮儀 (Netiquette) 是指：',
    options: ['網絡法律', '在互聯網上交流時應遵守的禮貌和行為規範', '加密技術', '網絡速度'],
    answerIndex: 1,
    explanation: '例如不使用全大寫字母 (代表吶喊)、不發送垃圾郵件、尊重他人私隱。'
  },
  {
    id: 'core_modE_048',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '甚麼是「算法偏見 (Algorithmic Bias)」？',
    options: ['電腦計算錯誤', 'AI 系統因訓練數據不全面，導致決策對特定群體產生不公平的結果', '電腦運算太快', '程式員的個人喜好'],
    answerIndex: 1,
    explanation: '例如人臉識別系統對某些種族的識別率較低，或招聘 AI 偏好男性。'
  },
  {
    id: 'core_modE_049',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '過度使用社交媒體可能導致「錯失恐懼症 (FOMO)」，意思是：',
    options: ['害怕手機沒電', '擔心自己錯過網上有趣的活動或話題，產生焦慮', '害怕忘記密碼', '害怕沒有網絡'],
    answerIndex: 1,
    explanation: 'Fear Of Missing Out，導致強迫性地不斷刷新動態。'
  },
  {
    id: 'core_modE_050',
    type: QuestionType.MCQ,
    topic: Topic.SOCIAL_IMPACTS,
    question: '智慧城市 (Smart City) 發展中最大的私隱隱憂是：',
    options: ['傳感器和閉路電視大量收集市民的行為數據，可能導致監控過度', 'Wi-Fi 速度太快', '無人駕駛汽車不安全', '電費太貴'],
    answerIndex: 0,
    explanation: '大數據收集與私隱保護之間的平衡是智慧城市的主要挑戰。'
  }
];
