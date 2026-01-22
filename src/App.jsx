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
              <span><strong>状況：</strong> 友人や知人からのメールに返信を書く。</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span><strong>タスク：</strong> メールの中にある<span className="text-red-600 font-bold">質問</span>に答える。</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span><strong>語数：</strong> 40語 〜 50語程度。（意見論述より短い！）</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-xl">
          <h4 className="font-bold text-blue-800 mb-2">評価のポイント</h4>
          <p className="text-slate-700 text-sm leading-relaxed">
            最も重要なのは<strong>「相手の質問に的確に答えているか」</strong>です。
            メールのフォーマット（挨拶・結び）を守りつつ、自然な会話文で返信しましょう。
            難しい単語を使う必要はありません。
          </p>
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
              <p>Hi <span className="bg-white border border-dashed border-slate-400 px-2 rounded text-slate-500">[相手の名前]</span>,</p>
            </div>

            {/* Opening */}
            <div className="p-3 bg-slate-50 rounded border-l-4 border-slate-400">
              <p className="text-sm text-slate-500 font-bold mb-1">2. 書き出し（定型文）</p>
              <p>Thanks for your email.</p>
            </div>

            {/* Transition */}
            <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-400">
              <p className="text-sm text-blue-700 font-bold mb-1">3. 本題へ</p>
              <p>You asked me about <span className="bg-white border border-dashed border-slate-400 px-2 rounded text-slate-500">[トピック]</span>.</p>
            </div>

            {/* Body */}
            <div className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-400">
              <p className="text-sm text-yellow-700 font-bold mb-1">4. 回答 ＆ 詳細</p>
              <p className="mb-2"><span className="bg-white border border-dashed border-slate-400 px-2 rounded text-slate-500">[質問への答え]</span>.</p>
              <p>Also, <span className="bg-white border border-dashed border-slate-400 px-2 rounded text-slate-500">[理由や詳細]</span>.</p>
            </div>

            {/* Closing */}
            <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
              <p className="text-sm text-green-700 font-bold mb-1">5. 結び</p>
              <p>Your friend,</p>
              <p><span className="bg-white border border-dashed border-slate-400 px-2 rounded text-slate-500">[自分の名前]</span></p>
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

function PracticeSection({ mode }) {
  // Email State
  const [friendName, setFriendName] = useState("Alex");
  const [emailTopic, setEmailTopic] = useState("my plans for next weekend");
  const [emailAnswer, setEmailAnswer] = useState("I am going to visit my grandmother");
  const [emailDetail, setEmailDetail] = useState("she lives near the sea and makes good cookies");
  const [myName, setMyName] = useState("Yuki");

  // Opinion State
  const [opTopic, setOpTopic] = useState("students should use smartphones for studying");
  const [opStance, setOpStance] = useState("think");
  const [opReason1, setOpReason1] = useState("it is convenient for checking words");
  const [opReason2, setOpReason2] = useState("they can watch videos to learn");

  const generateEmail = () => {
    return `Hi ${friendName},
Thanks for your email.
You asked me about ${emailTopic}.
${emailAnswer}.
Also, ${emailDetail}.
Your friend,
${myName}`;
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
        <div className="bg-white p-6 rounded-xl shadow border border-green-200">
          <h3 className="font-bold text-lg mb-4 text-green-800 flex items-center gap-2">
            <Mail className="w-5 h-5" />
            返信メール作成
          </h3>
          
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">相手の名前</label>
                <input type="text" value={friendName} onChange={e => setFriendName(e.target.value)} className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">自分の名前</label>
                <input type="text" value={myName} onChange={e => setMyName(e.target.value)} className="w-full p-2 border rounded" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1">メールのトピック (You asked me about...)</label>
              <input type="text" value={emailTopic} onChange={e => setEmailTopic(e.target.value)} className="w-full p-2 border rounded" placeholder="例: summer vacation plans" />
            </div>

            <div className="bg-green-50 p-3 rounded-lg space-y-3">
              <div>
                <label className="block text-xs font-bold text-green-800 mb-1">質問への答え (I think... / I usually...)</label>
                <input type="text" value={emailAnswer} onChange={e => setEmailAnswer(e.target.value)} className="w-full p-2 border border-green-300 rounded focus:ring-2 focus:ring-green-500 outline-none" placeholder="質問に対する直接的な答え" />
              </div>
              <div>
                <label className="block text-xs font-bold text-green-800 mb-1">詳細・理由 (Because... / Also,...)</label>
                <input type="text" value={emailDetail} onChange={e => setEmailDetail(e.target.value)} className="w-full p-2 border border-green-300 rounded focus:ring-2 focus:ring-green-500 outline-none" placeholder="答えを補足する情報" />
              </div>
            </div>
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