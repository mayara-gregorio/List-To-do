import { ButtonHTMLAttributes } from "react"
import { LucideIcon } from "lucide-react"
import  "./style.css"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>&{
    title?: string
    color: string
    Icon?: LucideIcon
}

export function Button({title, color, Icon, ...rest}: ButtonProps){
    return(
        <div id="btn">
            <button style={{backgroundColor: color}}{ ...rest}>
                {Icon && <Icon/>}
                {title}
            </button>
        </div>
    )
}