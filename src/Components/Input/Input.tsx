import { InputHTMLAttributes } from "react"
import { LucideIcon } from "lucide-react"
import "./style.css"

type InputProps = InputHTMLAttributes<HTMLInputElement>&{
    Icon?: LucideIcon
}

export function Input({Icon, ...rest}:InputProps){
    return(
        <div>
            <input {...rest}/>
        </div>
    )
}