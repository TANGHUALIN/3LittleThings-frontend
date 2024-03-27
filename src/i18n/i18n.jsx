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
                    language:'English',
                    about:'About us',
                    theme:'Theme',
                    signup:'Sign up',
                    forgotPassword:'Forgot password?',
                    login:'Log in',
                    welcome:'',
                    diary:'Diary',
                    account:'Account',
                    changePassword:'Change Password',
                    logout:'Log out',
                    timeline:'Time Line',
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
                },
            },
            jp:{
                translation:{
                    language:'日本語',
                    about:'サイトについて',
                    theme:'テーマ',
                    signup:'登録',
                    forgotPassword:'パスワードを忘れた?',
                    login:'ログイン',
                    welcome:'',
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
                    signupUnknownErrorMsg:'未知のエラー'
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