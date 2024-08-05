import React from "react";
export type IconComponentProps = React.SVGProps<SVGSVGElement> & {
  active?: boolean;
};

export type IconComponent = React.FunctionComponent<IconComponentProps>;

const iconColors = {
  active: ["#5CE5E2", "#178C8A"],
  inactive: ["#9E9E9E", "#4C4C4C"]
};

function getColor(state: boolean | undefined) {
  const colorSet = state ? iconColors.active : iconColors.inactive;

  const toneHigh = colorSet[0];
  const toneLow = colorSet[1];

  return { toneHigh, toneLow };
}

export const Dashboard: IconComponent = ({ active, ...props }) => {
  const { toneHigh, toneLow } = getColor(active);

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      {...props}
    >
      <g fillRule='evenodd' clipPath='url(#a)' clipRule='evenodd'>
        <path
          fill={toneHigh}
          d='M.49 5.65c0-.84.114-1.65.236-2.393.13-.79.644-1.419 1.271-1.845C2.63.983 3.433.716 4.291.654A46.102 46.102 0 0 1 7.65.508c1.153 0 2.279.067 3.357.146.858.062 1.662.33 2.294.758.627.426 1.142 1.055 1.271 1.845.122.744.235 1.552.235 2.392 0 .84-.113 1.649-.234 2.392-.13.79-.645 1.42-1.272 1.845-.632.43-1.436.696-2.294.759a46.114 46.114 0 0 1-3.357.146 46.11 46.11 0 0 1-3.358-.146c-.858-.063-1.662-.33-2.294-.759C1.37 9.461.855 8.832.726 8.041.604 7.298.49 6.49.49 5.65ZM23.51 18.34c0 .841-.113 1.652-.235 2.397-.13.79-.643 1.42-1.27 1.847-.632.43-1.435.698-2.294.76a45.877 45.877 0 0 1-3.355.147c-1.153 0-2.278-.068-3.355-.146-.859-.063-1.662-.33-2.294-.76-.627-.427-1.141-1.057-1.27-1.848-.122-.745-.235-1.555-.235-2.397 0-.841.113-1.652.235-2.397.129-.79.643-1.42 1.27-1.847.632-.43 1.435-.698 2.294-.76a45.942 45.942 0 0 1 3.355-.147c1.153 0 2.278.068 3.355.146.859.063 1.662.33 2.294.761.627.427 1.14 1.057 1.27 1.847.122.745.235 1.556.235 2.397Z'
        />
        <path
          fill={toneLow}
          d='M6.677 20.65c.043-.739.082-1.513.082-2.309 0-.795-.039-1.57-.082-2.309-.036-.594-.18-1.165-.427-1.628-.232-.437-.638-.927-1.265-1.053a6.857 6.857 0 0 0-1.36-.161c-.493 0-.959.08-1.36.161-.627.126-1.034.616-1.265 1.053-.247.463-.392 1.034-.427 1.628a38.984 38.984 0 0 0-.082 2.31c0 .795.038 1.57.082 2.308.035.594.18 1.165.427 1.629.231.436.638.926 1.265 1.052.401.081.867.161 1.36.161.493 0 .959-.08 1.36-.16.627-.127 1.033-.617 1.265-1.053.246-.464.391-1.035.427-1.629ZM17.324 3.345a38.7 38.7 0 0 0-.082 2.304c0 .794.038 1.567.082 2.304.035.594.18 1.164.427 1.627.232.436.639.924 1.265 1.05.401.081.866.16 1.36.16.493 0 .958-.079 1.36-.16.625-.126 1.032-.614 1.264-1.05.247-.463.392-1.033.427-1.627.044-.737.082-1.51.082-2.304 0-.793-.038-1.567-.082-2.304-.035-.593-.18-1.163-.427-1.626-.232-.436-.639-.925-1.265-1.05a6.87 6.87 0 0 0-1.36-.161c-.493 0-.958.08-1.36.16-.625.126-1.032.615-1.264 1.05-.247.464-.392 1.034-.427 1.627Z'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Playmate: IconComponent = ({ active, ...props }) => {
  const { toneHigh, toneLow } = getColor(active);

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      {...props}
    >
      <path
        fill={toneHigh}
        fillRule='evenodd'
        d='M17.695 9.823a7.737 7.737 0 0 0-7.802 9.774c-.25.004-.503.007-.762.007-2.223 0-4.068-.177-6.277-.51A2.394 2.394 0 0 1 .81 16.89 95.286 95.286 0 0 1 .816 3.163a2.397 2.397 0 0 1 2.032-2.2C5.06.629 6.906.452 9.131.452c2.225 0 4.07.177 6.282.51a2.397 2.397 0 0 1 2.032 2.201c.16 2.261.244 4.462.25 6.66Z'
        clipRule='evenodd'
      />
      <path
        fill={toneLow}
        fillRule='evenodd'
        d='M5.036 4.841a1.071 1.071 0 0 0 0 2.143h6.535a1.071 1.071 0 1 0 0-2.143H5.036Zm0 4.741a1.071 1.071 0 0 0 0 2.143H8.98a1.071 1.071 0 0 0 0-2.143H5.036ZM17.357 11.958a5.594 5.594 0 1 1 0 11.188 5.594 5.594 0 0 1 0-11.188Z'
        clipRule='evenodd'
      />
      <path
        fill={toneHigh}
        fillRule='evenodd'
        d='M19.533 15.61a1.071 1.071 0 0 1 0 1.516L18.35 18.31a1.071 1.071 0 1 1-1.515-1.515l1.184-1.184a1.071 1.071 0 0 1 1.515 0Z'
        clipRule='evenodd'
      />
    </svg>
  );
};

