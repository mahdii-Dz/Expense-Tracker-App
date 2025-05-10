import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useContext } from "react";
import { GlobalContext } from "../context/Context";

const Demo = () => {
    const { totalIncome, totalExpense } =
        useContext(GlobalContext);
    const chartData = [
        { name: "income", value: totalIncome, color: "#3182CE" },
        { name: "expense", value: totalExpense, color: "#DD6B20" },
    ]

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                >
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
};
export default Demo;
