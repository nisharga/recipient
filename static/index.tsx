import Svg, { Path } from 'react-native-svg';

export default function ArrowIcon(props: any) {
    return (
        <Svg
            width='13'
            height='12'
            viewBox='0 0 13 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
        >
            <Path
                d='M4.74998 9.5L8.24998 6L4.74998 2.5'
                stroke='#525665'
                strokeWidth='1.2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}