export const Team: IconComponent = ({ active, ...props }) => {
  const { toneHigh, toneLow } = getColor(active);

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      {...props}
    >
      <g fillRule='evenodd' clipPath='url(#a)' clipRule='evenodd'>
        <path
          fill={toneHigh}
          d='M19.953 16.317c-.17.316.04.742.4.742h.45c1.337 0 2.459-.719 2.946-1.733.245-.512.33-1.107.168-1.696-.162-.594-.554-1.11-1.131-1.495a10.553 10.553 0 0 0-2.42-1.197c-.418-.143-.74.44-.509.817.22.358.393.75.509 1.171a4.551 4.551 0 0 1-.413 3.391Zm-3.587-8.52c-.175.267-.041.638.277.658.093.006.187.009.281.009 2.367 0 4.286-1.846 4.286-4.122S19.291.22 16.924.22c-.068 0-.136.002-.203.005-.319.014-.459.383-.29.653.62.988.977 2.156.977 3.408a6.4 6.4 0 0 1-1.042 3.51ZM10.98 0a4.286 4.286 0 1 0 0 8.571 4.286 4.286 0 0 0 0-8.571ZM4.815 11.985h2.233a65.323 65.323 0 0 1 1.59.088c2.57.175 4.887 2.087 5.25 4.854h1.255c1.367 0 2.5-.734 2.987-1.75a2.41 2.41 0 0 0 .169-1.685c-.16-.587-.549-1.103-1.136-1.494a11.12 11.12 0 0 0-6.184-1.867 11.12 11.12 0 0 0-6.164 1.854Z'
        />
        <path
          fill={toneLow}
          d='m4.935 14.128-.04.001c-.483.022-.948.052-1.405.082-1.667.113-3.106 1.368-3.282 3.097A37.897 37.897 0 0 0 0 21.219c.005.913.428 1.773 1.086 2.29.694.545 1.687.718 2.587.094a4.028 4.028 0 0 0 1.514-2.042h1.74a4.028 4.028 0 0 0 1.514 2.042c.9.623 1.893.451 2.587-.094.659-.517 1.081-1.377 1.086-2.29a37.892 37.892 0 0 0-.208-3.911c-.176-1.73-1.614-2.984-3.281-3.097a63.51 63.51 0 0 0-1.445-.083H4.935Z'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Events: IconComponent = ({ active, ...props }) => {
  const { toneHigh, toneLow } = getColor(active);

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      {...props}
    >
      <g fillRule='evenodd' clipPath='url(#a)' clipRule='evenodd'>
        <path
          fill={toneHigh}
          d='M12 3.403c-.867 0-2.429.045-4.28.18V1.569a1.286 1.286 0 0 0-2.571 0v2.267a5.53 5.53 0 0 0-4.493 4.97 62.525 62.525 0 0 0-.227 4.756c0 .85.053 2.71.227 4.752.228 2.68 2.324 4.771 4.98 5.042 2.726.278 5.186.362 6.364.362s3.638-.084 6.364-.362c2.656-.27 4.752-2.362 4.98-5.042.174-2.043.227-3.902.227-4.752 0-.85-.053-2.71-.227-4.755a5.53 5.53 0 0 0-4.505-4.974V1.57a1.286 1.286 0 1 0-2.57 0v2.013A63.53 63.53 0 0 0 12 3.403Z'
        />
        <path
          fill={toneLow}
          d='M7.287 10.559a2.571 2.571 0 0 0-2.572 2.571v1.715a2.571 2.571 0 0 0 2.572 2.571H9a2.571 2.571 0 0 0 2.571-2.571V13.13a2.571 2.571 0 0 0-2.571-2.571H7.287Z'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Network: IconComponent = ({ active, ...props }) => {
  const { toneHigh, toneLow } = getColor(active);

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      {...props}
    >
      <g fillRule='evenodd' clipPath='url(#a)' clipRule='evenodd'>
        <path
          fill={toneHigh}
          d='m8.86 6.97.03.007c.372.135.756.276 1.12.414a.587.587 0 0 1 .368.53c.06 1.325.097 2.261.113 3.319a1.072 1.072 0 0 0 1.122 1.053c.614-.028 2.775-.023 5-.014v10.904h-6.86a4.206 4.206 0 0 0 .547-2.082v-.012l-.014-3.684a3 3 0 0 0-.727-1.948l-1.84-2.135a4.695 4.695 0 0 0-3.67-1.635c.019-.93.047-1.867.082-2.818.044-1.155.923-2.328 2.298-2.29.833.023 1.647.174 2.43.39Zm9.896 16.213h2.498a2.546 2.546 0 0 0 2.553-2.442 76.353 76.353 0 0 0-.008-6.055c-.05-1.22-.978-2.277-2.252-2.375-.086-.006-.94-.013-2.091-.02l-.7-.003v10.895Z'
        />
        <path
          fill={toneLow}
          d='M11.104.9A25.417 25.417 0 0 1 18.4.9c1.22.173 2.086 1.209 2.132 2.396.09 2.331.147 4.6.17 6.855-.762 0-1.74-.005-2.777-.01-1.905-.008-4.007-.017-5.316-.008-.021-.705-.052-1.425-.091-2.307a2.73 2.73 0 0 0-1.749-2.438c-.62-.236-1.294-.48-1.864-.683l.012-.245c.017-.31.034-.654.054-1.164.045-1.187.912-2.223 2.132-2.396Z'
        />
        <path
          fill={toneHigh}
          d='M20.583 4.696h-3.998a1.071 1.071 0 0 0 0 2.143h4.06c-.017-.71-.038-1.424-.062-2.143Z'
        />
        <path
          fill={toneLow}
          d='m8.157 21.097-.857.004h.857c0 1.15-.932 2.082-2.083 2.082H2.22a2.083 2.083 0 0 1-2.083-2.082h.857l-.857-.003.014-3.685c0-.204.075-.401.208-.556l1.84-2.135a2.571 2.571 0 0 1 3.896 0l1.84 2.135a.857.857 0 0 1 .208.556l.014 3.684Z'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Help: IconComponent = ({ active, ...props }) => {
  const { toneHigh, toneLow } = getColor(active);

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      {...props}
    >
      <g fillRule='evenodd' clipPath='url(#a)' clipRule='evenodd'>
        <path
          fill={toneHigh}
          d='M12 .429c-1.969 0-3.89.18-5.73.385-2.867.32-5.17 2.62-5.477 5.492C.597 8.137.43 10.046.43 12c0 1.955.168 3.863.364 5.694.307 2.872 2.61 5.173 5.477 5.492 1.84.205 3.761.385 5.73.385 1.969 0 3.89-.18 5.73-.385 2.867-.32 5.17-2.62 5.477-5.492.196-1.831.364-3.74.364-5.694 0-1.955-.168-3.863-.364-5.694-.307-2.872-2.61-5.173-5.477-5.492C15.89.609 13.97.429 12 .429Z'
        />
        <path
          fill={toneLow}
          d='M10.265 9.13c0-1.068 1.028-1.91 2.075-1.703a1.79 1.79 0 0 1 1.364 1.364c.065.329.019.554-.074.736-.102.2-.302.429-.664.67-.48.322-.97.656-1.33 1.03-.4.417-.706.95-.706 1.646a1.071 1.071 0 1 0 2.143 0c0-.018.001-.022.004-.026a.546.546 0 0 1 .103-.134c.171-.178.46-.389.976-.733.561-.375 1.066-.856 1.384-1.482.328-.645.417-1.364.266-2.125a3.931 3.931 0 0 0-3.048-3.047C10.386 4.854 8.122 6.71 8.122 9.13a1.071 1.071 0 1 0 2.143 0Zm2.806 8.065a1.071 1.071 0 1 0-2.142 0v.48a1.071 1.071 0 0 0 2.142 0v-.48Z'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Settings: IconComponent = ({ active, ...props }) => {
  const { toneHigh } = getColor(active);

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      {...props}
    >
      <path
        fill={toneHigh}
        fillRule='evenodd'
        d='M11.33.429h1.344a2.506 2.506 0 0 1 2.328 1.59l.615 1.563 1.868 1.079 1.657-.252a2.507 2.507 0 0 1 2.544 1.225l.67 1.16a2.504 2.504 0 0 1-.212 2.816L21.1 10.919v2.163l1.039 1.308a2.507 2.507 0 0 1 .212 2.816l-.67 1.159a2.509 2.509 0 0 1-2.544 1.226l-1.657-.252-1.871 1.08-.612 1.56a2.505 2.505 0 0 1-2.328 1.592h-1.341a2.506 2.506 0 0 1-2.33-1.592l-.61-1.56-1.872-1.08-1.657.252a2.506 2.506 0 0 1-2.544-1.225l-.67-1.16a2.504 2.504 0 0 1 .212-2.816L2.9 13.081v-2.162L1.857 9.61a2.505 2.505 0 0 1-.212-2.816l.67-1.159a2.506 2.506 0 0 1 2.543-1.226l1.653.252 1.877-1.087L9 2.02A2.503 2.503 0 0 1 11.33.43Zm.67 15a3.429 3.429 0 1 0 0-6.858 3.429 3.429 0 0 0 0 6.858Z'
        clipRule='evenodd'
      />
    </svg>
  );
};

export const Logout: IconComponent = ({ active, ...props }) => {
  const { toneHigh } = getColor(active);

  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        opacity='0.4'
        d='M9 7.2V16.79C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2H14.2C11 2 9 4 9 7.2Z'
        fill={toneHigh}
      />
      <path
        d='M5.57 8.11999L2.22 11.47C1.93 11.76 1.93 12.24 2.22 12.53L5.57 15.88C5.86 16.17 6.34 16.17 6.63 15.88C6.92 15.59 6.92 15.11 6.63 14.82L4.56 12.75H15.25C15.66 12.75 16 12.41 16 12C16 11.59 15.66 11.25 15.25 11.25H4.56L6.63 9.17999C6.78 9.02999 6.85 8.83999 6.85 8.64999C6.85 8.45999 6.78 8.25999 6.63 8.11999C6.34 7.81999 5.87 7.81999 5.57 8.11999Z'
        fill={toneHigh}
      />
    </svg>
  );
};

export const Bell = (props: JSX.IntrinsicElements["svg"]) => {
  const { toneHigh, toneLow } = getColor(true);

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      viewBox='0.5 0 24 24'
      {...props}
    >
      <path
        fill={toneLow}
        d='M23.367 5.079a4.007 4.007 0 1 1-8.015 0 4.007 4.007 0 0 1 8.015 0Z'
      />
      <path
        fill={toneHigh}
        fillRule='evenodd'
        d='M13.826 1.32c.273.076.373.4.229.645a6.15 6.15 0 0 0 5.525 9.26.477.477 0 0 1 .287.085c.032.023.066.045.101.068.081.054.182.115.294.183.327.2.753.462 1.082.753.72.64.961 1.544.896 2.348-.063.783-.426 1.595-1.091 2.096a1.891 1.891 0 0 1-.14.099 3.282 3.282 0 0 1-.358.196c-.31.148-.772.326-1.449.497-1.35.341-3.581.664-7.202.664s-5.851-.322-7.202-.664c-.677-.171-1.14-.349-1.45-.497a3.279 3.279 0 0 1-.465-.27 1.163 1.163 0 0 1-.032-.025c-.665-.5-1.028-1.313-1.091-2.096-.065-.804.176-1.709.896-2.348.329-.291.755-.552 1.082-.753.112-.068.213-.13.294-.183.39-.255.575-.445.66-.662.28-.705.478-1.624.478-2.814a6.83 6.83 0 0 1 8.656-6.582Zm-3.818 18.582a.857.857 0 0 0-1.03 1.217 3.428 3.428 0 0 0 6.045 0 .857.857 0 0 0-1.031-1.217c-.435.148-1.076.26-1.992.26-.916 0-1.557-.112-1.992-.26Z'
        clipRule='evenodd'
      />
    </svg>
  );
};
