import React from 'react';
import { useSelector } from 'react-redux';
import {selectCount} from "../counter/counterSlice";

export function Other() {
    const count = useSelector(selectCount);

    return (
      <span>
          {count}
      </span>
    );
}
