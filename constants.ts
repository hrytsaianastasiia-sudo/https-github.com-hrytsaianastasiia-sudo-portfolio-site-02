import React from 'react';
import { Leaf, Wind, Recycle, HeartPulse, Hand } from 'lucide-react';
import { TbBallTennis } from 'react-icons/tb';
import { Project } from './types';

// --- VEGWAM CONTENT DATA (DEEP DIVE) ---
export const VEGWAM_DATA = {
  header: {
    tag: { en: "VEGAN LIFESTYLE PLATFORM", jp: "VEGAN LIFESTYLE PLATFORM", ua: "ПЛАТФОРМА ВЕГАНСЬКОГО СТИЛЮ" },
    title: { en: "VegWam", jp: "VegWam", ua: "VegWam" },
    catchphrase: { en: "Making plant-based life closer to you.", jp: "プラントベースは、もっと身近になる。", ua: "Робимо рослинний спосіб життя ближчим." },
    summary: { 
      en: "An integrated lifestyle app for those living a vegan/plant-based life in Japan, connecting restaurants, products, information, and community.",
      jp: "日本でヴィーガン／プラントベースな生活を続けたい人と、その家族や友人のために、飲食店・商品・情報・コミュニティを一体化したライフスタイルアプリです。",
      ua: "Інтегрований лайфстайл-додаток для тих, хто веде веганський спосіб життя в Японії, що поєднує ресторани, продукти та спільноту."
    }
  },
  overview: {
    overline: { en: "OVERVIEW", jp: "OVERVIEW", ua: "ОГЛЯД" },
    title: { en: "Project Overview", jp: "作品概要", ua: "Огляд Проєкту" },
    subtext: { 
      en: "An integrated platform responding to the unique needs for 'safety' and 'connection' that existing search services could not meet.",
      jp: "既存の検索サービスでは満たせなかった、ヴィーガンユーザー特有の『安心感』と『つながり』へのニーズに応える統合プラットフォームです。",
      ua: "Інтегрована платформа, що відповідає унікальним потребам у «безпеці» та «зв'язку», які не могли задовольнити існуючі сервіси."
    }
  },
  insights: [
    { 
      label: "INSIGHT 01", 
      title: { en: "Scattered Information", jp: "情報の分散", ua: "Розкидана Інформація" },
      body: { en: "Restaurant, recipe, and product info is scattered, making it time-consuming to gather daily necessities.", jp: "飲食店、レシピ、商品情報がバラバラで、生活に必要な情報を集めるのに時間がかかる。", ua: "Інформація про ресторани та продукти розкидана, що ускладнює пошук." }
    },
    { 
      label: "INSIGHT 02", 
      title: { en: "Beginner Anxiety", jp: "ビギナーの不安", ua: "Тривога Новачків" },
      body: { en: "Anxiety about ingredients ('Is this safe to eat?') and asking staff creates stress.", jp: "「これは食べて大丈夫？」という成分への不安や、店員への確認がストレスになる。", ua: "Тривога щодо інгредієнтів та необхідність розпитувати персонал створюють стрес." }
    },
    { 
      label: "INSIGHT 03", 
      title: { en: "Isolation", jp: "孤独感", ua: "Ізоляція" },
      body: { en: "Few people understand the lifestyle, lacking a community to share concerns.", jp: "周りに理解者が少なく、情報交換や悩みを共有できるコミュニティがない。", ua: "Мало людей розуміють цей спосіб життя, відсутність спільноти для підтримки." }
    }
  ],
  research: {
    title: { en: "User Research", jp: "ユーザーリサーチ", ua: "Дослідження Користувачів" },
    steps: [
      { en: "Desk Research", jp: "Desk Research", ua: "Кабінетне Дослідження" },
      { en: "Interview (5 Users)", jp: "Interview (5人)", ua: "Інтерв'ю (5 чол.)" },
      { en: "Persona & Journey", jp: "Persona & Journey", ua: "Персона та Шлях" },
      { en: "UI Design", jp: "UI Design", ua: "UI Дизайн" }
    ],
    personaName: { en: "Namiko (20s)", jp: "Namiko (20代・女性)", ua: "Наміко (20+)" },
    personaRole: { en: "Beginner Vegan / Office Worker", jp: "ヴィーガンビギナー / 会社員", ua: "Новачок у веганстві / Офісний працівник" },
    quote: { 
      en: "Calling restaurants to check 'Is this really vegan?' every time is the biggest stress. I stopped eating out with friends to avoid being a burden.",
      jp: "お店に電話して『本当にヴィーガン対応か』を毎回確認するのが、一番ストレスです。友達との外食も、気を使わせてしまうので避けるようになりました。",
      ua: "Телефонувати в ресторани, щоб перевірити «чи це дійсно веганське» — найбільший стрес. Я перестала їсти з друзями, щоб не бути тягарем."
    }
  },
  ui: {
    title: { en: "UI Highlights", jp: "UIデザインのポイント", ua: "Основні Елементи UI" },
    p1: { 
      title: { en: "01. Home Screen for Peace of Mind", jp: "01. 安心して選べるホーム画面", ua: "01. Головний Екран для Спокою" },
      body: { 
        en: "Designed to provide immediate relief by showing only information matching the user's diet. 'Certified' marks and reviews are visible at a glance.",
        jp: "アプリを開いた瞬間、自分の食生活に合った情報だけが表示される安心感を設計。「認証済み」マークや「ユーザーレビュー」をファーストビューに配置し、信頼性を可視化しました。",
        ua: "Розроблено так, щоб показувати лише інформацію, що відповідає дієті користувача. Знаки «Сертифіковано» та відгуки видно одразу."
      }
    },
    p2: { 
      title: { en: "02. Stress-free Search", jp: "02. ストレスフリーな検索体験", ua: "02. Пошук без Стресу" },
      body: { 
        en: "Implemented intuitive filters for 'Area' x 'Category' x 'Details' (e.g., Gluten-free). Smooth switching to map view allows finding safe spots nearby instantly.",
        jp: "「エリア」×「カテゴリ」×「詳細条件（グルテンフリー等）」を直感的に絞り込めるフィルター機能を実装。地図表示との切り替えもスムーズにし、現在地周辺の安心できるお店を即座に見つけられます。",
        ua: "Інтуїтивні фільтри «Район» x «Категорія» x «Деталі». Плавне перемикання на карту дозволяє миттєво знайти безпечні місця поруч."
      }
    }
  },
  outcomes: {
    title: { en: "Outcomes & Reflection", jp: "成果と振り返り", ua: "Результати та Рефлексія" },
    done: { en: "What I Did", jp: "What I Did", ua: "Що Зроблено" },
    next: { en: "Next Steps", jp: "Next Steps", ua: "Наступні Кроки" },
    listDone: {
      en: ["Deep dive via user interviews", "Logo creation (Wigwam + Plants)", "Figma prototyping"],
      jp: ["ユーザーインタビューによる課題の深掘り", "「Wigwam（住居）+ Plants」のブランドロゴ作成", "Figmaによるプロトタイプ作成と検証"],
      ua: ["Глибинні інтерв'ю з користувачами", "Створення логотипу (Вігвам + Рослини)", "Прототипування у Figma"]
    },
    listNext: {
      en: ["Usability testing with real vegans", "English support for inbound tourists", "Accessibility (WCAG 2.1) audit"],
      jp: ["実際のヴィーガンユーザーによるユーザビリティテスト", "英語対応（インバウンド需要への対応）", "アクセシビリティ（WCAG 2.1）のチェックと改善"],
      ua: ["Юзабіліті-тестування з реальними веганами", "Підтримка англійської для туристів", "Аудит доступності (WCAG 2.1)"]
    }
  }
};

