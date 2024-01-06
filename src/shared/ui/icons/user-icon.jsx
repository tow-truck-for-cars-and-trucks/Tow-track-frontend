export default function UserIcon({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 18 17"
    >
      <path
        stroke={color}
        strokeWidth="2"
        d="M13 4.9524c0 2.1738-1.7818 3.9524-4 3.9524S5 7.1262 5 4.9524C5 2.7785 6.7818 1 9 1s4 1.7785 4 3.9524ZM1 16.0001c4-5.6889 12-5.6889 16 0"
      />
    </svg>
  );
}
