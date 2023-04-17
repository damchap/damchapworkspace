import Styles from './Footer.module.scss'
import clsx from 'clsx'
import {Button} from "../../Atoms/Button/Button";

type Props = {
    className: string
}

export function Footer({className}: Props) {
    return <> <footer className={clsx(className, Styles.Footer)}>
        <div className={clsx(Styles.FooterContent)}>
            <svg width="45" height="26" viewBox="0 0 45 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.3706 0.0273806C32.0112 0.0516606 31.6215 0.0953643 31.5101 0.119644C31.3988 0.14878 31.2216 0.17306 31.1153 0.17306C31.0141 0.17306 30.7964 0.202196 30.6344 0.241044C30.4775 0.279892 30.2345 0.338165 30.0928 0.367301C29.2222 0.55183 28.8982 0.648949 27.9668 0.984013C27.5011 1.15397 26.4533 1.63958 26.0433 1.87266C25.9066 1.95036 25.7548 2.03291 25.7143 2.05234C25.3954 2.19802 24.1299 3.12066 23.6187 3.57712C23.0821 4.06272 23.0821 4.06272 22.8138 3.83449C22.5456 3.59654 22.1862 3.31975 22.0748 3.26148C22.0292 3.2372 21.8673 3.12551 21.7154 3.01868C21.4066 2.80016 21.2852 2.72246 21.1333 2.64962C21.0776 2.62049 20.9663 2.55736 20.8802 2.5088C20.7283 2.41654 19.5034 1.8241 19.2098 1.7027C18.1367 1.2608 16.7548 0.896606 15.3375 0.687798C13.9049 0.474134 13.4494 0.46442 6.60067 0.46442C0.683352 0.46442 0.0607424 0.474133 0.0303712 0.542117C0.0151856 0.585821 0 4.30552 0 8.81675C0 15.4598 0.0101237 17.0234 0.0658043 17.0623C0.16198 17.1399 7.22835 17.1399 7.32452 17.0623C7.3802 17.0185 7.39033 16.0765 7.39033 11.6381C7.39033 8.68564 7.39033 6.23821 7.39033 6.20422C7.39033 6.1071 12.8166 6.12167 13.4595 6.22365C15.0641 6.47616 16.1676 6.93262 17.185 7.77271C18.248 8.65165 18.8605 9.6277 19.2351 11.0505C19.473 11.9732 19.473 14.0127 19.2351 14.9353C19.0579 15.6103 18.7492 16.3581 18.4606 16.8049C18.162 17.2711 17.509 17.9703 17.0079 18.3588C16.5979 18.6744 15.545 19.2523 15.3678 19.2572C15.3375 19.2572 15.2666 19.2912 15.216 19.33C15.1603 19.3689 15.0742 19.4028 15.0236 19.4028C14.9781 19.4028 14.8616 19.432 14.7705 19.4708C14.6794 19.5097 14.4314 19.5728 14.2238 19.6165C13.3481 19.7962 12.8774 19.8399 11.6524 19.8447C10.5186 19.8496 10.4224 19.8545 10.3768 19.937C10.3465 19.9953 10.3262 21.1267 10.3262 22.9623C10.3262 25.5506 10.3363 25.905 10.4021 25.9585C10.5135 26.0459 14.0568 25.9827 14.649 25.8856C14.8718 25.8468 15.135 25.8128 15.2261 25.8128C15.3172 25.8128 15.5349 25.7836 15.707 25.7448C15.8791 25.7059 16.203 25.638 16.4258 25.5943C16.6485 25.5505 16.8864 25.4923 16.9522 25.4631C17.0231 25.4389 17.1699 25.4 17.2812 25.3757C17.4736 25.3369 17.5596 25.3126 18.0202 25.1572C18.7036 24.9193 19.7413 24.4628 20.3234 24.1375C20.4904 24.0452 20.6625 23.9529 20.703 23.9335C21.0523 23.7733 22.2823 22.8749 22.8189 22.3893L23.2188 22.0299L23.4415 22.2339C23.9831 22.7341 24.6614 23.2585 25.284 23.6567C25.5472 23.8267 25.7295 23.9286 26.2964 24.2394C26.6862 24.4531 27.7643 24.9387 27.8555 24.9387C27.8909 24.9387 27.9618 24.9678 28.0174 25.0067C28.0731 25.0407 28.1744 25.0844 28.2452 25.0989C28.3616 25.1232 28.4426 25.1475 28.9033 25.3029C28.9994 25.3369 29.2272 25.4 29.4094 25.4486C29.5917 25.4923 29.8549 25.5603 29.9966 25.5991C30.1384 25.638 30.3105 25.6671 30.3864 25.6671C30.4573 25.6671 30.5787 25.6914 30.6597 25.7205C30.7357 25.7496 30.9837 25.7933 31.2064 25.8176C31.4291 25.8371 31.7582 25.8808 31.9404 25.9099C32.4921 25.9924 35.3521 25.9779 35.9798 25.8856C37.2807 25.7011 38.0855 25.536 38.7486 25.3175C38.8346 25.2932 38.9713 25.2543 39.0523 25.2301C39.4117 25.1378 39.928 24.9387 40.5456 24.6619C40.7278 24.5793 40.91 24.4968 40.9505 24.4822C40.991 24.4677 41.0973 24.4094 41.1834 24.3608C41.2694 24.3123 41.4415 24.22 41.563 24.1569C41.9679 23.9481 42.5855 23.5402 43.2233 23.0594C43.613 22.7632 45 21.3987 45 21.3064C45 21.2578 44.9595 21.1899 44.9139 21.1462C44.7823 21.0442 44.0433 20.408 43.851 20.2429C43.7649 20.1701 43.4916 19.9273 43.2435 19.7136C43.0006 19.4951 42.6867 19.228 42.5501 19.1163C42.4134 19.0047 42.2767 18.8833 42.2413 18.8541C42.1856 18.8007 41.5782 18.2665 40.9303 17.7032C40.7582 17.5576 40.5658 17.3925 40.4949 17.3293L40.3735 17.2176L39.766 17.8052C39.2345 18.32 38.5411 18.8833 38.3183 18.9804C38.2778 18.9998 38.1766 19.0581 38.0905 19.1115C38.0096 19.16 37.7666 19.2814 37.5591 19.3834C37.3515 19.4805 37.1389 19.5777 37.0934 19.6019C36.8352 19.7282 36.0152 19.9467 35.3825 20.0536C34.5726 20.1992 33.1856 20.141 32.32 19.9322C32.2087 19.903 32.0366 19.8642 31.9404 19.8399C31.5861 19.7622 31.2722 19.6408 30.7255 19.3834C30.2447 19.1552 30.2396 19.1552 29.6575 18.7376C28.9893 18.2617 28.3718 17.5964 27.9567 16.902C27.8403 16.7029 27.5366 16.0959 27.5366 16.0522C27.5366 16.0328 27.5062 15.9502 27.4657 15.8725C27.0861 15.1393 26.838 13.2697 26.9798 12.2402C27.0101 11.9974 27.0557 11.6721 27.0759 11.5118C27.1316 11.0942 27.2531 10.6717 27.5163 9.97248C27.896 8.96729 28.716 7.91839 29.6575 7.24826C30.2447 6.83064 30.2447 6.83065 30.7255 6.60241C30.9331 6.50529 31.1659 6.3936 31.2418 6.35961C31.3127 6.32076 31.4089 6.29163 31.4544 6.29163C31.4949 6.29163 31.6063 6.26249 31.6974 6.22365C32.4921 5.89829 34.2688 5.75747 35.3774 5.93229C36.3543 6.08282 37.4173 6.45673 38.0905 6.87435C38.1766 6.92776 38.2778 6.98604 38.3183 7.00546C38.5815 7.11715 39.1384 7.57361 39.8318 8.24374L40.3684 8.76334L40.5962 8.5691C40.7227 8.45741 41.0062 8.21461 41.2289 8.02522C41.4516 7.83584 41.6592 7.65616 41.6895 7.63188C42.1704 7.19484 42.3526 7.0346 42.6968 6.74324C43.1423 6.36447 43.2132 6.3062 43.8712 5.72833C44.1142 5.50981 44.4331 5.23787 44.5697 5.12619C44.7115 5.00964 44.8633 4.87853 44.9139 4.83968C45.0304 4.73771 45.0253 4.64059 44.8836 4.49491C44.8178 4.42692 44.6153 4.2084 44.428 4.00931C43.6789 3.21778 42.5652 2.36312 41.5579 1.80953C41.1226 1.57159 40.1659 1.13455 39.7357 0.974301C39.6091 0.930597 39.4522 0.867469 39.3813 0.843189C39.3105 0.814053 39.189 0.775205 39.1029 0.75578C39.0219 0.7315 38.8853 0.692654 38.7992 0.668374C38.1614 0.45471 37.1592 0.245901 36.1164 0.105077C35.4483 0.00795713 33.3172 -0.0308915 32.3706 0.0273806Z" fill="black"/>
            </svg>
            <span className={clsx(Styles.TitreFooter)}>Damien Chapart</span>
            <span className={clsx(Styles.DescribeFooter)}>développeur web full stock</span>
            <div className={clsx(Styles.Social)}>
                <Button className={clsx(Styles.ButtonFooter)} color={"var(--tertiary-color)"} borderColor={"#E5E5E5"} outline={true} lien={"https://www.linkedin.com/in/damien-chapart-1b1b3b1b3/"} icon={"mdi:linkedin"}></Button>
                <Button className={clsx(Styles.ButtonFooter)} color={"var(--tertiary-color)"} borderColor={"#E5E5E5"} outline={true} lien={"https://www.linkedin.com/in/damien-chapart-1b1b3b1b3/"} icon={"mdi:github"}></Button>
                <Button className={clsx(Styles.ButtonFooter)} color={"var(--tertiary-color)"} borderColor={"#E5E5E5"} outline={true} lien={"https://www.linkedin.com/in/damien-chapart-1b1b3b1b3/"} icon={"material-symbols:logo-dev"}></Button>
                <Button className={clsx(Styles.ButtonFooter)} color={"var(--tertiary-color)"} borderColor={"#E5E5E5"} outline={true} lien={"https://www.linkedin.com/in/damien-chapart-1b1b3b1b3/"} icon={"mdi:instagram"}></Button>
                <Button className={clsx(Styles.ButtonFooter)} color={"var(--tertiary-color)"} borderColor={"#E5E5E5"} outline={true} lien={"https://www.linkedin.com/in/damien-chapart-1b1b3b1b3/"} icon={"mdi:twitter"}></Button>
            </div>
            <hr/>
            <p>
                © 2023 developed whith <span style={{color: "red"}}>❤</span> by Damien Chapart
            </p>
            <p>
                Stack utilisé : React, next, typescript
            </p>
        </div>
        <div className={clsx(Styles.footerNav)}>
            <div className={clsx(Styles.FooterContent, Styles.FooterCenter)}>
            <h3>Navigation</h3>
            <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">blog</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Projets</a></li>
            </ul>
        </div>
            <div className={clsx(Styles.FooterContent, Styles.FooterRight)}>
                <h3>Info pratique</h3>
                <ul>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Mentions légales</a></li>
                    <li><a href="#">Accessibilité</a></li>
                    <li><a href="#">Plan du site</a></li>
                </ul>
            </div>
        </div>
    </footer></>
}