// --- DATA & CONTENT (FIXED LABELS) ---

export const LABELS = {
  nav: {
    work: { en: "Work", jp: "Works", ua: "Роботи" },
    about: { en: "About", jp: "About", ua: "Про мене" },
    contact: { en: "Contact", jp: "Contact", ua: "Контакти" },
  },
  hero: {
    status: { en: "Open for opportunities", jp: "現在、就職活動中", ua: "Відкрита до пропозицій" },
    titlePrefix: { en: "Design for", jp: "Design for", ua: "Дизайн для" },
    titleSuffix: { en: "Well-being.", jp: "Well-being.", ua: "Благополуччя." },
    intro: { 
      en: "Hi, I'm Anastasiia. A Tokyo-based Product Designer blending data-driven UX with organic, inclusive aesthetics.",
      jp: "こんにちは、アナスタシアです。東京を拠点に、データに基づくUXとオーガニックで包括的なデザインを融合させるプロダクトデザイナーです。",
      ua: "Привіт, я Анастасія. Продуктовий дизайнер у Токіо, що поєднує UX на основі даних з органічною естетикою."
    },
    cta: { en: "View Projects", jp: "プロジェクトを見る", ua: "Переглянути Проєкти" },
    specialty: { en: "Age-Tech & Health", jp: "エイジテック & ヘルスケア", ua: "Age-Tech та Здоров'я" }
  },
  sectionTitles: {
    work: { en: "Selected Works", jp: "Selected Works", ua: "Вибрані Роботи" },
    about: { en: "About Me", jp: "About Me", ua: "Про Мене" },
    contact: { en: "Let's Connect", jp: "Let's Connect", ua: "Зв'яжіться зі мною" },
  },
  experience: {
    title: { en: "Experience", jp: "Experience", ua: "Досвід" },
    role: { en: "3 Years in Health Tech", jp: "ヘルステックで3年の経験", ua: "3 роки в Health Tech" },
    desc: { 
      en: "UI/UX for Age-Tech startups in Tokyo.", 
      jp: "東京のエイジテック系スタートアップでのUI/UXデザイン。",
      ua: "UI/UX для Age-Tech стартапів у Токіо."
    }
  },
  modal: {
    context: { en: "Context", jp: "Context", ua: "Контекст" },
    problem: { en: "Problem", jp: "Problem", ua: "Проблема" },
    solution: { en: "Solution", jp: "Solution", ua: "Рішення" },
    process: { en: "Process", jp: "Process", ua: "Процес" },
    outcome: { en: "Outcome", jp: "Outcome", ua: "Результат" },
    brand: { en: "Brand Identity", jp: "ブランドアイデンティティ", ua: "Айдентика Бренду" },
    prototype: { en: "Interactive Prototype", jp: "プロトタイプ", ua: "Інтерактивний Прототип" },
  }
};

