import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; 
import { initReactI18next } from 'react-i18next';

i18n
.use(LanguageDetector)
.use(initReactI18next).init(
    {
        resources:{
            en:{
                translation:{
                    language:'Language',
                    about:'About us',
                    theme:'Theme',
                    signup:'Sign up',
                    forgotPassword:'Forgot password?',
                    login:'Log in',
                    welcomeMsg:'Welcome to 3LittleThings!\nStart writing your first easy record easy review diary.',
                    diary:'Diary',
                    account:'Account',
                    changePassword:'Change Password',
                    logout:'Log out',
                    timeline:'Timeline',
                    favorite:'Favorite',
                    todoList:'TODO List',
                    newdiary:'New diary...',
                    default:'Default',
                    work:'Work',
                    study:'Study',
                    life:'Life',
                    email:'Email',
                    password:'Password',
                    submit:'Submit',
                    enterPasswordAgainMsg:'Please enter your password again.',
                    invalidInput:'Invalid input',
                    displayPassword:'Display the password.',
                    emailIsNotValid:'Your email address is not valid.Please enter a valid email address.',
                    pleaseInputEmail:'Please enter your email.',
                    pleaseInputPassword:'Please enter your password.',
                    logoutConfirmMsg:'Are you sure you want to log out?',
                    yes:'Yes',
                    no:'No',
                    aboutSite:'About Site',
                    passwordMatchMsg:'Passwords match.',
                    passwordUnmatchMsg:'Passwords do not match.Please enter your password again.',
                    passwordConfirm:'Confirm password',
                    signupSuccessMsg:'Registration successful',
                    signupSuccessDetailedMsg:'Please check your email and click the verification link to complete the login verification.',
                    signupFailMsg:'Registration failed',
                    emailRegisteredMsg:'This email has already been registered. Please return to the toppage to log in.',
                    serverErrorMsg:'Server error occurred. Please try again later.',
                    signupTwiceMsg:'Please do not attempt to register repeatedly within five minutes. Check your email and click the link to complete registration. If you have not received the email, please try again in five minutes.',
                    introductionMsg:'Record your daily events, inspirations, and thoughts in study, work, and life effortlessly, just like sending messages. Review your past easily in a timeline format.',
                    loginFailed:'Login failed',
                    notRegisteredMsg:'This email is not registered.',
                    search:'Search',
                },
            },
            jp:{
                translation:{
                    language:'言語',
                    about:'サイトについて',
                    theme:'テーマ',
                    signup:'登録',
                    forgotPassword:'パスワードを忘れた?',
                    login:'ログイン',
                    welcomeMsg:'3LittleThingsヘようこそ！\n書きやすくて振り返りやすい日記を書き始めましょう。',
                    diary:'日記',
                    account:'アカウント',
                    changePassword:'パスワードの変更',
                    logout:'ログアウト',
                    timeline:'タイムライン',
                    favorite:'いいね',
                    todoList:'TODOリスト',
                    newdiary:'新しい日記...',
                    default:'デフォルト',
                    work:'仕事',
                    study:'学習',
                    life:'生活',
                    email:'メールアドレス',
                    password:'パスワード',
                    submit:'提出',
                    enterPasswordAgainMsg:'パスワードをもう一度入力してください。',
                    invalidInput:'無効の入力',
                    displayPassword:'パスワードを表示する',
                    emailIsNotValid:'無効のメールアドレスです。もう一度確認してください。',
                    pleaseInputPassword:'パスワードを入力してください。',
                    pleaseInputEmail:'メールアドレスを入力してください。',
                    logoutConfirmMsg:'ログアウトしてもよろしいですか？',
                    yes:'はい',
                    no:'いいえ',
                    aboutSite:'サイトについて',
                    passwordMatchMsg:'パスワードが一致しています。',
                    passwordUnmatchMsg:'パスワードが一致しません。パスワードをもう一度入力してください。',
                    passwordConfirm:'パスワードの確認',
                    signupSuccessMsg:'登録成功',
                    signupSuccessDetailedMsg:'メールを確認して、確認リンクをクリックしてログイン認証を完了してください。',
                    signupFailMsg:'登録失敗',
                    emailRegisteredMsg:'このメールアドレスはすでに登録されています。トップページに戻ってログインしてください。',
                    serverErrorMsg:'サーバーエラーが発生しました。しばらくしてからもう一度お試しください。',
                    signupUnknownErrorMsg:'未知のエラー',
                    signupTwiceMsg:'5分間以内に繰り返し登録しないでください。メールを確認し、リンクをクリックして登録を完了してください。メールが届かない場合は、5分後に再試行してください。',
                    diary2:`公園で散歩した。\n昼ご飯に友達と一緒にピクニックをした。\n読書をした。`,
                    diary6:`コーヒーと豆乳を混ぜて美味しい。\nコーヒーとココナッツミルクを混ぜて美味しい。\n`,
                    diary3:`野菜を食べた。\n早起きできた。\n家事をやった。`,
                    diary4:`仕事を完成した。\n遅刻しなかった。\nお母さんと通話した。\n料理を作ってレシピをアップロードした。`,
                    diary5:`美術館に行った。\n料理を作った。\nおいしいかき氷を食べた。`,
                    diary1:`友達と一緒にカフェで美味しいケーキを食べながらおしゃべりをした。\n映画を観ました。\n数学の宿題を完成した。`,
                    diary7:`ボランティアをやった。\n子供と一緒にボールを遊んだ。\nカフェで勉強した。`,
                    diary8:`漫画を読んだ。\nお皿を洗った。`,
                    introductionMsg:`勉強や仕事、生活における日常の出来事、インスピレーション、そして考えを簡単に、メッセージを送るように記録できます。\n過去をタイムライン形で簡単に振り返ることも可能にします。`,
                    loginFailed:'ログイン失敗',
                    notRegisteredMsg:'このメールアドレスは登録されていません。',
                    search:'検索',

                },
            },

        

        },
        lng:'jp',
        interpolation:{
            escapeValue:false,
        },

    }
);
export default i18n;