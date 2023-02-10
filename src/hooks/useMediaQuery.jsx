import {useState, useEffect} from 'react';

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if(media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addEventListener('resize', listener);
        return () => media.removeEventListener('resize', listener);

    }, [matches, query]);
    return matches;
}
// Code Explanation:
// 1. it takes a query as an argument
// 2. it returns a boolean value
// 3. it listens to the resize event and updates the boolean value
// 4. it returns the boolean value



export default useMediaQuery;

