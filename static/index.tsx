import Svg, { Circle, Path, Rect } from 'react-native-svg';

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
export function ArrowIconBack(props: any) {
    return (
        <Svg
            width='6'
            height='12'
            viewBox='0 0 6 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
        >
            <Path
                d='M5.33337 10.6668L0.666707 6.00016L5.33337 1.3335'
                stroke='#353535'
                strokeWidth='1.2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export function SmartPhone(props: any) {
    return (
        <Svg
            width='21'
            height='18'
            viewBox='0 0 21 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
        >
            <Path
                d='M8.81249 2H12.0609C12.5098 2 12.873 2.2013 12.873 2.45C12.873 2.6987 12.5098 2.9 12.0609 2.9H8.81249C8.36367 2.9 8.00038 2.6987 8.00038 2.45C8.00038 2.2013 8.36367 2 8.81249 2Z'
                fill='#272222'
            />
            <Path
                d='M6.30054 0H14.7005C15.8583 0 16.8005 0.807609 16.8005 1.8V16.2C16.8005 17.1924 15.8583 18 14.7005 18H6.30054C5.14275 18 4.20054 17.1924 4.20054 16.2V1.8C4.20054 0.807609 5.14275 0 6.30054 0ZM5.25054 16.2C5.25054 16.6971 5.72058 17.1 6.30054 17.1H14.7005C15.2805 17.1 15.7505 16.6971 15.7505 16.2V1.8C15.7505 1.30289 15.2805 0.9 14.7005 0.9H6.30054C5.72058 0.9 5.25054 1.30289 5.25054 1.8V16.2Z'
                fill='#272222'
            />
            <Path
                d='M10.5008 15.4997C9.92088 15.4997 9.45078 15.0968 9.45078 14.5997C9.45078 14.1027 9.92088 13.6997 10.5008 13.6997C11.0807 13.6997 11.5508 14.1027 11.5508 14.5997C11.5508 15.0968 11.0807 15.4997 10.5008 15.4997Z'
                fill='#272222'
            />
        </Svg>
    );
}

export const Congratulations = () => {
    return (
        <Svg width='216' height='151' viewBox='0 0 216 151' fill='none'>
            <Rect
                x='52'
                y='31'
                width='114'
                height='114'
                rx='16'
                fill='#004ABB'
            />
            <Path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M141.795 87.8974C141.795 106.066 127.066 120.795 108.897 120.795C90.7287 120.795 76 106.066 76 87.8974C76 69.7287 90.7287 55 108.897 55C127.066 55 141.795 69.7287 141.795 87.8974ZM117.122 75.5609C117.122 80.1031 113.44 83.7852 108.897 83.7852C104.355 83.7852 100.673 80.1031 100.673 75.5609C100.673 71.0187 104.355 67.3365 108.897 67.3365C113.44 67.3365 117.122 71.0187 117.122 75.5609ZM108.897 92.0096C100.601 92.0096 93.4518 96.9236 90.2024 103.999C94.727 109.248 101.424 112.57 108.897 112.57C116.37 112.57 123.068 109.248 127.592 104C124.343 96.9236 117.194 92.0096 108.897 92.0096Z'
                fill='white'
            />
            <Circle cx='108.5' cy='59.5' r='2.5' fill='#E0E3FF' />
            <Circle cx='108.5' cy='87.5' r='2.5' fill='#E0E3FF' />
            <Circle cx='108.5' cy='64.5' r='2.5' fill='#E0E3FF' />
            <Circle cx='18' cy='23' r='8' fill='#FDE3E3' />
            <Circle cx='164' cy='8' r='8' fill='#FDE3E3' />
            <Circle cx='210' cy='96' r='6' fill='#FDE3E3' />
            <Circle cx='53.5' cy='7.5' r='3.5' fill='#D4F0FF' />
            <Circle cx='28.5' cy='51.5' r='2.5' fill='#D4F0FF' />
            <Circle cx='182.5' cy='120.5' r='2.5' fill='#D4F0FF' />
            <Circle cx='180.5' cy='79.5' r='2.5' fill='#FDE3E3' />
            <Circle cx='213.5' cy='56.5' r='2.5' fill='#D4F0FF' />
            <Circle cx='26.5' cy='125.5' r='2.5' fill='#D4F0FF' />
            <Circle cx='126.5' cy='148.5' r='2.5' fill='#FDE3E3' />
            <Circle cx='174.5' cy='34.5' r='3.5' fill='#D4F0FF' />
            <Circle cx='3.5' cy='89.5' r='3.5' fill='#FDE3E3' />
        </Svg>
    );
};
