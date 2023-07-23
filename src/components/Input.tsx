import { ComponentPropsWithoutRef, LegacyRef, forwardRef } from "react"
import { twMerge } from "tailwind-merge"

interface InputProps extends ComponentPropsWithoutRef<"input"> {
    error?: boolean
    errorMassage?: string
}

function Input(
    {className, error, errorMassage, ...props }: InputProps,
    ref: LegacyRef<HTMLInputElement> | undefined
) {
    const inputClassName = twMerge(
        className,
        "rounded-lg border border-gray-300 bg-white p-2 text-sm font-normal text-primaryDarker placeholder-black placeholder-opacity-20 outline-none transition-all",
        error ? "border-red-500" : "focus:ring-1 focus:ring-primary"
    )

    return (
        <div className="flex w-full flex-col">
            <input ref={ref} className={inputClassName} {...props} />
            {error && errorMassage && (
                <span className="mt-1 text-xs text-red-400">{errorMassage}</span>
            )}
        </div>
    )
}

export default forwardRef(Input)