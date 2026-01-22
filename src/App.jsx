import React, { useState } from 'react';
import { BookOpen, PenTool, CheckCircle, ArrowRight, Lightbulb, RotateCcw, Award, Mail, MessageCircle, FileText } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('learn');
  const [examMode, setExamMode] = useState('email'); // 'opinion' or 'email'

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-4 shadow-md sticky top-0 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Award className="w-8 h-8 text-yellow-300" />
              <h1 className="text-2xl font-bold tracking-tight">英検準2級ライティング攻略</h1>
            </div>

            {/* Mode Switcher */}
            <div className="bg-indigo-800 p-1 rounded-lg flex text-sm">
              <button
                onClick={() => setExamMode('opinion')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition ${examMode === 'opinion' ? 'bg-white text-indigo-900 font-bold shadow' : 'text-indigo-200 hover:text-white'}`}
              >
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">意見論述</span>
              </button>
              <button
                onClick={() => setExamMode('email')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition ${examMode === 'email' ? 'bg-white text-indigo-900 font-bold shadow' : 'text-indigo-200 hover:text-white'}`}
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">Eメール</span>
                <span className="ml-1 text-[10px] bg-red-500 text-white px-1 rounded-full animate-pulse">New</span>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveTab('learn')}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition flex items-center gap-2 ${activeTab === 'learn' ? 'bg-white text-indigo-600' : 'text-indigo-100 hover:bg-indigo-500'}`}
            >
              <BookOpen className="w-4 h-4" />
              出題傾向
            </button>
            <button
              onClick={() => setActiveTab('template')}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition flex items-center gap-2 ${activeTab === 'template' ? 'bg-white text-indigo-600' : 'text-indigo-100 hover:bg-indigo-500'}`}
            >
              <CheckCircle className="w-4 h-4" />
              テンプレート
            </button>
            <button
              onClick={() => setActiveTab('practice')}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition flex items-center gap-2 ${activeTab === 'practice' ? 'bg-white text-indigo-600' : 'text-indigo-100 hover:bg-indigo-500'}`}
            >
              <PenTool className="w-4 h-4" />
              作成ツール
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-700 border-b-2 border-indigo-100 pb-2 mb-4">
            {examMode === 'opinion' ? '意見論述問題 (Opinion Essay)' : 'Eメール問題 (Email Writing)'}
          </h2>

          {activeTab === 'learn' && <LearnSection mode={examMode} />}
          {activeTab === 'template' && <TemplateSection mode={examMode} />}
          {activeTab === 'practice' && <PracticeSection mode={examMode} />}
        </div>
      </main>

      <footer className="bg-slate-200 text-center p-6 mt-12 text-slate-500 text-xs">
        <p>本アプリは学習支援を目的としており、公益財団法人 日本英語検定協会とは一切関係ありません。</p>
      </footer>
    </div>
  );
}

// --- Components for Sections ---

function LearnSection({ mode }) {
  if (mode === 'email') {
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
          <h3 className="text-lg font-bold mb-3 text-green-700 flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Eメール問題の特徴（2024年度〜新形式）
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span><strong>状況：</strong> 外国人の知り合い（Alex）からEメールを受け取る。</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span><strong>メール内容：</strong> Alexが体験談を話す。文中に<span className="underline font-bold">下線部</span>がある。</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span><strong>タスク①：</strong> メール末尾の<span className="text-red-600 font-bold">"Do you think...?"</span>の質問に答える。</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span><strong>タスク②：</strong> <span className="text-red-600 font-bold underline">下線部について2つの質問をする</span>（超重要！）</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span><strong>語数：</strong> 40語 〜 50語程度。</span>
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-300">
          <h4 className="font-bold text-yellow-800 mb-2">⚠️ 最重要ポイント</h4>
          <p className="text-slate-700 text-sm leading-relaxed">
            <strong>下線部について2つの質問をすることを忘れないでください！</strong><br />
            例：下線部が "a boat" なら → 「予約は必要ですか？」「料金はいくらですか？」のように質問する。
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl">
          <h4 className="font-bold text-blue-800 mb-2">評価のポイント</h4>
          <ul className="text-slate-700 text-sm leading-relaxed space-y-1">
            <li>✅ 意見質問に的確に答えているか</li>
            <li>✅ 下線部について2つの質問をしているか</li>
            <li>✅ メールのフォーマット（挨拶・結び）を守っているか</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-indigo-500">
        <h3 className="text-lg font-bold mb-3 text-indigo-700 flex items-center gap-2">
          <FileText className="w-5 h-5" />
          意見論述問題の特徴
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
            <span><strong>質問：</strong> "Do you think...?" (是非を問われる)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
            <span><strong>条件：</strong> 意見 ＋ 理由を<span className="text-red-600 font-bold">2つ</span>書く。</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
            <span><strong>語数：</strong> 50語 〜 60語程度。</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function TemplateSection({ mode }) {
  if (mode === 'email') {
    return (
      <div className="space-y-8 animate-fade-in">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-green-200">
          <div className="bg-green-600 text-white p-3 text-center font-bold">
            Eメール返信テンプレート (40〜50語)
          </div>
          <div className="p-6 space-y-4 font-medium text-lg text-slate-800">

            {/* Greeting */}
            <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
              <p className="text-sm text-green-700 font-bold mb-1">1. 挨拶</p>
              <p>Hi, <span className="bg-white border border-dashed border-slate-400 px-2 rounded text-slate-500">[Alex]</span>!</p>
            </div>

            {/* Opening */}
            <div className="p-3 bg-slate-50 rounded border-l-4 border-slate-400">
              <p className="text-sm text-slate-500 font-bold mb-1">2. 書き出し（定型文）</p>
              <p>Thank you for your e-mail.</p>
            </div>

            {/* Answer */}
            <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-400">
              <p className="text-sm text-blue-700 font-bold mb-1">3. 意見質問への回答</p>
              <p className="mb-2">I think <span className="bg-white border border-dashed border-slate-400 px-2 rounded text-slate-500">[意見]</span>.</p>
              <p><span className="bg-white border border-dashed border-slate-400 px-2 rounded text-slate-500">[理由・詳細]</span>.</p>
            </div>

            {/* Two Questions */}
            <div className="p-3 bg-red-50 rounded border-l-4 border-red-400">
              <p className="text-sm text-red-700 font-bold mb-1">4. 下線部への2つの質問 ★重要★</p>
              <p className="mb-2">I have two questions.</p>
              <p className="mb-1"><span className="bg-white border border-dashed border-slate-400 px-2 rounded text-slate-500">[質問1]</span>?</p>
              <p><span className="bg-white border border-dashed border-slate-400 px-2 rounded text-slate-500">[質問2]</span>?</p>
            </div>

            {/* Closing */}
            <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
              <p className="text-sm text-green-700 font-bold mb-1">5. 結び</p>
              <p>Best wishes,</p>
            </div>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-indigo-200">
        <div className="bg-indigo-600 text-white p-3 text-center font-bold">
          意見論述テンプレート (50〜60語)
        </div>
        <div className="p-6 space-y-4 font-medium text-lg text-slate-800">
          <div className="p-3 bg-indigo-50 rounded border-l-4 border-indigo-400">
            <p className="text-sm text-indigo-700 font-bold mb-1">意見</p>
            <p>I think that <span className="bg-white px-2 rounded text-slate-500">[トピック]</span>.</p>
          </div>
          <div className="p-3 bg-indigo-50 rounded border-l-4 border-indigo-400">
            <p className="text-sm text-indigo-700 font-bold mb-1">理由1</p>
            <p>First, <span className="bg-white px-2 rounded text-slate-500">[理由1]</span>.</p>
          </div>
          <div className="p-3 bg-indigo-50 rounded border-l-4 border-indigo-400">
            <p className="text-sm text-indigo-700 font-bold mb-1">理由2</p>
            <p>Second, <span className="bg-white px-2 rounded text-slate-500">[理由2]</span>.</p>
          </div>
          <div className="p-3 bg-indigo-50 rounded border-l-4 border-indigo-400">
            <p className="text-sm text-indigo-700 font-bold mb-1">結論</p>
            <p>For these reasons, I think that <span className="bg-white px-2 rounded text-slate-500">[トピック]</span>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// テーマデータ（6テーマ）- 日本語訳とチャンク付き
const EMAIL_THEMES = [
  {
    id: 1,
    title: "ボートと野鳥観察",
    underlinedTopic: "a boat",
    alexEmail: "My family and I enjoyed riding a boat on the lake on Saturday. The boat was red, and it was big enough for six people. While on the boat, I saw something interesting. Some people were enjoying bird watching. Do you think more people will enjoy this activity in the future?",
    opinions: {
      agree: {
        ja: "そう思う",
        jaText: "将来もっと多くの人が野鳥観察を楽しむと思います",
        text: "more people will enjoy bird watching in the future",
        chunks: ["more people", "will enjoy", "bird watching", "in the future"]
      },
      somewhat: {
        ja: "増えると思う",
        jaText: "この活動はもっと人気になると思います",
        text: "this activity will become more popular",
        chunks: ["this activity", "will become", "more popular"]
      },
      disagree: {
        ja: "そう思わない",
        jaText: "多くの人がこの趣味を試すとは思いません",
        text: "not many people will try this hobby",
        chunks: ["not many people", "will try", "this hobby"]
      }
    },
    reasons: {
      convenient: {
        ja: "便利だから",
        jaText: "ウェブサイトやアプリで鳥について調べたり学んだりしやすくなっています",
        text: "Websites and apps make it easier to look for and learn about birds",
        chunks: ["Websites and apps", "make it easier", "to look for", "and learn about", "birds"]
      },
      fun: {
        ja: "楽しいから",
        jaText: "自然を見るのはリラックスできて楽しいです",
        text: "It is relaxing and fun to watch nature",
        chunks: ["It is", "relaxing and fun", "to watch", "nature"]
      },
      healthy: {
        ja: "健康に良いから",
        jaText: "外にいることは健康に良いです",
        text: "Being outside is good for your health",
        chunks: ["Being outside", "is good for", "your health"]
      }
    },
    negativeReasons: {
      busy: {
        ja: "忙しいから",
        jaText: "多くの人は仕事や学校で忙しすぎて自然を楽しむ時間がありません",
        text: "Many people are too busy with work or school to enjoy nature",
        chunks: ["Many people", "are too busy", "with work or school", "to enjoy nature"]
      },
      technology: {
        ja: "室内が好きだから",
        jaText: "若い人は外出するよりゲームやスマホを使う方が好きです",
        text: "Young people prefer playing games or using phones to going outside",
        chunks: ["Young people", "prefer playing games", "or using phones", "to going outside"]
      },
      difficult: {
        ja: "難しいから",
        jaText: "鳥の名前を覚えるのは難しく、初心者には退屈かもしれません",
        text: "Learning bird names is difficult and may be boring for beginners",
        chunks: ["Learning bird names", "is difficult", "and may be boring", "for beginners"]
      }
    },
    questions1: {
      reservation: {
        ja: "予約について",
        jaText: "乗るのに予約は必要ですか",
        text: "Do we need to make a reservation to ride it",
        chunks: ["Do we need", "to make", "a reservation", "to ride it"]
      },
      cost: {
        ja: "料金について",
        jaText: "借りるのにいくらかかりますか",
        text: "How much does it cost to rent it",
        chunks: ["How much", "does it cost", "to rent it"]
      },
      time: {
        ja: "時間について",
        jaText: "どのくらいの時間使えますか",
        text: "How long can we use it",
        chunks: ["How long", "can we", "use it"]
      }
    },
    questions2: {
      location: {
        ja: "場所について",
        jaText: "家の近くでどこで見つけられますか",
        text: "Where can we find one near my house",
        chunks: ["Where", "can we find", "one", "near my house"]
      },
      people: {
        ja: "人数について",
        jaText: "何人乗れますか",
        text: "How many people can ride it",
        chunks: ["How many people", "can ride it"]
      },
      items: {
        ja: "持ち物について",
        jaText: "何を持っていくべきですか",
        text: "What should we bring with us",
        chunks: ["What", "should we bring", "with us"]
      }
    }
  },
  {
    id: 2,
    title: "スペイン旅行と昼休み",
    underlinedTopic: "a tour",
    alexEmail: "This summer, I went on a tour to Spain with my friend. It was our first time there, and we stayed for one week. While we were walking around the city, we noticed something interesting. Some shops closed for a few hours in the afternoon. By doing so, staff members can have a long lunch break. Do you think such a break will become popular in Japan?",
    opinions: {
      agree: {
        ja: "そう思う",
        jaText: "長い昼休みは日本で人気になると思います",
        text: "a long lunch break will become popular in Japan",
        chunks: ["a long lunch break", "will become popular", "in Japan"]
      },
      somewhat: {
        ja: "広まるかも",
        jaText: "そのような休憩は一部の会社で一般的になるかもしれません",
        text: "such breaks might become common in some companies",
        chunks: ["such breaks", "might become common", "in some companies"]
      },
      disagree: {
        ja: "そう思わない",
        jaText: "日本の会社は働き方を変えないと思います",
        text: "Japanese companies will not change their work style",
        chunks: ["Japanese companies", "will not change", "their work style"]
      }
    },
    reasons: {
      convenient: {
        ja: "コミュニケーションに良い",
        jaText: "長い昼休みは友人との会話を楽しみやすくし、食事中のコミュニケーションを増やします",
        text: "A long lunch break makes it easier to enjoy conversation with friends",
        chunks: ["A long lunch break", "makes it easier", "to enjoy conversation", "with friends"]
      },
      fun: {
        ja: "リフレッシュできる",
        jaText: "働く人は午後にリフレッシュしてもっと生産的になれます",
        text: "Workers can refresh and become more productive in the afternoon",
        chunks: ["Workers", "can refresh", "and become", "more productive", "in the afternoon"]
      },
      healthy: {
        ja: "健康に良い",
        jaText: "昼食後に休息を取ることは体に良いです",
        text: "Taking a rest after lunch is good for your body",
        chunks: ["Taking a rest", "after lunch", "is good for", "your body"]
      }
    },
    negativeReasons: {
      busy: {
        ja: "仕事が忙しい",
        jaText: "日本の会社は仕事量が多く、長い休憩を取る余裕がありません",
        text: "Japanese companies have too much work and cannot afford long breaks",
        chunks: ["Japanese companies", "have too much work", "and cannot afford", "long breaks"]
      },
      culture: {
        ja: "文化が違う",
        jaText: "日本では短い昼休みで素早く食べることが普通です",
        text: "In Japan it is normal to eat quickly during a short lunch break",
        chunks: ["In Japan", "it is normal", "to eat quickly", "during a short lunch break"]
      },
      customers: {
        ja: "顧客対応がある",
        jaText: "店やオフィスは顧客のために開いている必要があります",
        text: "Shops and offices need to stay open for customers",
        chunks: ["Shops and offices", "need to stay open", "for customers"]
      }
    },
    questions1: {
      reservation: {
        ja: "予約について",
        jaText: "ツアーを事前に予約する必要がありましたか",
        text: "Did you need to book the tour in advance",
        chunks: ["Did you need", "to book", "the tour", "in advance"]
      },
      cost: {
        ja: "料金について",
        jaText: "ツアーの一人あたりの総費用はいくらでしたか",
        text: "How much was the total cost of the tour per person",
        chunks: ["How much", "was the total cost", "of the tour", "per person"]
      },
      time: {
        ja: "期間について",
        jaText: "ツアーは何日間でしたか",
        text: "How many days was the tour",
        chunks: ["How many days", "was the tour"]
      }
    },
    questions2: {
      location: {
        ja: "場所について",
        jaText: "ツアー中にどんな場所を訪れましたか",
        text: "What places did you visit during the tour",
        chunks: ["What places", "did you visit", "during the tour"]
      },
      people: {
        ja: "人数について",
        jaText: "ツアーには何人いましたか",
        text: "How many people were on the tour",
        chunks: ["How many people", "were on", "the tour"]
      },
      items: {
        ja: "食事について",
        jaText: "そこでどんな食べ物を食べましたか",
        text: "What kind of food did you eat there",
        chunks: ["What kind of food", "did you eat", "there"]
      }
    }
  },
  {
    id: 3,
    title: "スポーツセンターと温水プール",
    underlinedTopic: "a sports center",
    alexEmail: "I went to a sports center near the city hall during summer vacation. The sports center opened last year and has three floors. It costs 500 yen per person for 2 hours. While I was there, I saw a notice. A warm water pool will open next week, and visitors can swim even in winter. Do you think the number of such pools will increase in the future?",
    opinions: {
      agree: {
        ja: "そう思う",
        jaText: "将来、温水プールの数は増えると思います",
        text: "the number of warm water pools will increase in the future",
        chunks: ["the number of", "warm water pools", "will increase", "in the future"]
      },
      somewhat: {
        ja: "増えると思う",
        jaText: "より多くのスポーツセンターが温水プールを持つようになると思います",
        text: "more sports centers will have warm water pools",
        chunks: ["more sports centers", "will have", "warm water pools"]
      },
      disagree: {
        ja: "そう思わない",
        jaText: "そのようなプールを作るのは高すぎます",
        text: "it is too expensive to build such pools",
        chunks: ["it is", "too expensive", "to build", "such pools"]
      }
    },
    reasons: {
      convenient: {
        ja: "便利だから",
        jaText: "天気に関係なくいつでも運動できます",
        text: "People can exercise anytime regardless of the weather",
        chunks: ["People", "can exercise", "anytime", "regardless of", "the weather"]
      },
      fun: {
        ja: "楽しいから",
        jaText: "水泳はあらゆる年齢の人にとって楽しい活動です",
        text: "Swimming is a fun activity for people of all ages",
        chunks: ["Swimming", "is a fun activity", "for people", "of all ages"]
      },
      healthy: {
        ja: "健康に良いから",
        jaText: "水泳は健康維持に良いので、寒い時期でもプールを使いたい人が多いです",
        text: "Swimming is good for staying healthy",
        chunks: ["Swimming", "is good for", "staying healthy"]
      }
    },
    negativeReasons: {
      expensive: {
        ja: "お金がかかる",
        jaText: "温水プールは建設と維持に多くの費用がかかります",
        text: "Warm water pools cost a lot of money to build and maintain",
        chunks: ["Warm water pools", "cost a lot of money", "to build and maintain"]
      },
      crowded: {
        ja: "混雑する",
        jaText: "人気のある施設は混雑していてリラックスできません",
        text: "Popular facilities are too crowded to relax",
        chunks: ["Popular facilities", "are too crowded", "to relax"]
      },
      location: {
        ja: "場所が遠い",
        jaText: "多くの人にとって近くにスポーツセンターがありません",
        text: "Many people do not have a sports center near their home",
        chunks: ["Many people", "do not have", "a sports center", "near their home"]
      }
    },
    questions1: {
      reservation: {
        ja: "予約について",
        jaText: "予約は必要ですか",
        text: "Do we need to make a reservation",
        chunks: ["Do we need", "to make", "a reservation"]
      },
      cost: {
        ja: "料金について",
        jaText: "プールを使うのにいくらかかりますか",
        text: "How much does it cost to use the pool",
        chunks: ["How much", "does it cost", "to use", "the pool"]
      },
      time: {
        ja: "営業時間について",
        jaText: "何時に開いて何時に閉まりますか",
        text: "What time does it open and close",
        chunks: ["What time", "does it open", "and close"]
      }
    },
    questions2: {
      location: {
        ja: "場所について",
        jaText: "駅からどうやって行けますか",
        text: "How can I get there from the station",
        chunks: ["How can I", "get there", "from the station"]
      },
      people: {
        ja: "利用者について",
        jaText: "高校生もスポーツセンターを使えますか",
        text: "Can high school students use the sports center",
        chunks: ["Can high school students", "use", "the sports center"]
      },
      items: {
        ja: "名前について",
        jaText: "スポーツセンターの名前は何ですか",
        text: "What is the name of the sports center",
        chunks: ["What is", "the name of", "the sports center"]
      }
    }
  },
  {
    id: 4,
    title: "新スタジアムとラグビー",
    underlinedTopic: "a new stadium",
    alexEmail: "I want to tell you something. My dad and I went to a new stadium last Sunday. It opened two months ago. We watched a rugby game between two university teams there. My dad taught me some of the rules, too. It was my first time, so it was very exciting. I will continue to watch rugby. Do you think more people will watch this sport?",
    opinions: {
      agree: {
        ja: "そう思う",
        jaText: "もっと多くの人がラグビーを見ると思います",
        text: "more people will watch rugby",
        chunks: ["more people", "will watch", "rugby"]
      },
      somewhat: {
        ja: "増えると思う",
        jaText: "ワールドカップの後、ラグビーはもっと人気になると思います",
        text: "rugby will become more popular after the World Cup",
        chunks: ["rugby", "will become", "more popular", "after the World Cup"]
      },
      disagree: {
        ja: "そう思わない",
        jaText: "ラグビーは初心者には理解しにくいです",
        text: "rugby is difficult to understand for beginners",
        chunks: ["rugby", "is difficult", "to understand", "for beginners"]
      }
    },
    reasons: {
      convenient: {
        ja: "観戦しやすい",
        jaText: "ワールドカップは日本で開催され、もっと多くの人がラグビーに興味を持つようになったと思います",
        text: "The World Cup was held in Japan and more people have become interested in rugby",
        chunks: ["The World Cup", "was held", "in Japan", "and more people", "have become interested", "in rugby"]
      },
      fun: {
        ja: "楽しいから",
        jaText: "ラグビーの試合は家族と見てエキサイティングで楽しいです",
        text: "Rugby games are exciting and fun to watch with family",
        chunks: ["Rugby games", "are exciting and fun", "to watch", "with family"]
      },
      healthy: {
        ja: "良い運動になる",
        jaText: "スポーツ観戦は人々をもっと運動したくさせます",
        text: "Watching sports makes people want to exercise more",
        chunks: ["Watching sports", "makes people", "want to exercise", "more"]
      }
    },
    negativeReasons: {
      rules: {
        ja: "ルールが難しい",
        jaText: "ラグビーのルールは複雑で初心者には理解しにくいです",
        text: "Rugby rules are complicated and hard for beginners to understand",
        chunks: ["Rugby rules", "are complicated", "and hard for beginners", "to understand"]
      },
      popular: {
        ja: "他のスポーツの方が人気",
        jaText: "日本では野球やサッカーの方がずっと人気があります",
        text: "Baseball and soccer are much more popular in Japan",
        chunks: ["Baseball and soccer", "are much more popular", "in Japan"]
      },
      access: {
        ja: "見る機会が少ない",
        jaText: "テレビでラグビーの試合を見る機会があまりありません",
        text: "There are not many chances to watch rugby games on TV",
        chunks: ["There are not", "many chances", "to watch rugby games", "on TV"]
      }
    },
    questions1: {
      reservation: {
        ja: "チケットについて",
        jaText: "試合のチケットはどうやって買えますか",
        text: "How can we buy tickets for the games",
        chunks: ["How can we", "buy tickets", "for the games"]
      },
      cost: {
        ja: "料金について",
        jaText: "チケットはいくらですか",
        text: "How much do the tickets cost",
        chunks: ["How much", "do the tickets", "cost"]
      },
      time: {
        ja: "時間について",
        jaText: "ラグビーの試合は通常どのくらい続きますか",
        text: "How long does a rugby game usually last",
        chunks: ["How long", "does a rugby game", "usually last"]
      }
    },
    questions2: {
      location: {
        ja: "座席について",
        jaText: "スタジアムには何席ありますか",
        text: "How many seats does the stadium have",
        chunks: ["How many seats", "does the stadium", "have"]
      },
      people: {
        ja: "距離について",
        jaText: "観客席とフィールドの距離は近いですか",
        text: "Is the distance between the audience and the field close",
        chunks: ["Is the distance", "between the audience", "and the field", "close"]
      },
      items: {
        ja: "設備について",
        jaText: "スタジアムの中にレストランはありますか",
        text: "Are there any restaurants inside the stadium",
        chunks: ["Are there", "any restaurants", "inside the stadium"]
      }
    }
  },
  {
    id: 5,
    title: "料理教室",
    underlinedTopic: "a cooking class",
    alexEmail: "Last weekend, I joined a cooking class with my mother. We learned how to make pasta from a professional chef. The class was held at a community center near our house. We had a great time cooking together. Now I can make dinner for my family. Do you think more young people will take cooking classes in the future?",
    opinions: {
      agree: {
        ja: "そう思う",
        jaText: "将来、もっと多くの若者が料理教室に通うと思います",
        text: "more young people will take cooking classes in the future",
        chunks: ["more young people", "will take", "cooking classes", "in the future"]
      },
      somewhat: {
        ja: "増えると思う",
        jaText: "料理教室は若者の間で人気になると思います",
        text: "cooking classes will become popular among young people",
        chunks: ["cooking classes", "will become popular", "among young people"]
      },
      disagree: {
        ja: "そう思わない",
        jaText: "若者は料理するより食べ物を買う方が好きです",
        text: "young people prefer to buy food instead of cooking",
        chunks: ["young people", "prefer to buy", "food", "instead of cooking"]
      }
    },
    reasons: {
      convenient: {
        ja: "役に立つから",
        jaText: "料理を学ぶことは将来一人暮らしをするのに役立ちます",
        text: "Learning to cook is useful for living alone in the future",
        chunks: ["Learning to cook", "is useful for", "living alone", "in the future"]
      },
      fun: {
        ja: "楽しいから",
        jaText: "友人や家族と料理するのは楽しく、良い思い出を作れます",
        text: "Cooking with friends or family is fun and creates good memories",
        chunks: ["Cooking", "with friends or family", "is fun", "and creates", "good memories"]
      },
      healthy: {
        ja: "健康に良いから",
        jaText: "手作りの食事は外食より健康的です",
        text: "Homemade food is healthier than eating out",
        chunks: ["Homemade food", "is healthier", "than eating out"]
      }
    },
    negativeReasons: {
      busy: {
        ja: "時間がない",
        jaText: "若い人は忙しくて料理を学ぶ時間がありません",
        text: "Young people are too busy to learn how to cook",
        chunks: ["Young people", "are too busy", "to learn", "how to cook"]
      },
      convenience: {
        ja: "便利な食事がある",
        jaText: "コンビニやデリバリーで簡単に食事を手に入れられます",
        text: "It is easy to get food from convenience stores or delivery services",
        chunks: ["It is easy", "to get food", "from convenience stores", "or delivery services"]
      },
      interest: {
        ja: "興味がない",
        jaText: "多くの若者は料理よりも他の趣味に興味があります",
        text: "Many young people are more interested in other hobbies than cooking",
        chunks: ["Many young people", "are more interested", "in other hobbies", "than cooking"]
      }
    },
    questions1: {
      reservation: {
        ja: "予約について",
        jaText: "クラスにはどうやって申し込めますか",
        text: "How can we sign up for the class",
        chunks: ["How can we", "sign up for", "the class"]
      },
      cost: {
        ja: "料金について",
        jaText: "1回のレッスンはいくらですか",
        text: "How much does one lesson cost",
        chunks: ["How much", "does one lesson", "cost"]
      },
      time: {
        ja: "時間について",
        jaText: "各クラスはどのくらいの長さですか",
        text: "How long is each class",
        chunks: ["How long", "is each class"]
      }
    },
    questions2: {
      location: {
        ja: "場所について",
        jaText: "料理教室はどこで開かれていますか",
        text: "Where is the cooking class held",
        chunks: ["Where is", "the cooking class", "held"]
      },
      people: {
        ja: "人数について",
        jaText: "1回のクラスに何人参加できますか",
        text: "How many people can join one class",
        chunks: ["How many people", "can join", "one class"]
      },
      items: {
        ja: "持ち物について",
        jaText: "クラスに何を持っていくべきですか",
        text: "What should we bring to the class",
        chunks: ["What", "should we bring", "to the class"]
      }
    }
  },
  {
    id: 6,
    title: "図書館の利用",
    underlinedTopic: "a library",
    alexEmail: "Yesterday, I visited a library in my town for the first time. It was renovated last month and now has a nice cafe inside. I borrowed some books about history and read them in the reading area. It was very quiet and comfortable. I will go there again next weekend. Do you think more people will use libraries in the future?",
    opinions: {
      agree: {
        ja: "そう思う",
        jaText: "将来もっと多くの人が図書館を使うと思います",
        text: "more people will use libraries in the future",
        chunks: ["more people", "will use", "libraries", "in the future"]
      },
      somewhat: {
        ja: "増えると思う",
        jaText: "図書館は勉強する人気の場所であり続けると思います",
        text: "libraries will remain popular places for studying",
        chunks: ["libraries", "will remain", "popular places", "for studying"]
      },
      disagree: {
        ja: "そう思わない",
        jaText: "最近の人々はオンラインで本を読む方が好きです",
        text: "people prefer to read books online these days",
        chunks: ["people prefer", "to read books", "online", "these days"]
      }
    },
    reasons: {
      convenient: {
        ja: "便利だから",
        jaText: "図書館は無料で、選べる本がたくさんあります",
        text: "Libraries are free and have many books to choose from",
        chunks: ["Libraries", "are free", "and have", "many books", "to choose from"]
      },
      fun: {
        ja: "快適だから",
        jaText: "図書館は静かで快適な勉強やリラックスの場所です",
        text: "Libraries are quiet and comfortable places to study or relax",
        chunks: ["Libraries", "are quiet and comfortable", "places", "to study or relax"]
      },
      healthy: {
        ja: "勉強に良いから",
        jaText: "本を読むことは新しいことを学び、知識を向上させるのに役立ちます",
        text: "Reading books helps people learn new things and improve their knowledge",
        chunks: ["Reading books", "helps people", "learn new things", "and improve", "their knowledge"]
      }
    },
    negativeReasons: {
      digital: {
        ja: "デジタルが便利",
        jaText: "インターネットで簡単に情報を見つけられるので図書館に行く必要がありません",
        text: "People can easily find information on the Internet so they do not need to go to libraries",
        chunks: ["People can easily", "find information", "on the Internet", "so they do not need", "to go to libraries"]
      },
      ebooks: {
        ja: "電子書籍がある",
        jaText: "多くの人はスマホやタブレットで本を読む方が便利だと思います",
        text: "Many people think it is more convenient to read books on smartphones or tablets",
        chunks: ["Many people think", "it is more convenient", "to read books", "on smartphones or tablets"]
      },
      location: {
        ja: "場所が遠い",
        jaText: "図書館は家から遠くて行くのに時間がかかります",
        text: "Libraries are far from home and it takes time to get there",
        chunks: ["Libraries are far", "from home", "and it takes time", "to get there"]
      }
    },
    questions1: {
      reservation: {
        ja: "登録について",
        jaText: "図書館カードはどうやって作れますか",
        text: "How can we get a library card",
        chunks: ["How can we", "get", "a library card"]
      },
      cost: {
        ja: "料金について",
        jaText: "本を借りるのは無料ですか",
        text: "Is it free to borrow books",
        chunks: ["Is it free", "to borrow", "books"]
      },
      time: {
        ja: "時間について",
        jaText: "開館時間は何時ですか",
        text: "What are the opening hours",
        chunks: ["What are", "the opening hours"]
      }
    },
    questions2: {
      location: {
        ja: "場所について",
        jaText: "図書館はどこにありますか",
        text: "Where is the library located",
        chunks: ["Where is", "the library", "located"]
      },
      people: {
        ja: "冊数について",
        jaText: "一度に何冊借りられますか",
        text: "How many books can we borrow at once",
        chunks: ["How many books", "can we borrow", "at once"]
      },
      items: {
        ja: "設備について",
        jaText: "図書館でWi-Fiは使えますか",
        text: "Is there Wi-Fi available in the library",
        chunks: ["Is there", "Wi-Fi", "available", "in the library"]
      }
    }
  }
];

function PracticeSection({ mode }) {
  // Email State - Interactive mode
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [opinionChoice, setOpinionChoice] = useState("agree");
  const [reasonChoice, setReasonChoice] = useState("convenient");
  const [question1Choice, setQuestion1Choice] = useState("reservation");
  const [question2Choice, setQuestion2Choice] = useState("location");

  // Opinion Essay State
  const [opTopic, setOpTopic] = useState("students should use smartphones for studying");
  const [opStance, setOpStance] = useState("think");
  const [opReason1, setOpReason1] = useState("it is convenient for checking words");
  const [opReason2, setOpReason2] = useState("they can watch videos to learn");

  const theme = EMAIL_THEMES[selectedTheme];

  const generateEmail = () => {
    const opinion = theme.opinions[opinionChoice]?.text || "";
    const reasonsToUse = opinionChoice === 'disagree' && theme.negativeReasons ? theme.negativeReasons : theme.reasons;
    const reason = reasonsToUse[reasonChoice]?.text || "";
    const q1 = theme.questions1[question1Choice]?.text || "";
    const q2 = theme.questions2[question2Choice]?.text || "";

    return `Hi, Alex!
