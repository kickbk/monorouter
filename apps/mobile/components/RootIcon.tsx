const icons = require.context('../assets/svgs', true, /\.svg$/);

export const RootIcon = ({
  size = 84,
}: any) => {
  const BaseIcon = icons(`./edit.svg`).default;
  return (
    <BaseIcon width={size} height={100} fill="red" />
  );
};
