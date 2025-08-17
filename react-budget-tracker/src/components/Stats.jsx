import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Stats = ({ stats }) => {
  const { totalExpenses, averageAmount, highestExpense, categoryCounts } = stats;
  
  // Prepare data for pie chart
  const pieData = Object.keys(categoryCounts).map(category => ({
    name: category,
    value: categoryCounts[category]
  }));

  // Colors for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658'];

  return (
    <div className="stats-container">
      <h2>Expense Statistics</h2>
      
      <div className="stats-content">
        <div className="stats-summary">
          <div className="stat-card">
            <div className="stat-icon">💲</div>
            <div className="stat-info">
              <h3>Total</h3>
              <p>₹{totalExpenses}</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-info">
              <h3>Average</h3>
              <p>₹{averageAmount}</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🔝</div>
            <div className="stat-info">
              <h3>Highest</h3>
              <p>{highestExpense.title}: ₹{highestExpense.amount}</p>
            </div>
          </div>
        </div>
        
        {pieData.length > 0 && (
          <div className="stats-chart">
            <h3>Category Distribution</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;