export const PROFILE = {
  name: { en: "Anastasiia Hrytsai", jp: "グリサイ アナスタシア", ua: "Анастасія Грицай" },
  email: "hrytsai.anastasiia@gmail.com", 
  linkedin: "https://linkedin.com", 
  avatar: "https://drive.google.com/thumbnail?id=1IyqOInZ9ReRyETE4TM7NwFM9MZPxAH7j&sz=w1000",
  fullBio: {
    en: "I am a UI/UX Designer with a unique background in graphic design and multicultural communication. Over the last 3 years in Tokyo's startup scene, I've focused on 'Age-Tech'—creating digital bridges for the aging society.",
    jp: "グラフィックデザインと多文化コミュニケーションの背景を持つUI/UXデザイナーです。東京のスタートアップで3年間、「エイジテック（Age-Tech）」に焦点を当て、高齢化社会のためのデジタルの架け橋を作ることに尽力してきました。",
    ua: "Я UI/UX дизайнер з унікальним досвідом у графічному дизайні та міжкультурній комунікації. Останні 3 роки в стартап-сфері Токіо я фокусуюся на 'Age-Tech' — створенні цифрових мостів для старіючого суспільства."
  }
};

export const SKILLS = [
  { name: "Figma", level: 90 },
  { name: "Adobe Suite", level: 85 },
  { name: "UI Design", level: 90 },
  { name: "UX Research", level: 75 },
];

export const LANGUAGES = [
  { lang: "Japanese", level: "N2" },
  { lang: "English", level: "Business" },
  { lang: "Ukrainian", level: "Native" },
];

export const INTERESTS = [
  { icon: Leaf, en: "Vegan Lifestyle", jp: "ヴィーガン", ua: "Веганство" },
  { icon: Wind, en: "Yoga", jp: "ヨガ", ua: "Йога" },
  { icon: Recycle, en: "Sustainability", jp: "サステナビリティ", ua: "Сталий розвиток" },
  { icon: TbBallTennis, en: "Tennis", jp: "テニス", ua: "Теніс" },
  { icon: HeartPulse, en: "Longevity", jp: "長寿研究", ua: "Довголіття" },
  { icon: Hand, en: "Japanese Sign Language", jp: "日本手話", ua: "Японська мова жестів" }
];

