"use client";

import { useReadingSettings, FONT_OPTIONS, FontFamily } from "@/hooks/useReadingSettings";

export function SettingsPanel() {
  const { settings, updateSetting } = useReadingSettings();

  return (
    <div className="space-y-6">
      {/* Dark Mode Toggle */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Dark Mode</span>
        <button
          onClick={() => updateSetting("darkMode", !settings.darkMode)}
          className={`relative h-6 w-11 rounded-full transition-colors duration-200 ${
            settings.darkMode ? "bg-gray-900" : "bg-gray-200"
          }`}
          role="switch"
          aria-checked={settings.darkMode}
        >
          <span
            className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
              settings.darkMode ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
      </div>

      {/* Font Family */}
      <div>
        <span className="mb-2 block text-sm font-medium">Font</span>
        <div className="flex gap-2">
          {FONT_OPTIONS.map((font) => (
            <button
              key={font.value}
              onClick={() => updateSetting("fontFamily", font.value)}
              className={`flex-1 rounded-md border px-3 py-2 text-sm transition-all duration-150 ${
                settings.fontFamily === font.value
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              style={{
                fontFamily: getFontPreview(font.value),
              }}
            >
              {font.label}
            </button>
          ))}
        </div>
      </div>

      {/* Font Size */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium">Size</span>
          <span className="text-xs text-gray-500">{settings.fontSize}px</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => updateSetting("fontSize", Math.max(14, settings.fontSize - 1))}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-sm font-medium transition-colors hover:bg-gray-50"
            disabled={settings.fontSize <= 14}
          >
            A
          </button>
          <input
            type="range"
            min="14"
            max="22"
            step="1"
            value={settings.fontSize}
            onChange={(e) => updateSetting("fontSize", Number(e.target.value))}
            className="h-1 flex-1 cursor-pointer appearance-none rounded-full bg-gray-200 accent-gray-900"
          />
          <button
            onClick={() => updateSetting("fontSize", Math.min(22, settings.fontSize + 1))}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-lg font-medium transition-colors hover:bg-gray-50"
            disabled={settings.fontSize >= 22}
          >
            A
          </button>
        </div>
      </div>

      {/* Line Height */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium">Line Spacing</span>
          <span className="text-xs text-gray-500">{settings.lineHeight.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => updateSetting("lineHeight", Math.max(1.4, Number((settings.lineHeight - 0.1).toFixed(1))))}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 transition-colors hover:bg-gray-50"
            disabled={settings.lineHeight <= 1.4}
          >
            <LineSpacingIcon compact />
          </button>
          <input
            type="range"
            min="1.4"
            max="2.0"
            step="0.1"
            value={settings.lineHeight}
            onChange={(e) => updateSetting("lineHeight", Number(e.target.value))}
            className="h-1 flex-1 cursor-pointer appearance-none rounded-full bg-gray-200 accent-gray-900"
          />
          <button
            onClick={() => updateSetting("lineHeight", Math.min(2.0, Number((settings.lineHeight + 0.1).toFixed(1))))}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 transition-colors hover:bg-gray-50"
            disabled={settings.lineHeight >= 2.0}
          >
            <LineSpacingIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

function getFontPreview(font: FontFamily): string {
  switch (font) {
    case "georgia":
      return "Georgia, serif";
    case "merriweather":
      return "Merriweather, Georgia, serif";
    case "inter":
    default:
      return "Inter, sans-serif";
  }
}

function LineSpacingIcon({ compact }: { compact?: boolean }) {
  const gap = compact ? 3 : 5;
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="2" y1={8 - gap} x2="14" y2={8 - gap} />
      <line x1="2" y1="8" x2="14" y2="8" />
      <line x1="2" y1={8 + gap} x2="14" y2={8 + gap} />
    </svg>
  );
}
