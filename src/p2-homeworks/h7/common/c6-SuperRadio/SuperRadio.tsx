import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    console.log('superRadio')
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {

        onChangeOption && onChangeOption(e.currentTarget.value)

        onChange && onChange(e)
        // onChange, onChangeOption
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <label key={name + "-" + i}>
            <input
                type={"radio"}
                value={o}
                onChange={onChangeCallback}
                name={name}
                checked = {o === value}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
