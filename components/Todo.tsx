"use client"
import clsx from "clsx";
import { useState } from "react";

export interface TodoProps{
    title : string;
    description : string;
    status : boolean;
    date : string
}

export default function Todo({ title, description, status,  date} : TodoProps) {

    const [ descriptionVisibility, setDescriptionVisibility ] = useState(false);
    const [ complete, setComplete ] = useState(false);

    return(
        <div>
            <div className=" flex justify-between px-5 py-2 shadow-lg w-1/2 mt-2">
                <div className=" flex justify-center items-center min-w-12 mr-2">
                    <input type="checkbox" onChange={() => setComplete(!complete)} />
                </div>
                <div className="text-blue-600">{title}</div>
                <div className=" min-w-24 flex justify-center items-center">{date}</div>
                <div className=" cursor-pointer border-2 px-2" onClick={() => setDescriptionVisibility((description) => !description)}>
                    {descriptionVisibility ? 'X' : '>'}
                </div>
            </div>
            <div className={clsx(
                ' px-5 py-2 shadow-lg w-1/2 border-l border-r border-b border-gray-700',
                {'hidden' : descriptionVisibility === false}
            )}>
                <DropDownDescription title={title} description={description} status={complete} date={date}/>
            </div>
        </div>
    )
}


const DropDownDescription = ({title, description, status, date} : TodoProps) =>  {
    return(
        <table>
            <tbody>
                <RowInTable title="Title" right={title}/>
                <RowInTable title={"Description"} right={description}/>
                <RowInTable title="Status" right={status ? "Done" : "Incomplete"} />
                <RowInTable title="To be completed by " right={date}/>
            </tbody>
        </table>
    )
}


const RowInTable = ({title, right} : {title : string , right : string}) => {
    return(
        <tr className=" border-2 border-black">
            <td className=" pr-20 border-2 pl-2 border-black">{title}</td>
            <td className=" text-gray-500 pl-2">{right}</td>
        </tr>
    )
}