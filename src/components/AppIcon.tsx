type AppIconProps = {
  src: string;
  size: 'sm' | 'md' | 'lg';
};

/** A project's app icon as a launcher-style rounded tile. Decorative: the title beside it names the app. */
export function AppIcon({ src, size }: AppIconProps) {
  return <img className={`app-icon app-icon-${size}`} src={src} alt="" width={96} height={96} decoding="async" />;
}
