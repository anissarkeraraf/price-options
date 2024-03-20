import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {


    const subjectMarkData = [
        { id: 1, name: 'Student 1', math: 85, physics: 75, chemistry: 80 },
        { id: 2, name: 'Student 2', math: 78, physics: 70, chemistry: 85 },
        { id: 3, name: 'Student 3', math: 92, physics: 85, chemistry: 90 },
        { id: 4, name: 'Student 4', math: 65, physics: 60, chemistry: 70 },
        { id: 5, name: 'Student 5', math: 73, physics: 68, chemistry: 75 },
        { id: 6, name: 'Student 6', math: 88, physics: 82, chemistry: 88 },
        { id: 7, name: 'Student 7', math: 70, physics: 65, chemistry: 72 },
        { id: 8, name: 'Student 8', math: 95, physics: 90, chemistry: 96 },
        { id: 9, name: 'Student 9', math: 81, physics: 75, chemistry: 82 },
        { id: 10, name: 'Student 10', math: 79, physics: 72, chemistry: 78 }
      ];



    return (
        <div>
            <LChart width={800} height={400} data={subjectMarkData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='yellow'></Line>
                <Line dataKey="chemistry" stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;