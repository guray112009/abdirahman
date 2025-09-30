import React from 'react';

export default function ThemeSwitcher({ setTheme }) {
  return (
    <div className="theme-switcher">
      <label htmlFor="theme-select">Choose Theme:</label>
      <select id="theme-select" onChange={(e) => setTheme(e.target.value)}>
        <option value="default">Default</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="coral">Coral</option>
        <option value="yellow">Yellow</option> {/* ✅ New theme added */}
      </select>
    </div>
  );
}