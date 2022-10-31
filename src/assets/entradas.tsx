interface IIconProps {
  size?: string;
  title?: string;
}

const Entradas = ({ size, title }: IIconProps) => {
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
        d="M16 2.66666C8.63621 2.66666 2.66668 8.6362 2.66668 16C2.66668 23.3638 8.63622 29.3333 16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.6362 23.3638 2.66666 16 2.66666Z"
        stroke="#33CC95"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.3333 16L16 10.6667L10.6667 16"
        stroke="#33CC95"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 21.3333L16 10.6667"
        stroke="#33CC95"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Entradas;
