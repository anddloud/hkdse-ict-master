
import { Topic, QuestionType, MCQ } from '../../types';

export const modA: MCQ[] = [
  {
    id: 'core_modA_001',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '將十進制數 23 轉換為 8 位元二進制數，結果是：',
    options: ['00010111', '00010101', '00011001', '00011101'],
    answerIndex: 0,
    explanation: '23 = 16 + 4 + 2 + 1 = 10111(2)。補足 8 位元為 00010111。'
  },
  {
    id: 'core_modA_002',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '十六進制數 3A 轉換為十進制數是多少？',
    options: ['52', '58', '64', '310'],
    answerIndex: 1,
    explanation: '3A(16) = 3 × 16 + 10 × 1 = 48 + 10 = 58。'
  },
  {
    id: 'core_modA_003',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '在 8 位元二補碼 (Two\'s Complement) 表示法中，-128 的二進制表示是：',
    options: ['10000000', '11111111', '01111111', '10000001'],
    answerIndex: 0,
    explanation: '8-bit 二補碼範圍是 -128 到 +127。-128 定義為 10000000。'
  },
  {
    id: 'core_modA_004',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '若使用 8 位元二補碼表示法，運算 127 + 1 會導致什麼結果？',
    options: ['-128 (溢位)', '128', '0', '1'],
    answerIndex: 0,
    explanation: '127 (01111111) + 1 = 10000000。在二補碼中，10000000 代表 -128。這稱為算術溢位 (Overflow)。'
  },
  {
    id: 'core_modA_005',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: 'ASCII 編碼系統使用多少個位元來表示一個標準字符？',
    options: ['7', '8', '16', '32'],
    answerIndex: 0,
    explanation: '標準 ASCII 使用 7 個位元，可表示 128 個字符。擴充 ASCII 則使用 8 個位元。'
  },
  {
    id: 'core_modA_006',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '以下哪種字符編碼標準旨在涵蓋世界上大多數語言的字符？',
    options: ['ASCII', 'Big5', 'GB2312', 'Unicode'],
    answerIndex: 3,
    explanation: 'Unicode (統一碼) 設計目的是為了統一處理全球各種語言的文字。'
  },
  {
    id: 'core_modA_007',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '一張 800 x 600 像素，色彩深度為 24-bit 的點陣圖，其未經壓縮的檔案大小約為多少？',
    options: ['480 KB', '1.44 MB', '11.5 MB', '1.2 MB'],
    answerIndex: 1,
    explanation: '(800 x 600 x 24) / 8 bytes = 1,440,000 bytes ≈ 1.44 MB (除以 1000^2 或 1024^2 視乎定義，這裡 1.44MB 最接近)。'
  },
  {
    id: 'core_modA_008',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '與點陣圖相比，向量圖的主要優點是什麼？',
    options: ['色彩更豐富', '檔案大小通常較大', '放大後不會失真 (鋸齒)', '更適合儲存照片'],
    answerIndex: 2,
    explanation: '向量圖使用數學公式描述形狀，因此可以無限縮放而不失真。'
  },
  {
    id: 'core_modA_009',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '以下哪種音頻格式支援無損壓縮？',
    options: ['MP3', 'WAV', 'AAC', 'FLAC'],
    answerIndex: 3,
    explanation: 'MP3 和 AAC 是有損壓縮；WAV 通常是無壓縮；FLAC 是無損壓縮 (Free Lossless Audio Codec)。'
  },
  {
    id: 'core_modA_010',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '採樣頻率 (Sampling Rate) 為 44.1 kHz 意味著什麼？',
    options: ['每秒記錄 44100 個樣本', '聲音的最高頻率是 44.1 kHz', '每個樣本有 44.1 個位元', '檔案大小為 44.1 KB'],
    answerIndex: 0,
    explanation: 'Hz 代表每秒次數，44.1 kHz 即每秒進行 44100 次採樣。'
  },
  {
    id: 'core_modA_011',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '奇偶檢測 (Parity Check) 主要用於檢測什麼？',
    options: ['數據傳輸過程中的單一位元錯誤', '數據輸入時的格式錯誤', '數據的邏輯錯誤', '多位元同時錯誤'],
    answerIndex: 0,
    explanation: '奇偶檢測只能可靠地檢測出奇數個位元 (如 1 個) 的反轉錯誤，無法檢測偶數個錯誤或糾錯。'
  },
  {
    id: 'core_modA_012',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '在輸入出生日期時，系統檢查月份是否介於 1 至 12 之間。這屬於哪種數據驗證？',
    options: ['格式檢查 (Format Check)', '範圍檢查 (Range Check)', '長度檢查 (Length Check)', '類型檢查 (Type Check)'],
    answerIndex: 1,
    explanation: '檢查數值是否在特定範圍內 (1-12) 屬於範圍檢查。'
  },
  {
    id: 'core_modA_013',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '「校對 (Proofreading)」屬於以下哪種數據控制措施？',
    options: ['數據驗證 (Validation)', '數據核實 (Verification)', '數據加密', '數據備份'],
    answerIndex: 1,
    explanation: '核實 (Verification) 確保輸入的數據與來源文件一致，校對是人工核實的一種。'
  },
  {
    id: 'core_modA_014',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '若一個二進制數左移 (Left Shift) 1 位，相當於進行什麼運算？',
    options: ['乘以 2', '除以 2', '加 1', '減 1'],
    answerIndex: 0,
    explanation: '在二進制中，左移一位等於乘以基數 2。'
  },
  {
    id: 'core_modA_015',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: 'Big5 碼主要用於編碼哪種語言？',
    options: ['簡體中文', '繁體中文', '日文', '韓文'],
    answerIndex: 1,
    explanation: 'Big5 是繁體中文的常用編碼標準。'
  },
  {
    id: 'core_modA_016',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '計算 1011(2) + 1101(2) 的結果是：',
    options: ['11000(2)', '10110(2)', '11100(2)', '11010(2)'],
    answerIndex: 0,
    explanation: '11 + 13 = 24。24 的二進制是 11000。'
  },
  {
    id: 'core_modA_017',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '在數據庫中，檢查身份證號碼的括號數字是否正確，通常使用什麼機制？',
    options: ['校驗和 (Checksum)', '校驗數位 (Check Digit)', '奇偶位元', '存在性檢查'],
    answerIndex: 1,
    explanation: '身份證括號內的數字是 Check Digit，通過模數運算 (Modulus 11) 計算得出，用於檢測輸入錯誤。'
  },
  {
    id: 'core_modA_018',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '以下哪項是「雙重輸入 (Double Entry)」的目的？',
    options: ['確保數據符合範圍', '確保數據在傳輸中未被修改', '減少數據輸入時的人為錯誤', '加密數據'],
    answerIndex: 2,
    explanation: '雙重輸入是 Verification 的一種，要求兩個操作員輸入同一數據，以發現輸入差異。'
  },
  {
    id: 'core_modA_019',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '將一幅 24-bit 彩色圖像轉換為 8-bit 灰階圖像，檔案大小會發生什麼變化？',
    options: ['變為原來的 1/3', '變為原來的 3 倍', '不變', '變為原來的 1/8'],
    answerIndex: 0,
    explanation: '每個像素由 24 bits 變為 8 bits，大小減少至 8/24 = 1/3。'
  },
  {
    id: 'core_modA_020',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '在二補碼系統中，8 位元能表示的最大正整數是：',
    options: ['127', '128', '255', '256'],
    answerIndex: 0,
    explanation: '首位是符號位 (0)，剩下 7 位為數值位。2^7 - 1 = 127。'
  },
  {
    id: 'core_modA_021',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '以下哪個是 16 進制數 FF 的二進制表示？',
    options: ['11111111', '10101010', '11110000', '00001111'],
    answerIndex: 0,
    explanation: 'F = 1111。FF = 1111 1111。'
  },
  {
    id: 'core_modA_022',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '什麼是 GIGO (Garbage In, Garbage Out)？',
    options: [
      '電腦會自動清理垃圾檔案',
      '若輸入錯誤的數據，電腦處理後必然輸出錯誤的資訊',
      '回收電腦硬件的原則',
      '一種數據壓縮算法'
    ],
    answerIndex: 1,
    explanation: 'GIGO 強調數據準確性的重要性，電腦無法自動糾正錯誤的輸入數據。'
  },
  {
    id: 'core_modA_023',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '在數據傳輸中，哪種技術使用額外的一個位元來使 "1" 的總數保持為偶數？',
    options: ['偶校驗 (Even Parity)', '奇校驗 (Odd Parity)', 'CRC', 'Checksum'],
    answerIndex: 0,
    explanation: '偶校驗 (Even Parity) 確保包括校驗位在內的所有位元中，1 的個數是偶數。'
  },
  {
    id: 'core_modA_024',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '若要將模擬聲音 (Analog Sound) 轉換為數碼聲音，需要經過哪兩個步驟？',
    options: ['採樣 (Sampling) 和 量化 (Quantization)', '壓縮和解密', '錄音和播放', '輸入和輸出'],
    answerIndex: 0,
    explanation: 'ADC (Analog-to-Digital Converter) 的過程包括對時間進行採樣，以及對振幅進行量化。'
  },
  {
    id: 'core_modA_025',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: 'GIF 圖像格式最多支援多少種顏色？',
    options: ['256', '65536', '16.7 百萬', '無限'],
    answerIndex: 0,
    explanation: 'GIF 使用 8-bit 索引顏色，最多支援 2^8 = 256 色。'
  },
  {
    id: 'core_modA_026',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '以下哪項是無損數據壓縮 (Lossless Compression) 的例子？',
    options: ['ZIP 壓縮文字檔', 'JPEG 壓縮照片', 'MP3 壓縮音樂', 'MP4 壓縮影片'],
    answerIndex: 0,
    explanation: 'ZIP 壓縮後還原必須與原文完全一致，屬無損。JPEG/MP3/MP4 均會捨棄部分數據以大幅減少體積，屬有損。'
  },
  {
    id: 'core_modA_027',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '漢字編碼 "GB" 代表什麼？',
    options: ['Global Big', 'Great Business', 'Guo Biao (國標)', 'General Binary'],
    answerIndex: 2,
    explanation: 'GB 是中國國家標準 (Guo Biao) 的拼音縮寫，主要用於簡體中文。'
  },
  {
    id: 'core_modA_028',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '計算 111(2) XOR 101(2) 的結果是：',
    options: ['010(2)', '011(2)', '111(2)', '001(2)'],
    answerIndex: 0,
    explanation: 'XOR 運算：相同為 0，不同為 1。1^1=0, 1^0=1, 1^1=0。結果 010。'
  },
  {
    id: 'core_modA_029',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '以下哪種文件格式是開放標準且支援向量圖形？',
    options: ['SVG', 'AI', 'CDR', 'BMP'],
    answerIndex: 0,
    explanation: 'SVG (Scalable Vector Graphics) 是基於 XML 的開放標準向量圖格式，瀏覽器原生支援。'
  },
  {
    id: 'core_modA_030',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '如果一個視訊的幀率 (Frame Rate) 是 30 fps，代表什麼？',
    options: ['每秒顯示 30 張靜態畫面', '解像度是 30x30', '每秒傳輸 30 MB 數據', '有 30 個聲道'],
    answerIndex: 0,
    explanation: 'FPS (Frames Per Second) 指每秒播放的畫面數量。'
  },
  {
    id: 'core_modA_031',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '在二進制減法中，100(2) - 001(2) 等於：',
    options: ['011(2)', '010(2)', '001(2)', '101(2)'],
    answerIndex: 0,
    explanation: '4 - 1 = 3。3 的二進制是 011。'
  },
  {
    id: 'core_modA_032',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '一個 4 分鐘的立體聲 (2 聲道) 音頻，採樣率 44.1kHz，16-bit 採樣大小。檔案大小約為？',
    options: ['40 MB', '10 MB', '20 MB', '80 MB'],
    answerIndex: 0,
    explanation: '44100 * 16 * 2 * (4*60) / 8 bytes ≈ 42,336,000 bytes ≈ 40.3 MB。'
  },
  {
    id: 'core_modA_033',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '「一致性檢查 (Consistency Check)」的例子是：',
    options: [
      '檢查輸入的日期是否是未來日期',
      '檢查「出生日期」與「年齡」是否相符',
      '檢查密碼是否包含數字',
      '檢查郵箱格式'
    ],
    answerIndex: 1,
    explanation: '一致性檢查用於確保兩個相關聯的數據欄位邏輯上不矛盾。'
  },
  {
    id: 'core_modA_034',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '在處理中文字符時，為何經常出現 "亂碼" (Garbage characters)？',
    options: [
      '電腦中毒',
      '使用了錯誤的字符編碼 (如用 Big5 解讀 UTF-8 檔案)',
      '記憶體不足',
      '硬碟損壞'
    ],
    answerIndex: 1,
    explanation: '編碼與解碼標準不一致是亂碼的主要原因。'
  },
  {
    id: 'core_modA_035',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '以下哪個數值最大？',
    options: ['1111(2)', 'F(16)', '15(10)', '全部相等'],
    answerIndex: 3,
    explanation: '1111(2) = 8+4+2+1 = 15; F(16) = 15。全部都等於十進制的 15。'
  },
  {
    id: 'core_modA_036',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '在 Excel 中，輸入 "=A1+B1" 屬於哪個 IPO 階段？',
    options: ['輸入', '處理', '輸出', '儲存'],
    answerIndex: 1,
    explanation: '公式運算屬於處理 (Process) 階段。'
  },
  {
    id: 'core_modA_037',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '關於 Unicode UTF-8 編碼，以下哪項正確？',
    options: [
      '每個字符固定使用 2 bytes',
      '它不兼容 ASCII',
      '它是可變長度編碼 (1 至 4 bytes)',
      '它只能表示中文字'
    ],
    answerIndex: 2,
    explanation: 'UTF-8 使用 1 byte 表示 ASCII，用 3 bytes 表示常用中文，屬可變長度。'
  },
  {
    id: 'core_modA_038',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '若要在電腦儲存一段 "無聲" 的音頻，MP3 格式比 WAV 格式更具優勢，因為：',
    options: ['MP3 會自動刪除無聲片段', 'WAV 不能儲存無聲', 'MP3 壓縮算法能極大壓縮無數據部分', 'MP3 音質更好'],
    answerIndex: 2,
    explanation: 'WAV (PCM) 即使是靜音也會佔用同樣的 bitrate 空間，而壓縮格式能有效處理冗餘數據。'
  },
  {
    id: 'core_modA_039',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: 'OCR (光學字符識別) 技術的主要功能是：',
    options: ['將語音轉文字', '將掃描的圖像文字轉換為可編輯的文本', '翻譯語言', '檢測錯字'],
    answerIndex: 1,
    explanation: 'Optical Character Recognition 用於將紙本文件數碼化為文本數據。'
  },
  {
    id: 'core_modA_040',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '條碼 (Barcode) 最後一個數字通常是：',
    options: ['價格', '產品編號', '檢查數位 (Check Digit)', '國家代碼'],
    answerIndex: 2,
    explanation: '用於掃描時即時驗證讀取是否正確。'
  },
  {
    id: 'core_modA_041',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '1 KB (Kilobyte) 在電腦科學中精確等於：',
    options: ['1000 bytes', '1024 bytes', '1024 bits', '8 bytes'],
    answerIndex: 1,
    explanation: '2 的 10 次方 = 1024。'
  },
  {
    id: 'core_modA_042',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '將十進制 -5 表示為 4 位元二補碼：',
    options: ['1011', '1101', '1111', '0101'],
    answerIndex: 0,
    explanation: '+5 = 0101。反轉 = 1010。加 1 = 1011。'
  },
  {
    id: 'core_modA_043',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '在資料庫欄位設定 "必填 (Required)" 屬性，屬於哪種驗證？',
    options: ['存在性檢查 (Presence Check)', '類型檢查', '範圍檢查', '格式檢查'],
    answerIndex: 0,
    explanation: '確保欄位不是空白 (Non-null)。'
  },
  {
    id: 'core_modA_044',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '以下哪項關於 "元數據 (Metadata)" 的描述最佳？',
    options: ['大數據', '關於數據的數據', '錯誤的數據', '加密的數據'],
    answerIndex: 1,
    explanation: 'Metadata 描述數據的屬性，如檔案建立日期、作者、解像度等。'
  },
  {
    id: 'core_modA_045',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '若影像深度由 8-bit 增加至 24-bit，能顯示的顏色數量會增加多少倍？',
    options: ['3 倍', '16 倍', '256 倍', '65536 倍'],
    answerIndex: 3,
    explanation: '2^8 = 256。2^24 = 16.7M。2^24 / 2^8 = 2^16 = 65536。'
  },
  {
    id: 'core_modA_046',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '十六進制數 10 轉換為十進制是：',
    options: ['10', '16', '20', '1'],
    answerIndex: 1,
    explanation: '10(16) = 1 x 16 + 0 = 16。'
  },
  {
    id: 'core_modA_047',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '以下哪種情況最適合使用 "批次處理 (Batch Processing)"？',
    options: ['飛機訂票系統', '月結單印製', '網上遊戲', 'GPS 導航'],
    answerIndex: 1,
    explanation: '月結單不需要即時性，可以收集一個月的數據後一次過處理，效率更高。'
  },
  {
    id: 'core_modA_048',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '在 HTML 中，顏色代碼 #FF0000 代表什麼顏色？',
    options: ['藍色', '綠色', '紅色', '白色'],
    answerIndex: 2,
    explanation: 'RGB 模式。RR=FF (全滿), GG=00, BB=00。'
  },
  {
    id: 'core_modA_049',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '將十進制 0.5 轉換為二進制：',
    options: ['0.1', '0.5', '0.01', '0.101'],
    answerIndex: 0,
    explanation: '二進制小數位權值為 2^-1 (0.5), 2^-2 (0.25)... 所以 0.5(10) = 0.1(2)。'
  },
  {
    id: 'core_modA_050',
    type: QuestionType.MCQ,
    topic: Topic.INFO_PROCESSING,
    question: '以下哪項不是多媒體元素？',
    options: ['文本', '音頻', '數據庫記錄', '動畫'],
    answerIndex: 2,
    explanation: '數據庫記錄通常指結構化數據，不被視為多媒體 (Multimedia) 的組成元素 (Text, Audio, Graphics, Video, Animation)。'
  }
];
