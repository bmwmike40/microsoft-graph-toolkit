/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * Defines icon used by svgHelper
 *
 * @export
 * @enum {number}
 */
export enum SvgIcon {
  /**
   * Arrow Icon pointing right
   */
  ArrowRight,

  /**
   * Arrow Icon pointing down
   */
  ArrowDown,

  /**
   * Icon separates team from channel in selection
   */
  TeamSeparator,

  /**
   * Search icon
   */
  Search,

  /**
   * Skype Arrow icon (out of office status)
   */
  SkypeArrow,

  /**
   * Smaller email icon used in top of person card
   */
  SmallEmail,

  /**
   * Smaller chat icon used in top of person card
   */
  SmallChat,

  /**
   * Downward chevron
   */
  ExpandDown,

  /**
   * Overview icon
   */
  Overview,

  /**
   * Paper plane
   */
  Send,

  /**
   * Phone/Mail icon
   */
  Contact,

  /**
   * Copy to clipboard
   */
  Copy,

  /**
   * A cellphone
   */
  CellPhone,

  /**
   * Chat message
   */
  Chat,

  /**
   * Company department
   */
  Department,

  /**
   * Email message
   */
  Email,

  /**
   * Location indicator
   */
  OfficeLocation,

  /**
   * A person
   */
  Person,

  /**
   * Messages
   */
  Messages,

  /**
   * Organization tree
   */
  Organization,

  /**
   * Right facing chevron
   */
  ExpandRight,

  /**
   * Person profile
   */
  Profile,

  /**
   * Balloon
   */
  Birthday,

  /**
   * File icon
   */
  File,

  /**
   * Files icon
   */
  Files,

  /**
   * Back arrow
   */
  Back,

  /**
   * Close icon
   */
  Close,

  /**
   * Upload icon
   */
  Upload,

  /**
   * File Cloud icon
   */
  FileCloud,

  /**
   * Drag File Mouse Icon
   */
  DragFile,

  /**
   *
   * Cancel icon
   */
  Cancel,

  /**
   *
   * Success icon
   */
  Success,

  /**
   *
   * Fail icon
   */
  Fail,
  /**
   *
   * account selection
   */
  SelectAccount
}

import { html } from 'lit-element';

/**
 * returns an svg
 * @param svgIcon defined by name
 * @param color hex value
 */