Thank you for your e-mail.
I think ${opinion}. ${reason}.
I have two questions. ${q1}? ${q2}?
Best wishes,`;
  };

  const generateEssay = () => {
    const stanceText = opStance === "think" ? "think" : "do not think";
    return `I ${stanceText} that ${opTopic}.
First, ${opReason1}.
Second, ${opReason2}.
For these reasons, I ${stanceText} that ${opTopic}.`;
  };

  const currentText = mode === 'email' ? generateEmail() : generateEssay();
  const wordCount = currentText.split(/\s+/).filter(w => w.length > 0).length;
  const targetCount = mode === 'email' ? "40-50" : "50-60";

  if (mode === 'email') {
    return (
      <div className="space-y-6 animate-fade-in">
        {/* テーマ選択 */}
        <div className="bg-white p-4 rounded-xl shadow border border-green-200">
          <label className="block text-sm font-bold text-green-800 mb-2">📚 テーマを選択</label>
          <select
            value={selectedTheme}
            onChange={e => {
              setSelectedTheme(Number(e.target.value));
              setOpinionChoice("agree");
              setReasonChoice("convenient");
              setQuestion1Choice("reservation");
              setQuestion2Choice("location");
            }}
            className="w-full p-3 border-2 border-green-300 rounded-lg text-lg font-medium focus:ring-2 focus:ring-green-500 outline-none"
          >
            {EMAIL_THEMES.map((t, i) => (
              <option key={t.id} value={i}>{t.id}. {t.title}</option>
            ))}
          </select>
        </div>

        {/* Alexのメール表示 */}
        <div className="bg-slate-100 p-4 rounded-xl border border-slate-300">
          <p className="text-xs font-bold text-slate-500 mb-2">💌 Alexからのメール（下線部: <span className="underline font-bold text-red-600">{theme.underlinedTopic}</span>）</p>
          <div className="bg-white p-3 rounded-lg text-sm text-slate-700 leading-relaxed">
            <p className="mb-2">Hi!</p>
            <p>
              {theme.alexEmail.split(theme.underlinedTopic).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="text-red-600 font-bold underline">{theme.underlinedTopic}</span>
                  )}
                </span>
              ))}
            </p>
            <p className="mt-2">Your friend,<br />Alex</p>
          </div>
        </div>

        {/* 回答作成エリア */}
        <div className="bg-white p-6 rounded-xl shadow border border-green-200">
          <h3 className="font-bold text-lg mb-4 text-green-800 flex items-center gap-2">
            <Mail className="w-5 h-5" />
            返信メール作成
          </h3>

          <div className="grid gap-4">
            {/* 意見選択 + 単語並び替え */}
            <SentenceBuilder
              label="1️⃣ 意見を選択"
              color="blue"
              options={theme.opinions}
              selectedKey={opinionChoice}
              onSelect={setOpinionChoice}
              prefix="I think"
              suffix="."
            />

            {/* 理由選択 + 単語並び替え */}
            <SentenceBuilder
              label={`2️⃣ 理由を選択${opinionChoice === 'disagree' ? '（反対の理由）' : ''}`}
              color="green"
              options={opinionChoice === 'disagree' && theme.negativeReasons ? theme.negativeReasons : theme.reasons}
              selectedKey={reasonChoice}
              onSelect={setReasonChoice}
              suffix="."
            />

            {/* 質問1選択 + 単語並び替え */}
            <SentenceBuilder
              label={`3️⃣ 質問1を選択（${theme.underlinedTopic}について）`}
              color="red"
              options={theme.questions1}
              selectedKey={question1Choice}
              onSelect={setQuestion1Choice}
              suffix="?"
              isBordered={true}
            />

            {/* 質問2選択 + 単語並び替え */}
            <SentenceBuilder
              label={`4️⃣ 質問2を選択（${theme.underlinedTopic}について）`}
              color="orange"
              options={theme.questions2}
              selectedKey={question2Choice}
              onSelect={setQuestion2Choice}
              suffix="?"
              isBordered={true}
            />
          </div>
        </div>
        <OutputArea text={currentText} wordCount={wordCount} target={targetCount} />
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white p-6 rounded-xl shadow border border-indigo-200">
        <h3 className="font-bold text-lg mb-4 text-indigo-800 flex items-center gap-2">
          <PenTool className="w-5 h-5" />
          意見論述作成
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1">トピック (Do you think that...)</label>
            <input type="text" value={opTopic} onChange={e => setOpTopic(e.target.value)} className="w-full p-2 border rounded" />
          </div>

          <div className="flex gap-2 mb-4">
            <button onClick={() => setOpStance('think')} className={`px-4 py-1 rounded text-sm ${opStance === 'think' ? 'bg-indigo-600 text-white' : 'bg-slate-100'}`}>Yes</button>
            <button onClick={() => setOpStance('not_think')} className={`px-4 py-1 rounded text-sm ${opStance === 'not_think' ? 'bg-red-500 text-white' : 'bg-slate-100'}`}>No</button>
          </div>

          <div className="bg-indigo-50 p-3 rounded-lg space-y-3">
            <div>
              <label className="block text-xs font-bold text-indigo-800 mb-1">理由 1</label>
              <input type="text" value={opReason1} onChange={e => setOpReason1(e.target.value)} className="w-full p-2 border border-indigo-300 rounded focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
            <div>
              <label className="block text-xs font-bold text-indigo-800 mb-1">理由 2</label>
              <input type="text" value={opReason2} onChange={e => setOpReason2(e.target.value)} className="w-full p-2 border border-indigo-300 rounded focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
          </div>
        </div>
      </div>
      <OutputArea text={currentText} wordCount={wordCount} target={targetCount} />
    </div>
  );
}

function OutputArea({ text, wordCount, target }) {
  const [min, max] = target.split('-').map(Number);
  const isOk = wordCount >= min && wordCount <= max;

  return (
    <div className="mt-4 pt-4 border-t border-slate-200">
      <div className="flex justify-between items-end mb-2">
        <h3 className="font-bold text-slate-700">完成原稿</h3>
        <span className={`text-xs font-bold px-2 py-1 rounded ${isOk ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {wordCount} words (目標: {target})
        </span>
      </div>
      <div className="bg-slate-800 text-white p-4 rounded-lg font-mono text-base leading-relaxed whitespace-pre-wrap">
        {text}
      </div>
    </div>
  );
}

