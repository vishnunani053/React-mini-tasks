//const memoizedValue = useMemo(() => computeFunction(), [dependencies]);

import React, { useState, useMemo } from 'react';

function UseMemoHook({ numbers }) {
    const [count, setCount] = useState(0);

    // Without useMemo, this calculation would run on every render
    const sum = useMemo(() => {
        console.log('Calculating sum...');
        return numbers.reduce((total, num) => total + num, 0);
    }, [numbers]);

    return (
        <div>
            <h2>Sum: {sum}</h2>
            <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
        </div>
    );
}
export default UseMemoHook


