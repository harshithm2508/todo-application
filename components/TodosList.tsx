import Todo from "./Todo"
import { TodoProps } from "./Todo";

const todos : TodoProps[] = [
    {
        title: "Complete Assignment",
        description: "Finish the math assignment for chapter 3.",
        status: true,
        date: "24-12-2024",
    },
    {
        title: "Grocery Shopping",
        description: "Buy vegetables, fruits, and snacks.",
        status: false,
        date: "25-12-2024",
    },
    {
        title: "Team Meeting",
        description: "Discuss project milestones with the team.",
        status: true,
        date: "26-12-2024",
    },
    {
        title: "Doctor's Appointment",
        description: "Visit Dr. Smith for a routine check-up.",
        status: false,
        date: "27-12-2024",
    },
    {
        title: "Read Book",
        description: "Read at least 50 pages of the new novel.",
        status: true,
        date: "28-12-2024",
    },
    {
        title: "Gym Session",
        description: "Attend the morning yoga class.",
        status: false,
        date: "29-12-2024",
    },
    {
        title: "Write Blog",
        description: "Draft a blog post on 'Importance of Time Management.'",
        status: false,
        date: "30-12-2024",
    },
    {
        title: "Call Mom",
        description: "Catch up with mom and discuss weekend plans.",
        status: true,
        date: "31-12-2024",
    },
    {
        title: "Plan Vacation",
        description: "Research destinations and create an itinerary.",
        status: false,
        date: "01-01-2025",
    },
    {
        title: "Organize Desk",
        description: "Clean and organize the workspace.",
        status: true,
        date: "02-01-2025",
    },
];


export default function TodosList(){
    return(
        <div>
            <div className=" font-semibold text-3xl mt-2">
                Your Todos :
            </div>
            <div className=" flex flex-col mt-5 ">
                {
                    todos.length === 0 ? "You don't have todos. Go buy some Biryani have it and take rest" : 
                    todos.map(todo => {
                        return <div>
                            <Todo title={todo.title} description={todo.description} status={todo.status} date={todo.date}/>
                        </div>
                    })
                }
            </div>
        </div>
    )
}