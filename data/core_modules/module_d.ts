
import { Topic, QuestionType, MCQ } from '../../types';

export const modD: MCQ[] = [
  // --- Algorithm Tools & Flowcharts ---
  {
    id: 'core_modD_001',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '在流程圖 (Flowchart) 中，菱形符號 (Diamond) 代表甚麼？',
    options: ['開始或結束 (Start/End)', '輸入或輸出 (Input/Output)', '處理 (Process)', '決策或判斷 (Decision)'],
    answerIndex: 3,
    explanation: '菱形用於條件判斷 (如 Yes/No 分支)。長方形代表處理，平行四邊形代表輸入/輸出，橢圓形代表開始/結束。'
  },
  {
    id: 'core_modD_002',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: 'IPO 模型的三個階段依次是：',
    options: ['Input -> Process -> Output', 'Input -> Program -> Output', 'Internet -> Process -> Online', 'Input -> Print -> Output'],
    answerIndex: 0,
    explanation: 'IPO 代表輸入 (Input)、處理 (Process) 和輸出 (Output)，是電腦處理數據的基本邏輯。'
  },
  {
    id: 'core_modD_003',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '流程圖中的平行四邊形 (Parallelogram) 用於表示：',
    options: ['計算過程', '輸入或輸出數據', '程式開始', '連接點'],
    answerIndex: 1,
    explanation: '平行四邊形是標準的 I/O 符號，例如 "Read X" 或 "Print Y"。'
  },
  {
    id: 'core_modD_004',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '哪種控制結構 (Control Structure) 會根據條件選擇執行不同的程式碼？',
    options: ['順序結構 (Sequence)', '選擇結構 (Selection)', '迭代結構 (Iteration)', '重複結構 (Repetition)'],
    answerIndex: 1,
    explanation: '選擇結構 (如 if-else) 根據條件 (True/False) 決定執行路徑。'
  },
  {
    id: 'core_modD_005',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '在偽代碼 (Pseudocode) 中，縮排 (Indentation) 的主要作用是：',
    options: ['美觀', '顯示程式碼的層次結構和區塊 (Block)', '節省紙張', '沒有作用'],
    answerIndex: 1,
    explanation: '縮排用於表示哪些指令屬於同一個邏輯區塊 (如 Loop body 或 If block)。'
  },

  // --- Python Basics: Variables & Data Types ---
  {
    id: 'core_modD_006',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '以下哪個是合法的 Python 變數名稱？',
    options: ['2score', 'my-score', 'class', 'my_score'],
    answerIndex: 3,
    explanation: '變數不能以數字開頭 (2score)，不能包含連字符 (my-score)，不能是保留字 (class)。下劃線 (my_score) 是合法的。'
  },
  {
    id: 'core_modD_007',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '執行 Python 代碼 `x = 3.14` 後，變數 `x` 的數據類型是？',
    options: ['int', 'float', 'str', 'bool'],
    answerIndex: 1,
    explanation: '3.14 帶有小數點，屬於浮點數 (float)。'
  },
  {
    id: 'core_modD_008',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '執行 `print(type("123"))` 的輸出是：',
    options: ["<class 'int'>", "<class 'str'>", "<class 'float'>", "123"],
    answerIndex: 1,
    explanation: '用引號包圍的內容是字串 (String)。'
  },
  {
    id: 'core_modD_009',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: 'Python 中，將字串 "5" 轉換為整數 5 的函數是：',
    options: ['str("5")', 'int("5")', 'float("5")', 'input("5")'],
    answerIndex: 1,
    explanation: 'int() 函數用於類型轉換 (Type Casting) 為整數。'
  },
  {
    id: 'core_modD_010',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: 'Python 中的布林值 (Boolean) 只有哪兩個？',
    options: ['True, False', 'true, false', '1, 0', 'Yes, No'],
    answerIndex: 0,
    explanation: 'Python 是區分大小寫的 (Case-sensitive)，必須是首字母大寫的 True 和 False。'
  },
  {
    id: 'core_modD_011',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '執行 `x = input()` 後，x 的數據類型預設是：',
    options: ['int', 'float', 'str', '視乎輸入內容而定'],
    answerIndex: 2,
    explanation: '在 Python 3 中，input() 函數永遠返回字串 (string)。若需要數字需自行轉換。'
  },
  {
    id: 'core_modD_012',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '在 Python 中，單行註釋 (Comment) 使用甚麼符號？',
    options: ['//', '/*', '#', '--'],
    answerIndex: 2,
    explanation: 'Python 使用 # 來標示註釋，直譯器會忽略該行 # 之後的內容。'
  },
  {
    id: 'core_modD_013',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '以下哪個 Python 賦值語句是正確的？',
    options: ['x + y = 10', '10 = x', 'x = 10', 'x == 10'],
    answerIndex: 2,
    explanation: '賦值使用單個等號 `=`，左邊必須是變數名。`==` 是比較運算符。'
  },

  // --- Operators (Arithmetic, Relational, Logical) ---
  {
    id: 'core_modD_014',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: 'Python 表達式 `7 // 2` 的結果是：',
    options: ['3.5', '3', '4', '2'],
    answerIndex: 1,
    explanation: '`//` 是整數除法 (Integer Division / Floor Division)，只保留整數部分。'
  },
  {
    id: 'core_modD_015',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: 'Python 表達式 `7 % 2` 的結果是：',
    options: ['3', '1', '0.5', '3.5'],
    answerIndex: 1,
    explanation: '`%` 是模數運算 (Modulus)，計算餘數。7 除以 2 商 3 餘 1。'
  },
  {
    id: 'core_modD_016',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: 'Python 表達式 `2 ** 3` 代表：',
    options: ['2 乘以 3', '2 的 3 次方 (2^3)', '2 除以 3', '3 的 2 次方'],
    answerIndex: 1,
    explanation: '`**` 是指數運算符 (Exponentiation)。'
  },
  {
    id: 'core_modD_017',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '若 `a = True`, `b = False`，則 `a and b` 的結果是：',
    options: ['True', 'False', 'Error', 'None'],
    answerIndex: 1,
    explanation: 'AND 運算要求兩邊皆為 True 結果才為 True。'
  },
  {
    id: 'core_modD_018',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '若 `x = 5`，表達式 `x != 5` 的值是：',
    options: ['True', 'False', '5', 'Error'],
    answerIndex: 1,
    explanation: '`!=` 意為「不等於」。5 不等於 5 是假的 (False)。'
  },
  {
    id: 'core_modD_019',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '運算符優先級 (Precedence) 由高至低排列正確的是：',
    options: ['+, *, ()', '(), *, +', '*, +, ()', '(), +, *'],
    answerIndex: 1,
    explanation: '括號 () 最優先，其次是乘除 * /，最後是加減 + -。'
  },
  {
    id: 'core_modD_020',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: 'Python 表達式 `"Hello" + " " + "World"` 的結果是：',
    options: ['Hello World', 'HelloWorld', 'Error', 'Hello+World'],
    answerIndex: 0,
    explanation: '對於字串，`+` 代表連接 (Concatenation)。'
  },
  {
    id: 'core_modD_021',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: 'Python 表達式 `"A" * 3` 的結果是：',
    options: ['AAA', 'A3', 'Error', 'A A A'],
    answerIndex: 0,
    explanation: '對於字串，`*` 代表重複 (Repetition)。'
  },
  {
    id: 'core_modD_022',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '以下哪個是正確的比較運算符「等於」？',
    options: ['=', '==', 'equals', ':='],
    answerIndex: 1,
    explanation: '在 Python (及大多數 C 系語言) 中，`=` 是賦值，`==` 是比較相等。'
  },

  // --- Control Structures (Sequence, Selection, Iteration) ---
  {
    id: 'core_modD_023',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '在 Python 的 `if` 語句末尾必須加上甚麼符號？',
    options: ['; (分號)', ': (冒號)', '{} (大括號)', '. (句號)'],
    answerIndex: 1,
    explanation: 'Python 語法規定 `if condition:`、`else:`、`for ...:`、`def ...:` 等區塊開頭必須加冒號。'
  },
  {
    id: 'core_modD_024',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '執行以下代碼，輸出是甚麼？\n```python\nx = 10\nif x > 5:\n    print("A")\nelse:\n    print("B")\n```',
    options: ['A', 'B', 'AB', 'Error'],
    answerIndex: 0,
    explanation: 'x 是 10，大於 5，條件成立，執行 if 區塊。'
  },
  {
    id: 'core_modD_025',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '要檢查多個條件 (例如：如果不符合 A，則檢查是否符合 B)，應使用：',
    options: ['else if', 'elif', 'elseif', 'then if'],
    answerIndex: 1,
    explanation: 'Python 的關鍵字是 `elif`，不是 `else if` 或 `elseif`。'
  },
  {
    id: 'core_modD_026',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '`range(5)` 會生成哪些數字？',
    options: ['1, 2, 3, 4, 5', '0, 1, 2, 3, 4', '0, 1, 2, 3, 4, 5', '1, 2, 3, 4'],
    answerIndex: 1,
    explanation: '`range(n)` 預設從 0 開始，直到 n-1 結束 (不包含 n)。'
  },
  {
    id: 'core_modD_027',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '`range(2, 6)` 會生成哪些數字？',
    options: ['2, 3, 4, 5, 6', '2, 3, 4, 5', '3, 4, 5, 6', '2, 6'],
    answerIndex: 1,
    explanation: '從 start (2) 開始，到 end (6) 之前停止。'
  },
  {
    id: 'core_modD_028',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '`range(1, 10, 2)` 的第三個參數 "2" 代表：',
    options: ['結束值', '起始值', '步長 (Step)', '重複次數'],
    answerIndex: 2,
    explanation: 'Step 表示每次增加的數值。結果為 1, 3, 5, 7, 9。'
  },
  {
    id: 'core_modD_029',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '以下 `while` 迴圈會執行多少次？\n```python\ni = 0\nwhile i < 3:\n    i = i + 1\n```',
    options: ['2', '3', '4', '無限'],
    answerIndex: 1,
    explanation: 'i=0 (True) -> i=1; i=1 (True) -> i=2; i=2 (True) -> i=3; i=3 (False)。共 3 次。'
  },
  {
    id: 'core_modD_030',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '導致「無限迴圈 (Infinite Loop)」的常見原因是：',
    options: ['電腦速度太快', '迴圈條件永遠為真 (True) 且無法被打破', '使用了 for loop', '變數名稱太長'],
    answerIndex: 1,
    explanation: '如果沒有更新迴圈變數導致條件變成 False，迴圈將永遠執行。'
  },
  {
    id: 'core_modD_031',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '在 Python 中，表示「代碼區塊 (Code Block)」的方式是：',
    options: ['使用 `{ }`', '使用 `begin` 和 `end`', '使用一致的縮排 (Indentation)', '使用 `(` `)`'],
    answerIndex: 2,
    explanation: 'Python 強制使用縮排 (通常是 4 個空格) 來定義結構。'
  },
  {
    id: 'core_modD_032',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '執行以下代碼：\n```python\nfor i in range(3):\n    print(i)\n```\n最後輸出的數字是？',
    options: ['3', '2', '1', '0'],
    answerIndex: 1,
    explanation: '輸出序列是 0, 1, 2。最後一個是 2。'
  },

  // --- Arrays / Lists & String Manipulation ---
  {
    id: 'core_modD_033',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: 'Python 中定義列表 (List) 使用甚麼符號？',
    options: ['( )', '[ ]', '{ }', '< >'],
    answerIndex: 1,
    explanation: '`[]` 用於列表 (List)，`()` 用於元組 (Tuple)，`{}` 用於字典 (Dictionary) 或集合 (Set)。'
  },
  {
    id: 'core_modD_034',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '若 `arr = [10, 20, 30]`，`arr[0]` 的值是：',
    options: ['10', '20', '30', '0'],
    answerIndex: 0,
    explanation: 'Python 列表索引從 0 開始。'
  },
  {
    id: 'core_modD_035',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '若 `arr = [10, 20, 30]`，`arr[-1]` 代表：',
    options: ['Error', '第一個元素', '最後一個元素 (30)', '倒數第二個元素'],
    answerIndex: 2,
    explanation: '負數索引從列表末尾開始計算，-1 是最後一個元素。'
  },
  {
    id: 'core_modD_036',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '要獲取列表 `my_list` 的長度 (元素數量)，應使用：',
    options: ['size(my_list)', 'count(my_list)', 'len(my_list)', 'length(my_list)'],
    answerIndex: 2,
    explanation: '`len()` 是 Python 內置函數，用於獲取序列的長度。'
  },
  {
    id: 'core_modD_037',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '若 `s = "HKDSE"`，`s[1]` 是：',
    options: ['H', 'K', 'D', 'S'],
    answerIndex: 1,
    explanation: '索引 0 是 H，索引 1 是 K。'
  },

  // --- Errors & Debugging ---
  {
    id: 'core_modD_038',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '忘記在 `if` 語句後加上冒號 `:`，會導致甚麼錯誤？',
    options: ['邏輯錯誤 (Logical Error)', '執行錯誤 (Runtime Error)', '語法錯誤 (Syntax Error)', '系統錯誤'],
    answerIndex: 2,
    explanation: '違反了程式語言的語法規則，程式無法啟動。'
  },
  {
    id: 'core_modD_039',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '程式執行時嘗試計算 `10 / 0`，會導致甚麼錯誤？',
    options: ['語法錯誤', '執行錯誤 (Runtime Error)', '邏輯錯誤', '硬件錯誤'],
    answerIndex: 1,
    explanation: '語法正確，但在執行期間發生非法操作 (ZeroDivisionError)。'
  },
  {
    id: 'core_modD_040',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '程式可以運行，但計算出的平均分是錯誤的 (例如忘記加括號)，這是：',
    options: ['語法錯誤', '執行錯誤', '邏輯錯誤 (Logical Error)', '編譯錯誤'],
    answerIndex: 2,
    explanation: '程式邏輯有誤，導致結果不符合預期，但程式本身沒有崩潰。'
  },
  {
    id: 'core_modD_041',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '「追蹤表 (Trace Table)」主要用於：',
    options: ['編譯程式', '人手模擬程式執行以找出邏輯錯誤', '加速程式', '美化代碼'],
    answerIndex: 1,
    explanation: '通過逐步記錄變數的值來驗證算法邏輯。'
  },

  // --- Concepts & Functions ---
  {
    id: 'core_modD_042',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '使用函數 (Function) / 子程序 (Sub-program) 的主要好處是：',
    options: ['讓程式變慢', '提高代碼的可重用性 (Reusability) 和模組化', '增加檔案大小', '讓變數變成全域'],
    answerIndex: 1,
    explanation: '避免重複編寫相同的代碼，並讓程式結構更清晰。'
  },
  {
    id: 'core_modD_043',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '在 Python 定義函數使用甚麼關鍵字？',
    options: ['function', 'func', 'def', 'define'],
    answerIndex: 2,
    explanation: '語法為 `def function_name():`。'
  },
  {
    id: 'core_modD_044',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '變數的「作用域 (Scope)」是指：',
    options: ['變數的大小', '變數在程式中可被存取或引用的範圍 (如 Local vs Global)', '變數的類型', '變數的壽命'],
    answerIndex: 1,
    explanation: '在函數內定義的變數通常是區域變數 (Local)，只能在該函數內使用。'
  },
  {
    id: 'core_modD_045',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '賦值運算符 `+=` (如 `x += 1`) 的意思是：',
    options: ['x = 1', 'x = x + 1', 'x + 1 = x', 'x = x + x'],
    answerIndex: 1,
    explanation: '這是一種簡寫，將變數當前的值加 1 後再存回該變數。'
  },
  {
    id: 'core_modD_046',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: 'ASCII 碼中，字元 "A" 和 "B" 在電腦內部是如何區分的？',
    options: ['顏色不同', '二進制代碼不同 (如 65 vs 66)', '字體不同', '位置不同'],
    answerIndex: 1,
    explanation: '電腦底層只處理二進制數字，每個字符對應一個唯一的編碼。'
  },
  {
    id: 'core_modD_047',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '邏輯運算 `not True` 的結果是：',
    options: ['True', 'False', 'Error', '1'],
    answerIndex: 1,
    explanation: 'NOT 運算會反轉布林值。'
  },
  {
    id: 'core_modD_048',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '以下哪種語言屬於「直譯式語言 (Interpreted Language)」？',
    options: ['C', 'C++', 'Python', 'Assembly'],
    answerIndex: 2,
    explanation: 'Python 代碼由直譯器逐行執行，而 C/C++ 通常需要編譯 (Compile) 成機械碼。'
  },
  {
    id: 'core_modD_049',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '`print("10" + "20")` 的輸出結果是：',
    options: ['30', '1020', '10 20', 'Error'],
    answerIndex: 1,
    explanation: '這是字串連接，不是數學加法。'
  },
  {
    id: 'core_modD_050',
    type: QuestionType.MCQ,
    topic: Topic.PROGRAMMING,
    question: '算法 (Algorithm) 的定義是：',
    options: ['一種電腦病毒', '解決特定問題的一系列明確步驟', '電腦的硬件', '一種程式語言'],
    answerIndex: 1,
    explanation: '算法是解決問題的邏輯藍圖，可以用流程圖、偽代碼或程式語言表示。'
  }
];
