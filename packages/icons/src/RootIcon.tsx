const icons = require.context('./svgs', true, /\.svg$/);

export const RootIcon = () => {
  const size = 150;
  const BaseIcon = icons(`./edit.svg`).default;
  return <BaseIcon width={size} height={size} fill="green" />;
};
