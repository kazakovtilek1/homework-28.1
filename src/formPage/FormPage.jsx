import React from 'react';

function FormPage() {

    function sub (e) {
        e.preventDefault();
        console.log("Пользователь создан")
    }

    function res () {
        console.log("Отменено")
    }

    return (
        <div>
            <form onSubmit={sub} onReset={res}>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>

                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>

        </div>
    );
}

export default FormPage;