import React from "react";

const Icon = ({ name }) => {
	const icons = {
		icon1: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="89"
				height="88"
				viewBox="0 0 89 88"
				fill="none"
			>
				<g clip-path="url(#clip0_5_32)">
					<path
						d="M42.2471 17.638C41.2113 12.8351 38.558 8.61762 34.8825 5.60251C31.2183 2.59669 26.5382 0.786377 21.4325 0.782887C16.3267 0.786377 11.6467 2.59669 7.98248 5.60251C4.23941 8.67306 1.55635 12.9905 0.562201 17.9035L0.125244 17.8161C1.14032 12.7997 3.87898 8.39213 7.69933 5.25818C11.4406 2.18914 16.2192 0.340754 21.4325 0.33719C26.6458 0.340754 31.4244 2.18914 35.1657 5.25818C38.9292 8.34555 41.643 12.669 42.6933 17.5929C43.3432 17.5336 44.0014 17.5029 44.6668 17.5025C45.1698 17.5028 45.6688 17.5205 46.1632 17.5546C47.1843 12.5539 49.9187 8.1604 53.7295 5.0343C57.4707 1.96526 62.2493 0.116877 67.4626 0.113312C72.6759 0.116877 77.4546 1.96526 81.1958 5.0343C85.0161 8.16825 87.7548 12.5758 88.7699 17.5922L88.3329 17.6796C87.3388 12.7666 84.6557 8.44918 80.9126 5.37863C77.2485 2.37281 72.5684 0.5625 67.4626 0.559009C62.3569 0.5625 57.6768 2.37281 54.0126 5.37863C50.2923 8.43049 47.6195 12.7142 46.611 17.5901C46.9804 17.6232 47.3471 17.6659 47.7109 17.7174C48.6738 13.0964 51.2173 9.05529 54.7503 6.18543C58.2217 3.36567 62.6458 1.67573 67.4626 1.67573C72.2794 1.67573 76.7036 3.36567 80.1749 6.18543C83.7094 9.05648 86.2536 13.0997 87.2155 17.7232L86.0503 17.9656C85.1451 13.6151 82.7508 9.8103 79.4245 7.10833C76.1613 4.45759 71.9985 2.86895 67.4626 2.86895C62.9268 2.86895 58.764 4.45759 55.5007 7.10833C52.1869 9.80017 49.7983 13.5866 48.8854 17.9168C49.2636 17.9918 49.6382 18.0768 50.0091 18.1713C50.8564 14.1367 53.067 10.6037 56.1371 8.07694C59.2182 5.54106 63.1633 4.01832 67.4626 4.01832C71.762 4.01832 75.7071 5.54106 78.7882 8.07694C81.9233 10.6573 84.1624 14.2868 84.9684 18.4283L84.2372 18.5682C83.465 14.6002 81.3198 11.1229 78.3163 8.65082C75.3656 6.22235 71.5851 4.76408 67.4626 4.76408C63.3402 4.76408 59.5596 6.22233 56.609 8.65082C53.6561 11.0812 51.5329 14.4832 50.7283 18.3679C51.0314 18.4564 51.3317 18.5514 51.6292 18.6526C52.3704 14.9665 54.3663 11.7344 57.1523 9.42138C59.9503 7.09847 63.5439 5.7018 67.4626 5.7018C71.3814 5.7018 74.975 7.09847 77.7729 9.42138C80.6177 11.7832 82.6388 15.1031 83.3415 18.8862L82.9028 18.9666C82.2196 15.2885 80.2543 12.0606 77.488 9.76396C74.769 7.50653 71.2748 6.14926 67.4626 6.14926C63.6505 6.14926 60.1563 7.50653 57.4372 9.76396C54.7122 12.0263 52.7645 15.1924 52.054 18.8022C54.3801 19.6486 56.5209 20.882 58.3999 22.4234C62.1294 25.4828 64.8278 29.7562 65.8984 34.6247C66.415 34.5874 66.9365 34.5679 67.4626 34.5676C72.6759 34.5711 77.4546 36.4195 81.1958 39.4885C85.0161 42.6225 87.7548 47.0301 88.7699 52.0464L88.3329 52.1339C87.3388 47.2209 84.6557 42.9034 80.9126 39.8329C77.2485 36.8271 72.5684 35.0167 67.4626 35.0133C65.6265 35.0145 63.8455 35.2494 62.147 35.6896C62.1556 35.7322 62.1643 35.7748 62.1726 35.8175L61.4414 35.9573C61.437 35.9348 61.4323 35.9123 61.4279 35.8898C61.1248 35.98 60.8246 36.0767 60.5273 36.1798C60.5335 36.2117 60.5397 36.2435 60.5456 36.2754L60.1069 36.3557C60.1055 36.3479 60.1039 36.3402 60.1025 36.3324C57.8727 37.1598 55.8191 38.3509 54.0126 39.8329C50.2923 42.8847 47.6195 47.1685 46.611 52.0443C46.9804 52.0775 47.3471 52.1201 47.7109 52.1717C48.6738 47.5506 51.2173 43.5095 54.7503 40.6397C58.2217 37.8199 62.6458 36.13 67.4626 36.13C72.2794 36.13 76.7036 37.8199 80.1749 40.6397C83.7094 43.5107 86.2536 47.554 87.2155 52.1774L86.0503 52.4198C85.1451 48.0693 82.7508 44.2645 79.4245 41.5626C76.1613 38.9119 71.9985 37.3232 67.4626 37.3232C62.9268 37.3232 58.764 38.9119 55.5007 41.5626C52.1869 44.2544 49.7983 48.0409 48.8854 52.371C49.2636 52.4461 49.6382 52.531 50.0091 52.6255C50.8564 48.591 53.067 45.058 56.1371 42.5312C59.2182 39.9953 63.1633 38.4726 67.4626 38.4726C71.762 38.4726 75.707 39.9953 78.7882 42.5312C81.9233 45.1115 84.1624 48.7411 84.9684 52.8826L84.2372 53.0224C83.465 49.0545 81.3198 45.5771 78.3162 43.1051C75.3656 40.6766 71.5851 39.2183 67.4626 39.2183C63.3402 39.2183 59.5596 40.6766 56.609 43.1051C53.6561 45.5354 51.5329 48.9375 50.7283 52.8221C51.0314 52.9106 51.3317 53.0056 51.6292 53.1069C52.3704 49.4207 54.3663 46.1887 57.1523 43.8756C59.9503 41.5527 63.5439 40.1561 67.4626 40.1561C71.3814 40.1561 74.975 41.5527 77.7729 43.8756C80.6177 46.2374 82.6388 49.5573 83.3415 53.3405L82.9028 53.4209C82.2196 49.7428 80.2543 46.5149 77.488 44.2182C74.769 41.9608 71.2748 40.6035 67.4626 40.6035C63.6505 40.6035 60.1563 41.9608 57.4372 44.2182C54.7122 46.4806 52.7645 49.6466 52.054 53.2564C54.3801 54.1029 56.5209 55.3362 58.3999 56.8777C62.076 59.8933 64.7503 64.0883 65.8514 68.8701C66.3833 68.8305 66.9206 68.8099 67.4626 68.8095C72.6759 68.8131 77.4545 70.6614 81.1958 73.7305C85.0161 76.8644 87.7548 81.272 88.7699 86.2884L88.3329 86.3758C87.3388 81.4628 84.6557 77.1454 80.9126 74.0748C77.2485 71.069 72.5684 69.2587 67.4626 69.2552C66.9532 69.2556 66.4482 69.2742 65.9478 69.3099C65.9566 69.3518 65.9655 69.3936 65.974 69.4356L65.537 69.523C65.5251 69.4641 65.5127 69.4053 65.5003 69.3465C65.1309 69.3807 64.7642 69.4242 64.4006 69.4771C64.4069 69.507 64.4135 69.5367 64.4197 69.5666L63.2544 69.8089C63.2456 69.7665 63.2364 69.7242 63.2273 69.6819C62.8495 69.7589 62.4753 69.8459 62.1051 69.9426C62.1285 70.052 62.1512 70.1617 62.1726 70.2717L61.4414 70.4116C61.424 70.3221 61.4056 70.233 61.3868 70.1441C61.0843 70.2347 60.7846 70.3319 60.4879 70.4355C60.508 70.5332 60.5274 70.6312 60.5456 70.7296L60.1069 70.81C60.0932 70.736 60.0787 70.6623 60.0639 70.5886C57.8491 71.4154 55.8088 72.6014 54.0126 74.0748C50.2695 77.1454 47.5865 81.4628 46.5923 86.3758L46.1554 86.2884C47.1705 81.272 49.9091 76.8644 53.7295 73.7305C55.5798 72.2126 57.684 70.9935 59.969 70.1483C59.1832 66.7453 57.2913 63.7652 54.6922 61.6073C51.9731 59.3499 48.4789 57.9927 44.6668 57.9927C40.8546 57.9927 37.3604 59.3499 34.6414 61.6073C31.9509 63.8411 30.0183 66.9558 29.2858 70.5087C31.4322 71.3465 33.4128 72.5165 35.1657 73.9544C38.986 77.0883 41.7247 81.4959 42.7397 86.5123L42.3028 86.5997C41.3086 81.6867 38.6256 77.3693 34.8825 74.2987C32.6568 72.4729 30.0561 71.0883 27.213 70.2817L27.161 70.2717L27.1619 70.2672C25.3396 69.7552 23.4183 69.4805 21.4325 69.4791C16.3267 69.4826 11.6467 71.2929 7.98248 74.2987C4.23941 77.3693 1.55635 81.6867 0.562201 86.5997L0.125244 86.5123C1.14032 81.4959 3.87898 77.0883 7.69933 73.9544C11.4406 70.8854 16.2192 69.037 21.4325 69.0334C22.1043 69.0339 22.7688 69.0652 23.4249 69.1256C24.4885 64.2378 27.1922 59.9469 30.9336 56.8777C32.691 55.436 34.6774 54.2638 36.8301 53.4255C36.1107 49.8385 34.1691 46.693 31.4579 44.4421C28.7388 42.1847 25.2446 40.8274 21.4325 40.8274C17.6203 40.8274 14.1261 42.1847 11.4071 44.4421C8.6408 46.7388 6.6755 49.9667 5.99234 53.6447L5.55362 53.5644C6.25631 49.7812 8.27742 46.4613 11.1222 44.0995C13.9201 41.7766 17.5137 40.3799 21.4325 40.3799C25.3512 40.3799 28.9448 41.7766 31.7428 44.0995C34.5125 46.399 36.5012 49.6068 37.2528 53.266C37.5485 53.1579 37.8472 53.0562 38.1487 52.9608C37.3309 49.1117 35.2174 45.7415 32.2861 43.329C29.3355 40.9005 25.555 39.4422 21.4325 39.4422C17.31 39.4422 13.5295 40.9005 10.5789 43.329C7.57528 45.801 5.43009 49.2783 4.65789 53.2463L3.92668 53.1065C4.73267 48.9649 6.97181 45.3354 10.1069 42.7551C13.1881 40.2192 17.1331 38.6965 21.4325 38.6965C25.7318 38.6965 29.6769 40.2192 32.758 42.7551C35.8024 45.2607 38.0018 48.7558 38.8646 52.7482C39.2334 52.6455 39.6063 52.5523 39.9828 52.4688C39.0504 48.1913 36.676 44.4522 33.3944 41.7865C30.1311 39.1357 25.9684 37.5471 21.4325 37.5471C16.8966 37.5471 12.7338 39.1357 9.47061 41.7865C6.14428 44.4884 3.75001 48.2932 2.84483 52.6437L1.67956 52.4013C2.64152 47.7779 5.18571 43.7346 8.72019 40.8636C12.1915 38.0438 16.6157 36.3539 21.4325 36.3539C26.2493 36.3539 30.6735 38.0438 34.1448 40.8636C37.639 43.7019 40.1652 47.686 41.1517 52.2437C41.5139 52.1842 41.8791 52.1335 42.2471 52.0923C41.2113 47.2893 38.558 43.0719 34.8825 40.0568C31.2183 37.0509 26.5382 35.2406 21.4325 35.2372C16.3267 35.2406 11.6467 37.0509 7.98248 40.0568C4.23941 43.1273 1.55635 47.4447 0.562201 52.3577L0.125244 52.2703C1.14032 47.254 3.87898 42.8464 7.69933 39.7124C11.4406 36.6434 16.2192 34.795 21.4325 34.7915C22.0892 34.7919 22.739 34.8217 23.3807 34.8795C24.4121 29.9053 27.1392 25.5361 30.9336 22.4234C32.691 20.9818 34.6774 19.8095 36.8301 18.9713C36.1107 15.3842 34.1691 12.2387 31.4579 9.98785C28.7388 7.73043 25.2446 6.37315 21.4325 6.37315C17.6203 6.37315 14.1261 7.73043 11.4071 9.98785C8.6408 12.2845 6.6755 15.5124 5.99234 19.1905L5.55362 19.1101C6.25631 15.327 8.27742 12.0071 11.1222 9.64528C13.9201 7.32236 17.5137 5.9257 21.4325 5.9257C25.3512 5.9257 28.9448 7.32236 31.7428 9.64528C34.5125 11.9448 36.5012 15.1525 37.2528 18.8117C37.5485 18.7037 37.8472 18.602 38.1487 18.5066C37.3309 14.6574 35.2174 11.2873 32.2861 8.8747C29.3355 6.44622 25.555 4.98796 21.4325 4.98796C17.31 4.98796 13.5295 6.44622 10.5789 8.8747C7.57529 11.3467 5.43009 14.8241 4.65789 18.7921L3.92668 18.6522C4.73267 14.5107 6.97179 10.8812 10.107 8.30082C13.1881 5.76494 17.1331 4.2422 21.4325 4.2422C25.7318 4.2422 29.6769 5.76494 32.758 8.30082C35.8024 10.8065 38.0018 14.3015 38.8646 18.2939C39.2335 18.1912 39.6063 18.098 39.9828 18.0146C39.0504 13.737 36.6761 9.99792 33.3944 7.33222C30.1311 4.68148 25.9684 3.09284 21.4325 3.09284C16.8966 3.09284 12.7339 4.68148 9.47059 7.33222C6.14427 10.0342 3.75001 13.8389 2.84483 18.1894L1.67956 17.9471C2.64152 13.3236 5.18571 9.28036 8.72017 6.40932C12.1915 3.58955 16.6157 1.89962 21.4325 1.89962C26.2493 1.89962 30.6735 3.58955 34.1448 6.40932C37.639 9.24767 40.1652 13.2317 41.1517 17.7894C41.5139 17.7299 41.8791 17.6793 42.2471 17.638ZM82.9028 87.6628C82.2196 83.9847 80.2543 80.7568 77.488 78.4602C74.769 76.2027 71.2748 74.8455 67.4626 74.8455C63.6505 74.8455 60.1563 76.2027 57.4372 78.4602C54.6709 80.7568 52.7056 83.9847 52.0225 87.6628L51.5838 87.5824C52.2864 83.7993 54.3075 80.4794 57.1523 78.1176C59.9503 75.7947 63.5439 74.398 67.4626 74.398C71.3814 74.398 74.975 75.7947 77.7729 78.1176C80.6177 80.4794 82.6388 83.7993 83.3415 87.5824L82.9028 87.6628ZM84.2372 87.2644C83.465 83.2964 81.3198 79.8191 78.3163 77.347C75.3656 74.9186 71.5851 73.4603 67.4626 73.4603C63.3402 73.4603 59.5596 74.9185 56.609 77.347C53.6054 79.8191 51.4602 83.2964 50.688 87.2644L49.9568 87.1246C50.7628 82.983 53.002 79.3535 56.1371 76.7731C59.2182 74.2373 63.1633 72.7145 67.4626 72.7145C71.762 72.7145 75.7071 74.2373 78.7882 76.7731C81.9233 79.3535 84.1624 82.983 84.9684 87.1246L84.2372 87.2644ZM86.0503 86.6618C85.1451 82.3113 82.7508 78.5065 79.4245 75.8045C76.1613 73.1538 71.9985 71.5652 67.4626 71.5652C62.9268 71.5652 58.764 73.1538 55.5007 75.8045C52.1744 78.5065 49.7801 82.3113 48.875 86.6618L47.7097 86.4194C48.6716 81.7959 51.2158 77.7527 54.7503 74.8816C58.2217 72.0619 62.6458 70.3719 67.4626 70.3719C72.2794 70.3719 76.7036 72.0619 80.1749 74.8816C83.7094 77.7527 86.2536 81.7959 87.2155 86.4194L86.0503 86.6618ZM65.4028 68.9081C64.3157 64.2501 61.7029 60.1638 58.1168 57.222C54.4526 54.2162 49.7725 52.4059 44.6668 52.4024C39.561 52.4059 34.8809 54.2162 31.2167 57.222C27.5633 60.219 24.92 64.4041 23.8711 69.1712C24.239 69.2128 24.6041 69.2636 24.9662 69.3234C25.9657 64.8014 28.4821 60.8494 31.9545 58.0288C35.4258 55.209 39.85 53.5191 44.6668 53.5191C49.4836 53.5191 53.9077 55.2091 57.3791 58.0288C60.779 60.7906 63.2623 64.637 64.3027 69.0411C64.6665 68.9876 65.0333 68.9433 65.4028 68.9081ZM63.1284 69.2472C62.1401 65.1312 59.811 61.5367 56.6287 58.9517C53.3654 56.301 49.2026 54.7123 44.6668 54.7123C40.1309 54.7123 35.9681 56.301 32.7049 58.9517C29.4448 61.5999 27.0803 65.3074 26.1352 69.5496C26.5116 69.6334 26.8843 69.7269 27.253 69.83C28.1283 65.8723 30.3181 62.4085 33.3412 59.9203C36.4223 57.3845 40.3674 55.8617 44.6668 55.8617C48.9661 55.8617 52.9112 57.3845 55.9923 59.9203C58.9331 62.3407 61.0856 65.6843 62.0063 69.5077C62.3766 69.4112 62.7507 69.3243 63.1284 69.2472ZM61.2888 69.7081C60.4105 66.0331 58.3451 62.8191 55.5204 60.4942C52.5698 58.0657 48.7892 56.6075 44.6668 56.6075C40.5443 56.6075 36.7638 58.0657 33.8131 60.4942C30.9029 62.8894 28.7986 66.2284 27.9681 70.043C28.2695 70.1386 28.568 70.2407 28.8635 70.349C29.6278 66.7239 31.6075 63.547 34.3565 61.2648C37.1544 58.9419 40.748 57.5452 44.6668 57.5452C48.5855 57.5452 52.1791 58.9419 54.9771 61.2648C57.6367 63.4729 59.5763 66.5184 60.3917 69.997C60.6879 69.8944 60.9869 69.7981 61.2888 69.7081ZM36.8726 87.8867C36.1895 84.2086 34.2242 80.9807 31.4579 78.6841C28.7388 76.4266 25.2446 75.0694 21.4325 75.0694C17.6203 75.0694 14.1261 76.4266 11.4071 78.6841C8.6408 80.9807 6.6755 84.2086 5.99234 87.8867L5.55362 87.8063C6.25631 84.0232 8.27742 80.7033 11.1222 78.3415C13.9201 76.0186 17.5137 74.6219 21.4325 74.6219C25.3512 74.6219 28.9448 76.0186 31.7428 78.3415C34.5876 80.7033 36.6087 84.0232 37.3114 87.8063L36.8726 87.8867ZM38.2071 87.4883C37.4349 83.5203 35.2897 80.043 32.2861 77.5709C29.3355 75.1424 25.555 73.6842 21.4325 73.6842C17.31 73.6842 13.5295 75.1424 10.5789 77.5709C7.57529 80.043 5.43009 83.5203 4.65789 87.4883L3.92668 87.3484C4.73267 83.2069 6.97179 79.5774 10.107 76.997C13.1881 74.4612 17.1331 72.9384 21.4325 72.9384C25.7318 72.9384 29.6769 74.4612 32.758 76.997C35.8932 79.5774 38.1323 83.2069 38.9383 87.3484L38.2071 87.4883ZM40.0201 86.8856C39.115 82.5351 36.7207 78.7304 33.3944 76.0284C30.1311 73.3777 25.9684 71.789 21.4325 71.789C16.8966 71.789 12.7339 73.3777 9.47059 76.0284C6.14427 78.7304 3.75001 82.5351 2.84483 86.8856L1.67956 86.6433C2.64152 82.0198 5.18571 77.9766 8.72017 75.1055C12.1915 72.2858 16.6157 70.5958 21.4325 70.5958C26.2493 70.5958 30.6735 72.2858 34.1448 75.1055C37.6793 77.9766 40.2235 82.0198 41.1854 86.6433L40.0201 86.8856ZM65.4503 34.6616C64.3932 29.9174 61.7561 25.7532 58.1168 22.7678C54.4526 19.7619 49.7725 17.9516 44.6668 17.9482C39.561 17.9516 34.8809 19.7619 31.2167 22.7678C27.5104 25.8081 24.8437 30.0711 23.8266 34.9242C24.1946 34.965 24.5598 35.0152 24.922 35.0743C25.89 30.4667 28.4297 26.4377 31.9545 23.5746C35.4258 20.7548 39.85 19.0649 44.6668 19.0649C49.4836 19.0649 53.9077 20.7548 57.3791 23.5746C60.8317 26.3791 63.3391 30.3023 64.35 34.7921C64.7139 34.7394 65.0808 34.696 65.4503 34.6616ZM63.1758 34.9954C62.2161 30.7949 59.8631 27.1248 56.6287 24.4975C53.3654 21.8467 49.2026 20.2581 44.6668 20.2581C40.1309 20.2581 35.9681 21.8467 32.7049 24.4975C29.393 27.1877 27.0054 30.9712 26.0912 35.2981C26.4679 35.3811 26.8409 35.4738 27.2099 35.5761C28.0547 31.535 30.2672 27.9962 33.3412 25.4661C36.4223 22.9302 40.3674 21.4075 44.6668 21.4075C48.9661 21.4075 52.9112 22.9302 55.9923 25.4661C58.9843 27.9286 61.1602 31.3467 62.0532 35.2535C62.4237 35.1578 62.798 35.0717 63.1758 34.9954ZM61.3349 35.4523C60.4844 31.6946 58.3958 28.4066 55.5204 26.04C52.5698 23.6115 48.7892 22.1532 44.6668 22.1532C40.5443 22.1532 36.7638 23.6115 33.8131 26.04C30.8524 28.4768 28.7258 31.8904 27.9261 35.788C28.228 35.8831 28.527 35.9845 28.823 36.0923C29.5562 32.3852 31.5577 29.1342 34.3565 26.8105C37.1544 24.4876 40.748 23.0909 44.6668 23.0909C48.5855 23.0909 52.1791 24.4876 54.9771 26.8105C57.6867 29.0601 59.6491 32.179 60.4366 35.7395C60.7332 35.6375 61.0327 35.5417 61.3349 35.4523ZM60.0129 35.8901C59.2554 32.4055 57.3411 29.3523 54.6922 27.1531C51.9731 24.8957 48.4789 23.5384 44.6668 23.5384C40.8546 23.5384 37.3604 24.8957 34.6414 27.1531C31.9012 29.428 29.9472 32.6168 29.2466 36.2516C31.408 37.0904 33.4021 38.2658 35.1657 39.7124C38.9292 42.7998 41.643 47.1233 42.6933 52.0471C43.3432 51.9879 44.0014 51.9572 44.6668 51.9567C45.1698 51.957 45.6688 51.9747 46.1632 52.0089C47.1843 47.0081 49.9187 42.6147 53.7295 39.4885C55.5917 37.9609 57.711 36.7358 60.0129 35.8901Z"
						fill="#253221"
					/>
				</g>
				<defs>
					<clipPath id="clip0_5_32">
						<rect width="88.8949" height="88" fill="white" />
					</clipPath>
				</defs>
			</svg>
		),
	};

	return <div class="w-24 h-24">{icons[name]}</div>;
};

export default Icon;