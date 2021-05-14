import React, { useState } from 'react';

function UpdatedSignUp(props) {
    const [test, setTest] = useState('bob');
    return console.log(test + ' results:)') || (
        <div>

        </div>
    );
}

export default UpdatedSignUp;