// 単語並び替えコンポーネント
function SentenceBuilder({ label, color, options, selectedKey, onSelect, prefix = "", suffix = "", isBordered = false }) {
  const [builtSentence, setBuiltSentence] = useState([]);
  const [availableChunks, setAvailableChunks] = useState([]);

  const selectedOption = options[selectedKey];
  const correctChunks = selectedOption?.chunks || [];
  const jaText = selectedOption?.jaText || "";

  // シャッフル関数
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // 選択が変わったらリセット
  React.useEffect(() => {
    setBuiltSentence([]);
    setAvailableChunks(shuffleArray(correctChunks));
  }, [selectedKey, JSON.stringify(correctChunks)]);

  // 単語をクリックして追加
  const addChunk = (chunk, index) => {
    setBuiltSentence([...builtSentence, chunk]);
    setAvailableChunks(availableChunks.filter((_, i) => i !== index));
  };

  // 作成中の文から単語を戻す
  const removeChunk = (chunk, index) => {
    setAvailableChunks([...availableChunks, chunk]);
    setBuiltSentence(builtSentence.filter((_, i) => i !== index));
  };

  // リセット
  const reset = () => {
    setBuiltSentence([]);
    setAvailableChunks(shuffleArray(correctChunks));
  };

  // 正解チェック
  const isCorrect = builtSentence.length === correctChunks.length &&
    builtSentence.join(" ") === correctChunks.join(" ");

  const bgColor = `bg-${color}-50`;
  const borderColor = isBordered ? `border-2 border-${color}-200` : "";
  const textColor = `text-${color}-800`;
  const selectBorder = `border-${color}-300`;

  return (
    <div className={`${bgColor} p-4 rounded-lg ${borderColor}`}>
      {/* ドロップダウン選択 */}
      <label className={`block text-sm font-bold ${textColor} mb-2`}>{label}</label>
      <select
        value={selectedKey}
        onChange={e => onSelect(e.target.value)}
        className={`w-full p-2 border ${selectBorder} rounded-lg focus:ring-2 outline-none mb-3`}
      >
        {Object.entries(options).map(([key, val]) => (
          <option key={key} value={key}>{val.ja}</option>
        ))}
      </select>

      {/* 日本語訳表示 */}
      <div className="bg-yellow-100 p-2 rounded mb-3 border border-yellow-300">
        <p className="text-xs text-yellow-800 font-bold mb-1">📖 日本語の意味：</p>
        <p className="text-sm text-yellow-900">{jaText}</p>
      </div>

      {/* 単語選択エリア */}
      <div className="bg-white p-3 rounded border border-slate-200 mb-2">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs text-slate-500 font-bold">🔀 単語を順番にクリック：</p>
          <button
            onClick={reset}
            className="text-xs bg-slate-200 hover:bg-slate-300 px-2 py-1 rounded"
          >
            リセット
          </button>
        </div>
        <div className="flex flex-wrap gap-2 min-h-[40px]">
          {availableChunks.map((chunk, i) => (
            <button
              key={i}
              onClick={() => addChunk(chunk, i)}
              className={`px-3 py-1.5 bg-${color}-100 hover:bg-${color}-200 text-${color}-800 rounded-lg text-sm font-medium transition shadow-sm`}
            >
              {chunk}
            </button>
          ))}
          {availableChunks.length === 0 && builtSentence.length > 0 && (
            <span className="text-green-600 text-sm">✅ 全ての単語を使いました！</span>
          )}
        </div>
      </div>

      {/* 作成中の文 */}
      <div className={`p-3 rounded border-2 ${isCorrect ? 'bg-green-50 border-green-400' : 'bg-slate-50 border-slate-300'}`}>
        <p className="text-xs text-slate-500 font-bold mb-2">📝 作成中の文（クリックで戻す）：</p>
        <div className="flex flex-wrap gap-1 items-center min-h-[32px]">
          {prefix && <span className="text-slate-600 font-medium">{prefix}</span>}
          {builtSentence.map((chunk, i) => (
            <button
              key={i}
              onClick={() => removeChunk(chunk, i)}
              className="px-2 py-1 bg-slate-200 hover:bg-red-100 text-slate-700 rounded text-sm transition"
            >
              {chunk}
            </button>
          ))}
          {builtSentence.length === 0 && <span className="text-slate-400 text-sm italic">ここに文が表示されます...</span>}
          {suffix && builtSentence.length > 0 && <span className="text-slate-600 font-medium">{suffix}</span>}
        </div>
        {isCorrect && (
          <p className="mt-2 text-green-600 text-sm font-bold">🎉 正解！</p>
        )}
      </div>
    </div>
  );
}