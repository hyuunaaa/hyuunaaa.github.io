import { useEffect } from 'react';

const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            // 클릭이 ref의 내부가 아닌 경우에만 handler 호출
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
};

export default useOnClickOutside;
