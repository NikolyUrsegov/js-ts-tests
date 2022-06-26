import React, {ChangeEvent, MouseEvent} from 'react';

/*
const callback = () => {
    alert('hey')
    return 12;
}
window.setTimeout(callback, 1000)
*/

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
       // alert('user have been deleted')
    }

    const saveUser = () => {
        alert('user have been saved')
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed: ' + event.currentTarget.value)
    }

    return <div> <textarea
        onChange={onNameChanged}  //  в нативном JS подписка идет через addEventListener
        onBlur={focusLostHandler}
    >Dimych</textarea>
        <input onChange={onAgeChanged} type={'number'}/>
        <button name={'delete'} onClick={deleteUser}>x</button>
        <button name={'save'} onClick={deleteUser}>x</button>
    </div>
}