export const PROJECTS: Project[] = [
  {
    id: "navitime",
    thumbnail: "https://drive.google.com/thumbnail?id=1_OxHOBHxBD36FR1-TDXxZRzWZlf6zfWa&sz=w1200",
    accentColor: "bg-[#007AFF]",
    figmaUrl: "https://www.figma.com/proto/hzx81CrdGeHadYO9whxsqw/%E8%87%AA%E8%BB%A2%E8%BB%8ANAVIGATION-FINAL?page-id=0%3A1&node-id=3-31&p=f&viewport=401%2C481%2C0.22&t=NsaxSieERH8gXG8d-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3%3A31",
    designSystem: {
      colors: [
        { hex: "#007AFF", name: "Navi Blue" }, 
        { hex: "#E0F7FA", name: "Ice Blue" }, 
        { hex: "#FFFFFF", name: "White" }      
      ],
      typography: [{ name: "Roboto", usage: "Numeric Data" }, { name: "Noto Sans JP", usage: "UI Text" }]
    },
    content: {
      en: {
        title: "Bicycle NAVITIME",
        category: "App Redesign",
        description: "Redesigning navigation for safety and clarity.",
        tags: ["UX Research", "Redesign", "Mobile"],
        caseStudy: {
          role: "UI/UX Designer",
          timeline: "2 Weeks",
          tools: ["Figma", "Illustrator"],
          overview: "A comprehensive redesign of a popular cycling navigation app to improve safety and usability.",
          problem: "Low contrast and small touch targets made the app dangerous to use while riding.",
          solution: "Implemented a high-contrast 'Safety UI' with enlarged interactive zones and prioritized data display.",
          process: ["Heuristic Analysis", "Wireframing", "Prototyping"],
          results: "Improved readability by 40% and simplified the core navigation flow."
        }
      },
      jp: {
        title: "自転車NAVITIME",
        category: "アプリリデザイン",
        description: "安全性と明瞭さを追求したナビゲーションの再設計。",
        tags: ["UXリサーチ", "リデザイン", "モバイル"],
        caseStudy: {
          role: "UI/UXデザイナー",
          timeline: "2週間",
          tools: ["Figma", "Illustrator"],
          overview: "サイクリング中の視認性と安全性を向上させるための、人気ナビアプリの全面リデザイン。",
          problem: "既存アプリはコントラストが低く、ボタンが小さいため、走行中の操作が危険でした。",
          solution: "高コントラストな「セーフティUI」を採用し、タップ領域を拡大。重要な情報を瞬時に認識できるようにしました。",
          process: ["ヒューリスティック分析", "ワイヤーフレーム", "プロトタイプ"],
          results: "視認性を40%向上させ、主要なナビゲーションフローを簡素化しました。"
        }
      },
      ua: {
        title: "Bicycle NAVITIME",
        category: "Редизайн Застосунку",
        description: "Редизайн навігації для безпеки та чіткості.",
        tags: ["UX Дослідження", "Редизайн", "Мобільний"],
        caseStudy: {
          role: "UI/UX Дизайнер",
          timeline: "2 Тижні",
          tools: ["Figma", "Illustrator"],
          overview: "Комплексний редизайн популярного велонавігатора для підвищення безпеки.",
          problem: "Низький контраст і малі кнопки робили додаток небезпечним під час їзди.",
          solution: "Впроваджено висококонтрастний 'Safety UI' зі збільшеними зонами натискання.",
          process: ["Евристичний аналіз", "Вайрфрейми", "Прототипування"],
          results: "Покращено читабельність на 40% та спрощено основний сценарій навігації."
        }
      }
    }
  },
  {
    id: "vegwam",
    thumbnail: "https://drive.google.com/thumbnail?id=131BCCcsDh17iE3-JHWPrZnwBW_k2w6Yk&sz=w1200",
    accentColor: "bg-[#F1683C]", 
    designSystem: {
      colors: [
        { hex: "#047857", name: "Vegan Green" },
        { hex: "#FCD34D", name: "Warm Yellow" },
      ],
      typography: [{ name: "Rounded Mplus", usage: "Headings" }]
    },
    content: {
      en: {
        title: "VegWam",
        category: "New Product",
        description: "Connecting the vegan community in Japan.",
        tags: ["Branding", "App Design", "Community"],
        caseStudy: {
          role: "Product Designer",
          timeline: "1 Month",
          tools: ["Figma", "Illustrator"],
          overview: "An all-in-one platform helping vegans find restaurants and connect in Japan.",
          problem: "Finding vegan options in Japan is difficult, and existing information is scattered.",
          solution: "Created a map-based discovery app with a built-in ingredient dictionary and community forum.",
          process: ["User Persona", "Logo Design", "UI Design"],
          results: "Established a friendly brand identity and a seamless 'Search to Eat' user journey."
        }
      },
      jp: {
        title: "VegWam",
        category: "新規サービス開発",
        description: "日本のヴィーガンコミュニティをつなぐプラットフォーム。",
        tags: ["ブランディング", "アプリデザイン", "コミュニティ"],
        caseStudy: {
          role: "プロダクトデザイナー",
          timeline: "1ヶ月",
          tools: ["Figma", "Illustrator"],
          overview: "日本でのヴィーガン生活をサポートする、レストラン検索・コミュニティ統合アプリ。",
          problem: "日本ではヴィーガン対応のお店が見つけにくく、情報が分散していました。",
          solution: "地図ベースの検索機能、成分辞書、コミュニティフォーラムを備えたアプリを設計。",
          process: ["ペルソナ策定", "ロゴデザイン", "UIデザイン"],
          results: "親しみやすいブランドアイデンティティと、スムーズな検索体験を構築しました。"
        }
      },
      ua: {
        title: "VegWam",
        category: "Новий Продукт",
        description: "Об'єднання веганської спільноти в Японії.",
        tags: ["Брендинг", "Дизайн Застосунку", "Спільнота"],
        caseStudy: {
          role: "Продуктовий Дизайнер",
          timeline: "1 Місяць",
          tools: ["Figma", "Illustrator"],
          overview: "Універсальна платформа, що допомагає веганам знаходити ресторани в Японії.",
          problem: "Знайти веганські опції в Японії складно, інформація розкидана.",
          solution: "Створено додаток для пошуку на карті з вбудованим словником інгредієнтів.",
          process: ["Персона", "Логотип", "UI Дизайн"],
          results: "Створено дружній бренд та безшовний шлях користувача."
        }
      }
    }
  },
  {
    id: "relaxon",
    thumbnail: "https://drive.google.com/thumbnail?id=1NbrrKhpIqIbys7IuHxCU78FKhztXLFfa&sz=w1200",
    accentColor: "bg-[#8b5cf6]",
    content: {
      en: {
        title: "RelaxON",
        category: "Visual UI",
        description: "Glassmorphism-based wellness application.",
        tags: ["Visual Design", "Wellness", "Trend"],
        caseStudy: {
          role: "UI Designer",
          timeline: "3 Weeks",
          tools: ["Adobe XD"],
          overview: "A stress-relief app focusing on calming visuals and audio.",
          problem: "Meditation apps often look too clinical.",
          solution: "Used Glassmorphism and pastel gradients to create an immersive, calming mood.",
          process: ["Moodboard", "Visual Exploration"],
          results: "High-fidelity visual design that emphasizes emotional well-being."
        }
      },
      jp: {
        title: "RelaxON",
        category: "ビジュアルUI",
        description: "グラスモーフィズムを取り入れたウェルネスアプリ。",
        tags: ["ビジュアルデザイン", "ウェルネス", "トレンド"],
        caseStudy: {
          role: "UIデザイナー",
          timeline: "3週間",
          tools: ["Adobe XD"],
          overview: "視覚と聴覚で癒やしを提供するストレス解消アプリ。",
          problem: "既存の瞑想アプリは無機質なデザインが多い。",
          solution: "グラスモーフィズムとパステルカラーを使用し、没入感のある癒やしの空間を演出。",
          process: ["ムードボード", "ビジュアル探索"],
          results: "情緒的なウェルビーイングを強調した高精細なビジュアルデザイン。"
        }
      },
      ua: {
        title: "RelaxON",
        category: "Візуальний UI",
        description: "Велнес-додаток на основі гласморфізму.",
        tags: ["Візуальний Дизайн", "Велнес", "Тренд"],
        caseStudy: {
          role: "UI Дизайнер",
          timeline: "3 Тижні",
          tools: ["Adobe XD"],
          overview: "Додаток для зняття стресу з акцентом на заспокійливі візуали.",
          problem: "Додатки для медитації часто виглядають надто клінічно.",
          solution: "Використано гласморфізм для створення заспокійливої атмосфери.",
          process: ["Мудборд", "Візуальні пошуки"],
          results: "High-fidelity дизайн, що підкреслює емоційний комфорт."
        }
      }
    }
  }
];