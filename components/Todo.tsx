import clsx from "clsx";

export interface TodoProps{
    title : string;
    description : string;
    status : boolean;
    date : string
}

export default function Todo({ title, description, status,  date} : TodoProps) {
    return(
        <div className=" flex justify-between px-5 py-2 shadow-lg w-1/2 mt-2">
            <div className=" flex justify-center items-center min-w-12 mr-2">
                <input type="checkbox" />
            </div>
            <div className={
                clsx(status === true ? "text-green-500 font-bold" : "text-red-500 font-bold") 
            }>{title}</div>
            <div className=" min-w-24 flex justify-center items-center">{date}</div>
        </div>
    )
}