import { ConfigProvider } from "antd";

const InputWithIcon = ({ type, iconPath1, placeholder, id }) => {
  return (
    <ConfigProvider
  theme={{
    token: {
      colorError:'#718096',
      colorPrimary:'#718096',
    },
  
  }}
>
    <div className="input input-bordered flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
        <path d={iconPath1}></path>
      </svg>
      <input type={type} className="input-field grow" placeholder={placeholder} id={id}  />
    </div>
    </ConfigProvider>
  );
};
export default InputWithIcon;