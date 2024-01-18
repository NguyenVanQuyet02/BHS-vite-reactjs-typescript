import { useState } from "react";

export default function useToggleValue(): {
    value: boolean;
    handleToggle:()=>void
}{
    const [value, setValue] = useState(false);
    const handleToggle= () => {
        setValue(value => !value);
    }
    return {
        value,handleToggle
    }
}