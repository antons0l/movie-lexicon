import React from 'react'

export default function Word( {word, count} ) {
    return (
        <div class="Rtable Rtable--2cols">
            <div class="Rtable-cell">
                {word}
            </div>
            <div class="Rtable-cell">
                {count}
            </div>
        </div>
    )
}
