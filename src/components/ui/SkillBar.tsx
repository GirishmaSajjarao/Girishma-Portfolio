import React from 'react';

type SkillBarProps = {
  skill: string;
  level: number; // 0-100
  color?: string;
};

const SkillBar: React.FC<SkillBarProps> = ({ 
  skill, 
  level, 
  color = 'bg-blue-600'
}) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-800 dark:text-gray-200">{skill}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color}`} 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;