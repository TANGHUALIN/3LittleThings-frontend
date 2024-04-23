import { Form } from "antd"

const NewDiary=()=>{
const onFinish=(formValue)=>{
    console.log(formValue)
    const {content,favoriteState,cid}=formValue
    const reqData={
        content,
        favoriteState,
        cid,
    }

}

    return(
        <Form onFinish={onFinish}>
            <input name="content" />
            <input name="favoriteState" />
            <input name="cid" />
        </Form>
    )
}