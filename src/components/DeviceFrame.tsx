import type { ProjectDevice, ProjectScreenshot } from '../types';

type DeviceFrameProps = {
  device: ProjectDevice;
  screenshot: ProjectScreenshot;
  /** Eager-load covers that are on screen at first paint. */
  priority?: boolean;
  className?: string;
};

export function DeviceFrame({ device, screenshot, priority = false, className = '' }: DeviceFrameProps) {
  return (
    <div className={`device-frame device-frame-${device} ${className}`.trim()}>
      {device === 'browser' && (
        <div className="visual-toolbar" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      )}
      <img
        src={screenshot.src}
        alt={screenshot.alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  );
}
