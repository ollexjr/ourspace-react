import React from 'react';
import { IBoard, IThread, IComment } from 'model/compiled';

export const ModerateForm: React.FC<{ b: IBoard, t: IThread, c: IComment }> = ({ }) => {
    return (
        <div>
            moderation form
        </div>
    )
}