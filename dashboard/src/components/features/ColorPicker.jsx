import { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState('#3B82F6');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-xl w-full max-w-lg p-8 text-center">
        <h1 className="text-3xl font-extrabold text-blue-700 dark:text-blue-400 mb-6">
          🎨 Choose Your Color
        </h1>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-40 h-40 rounded-full border-4 border-gray-300 shadow-xl mb-6"
        />
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Selected Color: <span style={{ color }}>{color}</span>
        </p>
      </div>
    </div>
  );
};

export default ColorPicker;