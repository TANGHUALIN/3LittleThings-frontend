import App from "../App"
import SideNav from "../components/sideNav"
import CalendarComponent from "../components/calendar"
import HeadNav from "../components/headNav"
import ClassificationPulldown from "../components/classification"
import Diary from "../components/diarySample"
import SiteTitle from "../components/siteTitle"
import SampleDiaries from "../components/sampleDiaries"
import SignupBox from "../components/SignupBox"
const TopPage=()=>{
    return <div>this is toppage

<SiteTitle />
<App />
<SideNav />
<HeadNav />
<ClassificationPulldown />
<SignupBox />
    </div>

}
export default TopPage;