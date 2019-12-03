//right now file is for testing the use of hooks for a counter when user registers

import React, { useState } from 'react';

export default function Counter() {
    const [teams, countTeams] = useState([]);
    return (
        <div className="main-hook">

            <p>
                teams: {teams}
            </p>
            <button onClick={() => {
                countTeams([...teams, teams + 1])
            }}>
                Register
            </button>
        </div>
    )
}