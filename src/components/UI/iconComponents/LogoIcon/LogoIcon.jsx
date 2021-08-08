import React, { useContext } from 'react';

import './logoIcon.scss';

import ThemeContext from '../../../../contexts/ThemeContext';

const LogoSvg = () => {
	const themeContext = useContext(ThemeContext);

	return (
		<div className={`logoIcon ${themeContext.theme}`}>
			<svg viewBox='0 0 116 40' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M59.6558 11.2683V14.7356H62.1738V17.1086H59.6558V25.0715C59.6558 25.6165 59.7612 26.012 59.9722 26.2581C60.1919 26.4954 60.5786 26.614 61.1323 26.614C61.5015 26.614 61.875 26.5701 62.2529 26.4822V28.9607C61.5234 29.1628 60.8203 29.2639 60.1436 29.2639C57.6826 29.2639 56.4521 27.906 56.4521 25.1902V17.1086H54.1055V14.7356H56.4521V11.2683H59.6558ZM63.6372 21.7361C63.6372 20.3386 63.9141 19.0818 64.4678 17.9656C65.0215 16.8406 65.7993 15.9792 66.8013 15.3816C67.8032 14.7751 68.9546 14.4719 70.2554 14.4719C72.1802 14.4719 73.7402 15.0916 74.9355 16.3308C76.1396 17.5701 76.79 19.2136 76.8867 21.2615L76.8999 22.0129C76.8999 23.4192 76.6274 24.676 76.0825 25.7834C75.5464 26.8909 74.7729 27.7478 73.7622 28.3542C72.7603 28.9607 71.6001 29.2639 70.2817 29.2639C68.269 29.2639 66.6562 28.5959 65.4434 27.26C64.2393 25.9153 63.6372 24.1267 63.6372 21.8943V21.7361ZM66.8408 22.0129C66.8408 23.4807 67.144 24.6321 67.7505 25.467C68.3569 26.2932 69.2007 26.7063 70.2817 26.7063C71.3628 26.7063 72.2021 26.2844 72.7998 25.4407C73.4062 24.5969 73.7095 23.3621 73.7095 21.7361C73.7095 20.2947 73.3975 19.1521 72.7734 18.3083C72.1582 17.4646 71.3188 17.0427 70.2554 17.0427C69.2095 17.0427 68.3789 17.4602 67.7637 18.2952C67.1484 19.1213 66.8408 20.3606 66.8408 22.0129ZM85.7329 21.7625C85.7329 19.5652 86.2427 17.803 87.2622 16.4758C88.2817 15.1399 89.6484 14.4719 91.3623 14.4719C92.874 14.4719 94.0957 14.9993 95.0273 16.054V8.75024H98.231V29.0002H95.3306L95.1724 27.5237C94.2144 28.6838 92.9355 29.2639 91.3359 29.2639C89.666 29.2639 88.3125 28.5916 87.2754 27.2468C86.2471 25.9021 85.7329 24.074 85.7329 21.7625ZM88.9365 22.0393C88.9365 23.4895 89.2134 24.6233 89.7671 25.4407C90.3296 26.2493 91.125 26.6536 92.1533 26.6536C93.4629 26.6536 94.4209 26.0691 95.0273 24.9001V18.8093C94.4385 17.6667 93.4893 17.0955 92.1797 17.0955C91.1426 17.0955 90.3428 17.5085 89.7803 18.3347C89.2178 19.1521 88.9365 20.387 88.9365 22.0393ZM100.973 21.7361C100.973 20.3386 101.25 19.0818 101.804 17.9656C102.357 16.8406 103.135 15.9792 104.137 15.3816C105.139 14.7751 106.291 14.4719 107.591 14.4719C109.516 14.4719 111.076 15.0916 112.271 16.3308C113.476 17.5701 114.126 19.2136 114.223 21.2615L114.236 22.0129C114.236 23.4192 113.963 24.676 113.418 25.7834C112.882 26.8909 112.109 27.7478 111.098 28.3542C110.096 28.9607 108.936 29.2639 107.618 29.2639C105.605 29.2639 103.992 28.5959 102.779 27.26C101.575 25.9153 100.973 24.1267 100.973 21.8943V21.7361ZM104.177 22.0129C104.177 23.4807 104.48 24.6321 105.086 25.467C105.693 26.2932 106.537 26.7063 107.618 26.7063C108.699 26.7063 109.538 26.2844 110.136 25.4407C110.742 24.5969 111.045 23.3621 111.045 21.7361C111.045 20.2947 110.733 19.1521 110.109 18.3083C109.494 17.4646 108.655 17.0427 107.591 17.0427C106.545 17.0427 105.715 17.4602 105.1 18.2952C104.484 19.1213 104.177 20.3606 104.177 22.0129Z'
					fill='inherit'
				/>
				<path
					d='M27.5062 0C35.1802 0 40.0002 4.784 40.0002 12.506V17.644C40.0002 18.478 39.3222 19.156 38.4882 19.156H38.4702V19.12C37.6262 19.12 36.9422 18.438 36.9402 17.594V12.506C36.9402 6.4 33.6002 3.06 27.5122 3.06H12.5122C6.42024 3.06 3.06024 6.42 3.06024 12.506V27.506C3.06024 33.574 6.42024 36.934 12.5062 36.934H27.5062C33.5922 36.934 36.9342 33.574 36.9342 27.506C36.9342 26.662 37.6182 25.976 38.4642 25.976C39.3102 25.976 39.9942 26.662 39.9942 27.506C40.0002 35.216 35.2162 40 27.5122 40H12.5062C4.78424 40 0.000244141 35.216 0.000244141 27.512V12.512C0.000244141 4.784 4.78424 0 12.5062 0H27.5062ZM26.0594 14.193C26.6454 13.607 27.5954 13.607 28.1814 14.193C28.7674 14.779 28.7674 15.729 28.1814 16.315L18.6874 25.809C18.4054 26.089 18.0234 26.247 17.6274 26.247C17.2274 26.247 16.8474 26.089 16.5654 25.809L11.8194 21.061C11.2334 20.475 11.2334 19.525 11.8194 18.939C12.4054 18.353 13.3554 18.353 13.9414 18.939L17.6274 22.627L26.0594 14.193Z'
					fill='inherit'
				/>
			</svg>
		</div>
	);
};

export default LogoSvg;
