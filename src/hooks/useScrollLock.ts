import { RefObject, useEffect } from 'react';
import {
    clearAllBodyScrollLocks,
    disableBodyScroll,
    enableBodyScroll,
} from "body-scroll-lock";


type Props = {
    isLock: boolean;
    target: RefObject<HTMLElement>;
}

export const useScrollLock = ({ isLock, target }: Props) => {
    useEffect(() => {
        if (!target.current) return;

        if (isLock) {
            disableBodyScroll(target.current);
        } else {
            enableBodyScroll(target.current);
        }

        return () => clearAllBodyScrollLocks();
    }, [isLock, target]);
};
