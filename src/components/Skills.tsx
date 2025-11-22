import React from 'react';
import { SKILLS } from '../constants';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

export const Skills: React.FC = () => {
  // Group skills for display
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Programming Languages': return '#8b5cf6'; // Violet
      case 'Frameworks & Libraries': return '#3b82f6'; // Blue
      case 'Tools & Platform': return '#f59e0b'; // Amber
      case 'Design': return '#ec4899'; // Pink
      case 'Soft Skills': return '#10b981'; // Emerald
      default: return '#6366f1'; // Indigo
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Overview of my technical proficiency and soft skills.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Chart View */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md h-[600px]">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 text-center">Proficiency Level</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={SKILLS}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis type="number" domain={[0, 100]} hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={140} 
                  tick={{ fill: '#6b7280', fontSize: 12, fontWeight: 500 }} 
                  interval={0}
                />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ backgroundColor: '#1f2937', borderRadius: '8px', border: 'none', color: '#fff' }}
                />
                <Bar dataKey="level" barSize={20} radius={[0, 4, 4, 0]}>
                    {SKILLS.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={getCategoryColor(entry.category)} 
                        />
                    ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* List View by Category */}
          <div className="space-y-8 overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
            {categories.map((cat) => (
              <div key={cat}>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: getCategoryColor(cat) }}></span>
                  {cat}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SKILLS.filter(s => s.category === cat).map((skill) => (
                    <div 
                      key={skill.name}
                      className="bg-white dark:bg-gray-900 px-4 py-3 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-between hover:shadow-md transition-shadow"
                    >
                      <span className="font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                        {skill.level}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};