interface IIconProps {
  size?: string;
  title?: string;
}

const Saidas = ({ size, title }: IIconProps) => {
  return (
    <svg
      width={size ? size : "32"}
      height={size ? size : "32"}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path
        d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63621 23.3638 2.66668 16 2.66667C8.63622 2.66667 2.66669 8.63621 2.66668 16C2.66668 23.3638 8.63622 29.3333 16 29.3333Z"
        stroke="#E62E4D"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.6667 16L16 21.3333L21.3334 16"
        stroke="#E62E4D"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 10.6667L16 21.3333"
        stroke="#E62E4D"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Saidas;