export function getSvg(svgIcon: SvgIcon, color?: string) {
  switch (svgIcon) {
    case SvgIcon.ArrowRight:
      return html`
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 7L4.46481 10.5359L4.46481 7L4.46481 3.46413L8 7Z" />
        </svg>
      `;

    case SvgIcon.ArrowDown:
      return html`
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L2.46447 5.46447H6H9.53553L6 9Z" />
        </svg>
      `;

    case SvgIcon.TeamSeparator:
      return html`
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.70711 5L1.49999 9.20711L0.792886 8.50001L4.29289 5L0.792887 1.49999L1.49999 0.792885L5.70711 5Z"
            fill=${color}
          />
        </svg>
      `;

    case SvgIcon.Search:
      return html`
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <circle cx="5.36377" cy="5.36396" r="4" transform="rotate(45 5.36377 5.36396)" stroke="#B3B0AD" />
            <path
              d="M8.19189 7.48529L12.7881 12.0815C12.9834 12.2767 12.9834 12.5933 12.7881 12.7886V12.7886C12.5928 12.9839 12.2762 12.9839 12.081 12.7886L7.48479 8.1924L8.19189 7.48529Z"
              fill="#B3B0AD"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="14" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
      `;

    case SvgIcon.SkypeArrow:
      return html`
        <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.95184 0.480534C4.23385 0.10452 4.70926 -0.0724722 5.1685 0.0275755C5.62775 0.127623 5.98645 0.486329 6.0865 0.945575C6.18655 1.40482 6.00956 1.88023 5.63354 2.16224L4.07196 3.72623H10.7988C11.4622 3.72623 12 4.26403 12 4.92744C12 5.59086 11.4622 6.12866 10.7988 6.12866H4.07196L5.63114 7.68784C6.0955 8.15225 6.0955 8.90515 5.63114 9.36955C5.51655 9.48381 5.38119 9.57514 5.23234 9.63862C5.09341 9.69857 4.94399 9.73042 4.79269 9.73232C4.63498 9.73233 4.4789 9.70046 4.33382 9.63862C4.18765 9.57669 4.05593 9.48507 3.94703 9.36955L0.343377 5.7659C-0.114459 5.29881 -0.114459 4.55128 0.343377 4.08419L3.95184 0.480534Z"
            fill="#B4009E"
          />
        </svg>
      `;

    case SvgIcon.SmallEmail:
      return html`
        <svg width="14" height="10" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.8473 1H2.04886L6.47364 4.18916C6.64273 4.31103 6.86969 4.31522 7.04316 4.19968L11.8473 1ZM1 1.47671V9H13V1.43376L7.59749 5.03198C7.07706 5.3786 6.39621 5.36601 5.88894 5.0004L1 1.47671ZM0 1C0 0.447715 0.447715 0 1 0H13C13.5523 0 14 0.447715 14 1V9C14 9.55228 13.5523 10 13 10H1C0.447716 10 0 9.55229 0 9V1Z"
          />
        </svg>
      `;

    case SvgIcon.SmallChat:
      return html`
        <svg width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.5781 8.26403L9.57811 8.26403C9.68611 8.29867 9.8455 8.36364 10.0125 8.50479C10.1405 8.61294 10.2409 8.73883 10.3235 8.86465L11.9634 10.9944C11.9701 10.9924 11.9753 10.9904 11.9785 10.9889C11.9841 10.9864 11.9918 10.9823 12 10.9768V1.32284C12 1.18078 11.8731 1 11.6207 1H1.37926C1.12692 1 1 1.18078 1 1.32284V7.37377C1 7.45357 1.01415 7.49036 1.02102 7.50507C1.02778 7.51955 1.04342 7.54689 1.09159 7.58705L1.10485 7.5981L1.11771 7.6096C1.13526 7.62529 1.21707 7.69076 1.33937 7.76027C1.46122 7.82952 1.58119 7.87864 1.67944 7.89966L1.69102 7.90214L1.691 7.9022C3.32106 8.27116 6.2626 8.27688 8.67896 8.18036L8.69908 8.17955L8.71921 8.17956L8.7627 8.17954C9.01362 8.17932 9.31313 8.17907 9.5781 8.26403ZM11.2376 11.6908L9.50506 9.44081C9.39493 9.26422 9.32445 9.23285 9.27276 9.21627C9.17534 9.18504 9.0401 9.17966 8.71888 9.17956C6.31879 9.27543 3.24831 9.27999 1.47024 8.87753C1.01314 8.77974 0.600449 8.48852 0.451238 8.35513C0.15593 8.10893 0 7.78958 0 7.37377V1.32284C0 0.593147 0.610664 0 1.37926 0H11.6207C12.3893 0 13 0.593147 13 1.32284V11.0441C13 11.4686 12.6828 11.7689 12.3881 11.9012C12.1048 12.0284 11.673 12.0728 11.3387 11.7993C11.3003 11.7679 11.2678 11.7301 11.2376 11.6908ZM3 3.5C3 3.22386 3.22386 3 3.5 3H9.5C9.77614 3 10 3.22386 10 3.5C10 3.77614 9.77614 4 9.5 4H3.5C3.22386 4 3 3.77614 3 3.5ZM3.5 5C3.22386 5 3 5.22386 3 5.5C3 5.77614 3.22386 6 3.5 6H6.5C6.77614 6 7 5.77614 7 5.5C7 5.22386 6.77614 5 6.5 5H3.5Z"
          />
        </svg>
      `;

    case SvgIcon.ExpandDown: {
      return html`
        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 1L7.5 7L1 1" stroke="#3078CD" />
        </svg>
      `;
    }

    case SvgIcon.Overview:
      return html`
        <svg xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 4V9H2V4H12ZM11 8V5H3V8H11ZM13 4H18V9H13V4ZM17 8V5H14V8H17ZM8 15V10H18V15H8ZM9 11V14H17V11H9ZM2 15V10H7V15H2ZM3 11V14H6V11H3Z"
          />
        </svg>
      `;

    case SvgIcon.Send:
      return html`
        <svg xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.27144 8.99999L1.72572 2.45387C1.54854 1.99826 1.9928 1.56256 2.43227 1.71743L2.50153 1.74688L16.0015 8.49688C16.3902 8.69122 16.4145 9.22336 16.0744 9.45992L16.0015 9.50311L2.50153 16.2531C2.0643 16.4717 1.58932 16.0697 1.70282 15.6178L1.72572 15.5461L4.27144 8.99999L1.72572 2.45387L4.27144 8.99999ZM3.3028 3.4053L5.25954 8.43705L10.2302 8.43749C10.515 8.43749 10.7503 8.64911 10.7876 8.92367L10.7927 8.99999C10.7927 9.28476 10.5811 9.52011 10.3065 9.55736L10.2302 9.56249L5.25954 9.56205L3.3028 14.5947L14.4922 8.99999L3.3028 3.4053Z"
          />
        </svg>
      `;

    case SvgIcon.Contact:
      return html`
        <svg xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.3315 11.7855L11.3452 11.7913L11.3591 11.7967C11.4057 11.8149 11.4421 11.8389 11.4762 11.8729L12.8836 13.2797C12.9177 13.3137 12.9416 13.35 12.9597 13.3965L12.9651 13.4104L12.971 13.4241C12.9902 13.4693 13 13.5151 13 13.5699C13 13.6248 12.9901 13.6759 12.9676 13.7303L12.9675 13.7302L12.9628 13.7419C12.9458 13.7844 12.9218 13.822 12.8836 13.8602L12.7941 13.9497C12.57 14.1736 12.3673 14.37 12.1855 14.5396C12.0445 14.6712 11.9037 14.7767 11.7639 14.8601C11.6429 14.9284 11.499 14.9865 11.3265 15.0296C11.1716 15.0683 10.9523 15.0957 10.6541 15.0957C10.226 15.0957 9.77339 15.0291 9.29316 14.8873C8.79837 14.7411 8.29897 14.537 7.79466 14.2716C7.29099 14.0043 6.7904 13.6843 6.2931 13.3097C5.79797 12.9334 5.32815 12.5234 4.88351 12.0793C4.44215 11.6299 4.03516 11.1575 3.66219 10.6619C3.2916 10.1652 2.97561 9.66531 2.71228 9.16232C2.44987 8.65684 2.24939 8.16115 2.1072 7.67496C1.96889 7.20203 1.9043 6.75953 1.9043 6.34426C1.9043 6.04676 1.92945 5.8283 1.96505 5.67477C2.00758 5.51024 2.06491 5.36965 2.13346 5.24839C2.21771 5.10725 2.32161 4.96874 2.44802 4.83312C2.61763 4.65148 2.814 4.44899 3.03788 4.22522L3.14024 4.12291C3.18256 4.08061 3.22694 4.05101 3.2785 4.0291C3.32105 4.01103 3.36887 4 3.43131 4C3.48634 4 3.53235 4.00983 3.57773 4.0291L3.57771 4.02914L3.58585 4.03251C3.6411 4.05541 3.68414 4.08469 3.72239 4.12291L5.12984 5.52968C5.16387 5.56369 5.18781 5.60004 5.20594 5.64649L5.21136 5.66038L5.2172 5.6741C5.23642 5.71931 5.24622 5.76513 5.24622 5.81992C5.24622 5.88591 5.23631 5.9178 5.23225 5.92835C5.20132 5.99698 5.16601 6.05438 5.12738 6.10352C5.07447 6.17083 5.01613 6.23146 4.95179 6.28625L4.94467 6.2923L4.93768 6.29849C4.81323 6.40852 4.69584 6.51839 4.58605 6.62811C4.45174 6.76237 4.32909 6.90895 4.22378 7.06908C4.0535 7.32254 3.96032 7.61696 3.96032 7.93007C3.96032 8.35888 4.12439 8.75141 4.42612 9.05299L7.95115 12.5763C8.25285 12.8779 8.64535 13.0417 9.07392 13.0417C9.38687 13.0417 9.68121 12.9486 9.9347 12.7785C10.0949 12.6733 10.2415 12.5507 10.3758 12.4164C10.4856 12.3067 10.5955 12.1894 10.7056 12.065L10.7118 12.058L10.7179 12.0509C10.7727 11.9866 10.8333 11.9283 10.9007 11.8754C10.9499 11.8367 11.0074 11.8014 11.0761 11.7704C11.0868 11.7663 11.1189 11.7564 11.1851 11.7564C11.2401 11.7564 11.2861 11.7662 11.3315 11.7855ZM11.5689 15.9998C11.8248 15.9358 12.0573 15.8442 12.2663 15.7248C12.4753 15.6012 12.6757 15.4499 12.8676 15.2708C13.0596 15.0918 13.2707 14.8872 13.501 14.657L13.5906 14.5674C13.7228 14.4353 13.823 14.284 13.8912 14.1134C13.9637 13.9387 14 13.7575 14 13.5699C14 13.3824 13.9637 13.2033 13.8912 13.0328C13.823 12.858 13.7228 12.7045 13.5906 12.5724L12.1831 11.1656C12.0509 11.0335 11.8974 10.9333 11.7225 10.8651C11.5519 10.7926 11.3728 10.7564 11.1851 10.7564C10.9974 10.7564 10.829 10.7884 10.6797 10.8523C10.5347 10.9163 10.4025 10.9951 10.283 11.0889C10.1636 11.1827 10.0549 11.2871 9.95677 11.4022C9.85868 11.5131 9.76272 11.6154 9.66889 11.7092C9.57506 11.8029 9.47909 11.8818 9.381 11.9457C9.28717 12.0097 9.18481 12.0417 9.07392 12.0417C8.91185 12.0417 8.77323 11.9841 8.65808 11.869L5.13305 8.34571C5.0179 8.23061 4.96032 8.09206 4.96032 7.93007C4.96032 7.81924 4.99231 7.71693 5.05628 7.62314C5.12026 7.52509 5.19916 7.42918 5.29299 7.33539C5.38682 7.24161 5.48918 7.14569 5.60007 7.04765C5.71522 6.9496 5.81972 6.84089 5.91355 6.72153C6.00738 6.60217 6.08628 6.47002 6.15026 6.32508C6.21423 6.17588 6.24622 6.00749 6.24622 5.81992C6.24622 5.63236 6.20997 5.45331 6.13746 5.2828C6.06922 5.10802 5.96899 4.95455 5.83678 4.8224L4.42932 3.41564C4.29711 3.28348 4.14357 3.18117 3.9687 3.1087C3.7981 3.03623 3.61897 3 3.43131 3C3.23939 3 3.05813 3.03623 2.88752 3.1087C2.71692 3.18117 2.56552 3.28348 2.4333 3.41564L2.33094 3.51795C2.10063 3.74814 1.89591 3.95916 1.71678 4.15099C1.54192 4.33856 1.39264 4.53678 1.26895 4.74567C1.14953 4.95455 1.05784 5.18475 0.993862 5.43626C0.934152 5.68777 0.904297 5.99044 0.904297 6.34426C0.904297 6.86434 0.985332 7.40147 1.1474 7.95565C1.30947 8.50983 1.53552 9.06614 1.82554 9.62458C2.11556 10.1788 2.46102 10.7244 2.86193 11.2615C3.26285 11.7944 3.70001 12.3017 4.17342 12.7834C4.65111 13.2609 5.15651 13.7021 5.68963 14.107C6.22703 14.512 6.77295 14.8616 7.3274 15.1557C7.88611 15.4499 8.44696 15.6801 9.00994 15.8463C9.57292 16.0126 10.121 16.0957 10.6541 16.0957C11.0081 16.0957 11.313 16.0637 11.5689 15.9998ZM14.9616 14H17.0002C17.5525 14 18.0002 13.5523 18.0002 13V5C18.0002 4.44772 17.5525 4 17.0002 4H6.43555L6.54385 4.11514C6.77073 4.34192 6.94536 4.60775 7.06365 4.90525C7.07677 4.93665 7.08919 4.96824 7.10089 5H16.8821L10.2238 8.32913C10.083 8.39951 9.91736 8.39951 9.7766 8.32913L7.22381 7.05273L6.7766 7.94716L9.32938 9.22355C9.75167 9.4347 10.2487 9.4347 10.671 9.22356L17.0002 6.05895V13H14.9314C14.9772 13.1858 15.0001 13.3764 15.0001 13.5699C15.0001 13.7154 14.9872 13.8589 14.9616 14Z"
          />
        </svg>
      `;

    case SvgIcon.Copy:
      return html`
        <svg width="13" height="14" viewBox="0 0 13 14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.625 5.50293V14H3.875V11.375H0.375V0H6.24707L8.87207 2.625H9.74707L12.625 5.50293ZM10 5.25H11.1279L10 4.12207V5.25ZM3.875 2.625H7.62793L5.87793 0.875H1.25V10.5H3.875V2.625ZM11.75 6.125H9.125V3.5H4.75V13.125H11.75V6.125Z"
          />
        </svg>
      `;

    case SvgIcon.CellPhone:
      return html`
        <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="9" height="14" rx="0.9" stroke="${color}" />
          <rect x="3" y="12" width="4" height="1" rx="0.5" fill="${color}" />
        </svg>
      `;

    case SvgIcon.Chat:
      return html`
        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.67824 0C2.3824 0 2.14258 0.239826 2.14258 0.535665C2.14258 0.831505 2.3824 1.07133 2.67824 1.07133H13.9985C14.5508 1.07133 14.9985 1.51905 14.9985 2.07133V12.3203C14.9985 12.6161 15.2384 12.856 15.5342 12.856C15.8301 12.856 16.0699 12.6161 16.0699 12.3203V2C16.0699 0.895431 15.1744 0 14.0699 0H2.67824Z"
            fill="${color}"
          />
          <path
            d="M9.34097 11.4769L9.3309 11.4769L9.32085 11.4773C6.74142 11.5804 3.51639 11.5801 1.6855 11.1657L1.6855 11.1657L1.67972 11.1644C1.30373 11.084 0.937799 10.8292 0.816663 10.7209L0.81023 10.7152L0.803602 10.7096C0.601843 10.5414 0.5 10.3403 0.5 10.0423V3.55978C0.5 3.07185 0.912353 2.64258 1.47765 2.64258H12.4497C13.0149 2.64258 13.4273 3.07185 13.4273 3.55978V13.9745C13.4273 14.1578 13.2827 14.3397 13.067 14.4366C12.8614 14.5288 12.6204 14.5275 12.457 14.3904L10.5932 11.9699C10.5218 11.8587 10.4457 11.7646 10.3579 11.6904C10.2528 11.6015 10.1556 11.5622 10.0869 11.5401L9.93419 12.0163L10.0869 11.5401C9.89097 11.4773 9.65413 11.477 9.34097 11.4769Z"
            stroke="${color}"
          />
        </svg>
      `;

    case SvgIcon.Department:
      return html`
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.625 3.5H14V11.375H0V3.5H4.375V1.75H9.625V3.5ZM5.25 2.625V3.5H8.75V2.625H5.25ZM13.125 4.375H0.875V6.125H3.5V5.25H4.375V6.125H9.625V5.25H10.5V6.125H13.125V4.375ZM0.875 10.5H13.125V7H10.5V7.875H9.625V7H4.375V7.875H3.5V7H0.875V10.5Z"
            fill="${color}"
          />
        </svg>
      `;

    case SvgIcon.Email:
      return html`
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.5 0.772727C0.5 0.622104 0.622104 0.5 0.772727 0.5H13.2273C13.3779 0.5 13.5 0.622104 13.5 0.772727V9.22727C13.5 9.3779 13.3779 9.5 13.2273 9.5H0.772727C0.622104 9.5 0.5 9.3779 0.5 9.22727V0.772727Z"
            stroke="${color}"
          />
          <path d="M13.5 0.5L7.18923 4.70314C6.92113 4.8817 6.57039 4.87522 6.30907 4.68687L0.5 0.5" stroke="#605e5c" />
        </svg>
      `;

    case SvgIcon.OfficeLocation:
      return html`
        <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.78489 16.3832L6.78263 16.3859C6.75278 16.4216 6.71543 16.4503 6.67324 16.4701L6.88498 16.923L6.67324 16.4701C6.63105 16.4898 6.58504 16.5 6.53846 16.5C6.49188 16.5 6.44588 16.4898 6.40368 16.4701C6.36149 16.4503 6.32415 16.4216 6.2943 16.3859L6.29202 16.3832C5.47882 15.4241 4.01597 13.6289 2.75914 11.7172C2.13055 10.7611 1.56021 9.78597 1.14862 8.87887C0.732553 7.96189 0.5 7.15987 0.5 6.53687C0.5 3.20251 3.20343 0.5 6.53846 0.5C9.87349 0.5 12.5769 3.20251 12.5769 6.53687C12.5769 7.16011 12.3444 7.96225 11.9283 8.87925C11.5167 9.78639 10.9464 10.7615 10.3178 11.7175C9.06097 13.6291 7.59812 15.424 6.78489 16.3832Z"
            stroke="${color}"
          />
          <path
            d="M4.40039 6.53921C4.40039 5.37092 5.34748 4.42383 6.51577 4.42383C7.68407 4.42383 8.63116 5.37092 8.63116 6.53921C8.63116 7.70751 7.68407 8.6546 6.51577 8.6546C5.34748 8.6546 4.40039 7.70751 4.40039 6.53921Z"
            stroke="${color}"
          />
        </svg>
      `;

    case SvgIcon.Person:
      return html`
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.91699 4C8.91699 5.65685 7.57385 7 5.91699 7C4.26014 7 2.91699 5.65685 2.91699 4C2.91699 2.34315 4.26014 1 5.91699 1C7.57385 1 8.91699 2.34315 8.91699 4ZM8.04431 7.38803C9.16935 6.68014 9.91699 5.42738 9.91699 4C9.91699 1.79086 8.12613 0 5.91699 0C3.70785 0 1.91699 1.79086 1.91699 4C1.91699 5.42739 2.66465 6.68016 3.78972 7.38805C1.82681 8.13254 0.356122 9.8773 0 12H1.01706C1.48033 9.71776 3.49808 8 5.91704 8C8.336 8 10.3538 9.71776 10.817 12H11.8341C11.478 9.87728 10.0072 8.1325 8.04431 7.38803Z"
            fill="${color}"
          />
        </svg>
      `;

    case SvgIcon.Messages:
      return html`
        <svg xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4 3.5C4 3.22386 4.22386 3 4.5 3H16C17.1046 3 18 3.89543 18 5V12.5C18 12.7761 17.7761 13 17.5 13C17.2239 13 17 12.7761 17 12.5V5C17 4.44772 16.5523 4 16 4H4.5C4.22386 4 4 3.77614 4 3.5ZM4.04886 6H13.8473L9.04316 9.19968C8.86969 9.31522 8.64273 9.31103 8.47364 9.18916L4.04886 6ZM3 14V6.47671L7.88894 10.0004C8.39621 10.366 9.07706 10.3786 9.59749 10.032L15 6.43376V14H3ZM3 5C2.44772 5 2 5.44772 2 6V14C2 14.5523 2.44772 15 3 15H15C15.5523 15 16 14.5523 16 14V6C16 5.44772 15.5523 5 15 5H3Z"
          />
        </svg>
      `;

    case SvgIcon.Organization:
      return html`
        <svg xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13 4H8V7H13V4ZM8 3C7.44772 3 7 3.44772 7 4V7C7 7.55228 7.44772 8 8 8H10V9H7.5C6.67157 9 6 9.67157 6 10.5V11H4C3.44772 11 3 11.4477 3 12V15C3 15.5523 3.44772 16 4 16H9C9.55228 16 10 15.5523 10 15V12C10 11.4477 9.55228 11 9 11H7V10.5C7 10.2239 7.22386 10 7.5 10H13.5C13.7761 10 14 10.2239 14 10.5V11H12C11.4477 11 11 11.4477 11 12V15C11 15.5523 11.4477 16 12 16H17C17.5523 16 18 15.5523 18 15V12C18 11.4477 17.5523 11 17 11H15V10.5C15 9.67157 14.3284 9 13.5 9H11V8H13C13.5523 8 14 7.55228 14 7V4C14 3.44772 13.5523 3 13 3H8ZM9 12H4L4 15H9V12ZM12 12H17V15H12V12Z"
          />
        </svg>
      `;

    case SvgIcon.ExpandRight:
      return html`
        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12L6.5 6.5L1 1" stroke="#B8B8B8" stroke-width="2" />
        </svg>
      `;

    case SvgIcon.Profile:
      return html`
        <svg xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13 8C13 9.65685 11.6569 11 10 11C8.34315 11 7 9.65685 7 8C7 6.34315 8.34315 5 10 5C11.6569 5 13 6.34315 13 8ZM12.1273 11.388C13.2524 10.6801 14 9.42738 14 8C14 5.79086 12.2091 4 10 4C7.79086 4 6 5.79086 6 8C6 9.42739 6.74766 10.6802 7.87272 11.3881C5.90981 12.1325 4.43913 13.8773 4.08301 16H5.10007C5.56334 13.7178 7.58109 12 10 12C12.419 12 14.4368 13.7178 14.9 16H15.9171C15.561 13.8773 14.0903 12.1325 12.1273 11.388Z"
          />
        </svg>
      `;

    case SvgIcon.Profile:
      return html`
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.5"
            d="M5.125 10.0625C5.125 10.2448 5.15918 10.4157 5.22754 10.5752C5.2959 10.7347 5.38932 10.8737 5.50781 10.9922C5.6263 11.1107 5.7653 11.2041 5.9248 11.2725C6.08431 11.3408 6.25521 11.375 6.4375 11.375H9.0625C9.35872 11.375 9.63672 11.4297 9.89648 11.5391C10.1608 11.6484 10.3978 11.8079 10.6074 12.0176C10.8171 12.2272 10.9766 12.4642 11.0859 12.7285C11.1953 12.9883 11.25 13.2663 11.25 13.5625C11.25 13.681 11.2067 13.7835 11.1201 13.8701C11.0335 13.9567 10.931 14 10.8125 14C10.694 14 10.5915 13.9567 10.5049 13.8701C10.4183 13.7835 10.375 13.681 10.375 13.5625C10.375 13.3802 10.3408 13.2093 10.2725 13.0498C10.2041 12.8903 10.1107 12.7513 9.99219 12.6328C9.8737 12.5143 9.7347 12.4209 9.5752 12.3525C9.41569 12.2842 9.24479 12.25 9.0625 12.25H6.4375C6.14128 12.25 5.861 12.1953 5.59668 12.0859C5.33691 11.9766 5.10221 11.8171 4.89258 11.6074C4.68294 11.3978 4.52344 11.1631 4.41406 10.9033C4.30469 10.639 4.25 10.3587 4.25 10.0625V9.46777C3.7168 9.21712 3.23372 8.89811 2.80078 8.51074C2.36784 8.12337 1.9987 7.69043 1.69336 7.21191C1.39258 6.72884 1.16016 6.21159 0.996094 5.66016C0.832031 5.10417 0.75 4.52995 0.75 3.9375C0.75 3.39518 0.852539 2.88477 1.05762 2.40625C1.26725 1.92773 1.5498 1.51074 1.90527 1.15527C2.26074 0.799805 2.67773 0.519531 3.15625 0.314453C3.63477 0.104818 4.14518 0 4.6875 0C5.22982 0 5.74023 0.104818 6.21875 0.314453C6.69727 0.519531 7.11426 0.799805 7.46973 1.15527C7.8252 1.51074 8.10547 1.92773 8.31055 2.40625C8.52018 2.88477 8.625 3.39518 8.625 3.9375C8.625 4.52995 8.54297 5.10417 8.37891 5.66016C8.21484 6.21615 7.98014 6.7334 7.6748 7.21191C7.37402 7.69043 7.00716 8.12337 6.57422 8.51074C6.14583 8.89811 5.66276 9.21712 5.125 9.46777V10.0625ZM1.625 3.9375C1.625 4.45247 1.69564 4.9515 1.83691 5.43457C1.98275 5.91309 2.18783 6.3597 2.45215 6.77441C2.72103 7.18913 3.04232 7.56283 3.41602 7.89551C3.79427 8.22363 4.2181 8.49479 4.6875 8.70898C5.1569 8.49479 5.57845 8.22363 5.95215 7.89551C6.3304 7.56283 6.65169 7.18913 6.91602 6.77441C7.1849 6.3597 7.38997 5.91309 7.53125 5.43457C7.67708 4.9515 7.75 4.45247 7.75 3.9375C7.75 3.51367 7.66797 3.11719 7.50391 2.74805C7.3444 2.37435 7.12565 2.05078 6.84766 1.77734C6.57422 1.49935 6.25065 1.2806 5.87695 1.12109C5.50781 0.957031 5.11133 0.875 4.6875 0.875C4.26367 0.875 3.86491 0.957031 3.49121 1.12109C3.12207 1.2806 2.7985 1.49935 2.52051 1.77734C2.24707 2.05078 2.02832 2.37435 1.86426 2.74805C1.70475 3.11719 1.625 3.51367 1.625 3.9375ZM6.4375 4.375C6.31901 4.375 6.21647 4.33171 6.12988 4.24512C6.04329 4.15853 6 4.05599 6 3.9375C6 3.75521 5.96582 3.58431 5.89746 3.4248C5.8291 3.2653 5.73568 3.1263 5.61719 3.00781C5.4987 2.88932 5.3597 2.7959 5.2002 2.72754C5.04069 2.65918 4.86979 2.625 4.6875 2.625C4.56901 2.625 4.46647 2.58171 4.37988 2.49512C4.29329 2.40853 4.25 2.30599 4.25 2.1875C4.25 2.06901 4.29329 1.96647 4.37988 1.87988C4.46647 1.79329 4.56901 1.75 4.6875 1.75C4.98828 1.75 5.27083 1.80697 5.53516 1.9209C5.80404 2.03483 6.03646 2.19206 6.23242 2.39258C6.43294 2.58854 6.59017 2.82096 6.7041 3.08984C6.81803 3.35417 6.875 3.63672 6.875 3.9375C6.875 4.05599 6.83171 4.15853 6.74512 4.24512C6.65853 4.33171 6.55599 4.375 6.4375 4.375Z"
            fill="black"
          />
        </svg>
      `;

    case SvgIcon.File:
      return html`
        <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.64"
            d="M19.613 6.993L13.018 0.421C12.7473 0.15221 12.3815 0.000947397 12 0H1.4C0.628 0 0 0.615 0 1.372V24.642C0 25.391 0.622 26 1.386 26H18.6C19.372 26 20 25.385 20 24.628V7.923C20 7.577 19.86 7.237 19.613 6.993Z"
            fill="#605E5C"
          />
          <path
            d="M19 24.628C19 24.83 18.816 25 18.6 25H1.386C1.173 25 1 24.84 1 24.642V1.372C1 1.17 1.184 1 1.4 1H12V6.6C12 7.372 12.628 8 13.4 8H19V24.628Z"
            fill="white"
          />
          <path d="M18.204 6.99994L13 1.81494V6.59994C13 6.81994 13.18 6.99994 13.4 6.99994H18.204Z" fill="white" />
        </svg>
      `;

    case SvgIcon.Files:
      return html`
        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17 8C17.1354 8 17.263 8.02604 17.3828 8.07812C17.5078 8.13021 17.6146 8.20312 17.7031 8.29688C17.7969 8.38542 17.8698 8.48958 17.9219 8.60938C17.974 8.72917 18 8.85677 18 8.99219C18 9.14844 17.9635 9.29948 17.8906 9.44531L14.6172 16H2V5C2 4.85938 2.02604 4.72917 2.07812 4.60938C2.13021 4.48958 2.20052 4.38542 2.28906 4.29688C2.38281 4.20312 2.48958 4.13021 2.60938 4.07812C2.72917 4.02604 2.85938 4 3 4H5.75C5.98438 4 6.1849 4.02604 6.35156 4.07812C6.52344 4.125 6.67448 4.1849 6.80469 4.25781C6.9401 4.33073 7.0599 4.41146 7.16406 4.5C7.26823 4.58854 7.3724 4.66927 7.47656 4.74219C7.58594 4.8151 7.70052 4.8776 7.82031 4.92969C7.94531 4.97656 8.08854 5 8.25 5H14C14.1406 5 14.2708 5.02604 14.3906 5.07812C14.5104 5.13021 14.6146 5.20312 14.7031 5.29688C14.7969 5.38542 14.8698 5.48958 14.9219 5.60938C14.974 5.72917 15 5.85938 15 6V8H17ZM3 13.3828L5.41406 8.55469C5.5026 8.38281 5.625 8.2474 5.78125 8.14844C5.94271 8.04948 6.11979 8 6.3125 8H14V6H8.25C8.01562 6 7.8125 5.97656 7.64062 5.92969C7.47396 5.8776 7.32292 5.8151 7.1875 5.74219C7.05729 5.66927 6.9401 5.58854 6.83594 5.5C6.73177 5.41146 6.625 5.33073 6.51562 5.25781C6.41146 5.1849 6.29688 5.125 6.17188 5.07812C6.05208 5.02604 5.91146 5 5.75 5H3V13.3828ZM17 9H6.3125L3.3125 15H14L17 9Z"
          />
        </svg>
      `;

    case SvgIcon.Back:
      return html`
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 8.5H1.95312L8.10156 14.6484L7.39844 15.3516L0.046875 8L7.39844 0.648438L8.10156 1.35156L1.95312 7.5H16V8.5Z"
          />
        </svg>
      `;

    case SvgIcon.Close:
      return html`
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.73838 5.032L9.70337 1.067L8.99638 0.360001L5.03137 4.325L1.06637 0.360001L0.359375 1.067L4.32438 5.032L0.359375 8.997L1.06637 9.704L5.03137 5.739L8.99638 9.704L9.70337 8.997L5.73838 5.032Z" fill="black"/>
        </svg>
     `;
    case SvgIcon.Upload:
      return html`
    <svg class="upload-icon" width="10" height="12"  xmlns="http://www.w3.org/2000/svg">
      <path
        d="m9.58733,0l0,0.74599l-9.22101,0l0,-0.74599l9.22101,0zm0.3602,5.70569l-0.72039,0.52453l-3.73803,-2.7392l0,8.44489l-1.02456,0l0,-8.44489l-3.73803,2.7392l-0.72039,-0.52453l4.9707,-3.64838l4.9707,3.64838z"
      />
    </svg>
  `;

    case SvgIcon.FileCloud:
      return html`
    <svg width="16" height="16"  xmlns="http://www.w3.org/2000/svg">
      <path
        d="m8,0c2.8166,0 4.4145,1.9233 4.6469,4.246l0.071,0c1.8127,0 3.2821,1.5119 3.2821,3.377c0,0.0953 -0.0038,0.1897 -0.0114,0.283c-0.322,-0.4017 -0.6967,-0.7591 -1.1138,-1.062c-0.3104,-0.9329 -1.1627,-1.598 -2.1568,-1.598l-0.0711,0c-0.5137,0 -0.9439,-0.3893 -0.9951,-0.9005c-0.2021,-2.0206 -1.5433,-3.3455 -3.6518,-3.3455c-2.1139,0 -3.4489,1.3159 -3.6518,3.3455c-0.0511,0.5112 -0.4813,0.9005 -0.9951,0.9005l-0.071,0c-1.2539,0 -2.2821,1.0579 -2.2821,2.377c0,1.3191 1.0282,2.377 2.2821,2.377l2.6655,0c-0.087,0.323 -0.1466,0.6572 -0.1762,1l-2.4893,0c-1.8127,0 -3.2821,-1.5119 -3.2821,-3.377c0,-1.8029 1.3731,-3.2758 3.102,-3.372l0.2511,-0.005c0.2338,-2.338 1.8303,-4.246 4.6469,-4.246zm3.5,16c2.4853,0 4.5,-2.0147 4.5,-4.5c0,-2.4853 -2.0147,-4.5 -4.5,-4.5c-2.4853,0 -4.5,2.0147 -4.5,4.5c0,2.4853 2.0147,4.5 4.5,4.5zm0,-7c0.2761,0 0.5,0.2239 0.5,0.5l0,1.5l1.5,0c0.2761,0 0.5,0.2239 0.5,0.5c0,0.2761 -0.2239,0.5 -0.5,0.5l-1.5,0l0,1.5c0,0.2761 -0.2239,0.5 -0.5,0.5c-0.2761,0 -0.5,-0.2239 -0.5,-0.5l0,-1.5l-1.5,0c-0.2761,0 -0.5,-0.2239 -0.5,-0.5c0,-0.2761 0.2239,-0.5 0.5,-0.5l1.5,0l0,-1.5c0,-0.2761 0.2239,-0.5 0.5,-0.5z" fill="#0078D4"
      />
    </svg>
  `;

    case SvgIcon.DragFile:
      return html`
    <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m0,1.00189c0,-0.8451 0.983,-1.3091 1.636,-0.772l11.006,9.0622c0.724,0.5964 0.302,1.772 -0.636,1.772l-5.592,0c-0.435,0 -0.849,0.1892 -1.134,0.5185l-3.524,4.0725c-0.606,0.7003 -1.756,0.2717 -1.756,-0.6544l0,-13.9988zm12.006,9.0622l-11.006,-9.0622l0,13.9988l3.524,-4.0724c0.475,-0.5488 1.164,-0.8642 1.89,-0.8642l5.592,0z"
      />
    </svg>
  `;

    case SvgIcon.Cancel:
      return html`
    <svg class="cancel-icon" width="10" height="10" xmlns="http://www.w3.org/2000/svg">
      <path
      d="m5.52795,4.92946l4.37418,4.36141l-0.57055,0.56806l-4.38052,-4.35509l-4.38052,4.35509l-0.57055,-0.56806l4.37418,-4.36141l-4.37418,-4.36141l0.57055,-0.56806l4.38052,4.35509l4.38052,-4.35509l0.57055,0.56806l-4.37418,4.36141z"
      />
    </svg>
  `;

    case SvgIcon.Success:
      return html`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path fill="#009E00" d="m6.322,12c3.492,0 6.323,-2.6863 6.323,-6c0,-3.3137 -2.831,-6 -6.323,-6c-3.491,0 -6.322,2.6863 -6.322,6c0,3.3137 2.831,6 6.322,6z"/>
      <path fill="white" d="m9.629,3.7509c-0.131,-0.125 -0.31,-0.1952 -0.496,-0.1952c-0.187,0 -0.365,0.0702 -0.497,0.1952l-3.267,3.1l-1.393,-1.3222c-0.177,-0.1695 -0.436,-0.2361 -0.68,-0.1746c-0.243,0.0615 -0.433,0.2418 -0.497,0.4725c-0.065,0.2307 0.005,0.4767 0.184,0.6449l1.807,1.7154c0.019,0.0331 0.041,0.0646 0.066,0.094c0.289,0.2562 0.738,0.2562 1.027,0c0.024,-0.0294 0.047,-0.0609 0.065,-0.0941l3.681,-3.4931c0.275,-0.2603 0.275,-0.6824 0,-0.9428z"/>
    </svg>
  `;

    case SvgIcon.Fail:
      return html`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path fill="#EF355D" d="m6,12c3.314,0 6,-2.6863 6,-6c0,-3.3137 -2.686,-6 -6,-6c-3.314,0 -6,2.6863 -6,6c0,3.3137 2.686,6 6,6z"/>
      <path fill="white" d="m6.943,6.0004l1.544,-1.5444c0.169,-0.1683 0.236,-0.4142 0.174,-0.6448c-0.061,-0.2306 -0.241,-0.4107 -0.472,-0.4722c-0.231,-0.0616 -0.477,0.0049 -0.645,0.1742l-1.544,1.5443l-1.545,-1.5443c-0.26,-0.259 -0.681,-0.2583 -0.941,0.0014c-0.26,0.2598 -0.26,0.6808 -0.001,0.9414l1.544,1.5444l-1.544,1.5444c-0.259,0.2606 -0.259,0.6815 0.001,0.9413c0.26,0.2598 0.681,0.2604 0.941,0.0015l1.545,-1.5444l1.544,1.5444c0.261,0.2589 0.682,0.2583 0.942,-0.0015c0.259,-0.2598 0.26,-0.6807 0.001,-0.9413l-1.544,-1.5444z" />
    </svg>
  `;

    case SvgIcon.SelectAccount:
      return html`
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 7C10.2761 7 10.5 7.22386 10.5 7.5V9.5H12.5C12.7761 9.5 13 9.72386 13 10C13 10.2761 12.7761 10.5 12.5 10.5H10.5V12.5C10.5 12.7761 10.2761 13 10 13C9.72386 13 9.5 12.7761 9.5 12.5V10.5H7.5C7.22386 10.5 7 10.2761 7 10C7 9.72386 7.22386 9.5 7.5 9.5H9.5V7.5C9.5 7.22386 9.72386 7 10 7Z"
            fill="#0078D4"
          />
          <path
            d="M4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10ZM10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5Z"
            fill="#0078D4"
          />
        </svg>
      `;
  }
}
